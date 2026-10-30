import React, { useState } from 'react';
import { ExamModule, MODULES, Question } from '../data/examData';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Star,
  Timer,
  Flag,
  ShieldAlert,
  FileCheck2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Award,
} from 'lucide-react';
import { formatTimer } from '../utils/quizLogic';

export interface QuizSession {
  mode: 'training' | 'exam' | 'errors';
  title: string;
  questions: Question[];
  currentIndex: number;
  answers: Record<number, number>;
  revealed: Record<number, boolean>;
  flagged: Record<number, boolean>;
  timerSeconds: number;
  startTime: number;
}

interface QuizViewProps {
  quiz: QuizSession;
  isBookmarked: boolean;
  onSelectOption: (optionIdx: number) => void;
  onPrevQuestion: () => void;
  onNextQuestion: () => void;
  onFinishQuiz: () => void;
  onJumpToQuestion?: (idx: number) => void;
  onToggleBookmark: () => void;
  onToggleFlag: () => void;
  onReturnToDashboard: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  quiz,
  isBookmarked,
  onSelectOption,
  onPrevQuestion,
  onNextQuestion,
  onFinishQuiz,
  onJumpToQuestion,
  onToggleBookmark,
  onToggleFlag,
  onReturnToDashboard,
}) => {
  const { questions, currentIndex, answers, revealed, mode, timerSeconds, flagged } = quiz;
  const currentQ = questions[currentIndex];
  if (!currentQ) return null;

  const isExam = mode === 'exam';
  const isErrorsMode = mode === 'errors' || quiz.title.includes('Erreur');
  const selectedOpt = answers[currentIndex];
  const isRevealed = !isExam && revealed[currentIndex];
  const modObj: ExamModule | undefined = MODULES.find((m) => m.id === currentQ.module);
  const progressPct = questions.length > 0 ? Math.round(((currentIndex + 1) / questions.length) * 100) : 0;
  const isFlagged = Boolean(flagged[currentIndex]);

  const letters = ['A', 'B', 'C', 'D'];

  // State for exam answer sheet drawer toggle
  const [showAnswerSheet, setShowAnswerSheet] = useState<boolean>(true);

  // State for official submission modal
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);

  // Answered count calculation
  const answeredCount = Object.keys(answers).length;
  const unansweredCount = questions.length - answeredCount;
  const unansweredIndices = questions
    .map((_, idx) => idx)
    .filter((idx) => answers[idx] === undefined);

  // Thematic ambient glow for module training
  let moduleAuraClass = '';
  if (!isExam && !isErrorsMode && modObj) {
    moduleAuraClass = 'border-t-4 border-t-blue-500';
  } else if (isErrorsMode) {
    moduleAuraClass = 'border-t-4 border-t-rose-500';
  } else if (isExam) {
    moduleAuraClass = 'border-t-4 border-t-indigo-500';
  }

  const handleConfirmFinish = () => {
    setShowSubmitModal(false);
    onFinishQuiz();
  };

  return (
    <div className={`max-w-2xl mx-auto space-y-4 animate-fadeIn relative`}>
      {/* Barre supérieure de Contrôle */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={onReturnToDashboard}
          className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-blue-500/50 flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Menu</span>
        </button>

        {/* Mode-specific Badge Title */}
        <div className="text-center">
          <div className="text-xs font-mono font-black text-slate-800 dark:text-slate-200">
            Question {currentIndex + 1} / {questions.length}
          </div>
          {isErrorsMode && (
            <div className="text-[10px] font-bold text-rose-500 dark:text-rose-400 flex items-center justify-center gap-1">
              <ShieldAlert className="w-3 h-3" />
              <span>Blanchiment de faute</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          {isExam && (
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold border shadow-inner transition-all ${
                timerSeconds <= 60
                  ? 'bg-rose-950/80 border-rose-500 text-rose-400 animate-pulse'
                  : timerSeconds <= 120
                  ? 'bg-amber-950/60 border-amber-500 text-amber-300'
                  : 'bg-slate-900 border-slate-700 text-white'
              }`}
            >
              <Timer className={`w-3.5 h-3.5 ${timerSeconds <= 60 ? 'text-rose-400' : 'text-blue-400'}`} />
              <span>{formatTimer(timerSeconds)}</span>
            </div>
          )}

          {isExam && (
            <button
              onClick={onToggleFlag}
              className={`p-2 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                isFlagged
                  ? 'bg-amber-500 text-white border-amber-500 shadow-md ring-2 ring-amber-400/40'
                  : 'bg-white dark:bg-[#0B132B] border-slate-200 dark:border-slate-800 text-slate-400 hover:text-amber-500'
              }`}
              title="Marquer cette question pour relecture"
              aria-label="Marquer la question"
            >
              <Flag className={`w-4 h-4 ${isFlagged ? 'fill-white' : ''}`} />
            </button>
          )}

          <button
            onClick={onToggleBookmark}
            className={`p-2 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
              isBookmarked
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-500 shadow-sm animate-pop'
                : 'bg-white dark:bg-[#0B132B] border-slate-200 dark:border-slate-800 text-slate-400 hover:text-amber-500'
            }`}
            title="Épingler cette question"
            aria-label="Épingler la question"
          >
            <Star className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* FEUILLE DE COCHE OFFICIELLE DU CONCOURS (Exam mode interactive sheet) */}
      {isExam && (
        <div className="bg-white/90 dark:bg-[#0B132B]/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-md space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
                Grille de Coche du Concours
              </span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400">
                {answeredCount} / {questions.length} cochées
              </span>
            </div>
            <button
              onClick={() => setShowAnswerSheet((prev) => !prev)}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1 cursor-pointer font-bold"
            >
              <span>{showAnswerSheet ? 'Masquer' : 'Afficher'}</span>
              {showAnswerSheet ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {showAnswerSheet && (
            <div className="grid grid-cols-10 gap-1.5 pt-1">
              {questions.map((_, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = answers[idx] !== undefined;
                const isMarked = Boolean(flagged[idx]);

                let pillClass =
                  'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700';

                if (isAnswered) {
                  pillClass = 'bg-blue-600 text-white border-blue-600 font-black shadow-xs';
                }

                if (isMarked) {
                  pillClass += ' ring-2 ring-amber-400';
                }

                if (isCurrent) {
                  pillClass += ' ring-2 ring-blue-500 scale-105 z-10 font-black';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => onJumpToQuestion && onJumpToQuestion(idx)}
                    className={`h-7 rounded-lg text-[11px] font-mono flex items-center justify-center cursor-pointer transition-all active:scale-90 ${pillClass}`}
                    title={`Question ${idx + 1}${isAnswered ? ' (Répondue)' : ' (Non répondue)'}${
                      isMarked ? ' [Marquée pour relecture]' : ''
                    }`}
                  >
                    <span>{idx + 1}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Progression Bar */}
      <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-[#0B132B] overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${
            isErrorsMode ? 'bg-rose-500' : 'bg-blue-600'
          }`}
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Carte Question Complète avec Ambient Glow */}
      <div
        className={`bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 shadow-lg space-y-4 ${moduleAuraClass}`}
      >
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className={`px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider border ${
                modObj ? modObj.badgeClass : 'bg-blue-500/10 text-blue-500 border-blue-500/30'
              }`}
            >
              {modObj ? `${modObj.code} • ${modObj.shortTitle}` : 'CEE1'}
            </span>
            {currentQ.options.length === 2 && (
              <span className="px-2 py-0.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">
                Vrai ou Faux
              </span>
            )}
            {isErrorsMode && (
              <span className="px-2 py-0.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-rose-500/20 text-rose-500 border border-rose-500/30">
                Erreur à Neutraliser
              </span>
            )}
          </div>
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate max-w-[260px]">
            {currentQ.ref}
          </span>
        </div>

        <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
          {currentQ.q}
        </h2>

        {/* Options de réponse interactives */}
        <div className="space-y-2.5 pt-1">
          {currentQ.options.map((optText, oIdx) => {
            let cardStyle =
              'bg-white dark:bg-[#060B19] border-slate-200 dark:border-slate-800 hover:border-blue-500/60 text-slate-800 dark:text-slate-100';
            let badgeStyle =
              'bg-slate-100 dark:bg-[#1C2541] text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700';

            if (isExam) {
              if (selectedOpt === oIdx) {
                cardStyle =
                  'bg-blue-600/10 dark:bg-blue-500/20 border-blue-500 text-slate-900 dark:text-white ring-2 ring-blue-500/30 font-bold';
                badgeStyle = 'bg-blue-600 text-white border-blue-600';
              }
            } else if (isRevealed) {
              if (oIdx === currentQ.correct) {
                cardStyle =
                  'bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500 text-slate-900 dark:text-white ring-2 ring-emerald-500/30 font-bold scale-[1.01]';
                badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
              } else if (selectedOpt === oIdx && oIdx !== currentQ.correct) {
                cardStyle = 'bg-rose-500/10 dark:bg-rose-500/15 border-rose-500 text-slate-900 dark:text-white';
                badgeStyle = 'bg-rose-600 text-white border-rose-600';
              } else {
                cardStyle = 'bg-slate-50 dark:bg-[#060B19]/40 border-slate-200 dark:border-slate-800/60 opacity-50';
              }
            }

            return (
              <button
                key={oIdx}
                onClick={() => onSelectOption(oIdx)}
                className={`option-card w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-start gap-3 cursor-pointer ${cardStyle}`}
              >
                <span
                  className={`w-7 h-7 rounded-lg border font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${badgeStyle}`}
                >
                  {letters[oIdx]}
                </span>
                <span className="text-xs sm:text-sm font-medium leading-relaxed flex-1">
                  {optText}
                </span>
              </button>
            );
          })}
        </div>

        {/* Explication immédiate après réponse (mode entraînement / carnet d'erreurs) */}
        {isRevealed && (
          <div
            className={`mt-4 p-4 rounded-2xl border animate-pop ${
              selectedOpt === currentQ.correct
                ? 'bg-emerald-500/10 border-emerald-500/30'
                : 'bg-rose-500/10 border-rose-500/30'
            }`}
          >
            <div
              className={`font-extrabold text-xs sm:text-sm flex items-center gap-2 mb-2 ${
                selectedOpt === currentQ.correct
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-rose-600 dark:text-rose-400'
              }`}
            >
              {selectedOpt === currentQ.correct ? (
                <>
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    {isErrorsMode ? '🛡️ FAUTE NEUTRALISÉE & BLANCHIE DU CASIER !' : 'Bonne réponse !'}
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>
                    Incorrect — La bonne réponse est la ({letters[currentQ.correct]}) : « {currentQ.options[currentQ.correct]} »
                  </span>
                </>
              )}
            </div>

            {selectedOpt !== currentQ.correct && (
              <div className="mb-2.5 p-2.5 rounded-xl bg-rose-500/15 border border-rose-500/20 text-xs font-semibold text-rose-700 dark:text-rose-300">
                Votre choix : ({letters[selectedOpt]}) « {currentQ.options[selectedOpt]} »
              </div>
            )}

            <div className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed space-y-1">
              <div>
                <strong className="font-bold text-slate-900 dark:text-white">
                  {selectedOpt === currentQ.correct ? 'Règle juridique & Point clé :' : 'Pourquoi vous avez faux & Règle juridique :'}
                </strong>
              </div>
              <p>{currentQ.exp}</p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation en bas */}
      <div className="flex items-center justify-between gap-2.5">
        <button
          onClick={onPrevQuestion}
          disabled={currentIndex === 0}
          className={`px-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B132B] text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
            currentIndex === 0
              ? 'opacity-40 cursor-not-allowed'
              : 'hover:border-blue-500/50 active:scale-95 cursor-pointer shadow-sm'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Préc.</span>
        </button>

        {isExam && (
          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-4 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs font-black shadow-md cursor-pointer transition-all flex items-center gap-1.5"
          >
            <FileCheck2 className="w-4 h-4" />
            <span>Remettre la Copie ({answeredCount}/{questions.length})</span>
          </button>
        )}

        <button
          onClick={onNextQuestion}
          className="flex-1 py-3.5 px-5 rounded-2xl bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-blue-600/20 text-center flex items-center justify-center gap-1.5 cursor-pointer transition-all"
        >
          <span>{currentIndex === questions.length - 1 ? 'Voir mon bilan →' : 'Question suivante'}</span>
          {currentIndex < questions.length - 1 && <ArrowRight className="w-4 h-4" />}
        </button>
      </div>

      {/* MODAL DE CONFIRMATION DU DÉPÔT DE COPIE (Exam submission dialog) */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-700 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-pop">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mx-auto">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider">
                Dépôt Officiel de la Copie
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Êtes-vous prêt à soumettre définitivement votre copie au Jury CEE1 pour correction ?
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-600 dark:text-slate-400">Questions traitées :</span>
                <span className="text-emerald-500">{answeredCount} / {questions.length}</span>
              </div>

              {unansweredCount > 0 ? (
                <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs space-y-1">
                  <div className="font-extrabold flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Attention : {unansweredCount} question{unansweredCount > 1 ? 's' : ''} sans réponse</span>
                  </div>
                  <p className="text-[11px] text-amber-700 dark:text-amber-300">
                    Questions : {unansweredIndices.map((i) => `#${i + 1}`).join(', ')}
                  </p>
                </div>
              ) : (
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 text-xs font-bold text-center">
                  ✓ Toutes les questions de l'examen ont été cochées.
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                onClick={handleConfirmFinish}
                className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-black text-xs sm:text-sm cursor-pointer shadow-md transition-all text-center"
              >
                Confirmer & Remettre au Jury
              </button>
              <button
                onClick={() => setShowSubmitModal(false)}
                className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs cursor-pointer transition-all"
              >
                Relire mes réponses
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
