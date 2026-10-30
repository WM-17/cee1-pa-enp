import React, { useEffect, useState, useRef } from 'react';
import { QuizSession } from './QuizView';
import { calculateScoreOn20, getScoreEvaluation } from '../utils/quizLogic';
import { soundEffects } from '../utils/soundEffects';
import { ParticleCanvas, ParticleCanvasHandle } from './ParticleCanvas';
import {
  Award,
  RotateCcw,
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Share2,
  ShieldCheck,
  Crown,
  Sparkles,
} from 'lucide-react';

interface ResultsViewProps {
  quiz: QuizSession;
  errorCount: number;
  onReturnDashboard: () => void;
  onStartErrors: () => void;
  onRestartQuiz: () => void;
  onOpenShareChallenge?: (scoreOn20: number, mention: string) => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  quiz,
  errorCount,
  onReturnDashboard,
  onStartErrors,
  onRestartQuiz,
  onOpenShareChallenge,
}) => {
  const { questions, answers, title, mode } = quiz;
  let correctCount = 0;
  questions.forEach((q, idx) => {
    if (answers[idx] === q.correct) correctCount++;
  });

  const total = questions.length || 1;
  const scoreOn20 = calculateScoreOn20(correctCount, total);
  const { mention, badgeColor } = getScoreEvaluation(scoreOn20);
  const letters = ['A', 'B', 'C', 'D'];

  const isExam = mode === 'exam';
  const isErrorsMode = mode === 'errors' || title.includes('Erreur');
  const isFlawlessCasier = isErrorsMode && errorCount === 0;

  // Canvas ref for confetti
  const particleCanvasRef = useRef<ParticleCanvasHandle | null>(null);

  // Animated odometer for the score on 20
  const [animatedScore, setAnimatedScore] = useState<number>(0);

  useEffect(() => {
    // Play jury verdict sound
    soundEffects.playJuryVerdict(scoreOn20 >= 10);

    // If major of promo or flawless error recovery, trigger confetti
    if (scoreOn20 >= 16 || isFlawlessCasier) {
      setTimeout(() => {
        particleCanvasRef.current?.spawnConfetti();
      }, 350);
    }

    // Animate score from 0 up to scoreOn20 over 1200ms
    const start = performance.now();
    const duration = 1200;

    const frame = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(ease * scoreOn20 * 10) / 10;
      setAnimatedScore(current);

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };

    const id = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(id);
  }, [scoreOn20, isFlawlessCasier]);

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn relative">
      {/* Confetti & Particle Canvas */}
      <ParticleCanvas ref={particleCanvasRef} activeEmbers={scoreOn20 >= 16} />

      {/* Flawless Error Elimination Banner */}
      {isFlawlessCasier && (
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-emerald-400 text-center space-y-2 animate-pop">
          <div className="inline-flex p-3 rounded-2xl bg-white/20 text-white">
            <ShieldCheck className="w-8 h-8 animate-bounce" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider">
            CASIER PROCÉDURAL 100% VIERGE !
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-md mx-auto">
            Toutes vos erreurs passées ont été intégralement révisées et maîtrisées. Votre réflexe juridique est blindé pour le CEE1 !
          </p>
        </div>
      )}

      {/* Grand Hero Bilan avec Tampon Officiel du Jury */}
      <div className="rounded-3xl bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#0A1A3A] text-white p-6 sm:p-8 border border-blue-500/30 shadow-2xl text-center space-y-5 relative overflow-hidden">
        <div className="text-xs font-bold uppercase tracking-widest text-blue-400 flex items-center justify-center gap-1.5">
          <Award className="w-4 h-4 text-blue-400" />
          <span>{title} • Délibération Officielle</span>
        </div>

        {/* 3D Jury Official Rubber Stamp */}
        <div className="flex justify-center my-3">
          {scoreOn20 >= 16 ? (
            <div className="inline-block p-4 sm:p-5 border-4 sm:border-6 border-dashed border-amber-400/90 rounded-3xl bg-amber-950/40 text-center shadow-2xl animate-stamp ring-2 ring-amber-400/40">
              <div className="text-[10px] sm:text-xs tracking-widest font-mono font-black uppercase text-amber-300">
                ★ CONCOURS CEE1 — PROMOTION POLICE ★
              </div>
              <div className="text-2xl sm:text-4xl font-black tracking-wider text-amber-400 uppercase drop-shadow-[0_0_12px_rgba(245,158,11,0.8)] my-1">
                MAJOR DE PROMOTION !
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-amber-200 tracking-wide uppercase">
                Admis avec les Félicitations du Jury
              </div>
            </div>
          ) : scoreOn20 >= 12 ? (
            <div className="inline-block p-4 sm:p-5 border-4 sm:border-6 border-dashed border-blue-400/90 rounded-3xl bg-blue-950/40 text-center shadow-2xl animate-stamp ring-2 ring-blue-400/40">
              <div className="text-[10px] sm:text-xs tracking-widest font-mono font-black uppercase text-blue-300">
                ★ SESSION OFFICIELLE CEE1 ★
              </div>
              <div className="text-2xl sm:text-4xl font-black tracking-wider text-blue-400 uppercase drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] my-1">
                ADMISSIBILITÉ CONFIRMÉE !
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-blue-200 tracking-wide uppercase">
                Acquis Professionnels Validés en Mission
              </div>
            </div>
          ) : scoreOn20 >= 10 ? (
            <div className="inline-block p-4 sm:p-5 border-4 sm:border-6 border-dashed border-yellow-500/90 rounded-3xl bg-yellow-950/40 text-center shadow-2xl animate-stamp ring-2 ring-yellow-500/40">
              <div className="text-[10px] sm:text-xs tracking-widest font-mono font-black uppercase text-yellow-300">
                ★ DÉLIBÉRATION DU JURY ★
              </div>
              <div className="text-2xl sm:text-3xl font-black tracking-wider text-yellow-400 uppercase my-1">
                ADMISSIBLE AU SEUIL
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-yellow-200 tracking-wide uppercase">
                Vigilance Recommandée sur les Pièges
              </div>
            </div>
          ) : (
            <div className="inline-block p-4 sm:p-5 border-4 sm:border-6 border-dashed border-rose-500/90 rounded-3xl bg-rose-950/40 text-center shadow-2xl animate-stamp ring-2 ring-rose-500/40">
              <div className="text-[10px] sm:text-xs tracking-widest font-mono font-black uppercase text-rose-300">
                ★ DÉLIBÉRATION DU JURY ★
              </div>
              <div className="text-2xl sm:text-4xl font-black tracking-wider text-rose-500 uppercase drop-shadow-[0_0_12px_rgba(239,68,68,0.8)] my-1">
                AJOURNÉ !
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-rose-200 tracking-wide uppercase">
                Session de Rattrapage Procédurale Requise
              </div>
            </div>
          )}
        </div>

        {/* Note Finale Animée */}
        <div className="space-y-1">
          <div className={`text-5xl sm:text-7xl font-black font-mono ${badgeColor} tracking-tight`}>
            {animatedScore.toFixed(1)} <span className="text-2xl text-slate-400 font-sans">/ 20</span>
          </div>

          <div className="text-base sm:text-lg font-bold text-white flex items-center justify-center gap-2">
            <span>{mention}</span>
          </div>
          <p className="text-xs text-slate-300">
            {correctCount} / {total} réponses exactes ({Math.round((correctCount / total) * 100)}%)
          </p>
        </div>

        {/* Boutons d'action rapides */}
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          {onOpenShareChallenge && (
            <button
              onClick={() => onOpenShareChallenge(scoreOn20, mention)}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 active:scale-95 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-amber-500/25 cursor-pointer transition-all"
            >
              <Share2 className="w-4 h-4 fill-slate-950" />
              <span>Défier ma brigade (Partager ma note de {scoreOn20}/20)</span>
            </button>
          )}

          <button
            onClick={onReturnDashboard}
            className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-600/30 cursor-pointer transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tableau de Bord</span>
          </button>

          {errorCount > 0 && (
            <button
              onClick={onStartErrors}
              className="px-5 py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-rose-600/30 cursor-pointer transition-all"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Cibler mon Carnet d'Erreurs ({errorCount})</span>
            </button>
          )}

          <button
            onClick={onRestartQuiz}
            className="px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center gap-2 border border-slate-700 cursor-pointer transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Recommencer</span>
          </button>
        </div>
      </div>

      {/* Correction Détaillée Question par Question */}
      <div className="space-y-3">
        <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-1">
          Correction Détaillée ({questions.length} Questions)
        </h3>

        {questions.map((q, idx) => {
          const userAns = answers[idx];
          const isCorrect = userAns === q.correct;

          return (
            <div
              key={q.id}
              className={`bg-white dark:bg-[#0B132B] border rounded-3xl p-5 sm:p-6 space-y-3 shadow-sm ${
                isCorrect ? 'border-emerald-500/30' : 'border-rose-500/40'
              }`}
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span
                  className={`text-xs font-mono font-bold px-2.5 py-1 rounded-xl flex items-center gap-1.5 ${
                    isCorrect
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                      : 'bg-rose-500/15 text-rose-600 dark:text-rose-400'
                  }`}
                >
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Question {idx + 1} • Correct</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Question {idx + 1} • Erreur</span>
                    </>
                  )}
                </span>
                <span className="text-xs font-mono text-slate-400">{q.ref}</span>
              </div>

              <h4 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base leading-snug">
                {q.q}
              </h4>

              <div className="text-xs space-y-2 pt-1">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300">
                  <strong>Bonne réponse ({letters[q.correct]}) :</strong> {q.options[q.correct]}
                </div>

                {!isCorrect && userAns !== undefined && (
                  <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-800 dark:text-rose-300">
                    <strong>Votre réponse ({letters[userAns]}) :</strong> {q.options[userAns]}
                  </div>
                )}

                <div className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed pt-1">
                  <strong className="text-slate-800 dark:text-slate-100">Explication juridique :</strong> {q.exp}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
