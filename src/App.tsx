import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { MODULES, QUESTIONS, Question } from './data/examData';
import {
  AppState,
  INITIAL_STATE,
  calculateMastery,
  shuffleQuestions,
  SuddenDeathRecord,
} from './utils/quizLogic';
import { Header } from './components/Header';
import { DashboardView } from './components/DashboardView';
import { QuizView, QuizSession } from './components/QuizView';
import { ResultsView } from './components/ResultsView';
import { LexiconView } from './components/LexiconView';
import { SuddenDeathView } from './components/SuddenDeathView';
import { ShareChallengeModal, ChallengeData } from './components/ShareChallengeModal';
import { RankModal } from './components/RankModal';
import { BackupModal } from './components/BackupModal';
import { ToastContainer, ToastMessage } from './components/Toast';
import { LockScreen } from './components/LockScreen';
import {
  isSessionAuthenticated,
  setSessionAuthenticated,
  setupSecurityGuards,
} from './utils/security';

const STORAGE_KEY = 'objectif_cee1_progress_v2';
const THEME_KEY = 'objectif_cee1_theme';

export default function App() {
  // Security private access state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return isSessionAuthenticated();
  });

  // Client-side anti-tampering guards (disables contextmenu, devtools shortcuts)
  useEffect(() => {
    const cleanup = setupSecurityGuards();
    return cleanup;
  }, []);

  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored !== null) return stored === 'dark';
    } catch {
      // ignore
    }
    return true; // Default dark police theme
  });

  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    } catch {
      // ignore
    }
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // App state
  const [state, setState] = useState<AppState>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          stats: parsed.stats || {},
          errorIds: Array.isArray(parsed.errorIds) ? parsed.errorIds : [],
          examHistory: Array.isArray(parsed.examHistory) ? parsed.examHistory : [],
          bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
          suddenDeathRecord: parsed.suddenDeathRecord || { bestStreak: 0, date: '' },
        };
      }
    } catch {
      // ignore
    }
    return INITIAL_STATE;
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  // View state
  const [view, setView] = useState<'dashboard' | 'quiz' | 'results' | 'lexicon' | 'suddendeath'>('dashboard');
  const [quiz, setQuiz] = useState<QuizSession | null>(null);

  // Modals & toasts
  const [isRankModalOpen, setIsRankModalOpen] = useState(false);
  const [isBackupModalOpen, setIsBackupModalOpen] = useState(false);
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false);
  const [challengeData, setChallengeData] = useState<ChallengeData>({
    type: 'suddendeath',
    scoreValue: 0,
    subtitle: 'Prêt pour l\'épreuve CEE1',
  });
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((text: string, type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  }, []);

  // Timer countdown for exam mode
  useEffect(() => {
    if (view !== 'quiz' || !quiz || quiz.mode !== 'exam') return;

    const interval = setInterval(() => {
      setQuiz((prev) => {
        if (!prev) return null;
        if (prev.timerSeconds <= 1) {
          clearInterval(interval);
          showToast('Temps écoulé ! Remise automatique de la copie.', 'warning');
          // finish quiz
          setTimeout(() => {
            handleFinishQuiz();
          }, 100);
          return { ...prev, timerSeconds: 0 };
        }
        return { ...prev, timerSeconds: prev.timerSeconds - 1 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [view, quiz?.mode]);

  // Calculate overall mastery
  const masteryData = useMemo(() => {
    return calculateMastery(state.stats, QUESTIONS.length);
  }, [state.stats]);

  // Record an outcome for a question
  const recordOutcome = useCallback((qId: number, isCorrect: boolean, chosenIdx: number) => {
    setState((prev) => {
      const prevStat = prev.stats[qId] || { correct: false, attempts: 0, wrongCount: 0, lastChoice: null };
      const newAttempts = prevStat.attempts + 1;
      const newWrongCount = isCorrect ? prevStat.wrongCount : prevStat.wrongCount + 1;

      let newErrorIds = prev.errorIds;
      if (!isCorrect) {
        if (!newErrorIds.includes(qId)) {
          newErrorIds = [...newErrorIds, qId];
        }
      } else {
        newErrorIds = newErrorIds.filter((id) => id !== qId);
      }

      return {
        ...prev,
        stats: {
          ...prev.stats,
          [qId]: {
            correct: isCorrect,
            attempts: newAttempts,
            wrongCount: newWrongCount,
            lastChoice: chosenIdx,
          },
        },
        errorIds: newErrorIds,
      };
    });
  }, []);

  // Handlers for starting different quiz sessions
  const handleStartExam = (count: number = 20) => {
    const selected = shuffleQuestions(QUESTIONS).slice(0, count);
    setQuiz({
      mode: 'exam',
      title: `Examen Blanc (${count} Questions)`,
      questions: selected,
      currentIndex: 0,
      answers: {},
      revealed: {},
      flagged: {},
      timerSeconds: count * 60,
      startTime: Date.now(),
    });
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartModule = (moduleId: string = 'all', filter: 'all' | 'unmastered' = 'all') => {
    let pool = moduleId === 'all' ? [...QUESTIONS] : QUESTIONS.filter((q) => q.module === moduleId);

    if (filter === 'unmastered') {
      const unmastered = pool.filter((q) => !state.stats[q.id]?.correct);
      if (unmastered.length > 0) pool = unmastered;
    }

    const modObj = MODULES.find((m) => m.id === moduleId);
    setQuiz({
      mode: 'training',
      title: modObj ? `${modObj.code} — ${modObj.shortTitle}` : 'Entraînement Général',
      questions: shuffleQuestions(pool),
      currentIndex: 0,
      answers: {},
      revealed: {},
      flagged: {},
      timerSeconds: 0,
      startTime: Date.now(),
    });
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartErrors = () => {
    const pool = QUESTIONS.filter((q) => state.errorIds.includes(q.id));
    if (pool.length === 0) {
      showToast('Aucune erreur à corriger pour le moment !', 'success');
      return;
    }
    setQuiz({
      mode: 'errors',
      title: `Carnet d'Erreurs (${pool.length} Questions)`,
      questions: shuffleQuestions(pool),
      currentIndex: 0,
      answers: {},
      revealed: {},
      flagged: {},
      timerSeconds: 0,
      startTime: Date.now(),
    });
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartBookmarks = () => {
    const pool = QUESTIONS.filter((q) => state.bookmarks.includes(q.id));
    if (pool.length === 0) {
      showToast('Aucune question épinglée pour le moment.', 'info');
      return;
    }
    setQuiz({
      mode: 'training',
      title: `Questions Épinglées (${pool.length})`,
      questions: pool,
      currentIndex: 0,
      answers: {},
      revealed: {},
      flagged: {},
      timerSeconds: 0,
      startTime: Date.now(),
    });
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartSuddenDeath = () => {
    setView('suddendeath');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRecordNewBest = (newRecord: SuddenDeathRecord) => {
    setState((prev) => ({
      ...prev,
      suddenDeathRecord: newRecord,
    }));
    showToast(`🏆 NOUVEAU RECORD : ${newRecord.bestStreak} sans faute !`, 'success');
  };

  const handleOpenChallengeFromSuddenDeath = (streak: number) => {
    setChallengeData({
      type: 'suddendeath',
      scoreValue: streak,
      subtitle: `Record validé : ${streak} questions sans faute en Mort Subite !`,
    });
    setIsChallengeModalOpen(true);
  };

  const handleOpenChallengeFromResults = (scoreOn20: number, mention: string) => {
    setChallengeData({
      type: 'exam',
      scoreValue: scoreOn20,
      mention,
      subtitle: `Note obtenue : ${scoreOn20}/20 (${mention}) à l'Examen Blanc CEE1 !`,
    });
    setIsChallengeModalOpen(true);
  };

  const handleOpenChallengeFromDashboard = () => {
    const bestStreak = state.suddenDeathRecord?.bestStreak || 0;
    if (bestStreak > 0) {
      setChallengeData({
        type: 'suddendeath',
        scoreValue: bestStreak,
        subtitle: `Meilleur record promo : ${bestStreak} d'affilée en Mort Subite !`,
      });
    } else {
      setChallengeData({
        type: 'general',
        scoreValue: `${masteryData.pct}% (${masteryData.masteredCount}/${masteryData.totalQuestions})`,
        subtitle: `Grade actuel : ${masteryData.currentRank.title} sur la préparation CEE1 !`,
      });
    }
    setIsChallengeModalOpen(true);
  };

  // Interactions inside quiz
  const handleSelectOption = (optionIdx: number) => {
    if (!quiz) return;
    const currentQ = quiz.questions[quiz.currentIndex];
    if (!currentQ) return;

    if (quiz.mode === 'exam') {
      setQuiz((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          answers: { ...prev.answers, [prev.currentIndex]: optionIdx },
        };
      });
    } else {
      if (quiz.revealed[quiz.currentIndex]) return;
      const isCorrect = optionIdx === currentQ.correct;
      setQuiz((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          answers: { ...prev.answers, [prev.currentIndex]: optionIdx },
          revealed: { ...prev.revealed, [prev.currentIndex]: true },
        };
      });
      recordOutcome(currentQ.id, isCorrect, optionIdx);
    }
  };

  const handlePrevQuestion = () => {
    if (!quiz || quiz.currentIndex <= 0) return;
    setQuiz((prev) => prev && { ...prev, currentIndex: prev.currentIndex - 1 });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextQuestion = () => {
    if (!quiz) return;
    if (quiz.currentIndex < quiz.questions.length - 1) {
      setQuiz((prev) => prev && { ...prev, currentIndex: prev.currentIndex + 1 });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleFinishQuiz();
    }
  };

  const handleFinishQuiz = () => {
    if (!quiz) return;

    if (quiz.mode === 'exam') {
      let correctCount = 0;
      quiz.questions.forEach((q, idx) => {
        const ans = quiz.answers[idx];
        const isCorrect = ans === q.correct;
        if (isCorrect) correctCount++;
        recordOutcome(q.id, isCorrect, ans !== undefined ? ans : -1);
      });

      const total = quiz.questions.length;
      const scoreOn20 = Math.round(((correctCount / total) * 20) * 10) / 10;
      const durationSec = Math.max(1, Math.round((Date.now() - quiz.startTime) / 1000));

      const newHistoryItem = {
        date: new Date().toLocaleDateString('fr-FR', {
          day: '2-digit',
          month: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }),
        scoreOn20,
        correctCount,
        total,
        durationSec,
      };

      setState((prev) => ({
        ...prev,
        examHistory: [newHistoryItem, ...prev.examHistory.slice(0, 14)],
      }));
    }

    setView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleBookmark = (qId: number) => {
    setState((prev) => {
      const exists = prev.bookmarks.includes(qId);
      const newBookmarks = exists ? prev.bookmarks.filter((id) => id !== qId) : [...prev.bookmarks, qId];
      showToast(exists ? 'Question retirée des favoris.' : 'Question épinglée !', exists ? 'info' : 'success');
      return { ...prev, bookmarks: newBookmarks };
    });
  };

  const handleToggleFlag = () => {
    if (!quiz) return;
    setQuiz((prev) => {
      if (!prev) return null;
      const current = Boolean(prev.flagged[prev.currentIndex]);
      return {
        ...prev,
        flagged: { ...prev.flagged, [prev.currentIndex]: !current },
      };
    });
  };

  const handleRestartQuiz = () => {
    if (!quiz) return;
    setQuiz((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        currentIndex: 0,
        answers: {},
        revealed: {},
        flagged: {},
        timerSeconds: prev.mode === 'exam' ? prev.questions.length * 60 : 0,
        startTime: Date.now(),
      };
    });
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentQId = quiz?.questions[quiz.currentIndex]?.id;
  const isCurrentBookmarked = currentQId ? state.bookmarks.includes(currentQId) : false;

  const handleUnlock = () => {
    setSessionAuthenticated(true);
    setIsAuthenticated(true);
  };

  const handleLockSession = () => {
    setSessionAuthenticated(false);
    setIsAuthenticated(false);
    showToast('Session verrouillée. Code d\'accès 101 requis.', 'info');
  };

  // If not authenticated, render only the secure LockScreen
  if (!isAuthenticated) {
    return (
      <>
        <LockScreen onUnlock={handleUnlock} onShowToast={showToast} />
        <ToastContainer toasts={toasts} />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200">
      {/* Header */}
      <Header
        currentRank={masteryData.currentRank}
        onNavigateHome={() => setView('dashboard')}
        onOpenRankModal={() => setIsRankModalOpen(true)}
        onOpenBackupModal={() => setIsBackupModalOpen(true)}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
        syncLabel="Sauvegarde auto"
        onLockSession={handleLockSession}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-5 sm:py-8">
        {view === 'dashboard' && (
          <DashboardView
            state={state}
            masteryData={masteryData}
            onStartExam={handleStartExam}
            onStartModule={handleStartModule}
            onStartErrors={handleStartErrors}
            onStartBookmarks={handleStartBookmarks}
            onStartSuddenDeath={handleStartSuddenDeath}
            onNavigateLexicon={() => setView('lexicon')}
            onOpenRankModal={() => setIsRankModalOpen(true)}
            onOpenShareChallenge={handleOpenChallengeFromDashboard}
          />
        )}

        {view === 'suddendeath' && (
          <SuddenDeathView
            questions={QUESTIONS}
            bestRecord={state.suddenDeathRecord || { bestStreak: 0, date: '' }}
            onRecordNewBest={handleRecordNewBest}
            onQuestionOutcome={recordOutcome}
            onReturnToDashboard={() => setView('dashboard')}
            onOpenShareChallenge={handleOpenChallengeFromSuddenDeath}
          />
        )}

        {view === 'quiz' && quiz && (
          <QuizView
            quiz={quiz}
            isBookmarked={isCurrentBookmarked}
            onSelectOption={handleSelectOption}
            onPrevQuestion={handlePrevQuestion}
            onNextQuestion={handleNextQuestion}
            onFinishQuiz={handleFinishQuiz}
            onToggleBookmark={() => currentQId && handleToggleBookmark(currentQId)}
            onToggleFlag={handleToggleFlag}
            onReturnToDashboard={() => setView('dashboard')}
          />
        )}

        {view === 'results' && quiz && (
          <ResultsView
            quiz={quiz}
            errorCount={state.errorIds.length}
            onReturnDashboard={() => setView('dashboard')}
            onStartErrors={handleStartErrors}
            onRestartQuiz={handleRestartQuiz}
            onOpenShareChallenge={handleOpenChallengeFromResults}
          />
        )}

        {view === 'lexicon' && (
          <LexiconView onReturnDashboard={() => setView('dashboard')} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 py-5 px-4 text-center text-xs text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-[#0B132B]/40">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
            <span>Outil personnel d'entraînement et de révision (Initiative indépendante non officielle)</span>
          </div>
          <div className="font-semibold text-slate-600 dark:text-slate-300">
            Préparation Épreuve Finale CEE1 • 465 Questions • Mode Mort Subite & Examen Blanc
          </div>
        </div>
      </footer>

      {/* Modals */}
      <RankModal
        isOpen={isRankModalOpen}
        onClose={() => setIsRankModalOpen(false)}
        masteryPct={masteryData.pct}
      />

      <ShareChallengeModal
        isOpen={isChallengeModalOpen}
        onClose={() => setIsChallengeModalOpen(false)}
        currentRank={masteryData.currentRank}
        challengeData={challengeData}
        onShowToast={showToast}
      />

      <BackupModal
        isOpen={isBackupModalOpen}
        onClose={() => setIsBackupModalOpen(false)}
        state={state}
        onRestoreState={(restored) => {
          setState(restored);
        }}
        onResetState={() => {
          setState(INITIAL_STATE);
        }}
        onShowToast={showToast}
        syncLabel="Connecté (Local)"
      />

      {/* Toast notifications */}
      <ToastContainer toasts={toasts} />
    </div>
  );
}
