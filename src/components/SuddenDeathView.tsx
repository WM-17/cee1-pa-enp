import React, { useState, useEffect } from 'react';
import { Question, MODULES } from '../data/examData';
import { soundEffects } from '../utils/soundEffects';
import { SuddenDeathRecord } from '../utils/quizLogic';
import {
  Flame,
  Zap,
  Crown,
  Volume2,
  VolumeX,
  Timer,
  ArrowLeft,
  RotateCcw,
  AlertOctagon,
  Trophy,
  CheckCircle2,
  XCircle,
  Skull,
  Share2,
} from 'lucide-react';

interface SuddenDeathViewProps {
  questions: Question[];
  bestRecord: SuddenDeathRecord;
  onRecordNewBest: (newBest: SuddenDeathRecord) => void;
  onQuestionOutcome: (qId: number, isCorrect: boolean, chosenIdx: number) => void;
  onReturnToDashboard: () => void;
  onOpenShareChallenge?: (streak: number) => void;
}

export const SuddenDeathView: React.FC<SuddenDeathViewProps> = ({
  questions,
  bestRecord,
  onRecordNewBest,
  onQuestionOutcome,
  onReturnToDashboard,
  onOpenShareChallenge,
}) => {
  // Game states: 'playing' | 'gameover'
  const [gameState, setGameState] = useState<'playing' | 'gameover'>('playing');
  const [streak, setStreak] = useState<number>(0);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(() => !soundEffects.isEnabled());
  const [isNewRecord, setIsNewRecord] = useState<boolean>(false);

  // Optional 15-second timer
  const [timerEnabled, setTimerEnabled] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(15);

  // Visual effects
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [showPoliceFlash, setShowPoliceFlash] = useState<boolean>(false);
  const [streakBanner, setStreakBanner] = useState<string | null>(null);

  // Active question
  const currentQ = questions[currentIdx];

  // Sound toggle
  const toggleSound = () => {
    const enabled = soundEffects.toggleSound();
    setIsMuted(!enabled);
  };

  // 15-second countdown timer
  useEffect(() => {
    if (gameState !== 'playing' || !timerEnabled || isRevealed) return;

    if (timeLeft <= 0) {
      // Time over = instant defeat
      handleTimeOutDefeat();
      return;
    }

    if (timeLeft <= 5) {
      soundEffects.playTick();
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, timerEnabled, timeLeft, isRevealed]);

  // Restart / Play again
  const handleRestart = () => {
    setGameState('playing');
    setStreak(0);
    setCurrentIdx((prev) => (prev + 1) % questions.length);
    setSelectedOption(null);
    setIsRevealed(false);
    setTimeLeft(15);
    setIsNewRecord(false);
    setStreakBanner(null);
  };

  const handleTimeOutDefeat = () => {
    if (gameState !== 'playing' || !currentQ) return;
    setIsRevealed(true);
    setGameState('gameover');
    setIsShaking(true);
    setShowPoliceFlash(true);
    soundEffects.playDefeat();

    setTimeout(() => {
      setIsShaking(false);
      setShowPoliceFlash(false);
    }, 1000);

    // Record question as error
    onQuestionOutcome(currentQ.id, false, -1);

    // Check high score
    if (streak > bestRecord.bestStreak) {
      setIsNewRecord(true);
      soundEffects.playNewRecord();
      onRecordNewBest({
        bestStreak: streak,
        date: new Date().toLocaleDateString('fr-FR', {
          day: '2-digit',
          month: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }),
        fatalQuestionId: currentQ.id,
        fatalQuestionText: currentQ.q,
        fatalQuestionRef: currentQ.ref,
      });
    }
  };

  const handleSelectOption = (optionIdx: number) => {
    if (isRevealed || gameState !== 'playing' || !currentQ) return;

    setSelectedOption(optionIdx);
    setIsRevealed(true);

    const isCorrect = optionIdx === currentQ.correct;
    onQuestionOutcome(currentQ.id, isCorrect, optionIdx);

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      soundEffects.playSuccess(newStreak);

      // Check milestones
      if (newStreak === 5) {
        setStreakBanner('🔥 EN CADENCE ! 5 BONNES RÉPONSES !');
      } else if (newStreak === 10) {
        setStreakBanner('⚡ IMPARABLE ! 10 D\'AFFILÉE !');
      } else if (newStreak === 20) {
        setStreakBanner('👑 LÉGENDE CEE1 ! MAJOR DE PROMO !');
      } else if (newStreak % 25 === 0) {
        setStreakBanner(`🌟 MONUMENTAL ! ${newStreak} SANS FAUTE !`);
      }

      if (newStreak > bestRecord.bestStreak && bestRecord.bestStreak > 0 && !isNewRecord) {
        setIsNewRecord(true);
        soundEffects.playNewRecord();
      }

      // Auto-advance to next question smoothly after 1.1s
      setTimeout(() => {
        setIsRevealed(false);
        setSelectedOption(null);
        setTimeLeft(15);
        setStreakBanner(null);
        setCurrentIdx((prev) => (prev + 1) % questions.length);
      }, 1100);
    } else {
      // WRONG ANSWER => SUDDEN DEATH GAME OVER
      setGameState('gameover');
      setIsShaking(true);
      setShowPoliceFlash(true);
      soundEffects.playDefeat();

      setTimeout(() => {
        setIsShaking(false);
        setShowPoliceFlash(false);
      }, 1000);

      // Check record
      if (streak > bestRecord.bestStreak) {
        setIsNewRecord(true);
        soundEffects.playNewRecord();
        onRecordNewBest({
          bestStreak: streak,
          date: new Date().toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          }),
          fatalQuestionId: currentQ.id,
          fatalQuestionText: currentQ.q,
          fatalQuestionRef: currentQ.ref,
        });
      }
    }
  };

  const letters = ['A', 'B', 'C', 'D'];
  const modObj = currentQ ? MODULES.find((m) => m.id === currentQ.module) : undefined;

  // Streak badge styling
  let flameColor = 'text-amber-500';
  let flameBg = 'bg-amber-500/10 border-amber-500/30';
  let streakLabel = 'Série en cours';

  if (streak >= 20) {
    flameColor = 'text-purple-400';
    flameBg = 'bg-purple-500/20 border-purple-500/50';
    streakLabel = '👑 Niveau Major';
  } else if (streak >= 10) {
    flameColor = 'text-yellow-400';
    flameBg = 'bg-yellow-500/20 border-yellow-500/50';
    streakLabel = '⚡ Imparable';
  } else if (streak >= 5) {
    flameColor = 'text-blue-400';
    flameBg = 'bg-blue-500/20 border-blue-500/50';
    streakLabel = '🔥 En Cadence';
  }

  return (
    <div className={`max-w-2xl mx-auto space-y-4 relative ${isShaking ? 'animate-shake' : ''}`}>
      {/* Red / Blue Police Flash Screen Overlay on Defeat */}
      {showPoliceFlash && (
        <div className="fixed inset-0 pointer-events-none z-50 animate-police-flash" />
      )}

      {/* Top Controls Bar */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={onReturnToDashboard}
          className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-red-500/50 flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quitter</span>
        </button>

        {/* Dynamic Streak Badge */}
        <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-2xl border ${flameBg} shadow-sm transition-all`}>
          <Flame className={`w-5 h-5 ${flameColor} animate-flame shrink-0`} />
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-300">
              {streakLabel} :
            </span>
            <span className={`text-base font-black font-mono ${flameColor}`}>
              {streak}
            </span>
          </div>
        </div>

        {/* Sound and Timer Toggles */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setTimerEnabled((prev) => !prev)}
            className={`p-2 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
              timerEnabled
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-500'
                : 'bg-white dark:bg-[#0B132B] border-slate-200 dark:border-slate-800 text-slate-400'
            }`}
            title={timerEnabled ? 'Désactiver le chrono 15s' : 'Activer le chrono 15s'}
          >
            <Timer className="w-4 h-4" />
          </button>

          <button
            onClick={toggleSound}
            className={`p-2 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
              !isMuted
                ? 'bg-blue-600/15 border-blue-500/40 text-blue-500'
                : 'bg-white dark:bg-[#0B132B] border-slate-200 dark:border-slate-800 text-slate-400'
            }`}
            title={isMuted ? 'Activer les sons' : 'Couper le son'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Record Bar Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-rose-950/40 to-slate-900 border border-rose-500/30 rounded-2xl p-3 flex items-center justify-between text-xs text-white shadow-lg">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="font-extrabold text-slate-300">Record de promo à battre :</span>
          <span className="font-mono font-black text-amber-400 text-sm">{bestRecord.bestStreak} à la suite</span>
        </div>
        {bestRecord.date && (
          <span className="text-[11px] text-slate-400 hidden sm:inline">({bestRecord.date})</span>
        )}
      </div>

      {/* High-Stakes Timer Bar */}
      {timerEnabled && gameState === 'playing' && (
        <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-[#0B132B] overflow-hidden relative">
          <div
            className={`h-full transition-all duration-1000 ${
              timeLeft <= 4
                ? 'bg-rose-500 animate-pulse'
                : timeLeft <= 8
                ? 'bg-amber-500'
                : 'bg-blue-500'
            }`}
            style={{ width: `${(timeLeft / 15) * 100}%` }}
          />
        </div>
      )}

      {/* Milestone Streak Pop-up Alert */}
      {streakBanner && (
        <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white font-black text-center text-xs sm:text-sm py-2 px-4 rounded-2xl shadow-xl animate-pop">
          {streakBanner}
        </div>
      )}

      {/* Question Card */}
      {currentQ && (
        <div
          className={`bg-white dark:bg-[#0B132B] border-2 rounded-3xl p-5 sm:p-7 shadow-xl space-y-4 transition-all ${
            gameState === 'gameover'
              ? 'border-rose-500/80 shadow-rose-900/30 ring-2 ring-rose-500/20'
              : 'border-slate-200 dark:border-slate-800'
          }`}
        >
          {/* Header of Question */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <span
                className={`px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider border ${
                  modObj ? modObj.badgeClass : 'bg-rose-500/10 text-rose-500 border-rose-500/30'
                }`}
              >
                {modObj ? `${modObj.code} • ${modObj.shortTitle}` : 'CEE1'}
              </span>
              <span className="px-2 py-0.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-rose-600 text-white flex items-center gap-1 shadow-sm">
                <Skull className="w-3 h-3" />
                <span>Mort Subite</span>
              </span>
            </div>

            {timerEnabled && gameState === 'playing' && (
              <span
                className={`font-mono text-xs font-black px-2 py-0.5 rounded-lg border ${
                  timeLeft <= 4
                    ? 'bg-rose-500/20 text-rose-500 border-rose-500/40 animate-ping'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                }`}
              >
                {timeLeft}s
              </span>
            )}
          </div>

          <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
            {currentQ.q}
          </h2>

          {/* Answer Options */}
          <div className="space-y-2.5 pt-1">
            {currentQ.options.map((optText, oIdx) => {
              let cardStyle =
                'bg-white dark:bg-[#060B19] border-slate-200 dark:border-slate-800 hover:border-rose-500/60 text-slate-800 dark:text-slate-100';
              let badgeStyle =
                'bg-slate-100 dark:bg-[#1C2541] text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700';

              if (isRevealed) {
                if (oIdx === currentQ.correct) {
                  cardStyle =
                    'bg-emerald-500/15 border-emerald-500 text-slate-900 dark:text-white ring-2 ring-emerald-500/40 font-bold';
                  badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
                } else if (selectedOption === oIdx && oIdx !== currentQ.correct) {
                  cardStyle =
                    'bg-rose-500/15 border-rose-500 text-slate-900 dark:text-white ring-2 ring-rose-500/40';
                  badgeStyle = 'bg-rose-600 text-white border-rose-600';
                } else {
                  cardStyle = 'bg-slate-50 dark:bg-[#060B19]/40 border-slate-200 dark:border-slate-800/60 opacity-40';
                }
              }

              return (
                <button
                  key={oIdx}
                  disabled={isRevealed || gameState === 'gameover'}
                  onClick={() => handleSelectOption(oIdx)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-start gap-3 cursor-pointer ${cardStyle} ${
                    isRevealed ? 'cursor-default' : 'active:scale-[0.99]'
                  }`}
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

          {/* Explanation on Reveal */}
          {isRevealed && (
            <div
              className={`mt-4 p-4 rounded-2xl border ${
                selectedOption === currentQ.correct
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : 'bg-rose-500/10 border-rose-500/30'
              }`}
            >
              <div
                className={`font-extrabold text-xs sm:text-sm flex items-center gap-2 mb-2 ${
                  selectedOption === currentQ.correct
                    ? 'text-emerald-500 dark:text-emerald-400'
                    : 'text-rose-500 dark:text-rose-400'
                }`}
              >
                {selectedOption === currentQ.correct ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Exact ! (+1 au combo de série)</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 shrink-0" />
                    <span>
                      FAUTE ÉLIMINATOIRE ! Bonne réponse : ({letters[currentQ.correct]}) « {currentQ.options[currentQ.correct]} »
                    </span>
                  </>
                )}
              </div>

              <div className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed space-y-1">
                <div>
                  <strong className="font-bold text-slate-900 dark:text-white">
                    Pourquoi ce piège ? Règle & Cadre d'application :
                  </strong>
                </div>
                <p>{currentQ.exp}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* GAME OVER Screen Modal / Card */}
      {gameState === 'gameover' && (
        <div className="bg-gradient-to-b from-slate-900 via-rose-950/70 to-slate-900 border-2 border-rose-500 text-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 animate-pop">
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 rounded-2xl bg-rose-600/20 text-rose-500 border border-rose-500/40 mb-1">
              <AlertOctagon className="w-10 h-10 animate-bounce" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-rose-400">
              ÉLIMINÉ EN MISSION !
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              La règle de la Mort Subite est sans pardon : une seule faute met fin à la série.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-black/40 border border-slate-700 rounded-2xl p-4">
              <div className="text-xs text-slate-400 uppercase font-bold">Votre Série Finale</div>
              <div className="text-3xl font-black font-mono text-white mt-1">{streak}</div>
              <div className="text-[11px] text-slate-400 mt-1">questions d'affilée</div>
            </div>
            <div className="bg-black/40 border border-amber-500/40 rounded-2xl p-4">
              <div className="text-xs text-amber-400 uppercase font-bold flex items-center justify-center gap-1">
                <Crown className="w-3.5 h-3.5" />
                <span>Meilleur Record</span>
              </div>
              <div className="text-3xl font-black font-mono text-amber-400 mt-1">
                {Math.max(streak, bestRecord.bestStreak)}
              </div>
              <div className="text-[11px] text-amber-300/80 mt-1">
                {isNewRecord ? '🎉 NOUVEAU RECORD !' : 'Record actuel'}
              </div>
            </div>
          </div>

          <div className="space-y-2.5 pt-1">
            {onOpenShareChallenge && (
              <button
                onClick={() => onOpenShareChallenge(streak)}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
              >
                <Share2 className="w-4 h-4" />
                <span>Défier ma brigade (Partager ma série de {streak})</span>
              </button>
            )}

            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={handleRestart}
                className="flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-rose-600 to-red-500 hover:from-rose-500 hover:to-red-400 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Revanche Immédiate</span>
              </button>
              <button
                onClick={onReturnToDashboard}
                className="py-3.5 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
              >
                <span>Retour Accueil</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
