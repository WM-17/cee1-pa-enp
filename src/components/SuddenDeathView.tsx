import React, { useState, useEffect, useRef } from 'react';
import { Question, MODULES } from '../data/examData';
import { soundEffects } from '../utils/soundEffects';
import { SuddenDeathRecord } from '../utils/quizLogic';
import { ParticleCanvas, ParticleCanvasHandle } from './ParticleCanvas';
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
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface SuddenDeathViewProps {
  questions: Question[];
  bestRecord: SuddenDeathRecord;
  onRecordNewBest: (newBest: SuddenDeathRecord) => void;
  onQuestionOutcome: (qId: number, isCorrect: boolean, chosenIdx: number) => void;
  onReturnToDashboard: () => void;
  onOpenShareChallenge?: (streak: number) => void;
}

const TIMER_MAX_SECONDS = 30; // Chronomètre de Tension 30s officiel

export const SuddenDeathView: React.FC<SuddenDeathViewProps> = ({
  questions,
  bestRecord,
  onRecordNewBest,
  onQuestionOutcome,
  onReturnToDashboard,
  onOpenShareChallenge,
}) => {
  // Helper to generate a freshly randomized question order
  const generateShuffledIndices = (len: number): number[] => {
    const arr = Array.from({ length: len }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Canvas ref for particles (sparks, embers, confetti)
  const particleCanvasRef = useRef<ParticleCanvasHandle | null>(null);

  // Game states: 'playing' | 'gameover'
  const [gameState, setGameState] = useState<'playing' | 'gameover'>('playing');
  const [streak, setStreak] = useState<number>(0);

  // Truly random queue of question indices without duplicates
  const [shuffledQueue, setShuffledQueue] = useState<number[]>(() => generateShuffledIndices(questions.length));
  const [queuePointer, setQueuePointer] = useState<number>(0);

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(() => !soundEffects.isEnabled());
  const [isNewRecord, setIsNewRecord] = useState<boolean>(false);

  // 30-second Tension Timer
  const [timerEnabled, setTimerEnabled] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(TIMER_MAX_SECONDS);

  // Visual effects
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [showPoliceFlash, setShowPoliceFlash] = useState<boolean>(false);
  const [showGoldFlash, setShowGoldFlash] = useState<boolean>(false);
  const [streakBanner, setStreakBanner] = useState<string | null>(null);
  const [floatingCombo, setFloatingCombo] = useState<{ text: string; id: number; isTrapAvoided?: boolean } | null>(null);

  // Rolling odometer animation for game-over score reveal
  const [odometerScore, setOdometerScore] = useState<number>(0);

  // Active question selected randomly from shuffled queue
  const currentIdx = shuffledQueue[queuePointer] ?? 0;
  const currentQ = questions[currentIdx] || questions[0];

  // Sound toggle
  const toggleSound = () => {
    const enabled = soundEffects.toggleSound();
    setIsMuted(!enabled);
  };

  // 30-second countdown timer
  useEffect(() => {
    if (gameState !== 'playing' || !timerEnabled || isRevealed) return;

    if (timeLeft <= 0) {
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

  // Rolling odometer counter animation when game-over triggers
  useEffect(() => {
    if (gameState !== 'gameover') return;
    setOdometerScore(0);
    const target = streak;
    if (target === 0) return;

    const duration = 1000;
    const start = performance.now();

    const frame = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setOdometerScore(Math.round(ease * target));
      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };

    const id = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(id);
  }, [gameState, streak]);

  // Restart / Play again with a fresh random shuffle
  const handleRestart = () => {
    setGameState('playing');
    setStreak(0);
    const newQueue = generateShuffledIndices(questions.length);
    setShuffledQueue(newQueue);
    setQueuePointer(0);
    setSelectedOption(null);
    setIsRevealed(false);
    setTimeLeft(TIMER_MAX_SECONDS);
    setIsNewRecord(false);
    setStreakBanner(null);
    setFloatingCombo(null);
  };

  const handleTimeOutDefeat = () => {
    if (gameState !== 'playing' || !currentQ) return;
    setIsRevealed(true);
    setGameState('gameover');
    setIsShaking(true);
    setShowPoliceFlash(true);
    soundEffects.playStamp();
    soundEffects.playDefeat();

    setTimeout(() => {
      setIsShaking(false);
      setShowPoliceFlash(false);
    }, 1100);

    // Record question as error
    onQuestionOutcome(currentQ.id, false, -1);

    // Check high score
    if (streak > bestRecord.bestStreak) {
      setIsNewRecord(true);
      setShowGoldFlash(true);
      soundEffects.playNewRecord();
      particleCanvasRef.current?.spawnConfetti();
      setTimeout(() => setShowGoldFlash(false), 800);
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

  const handleSelectOption = (optionIdx: number, e?: React.MouseEvent) => {
    if (isRevealed || gameState !== 'playing' || !currentQ) return;

    setSelectedOption(optionIdx);
    setIsRevealed(true);

    const isCorrect = optionIdx === currentQ.correct;
    onQuestionOutcome(currentQ.id, isCorrect, optionIdx);

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      soundEffects.playSuccess(newStreak);

      // Trigger spark particles at click position
      if (e) {
        particleCanvasRef.current?.spawnSparks(e.clientX, e.clientY);
      } else {
        particleCanvasRef.current?.spawnSparks(window.innerWidth / 2, window.innerHeight / 2);
      }

      // Detect if tricky procedural question
      const qLower = (currentQ.q + ' ' + currentQ.exp + ' ' + currentQ.ref).toLowerCase();
      const isTricky =
        qLower.includes('78-2') ||
        qLower.includes('l.435-1') ||
        qLower.includes('122-5') ||
        qLower.includes('flagrant') ||
        qLower.includes('tentative') ||
        qLower.includes('complicité') ||
        qLower.includes('fouille') ||
        qLower.includes('palpation');

      // Floating Combo Floater
      let comboText = `+1 SÉRIE (${newStreak})`;
      if (newStreak >= 20) {
        comboText = `👑 MAJOR PROMO ! x${newStreak}`;
      } else if (newStreak >= 10) {
        comboText = `⚡ IMPARABLE ! x${newStreak}`;
      } else if (newStreak >= 5) {
        comboText = `🔥 EN CADENCE ! x${newStreak}`;
      }
      setFloatingCombo({
        text: comboText,
        id: Date.now(),
        isTrapAvoided: isTricky,
      });

      // Check milestones & confetti
      if (newStreak === 5) {
        setStreakBanner('🔥 EN CADENCE ! 5 BONNES RÉPONSES !');
        particleCanvasRef.current?.spawnConfetti();
      } else if (newStreak === 10) {
        setStreakBanner('⚡ IMPARABLE ! 10 D\'AFFILÉE !');
        particleCanvasRef.current?.spawnConfetti();
      } else if (newStreak === 20) {
        setStreakBanner('👑 LÉGENDE CEE1 ! MAJOR DE PROMO !');
        particleCanvasRef.current?.spawnConfetti();
      } else if (newStreak % 25 === 0) {
        setStreakBanner(`🌟 MONUMENTAL ! ${newStreak} SANS FAUTE !`);
        particleCanvasRef.current?.spawnConfetti();
      }

      // Check high record
      if (newStreak > bestRecord.bestStreak && bestRecord.bestStreak > 0 && !isNewRecord) {
        setIsNewRecord(true);
        setShowGoldFlash(true);
        soundEffects.playNewRecord();
        particleCanvasRef.current?.spawnConfetti();
        setTimeout(() => setShowGoldFlash(false), 800);
      }

      // Auto-advance to next random question smoothly after 1.15s
      setTimeout(() => {
        setIsRevealed(false);
        setSelectedOption(null);
        setTimeLeft(TIMER_MAX_SECONDS);
        setStreakBanner(null);
        setQueuePointer((prev) => {
          const next = prev + 1;
          if (next >= shuffledQueue.length) {
            setShuffledQueue(generateShuffledIndices(questions.length));
            return 0;
          }
          return next;
        });
      }, 1150);
    } else {
      // WRONG ANSWER => SUDDEN DEATH GAME OVER
      setGameState('gameover');
      setIsShaking(true);
      setShowPoliceFlash(true);
      soundEffects.playStamp();
      soundEffects.playDefeat();

      setTimeout(() => {
        setIsShaking(false);
        setShowPoliceFlash(false);
      }, 1100);

      // Check record
      if (streak > bestRecord.bestStreak) {
        setIsNewRecord(true);
        setShowGoldFlash(true);
        soundEffects.playNewRecord();
        particleCanvasRef.current?.spawnConfetti();
        setTimeout(() => setShowGoldFlash(false), 800);
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
  let streakLabel = 'Série';

  // Reactive screen edge aura ("Vignette Glow")
  let vignetteClass = 'border-[4px] border-blue-900/15';
  if (streak >= 20) {
    flameColor = 'text-purple-400';
    flameBg = 'bg-purple-500/20 border-purple-500/50 shadow-lg shadow-purple-500/30';
    streakLabel = '👑 Mode Major';
    vignetteClass = 'vignette-legend';
  } else if (streak >= 10) {
    flameColor = 'text-yellow-400';
    flameBg = 'bg-yellow-500/20 border-yellow-500/50 shadow-md shadow-yellow-500/20';
    streakLabel = '⚡ Imparable';
    vignetteClass = 'vignette-gold';
  } else if (streak >= 5) {
    flameColor = 'text-blue-400';
    flameBg = 'bg-blue-500/20 border-blue-500/50';
    streakLabel = '🔥 En Cadence';
    vignetteClass = 'vignette-electric';
  }

  // Circular timer calculation
  // radius = 22, circumference = 2 * PI * 22 = 138.23
  const CIRCLE_RADIUS = 22;
  const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
  const strokeDashoffset = CIRCLE_CIRCUMFERENCE * (1 - Math.max(0, timeLeft) / TIMER_MAX_SECONDS);

  let timerColorClass = 'text-emerald-400 stroke-emerald-400';
  if (timeLeft <= 5) {
    timerColorClass = 'text-rose-500 stroke-rose-500';
  } else if (timeLeft <= 12) {
    timerColorClass = 'text-amber-400 stroke-amber-400';
  }

  return (
    <div className={`max-w-2xl mx-auto space-y-4 relative ${isShaking ? 'animate-shake' : ''}`}>
      {/* 60 FPS Particle Canvas for Sparks, Rising Embers and Confetti */}
      <ParticleCanvas
        ref={particleCanvasRef}
        activeEmbers={gameState === 'playing' && streak >= 10}
        emberIntensity={streak >= 20 ? 'intense' : 'moderate'}
      />

      {/* Reactive Screen Edge Aura ("Vignette Glow") */}
      <div className={`fixed inset-0 pointer-events-none z-20 transition-all duration-700 ${vignetteClass}`} />

      {/* Red / Blue Police Flash Screen Overlay on Defeat */}
      {showPoliceFlash && (
        <div className="fixed inset-0 pointer-events-none z-50 animate-police-flash" />
      )}

      {/* Golden Flash on New High Score */}
      {showGoldFlash && (
        <div className="fixed inset-0 pointer-events-none z-50 bg-amber-400/30 animate-pulse transition-opacity duration-500" />
      )}

      {/* Defcon Urgency Heartbeat Overlay on 5 last seconds */}
      {timerEnabled && gameState === 'playing' && timeLeft <= 5 && !isRevealed && (
        <div className="fixed inset-0 pointer-events-none z-20 border-8 border-rose-500/40 animate-heartbeat" />
      )}

      {/* Floating Combo Floater */}
      {floatingCombo && (
        <div
          key={floatingCombo.id}
          className="fixed top-28 left-1/2 -translate-x-1/2 z-40 pointer-events-none flex flex-col items-center gap-1 animate-combo-float"
        >
          <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white font-black text-sm sm:text-base shadow-2xl border border-white/40 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            <span>{floatingCombo.text}</span>
          </div>
          {floatingCombo.isTrapAvoided && (
            <div className="px-3 py-1 rounded-xl bg-blue-600/95 text-white font-bold text-xs shadow-lg border border-blue-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
              <span>Piège Procédural Déjoué !</span>
            </div>
          )}
        </div>
      )}

      {/* Top Controls Bar */}
      <div className="flex items-center justify-between gap-2 relative z-30">
        <button
          onClick={onReturnToDashboard}
          className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-red-500/50 flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quitter</span>
        </button>

        {/* Dynamic Streak Badge with Evolving Aura */}
        <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-2xl border ${flameBg} shadow-sm transition-all`}>
          <Flame className={`w-5 h-5 ${flameColor} animate-flame shrink-0`} />
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-300">
              {streakLabel} :
            </span>
            <span className={`text-lg font-black font-mono ${flameColor}`}>
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
            title={timerEnabled ? 'Désactiver le chrono 30s' : 'Activer le chrono 30s'}
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
      <div className="bg-gradient-to-r from-slate-900 via-rose-950/40 to-slate-900 border border-rose-500/30 rounded-2xl p-3 flex items-center justify-between text-xs text-white shadow-lg relative z-30">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="font-extrabold text-slate-300">Record de promo à battre :</span>
          <span className="font-mono font-black text-amber-400 text-sm">{bestRecord.bestStreak} sans faute</span>
        </div>
        {bestRecord.date && (
          <span className="text-[11px] text-slate-400 hidden sm:inline">({bestRecord.date})</span>
        )}
      </div>

      {/* Defcon 30s Circular Countdown Gauge & Bar */}
      {timerEnabled && gameState === 'playing' && (
        <div className="flex items-center gap-3 bg-white/80 dark:bg-[#0B132B]/80 backdrop-blur-md p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 relative z-30 shadow-md">
          {/* Circular SVG Gauge */}
          <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
            <svg className="w-12 h-12 -rotate-90 transform" viewBox="0 0 52 52">
              <circle
                cx="26"
                cy="26"
                r={CIRCLE_RADIUS}
                className="stroke-slate-200 dark:stroke-slate-800"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="26"
                cy="26"
                r={CIRCLE_RADIUS}
                className={`${timerColorClass} transition-all duration-1000 ease-linear`}
                strokeWidth="4"
                strokeDasharray={CIRCLE_CIRCUMFERENCE}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <span
              className={`absolute font-mono text-xs font-black ${
                timeLeft <= 5 ? 'text-rose-500 animate-ping' : 'text-slate-900 dark:text-white'
              }`}
            >
              {timeLeft}s
            </span>
          </div>

          {/* Linear Gauge & Tension Text */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-extrabold uppercase tracking-wider text-[10px] text-slate-400">
                {timeLeft <= 5 ? '🚨 ALERTE TENSION REFLEXE !' : 'Chronomètre 30s Réflexe Terrain'}
              </span>
              <span className={`font-mono font-bold text-xs ${timerColorClass}`}>
                {timeLeft}s / {TIMER_MAX_SECONDS}s
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div
                className={`h-full transition-all duration-1000 ${
                  timeLeft <= 5
                    ? 'bg-rose-500 animate-pulse'
                    : timeLeft <= 12
                    ? 'bg-amber-500'
                    : 'bg-emerald-500'
                }`}
                style={{ width: `${(timeLeft / TIMER_MAX_SECONDS) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Milestone Streak Pop-up Alert */}
      {streakBanner && (
        <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white font-black text-center text-xs sm:text-sm py-2 px-4 rounded-2xl shadow-xl animate-pop relative z-30">
          {streakBanner}
        </div>
      )}

      {/* Question Card */}
      {currentQ && (
        <div
          className={`bg-white dark:bg-[#0B132B] border-2 rounded-3xl p-5 sm:p-7 shadow-xl space-y-4 transition-all relative z-30 ${
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
                  timeLeft <= 5
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
                    'bg-emerald-500/15 border-emerald-500 text-slate-900 dark:text-white ring-2 ring-emerald-500/40 font-bold scale-[1.01] shadow-lg shadow-emerald-500/20';
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
                  onClick={(e) => handleSelectOption(oIdx, e)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-start gap-3 cursor-pointer ${cardStyle} ${
                    isRevealed ? 'cursor-default' : 'active:scale-[0.98]'
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
                {currentQ.ref && (
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-1 font-mono">
                    Source officielle : {currentQ.ref}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* GAME OVER Screen Modal / Card - High Tension Cinematic Defeat */}
      {gameState === 'gameover' && (
        <div className="bg-gradient-to-b from-slate-950 via-rose-950/80 to-slate-950 border-2 border-rose-500 text-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 animate-pop relative z-30 overflow-hidden">
          {/* Big 3D Rubber Stamp "INTERPELLÉ" */}
          <div className="flex justify-center my-2">
            <div className="inline-block p-4 sm:p-5 border-4 sm:border-8 border-dashed border-rose-500/90 rounded-3xl bg-rose-950/40 text-center shadow-2xl animate-stamp">
              <div className="text-[10px] sm:text-xs tracking-widest font-mono font-black uppercase text-rose-300">
                ★ PROCÉDURE CEE1 INTERROMPUE ★
              </div>
              <div className="text-3xl sm:text-5xl font-black tracking-wider text-rose-500 uppercase drop-shadow-[0_0_15px_rgba(239,68,68,0.8)] my-1">
                INTERPELLÉ !
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-rose-200/90 tracking-wide uppercase">
                Faute de procédure éliminatoire en patrouille
              </div>
            </div>
          </div>

          <div className="text-center space-y-1">
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider text-rose-400">
              DOSSIER CLASSÉ SANS SUITE
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              La règle de la Mort Subite est sans pardon : une seule faute met fin immédiatement à la série.
            </p>
          </div>

          {/* Odometer Rolling Scores Display */}
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-black/50 border border-slate-700 rounded-2xl p-4 shadow-inner">
              <div className="text-xs text-slate-400 uppercase font-bold">Votre Série Finale</div>
              <div className="text-4xl font-black font-mono text-white mt-1 animate-pulse">
                {odometerScore}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">questions d'affilée</div>
            </div>

            <div className="bg-black/50 border border-amber-500/40 rounded-2xl p-4 shadow-inner">
              <div className="text-xs text-amber-400 uppercase font-bold flex items-center justify-center gap-1">
                <Crown className="w-3.5 h-3.5" />
                <span>Meilleur Record</span>
              </div>
              <div className="text-4xl font-black font-mono text-amber-400 mt-1">
                {Math.max(streak, bestRecord.bestStreak)}
              </div>
              <div className="text-[11px] text-amber-300/80 mt-1 font-bold">
                {isNewRecord ? '🎉 NOUVEAU RECORD DE PROMO !' : 'Record actuel'}
              </div>
            </div>
          </div>

          {/* Surgical Trap Breakdown Card */}
          {currentQ && (
            <div className="bg-rose-950/40 border border-rose-500/40 rounded-2xl p-4 space-y-2 text-left">
              <div className="flex items-center gap-2 text-rose-400 font-black text-xs uppercase tracking-wider">
                <AlertOctagon className="w-4 h-4 shrink-0" />
                <span>Révélation chirurgicale du piège fatal :</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                {currentQ.exp}
              </p>
              {currentQ.ref && (
                <div className="text-[11px] font-mono text-rose-300 font-bold">
                  Cadre juridique : {currentQ.ref}
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
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
              {/* Flaming Revenge Button */}
              <button
                onClick={handleRestart}
                className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-black text-sm sm:text-base shadow-2xl flex items-center justify-center gap-2.5 cursor-pointer transition-all active:scale-95 animate-fire-glow"
              >
                <RotateCcw className="w-5 h-5 animate-spin" style={{ animationDuration: '4s' }} />
                <span>Revanche Immédiate 🔥</span>
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
