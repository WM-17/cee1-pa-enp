import React from 'react';
import { QuizSession } from './QuizView';
import { calculateScoreOn20, getScoreEvaluation } from '../utils/quizLogic';
import { Award, RotateCcw, AlertTriangle, ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';

interface ResultsViewProps {
  quiz: QuizSession;
  errorCount: number;
  onReturnDashboard: () => void;
  onStartErrors: () => void;
  onRestartQuiz: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  quiz,
  errorCount,
  onReturnDashboard,
  onStartErrors,
  onRestartQuiz,
}) => {
  const { questions, answers, title } = quiz;
  let correctCount = 0;
  questions.forEach((q, idx) => {
    if (answers[idx] === q.correct) correctCount++;
  });

  const total = questions.length || 1;
  const scoreOn20 = calculateScoreOn20(correctCount, total);
  const { mention, badgeColor } = getScoreEvaluation(scoreOn20);
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
      {/* Grand Hero Bilan */}
      <div className="rounded-3xl bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#0A1A3A] text-white p-6 sm:p-8 border border-blue-500/30 shadow-2xl text-center space-y-4 relative overflow-hidden">
        <div className="text-xs font-bold uppercase tracking-widest text-blue-400">
          {title} • Bilan de la session
        </div>

        <div className={`text-5xl sm:text-6xl font-black font-mono ${badgeColor}`}>
          {scoreOn20} <span className="text-2xl text-slate-400 font-sans">/ 20</span>
        </div>

        <div className="space-y-1">
          <div className="text-base sm:text-lg font-bold text-white flex items-center justify-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>{mention}</span>
          </div>
          <p className="text-xs text-slate-300">
            {correctCount} / {total} réponses exactes ({Math.round((correctCount / total) * 100)}%)
          </p>
        </div>

        {/* Boutons d'action rapides */}
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <button
            onClick={onReturnDashboard}
            className="px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-600/30 cursor-pointer transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tableau de Bord</span>
          </button>

          {errorCount > 0 && (
            <button
              onClick={onStartErrors}
              className="px-5 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-rose-600/30 cursor-pointer transition-all"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Cibler mon Carnet d'Erreurs ({errorCount})</span>
            </button>
          )}

          <button
            onClick={onRestartQuiz}
            className="px-4 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center gap-2 border border-slate-700 cursor-pointer transition-all"
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
                {userAns !== undefined && !isCorrect && (
                  <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
                    <strong className="font-bold">Votre réponse ({letters[userAns]}) :</strong> {q.options[userAns]}
                  </div>
                )}

                {userAns === undefined && (
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                    <strong className="font-bold">Non répondu</strong>
                  </div>
                )}

                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
                  <strong className="font-bold">Bonne réponse ({letters[q.correct]}) :</strong> {q.options[q.correct]}
                </div>
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
                <div>
                  <strong className="font-bold text-slate-900 dark:text-white">
                    {isCorrect ? 'Règle juridique & Point clé :' : 'Pourquoi vous avez faux & Règle juridique :'}
                  </strong>
                </div>
                <p>{q.exp}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
