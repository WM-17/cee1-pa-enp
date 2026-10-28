import React from 'react';
import { ExamModule, MODULES, Question } from '../data/examData';
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, Star, Timer, Flag } from 'lucide-react';
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
  onToggleBookmark,
  onToggleFlag,
  onReturnToDashboard,
}) => {
  const { questions, currentIndex, answers, revealed, mode, timerSeconds } = quiz;
  const currentQ = questions[currentIndex];
  if (!currentQ) return null;

  const isExam = mode === 'exam';
  const selectedOpt = answers[currentIndex];
  const isRevealed = !isExam && revealed[currentIndex];
  const modObj: ExamModule | undefined = MODULES.find((m) => m.id === currentQ.module);
  const progressPct = questions.length > 0 ? Math.round(((currentIndex + 1) / questions.length) * 100) : 0;
  const isFlagged = Boolean(quiz.flagged[currentIndex]);

  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="max-w-2xl mx-auto space-y-4 animate-fadeIn">
      {/* Barre supérieure compacte */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={onReturnToDashboard}
          className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-blue-500/50 flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Menu</span>
        </button>

        <div className="text-xs font-mono font-bold text-slate-600 dark:text-slate-300">
          Question {currentIndex + 1} / {questions.length}
        </div>

        <div className="flex items-center gap-1.5">
          {isExam && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white border border-slate-700 font-mono text-xs font-bold shadow-inner">
              <Timer className={`w-3.5 h-3.5 ${timerSeconds <= 60 ? 'text-rose-500 animate-pulse' : 'text-blue-400'}`} />
              <span className={timerSeconds <= 60 ? 'text-rose-400 font-black' : ''}>
                {formatTimer(timerSeconds)}
              </span>
            </div>
          )}

          {isExam && (
            <button
              onClick={onToggleFlag}
              className={`p-2 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                isFlagged
                  ? 'bg-amber-500 text-white border-amber-500'
                  : 'bg-white dark:bg-[#0B132B] border-slate-200 dark:border-slate-800 text-slate-500'
              }`}
              title="Marquer pour y revenir"
              aria-label="Marquer la question"
            >
              <Flag className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={onToggleBookmark}
            className={`p-2 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
              isBookmarked
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-500'
                : 'bg-white dark:bg-[#0B132B] border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-700'
            }`}
            title="Épingler cette question"
            aria-label="Épingler la question"
          >
            <Star className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Barre de progression fluide */}
      <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-[#0B132B] overflow-hidden">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Carte Question Complète */}
      <div className="bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 shadow-lg space-y-4">
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
          </div>
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate max-w-[260px]">
            {currentQ.ref}
          </span>
        </div>

        <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
          {currentQ.q}
        </h2>

        {/* 4 Options interactives */}
        <div className="space-y-2.5 pt-1">
          {currentQ.options.map((optText, oIdx) => {
            let cardStyle =
              'bg-white dark:bg-[#060B19] border-slate-200 dark:border-slate-800 hover:border-blue-500/60 text-slate-800 dark:text-slate-100';
            let badgeStyle =
              'bg-slate-100 dark:bg-[#1C2541] text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700';

            if (isExam) {
              if (selectedOpt === oIdx) {
                cardStyle =
                  'bg-blue-600/10 dark:bg-blue-500/20 border-blue-500 text-slate-900 dark:text-white ring-2 ring-blue-500/30';
                badgeStyle = 'bg-blue-600 text-white border-blue-600';
              }
            } else if (isRevealed) {
              if (oIdx === currentQ.correct) {
                cardStyle =
                  'bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500 text-slate-900 dark:text-white ring-2 ring-emerald-500/30';
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
            className={`mt-4 p-4 rounded-2xl border ${
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
                  <span>Bonne réponse !</span>
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

      {/* Navigation en bas adaptée aux pouces sur smartphone */}
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
            onClick={onFinishQuiz}
            className="px-4 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs font-bold shadow-md cursor-pointer transition-all"
          >
            Terminer ({Object.keys(answers).length}/{questions.length})
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
    </div>
  );
};
