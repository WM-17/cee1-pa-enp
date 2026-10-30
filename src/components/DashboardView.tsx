import React from 'react';
import { ExamModule, MODULES, Question, QUESTIONS, Rank } from '../data/examData';
import { AppState } from '../utils/quizLogic';
import { GalonBadge } from '../utils/galons';
import {
  Timer,
  AlertTriangle,
  Zap,
  Search,
  Star,
  ChevronRight,
  Shuffle,
  Shield,
  BookOpen,
  Flame,
  Skull,
  Share2,
} from 'lucide-react';

interface DashboardViewProps {
  state: AppState;
  masteryData: {
    totalQuestions: number;
    masteredCount: number;
    pct: number;
    currentRank: Rank;
  };
  onStartExam: (count?: number) => void;
  onStartModule: (moduleId: string, filter?: 'all' | 'unmastered') => void;
  onStartErrors: () => void;
  onStartBookmarks: () => void;
  onStartSuddenDeath: () => void;
  onNavigateLexicon: () => void;
  onOpenRankModal: () => void;
  onOpenShareChallenge?: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  state,
  masteryData,
  onStartExam,
  onStartModule,
  onStartErrors,
  onStartBookmarks,
  onStartSuddenDeath,
  onNavigateLexicon,
  onOpenRankModal,
  onOpenShareChallenge,
}) => {
  const { totalQuestions, masteredCount, pct, currentRank } = masteryData;
  const errorCount = state.errorIds.length;
  const bookmarkCount = state.bookmarks.length;
  const lastExam = state.examHistory[0];

  return (
    <div className="max-w-3xl mx-auto space-y-5 animate-fadeIn">
      {/* Carte Progression Globale Compacte & Élégante */}
      <div className="rounded-3xl bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#0A1A3A] text-white p-5 sm:p-6 shadow-xl border border-blue-500/25 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-4 relative z-10">
          <button
            onClick={onOpenRankModal}
            className="w-12 h-16 rounded-xl overflow-hidden shadow-lg border border-slate-600 shrink-0 cursor-pointer bg-[#060B19] hover:scale-105 transition-transform"
            title="Cliquer pour voir l'avancement complet"
            aria-label="Voir le galon de grade"
          >
            <GalonBadge type={currentRank.svgType} />
          </button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-[10px] uppercase tracking-wider text-blue-300 font-extrabold">
                Progression globale CEE1
              </span>
              <div className="flex items-center gap-3">
                {onOpenShareChallenge && (
                  <button
                    onClick={onOpenShareChallenge}
                    className="text-xs text-amber-400 hover:text-amber-300 font-extrabold flex items-center gap-1 cursor-pointer bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/20"
                    title="Partager votre badge et défier un collègue"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Défier ma promo</span>
                  </button>
                )}
                <button
                  onClick={onOpenRankModal}
                  className="text-xs text-blue-400 hover:text-blue-300 font-bold underline cursor-pointer"
                >
                  Grades & Galons
                </button>
              </div>
            </div>
            <div className="text-base sm:text-lg font-black truncate mt-0.5 text-white">
              {currentRank.title}
            </div>
            <div className="w-full h-2 rounded-full bg-slate-950/80 overflow-hidden mt-2.5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400 transition-all duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-slate-300 mt-1.5 font-medium">
              <span>
                {masteredCount} / {totalQuestions} questions acquises
              </span>
              <span className="font-mono font-bold text-emerald-400">{pct}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Les 3 Modes d'Entraînement Majeurs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Examen Blanc */}
        <button
          onClick={() => onStartExam(20)}
          className="p-4 sm:p-5 rounded-2xl bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white text-left shadow-lg shadow-blue-600/20 transition-all flex sm:flex-col items-center sm:items-start justify-between gap-3 cursor-pointer group"
        >
          <div className="flex items-center gap-3 sm:block">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center sm:mb-2.5 shrink-0 group-hover:scale-110 transition-transform">
              <Timer className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-sm sm:text-base">Examen Blanc</div>
              <div className="text-xs text-blue-100 font-medium">20 questions • Chronométré</div>
            </div>
          </div>
          {lastExam && (
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-xl bg-black/30 shrink-0">
              Dernier : {lastExam.scoreOn20}/20
            </span>
          )}
        </button>

        {/* Carnet d'Erreurs */}
        <button
          onClick={onStartErrors}
          className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex sm:flex-col items-center sm:items-start justify-between gap-3 cursor-pointer group ${
            errorCount > 0
              ? 'bg-rose-600 hover:bg-rose-500 text-white border-rose-500 shadow-lg shadow-rose-600/20 active:scale-[0.99]'
              : 'bg-white dark:bg-[#0B132B] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
          }`}
        >
          <div className="flex items-center gap-3 sm:block">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center sm:mb-2.5 shrink-0 group-hover:scale-110 transition-transform ${
                errorCount > 0 ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-[#1C2541] text-slate-400'
              }`}
            >
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-sm sm:text-base">Mes Erreurs</div>
              <div className={`text-xs font-medium ${errorCount > 0 ? 'text-rose-100' : 'text-slate-400'}`}>
                {errorCount > 0 ? `${errorCount} question${errorCount > 1 ? 's' : ''} à cibler` : 'Aucune erreur active'}
              </div>
            </div>
          </div>
          <span
            className={`text-xs font-mono font-bold px-2.5 py-1 rounded-xl shrink-0 ${
              errorCount > 0 ? 'bg-black/30 text-white' : 'bg-emerald-500/15 text-emerald-500'
            }`}
          >
            {errorCount > 0 ? `${errorCount} erreurs` : 'À jour ✓'}
          </span>
        </button>

        {/* Mode Mort Subite (Sudden Death) */}
        <button
          onClick={onStartSuddenDeath}
          className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-rose-950 to-red-950 hover:from-slate-800 hover:to-red-900 active:scale-[0.99] border-2 border-rose-500/70 text-left shadow-lg shadow-rose-950/40 transition-all flex sm:flex-col items-center sm:items-start justify-between gap-3 cursor-pointer group relative overflow-hidden"
        >
          {/* Subtle animated red glow */}
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-rose-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-3 sm:block relative z-10">
            <div className="w-10 h-10 rounded-xl bg-rose-600/30 text-rose-400 border border-rose-500/50 flex items-center justify-center sm:mb-2.5 shrink-0 group-hover:scale-110 transition-transform">
              <Flame className="w-5 h-5 text-rose-400 animate-flame" />
            </div>
            <div>
              <div className="font-black text-sm sm:text-base text-white flex items-center gap-1.5">
                <span>Mort Subite</span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold uppercase bg-rose-600 text-white">
                  Défi
                </span>
              </div>
              <div className="text-xs text-rose-200/80 font-medium">
                1 seule faute = Éliminé
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 relative z-10">
            <span className="text-xs font-mono font-black text-amber-400 bg-black/50 px-2 py-0.5 rounded-lg border border-amber-500/30">
              Record : {state.suddenDeathRecord?.bestStreak || 0}
            </span>
          </div>
        </button>
      </div>

      {/* Liste des 7 Modules avec barres de progression */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-500" />
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Programme par Matière (7 Modules)
            </h2>
          </div>
          <button
            onClick={() => onStartModule('all', 'all')}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Tout mélanger ({totalQuestions})</span>
          </button>
        </div>

        <div className="space-y-2.5">
          {MODULES.map((m: ExamModule) => {
            const modQuestions = QUESTIONS.filter((q: Question) => q.module === m.id);
            const modMastered = modQuestions.filter((q: Question) => state.stats[q.id]?.correct).length;
            const modPct = modQuestions.length > 0 ? Math.round((modMastered / modQuestions.length) * 100) : 0;

            return (
              <button
                key={m.id}
                onClick={() => onStartModule(m.id, 'all')}
                className="w-full text-left bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 active:scale-[0.99] rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-3.5 cursor-pointer group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider border ${m.badgeClass}`}>
                      {m.code}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                      {m.shortTitle}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {m.pages}
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-[#060B19] overflow-hidden mt-2">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${m.color} transition-all duration-500`}
                      style={{ width: `${modPct}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    <span>
                      {modMastered} / {modQuestions.length} maîtrisées
                    </span>
                    <span className={`font-mono font-bold ${modPct === 100 ? 'text-emerald-500' : 'text-blue-500'}`}>
                      {modPct}%
                    </span>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-xl bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Barre d'outils secondaire (Recherche lexique & Épinglées) */}
      <div className="grid grid-cols-2 gap-2.5 pt-1">
        <button
          onClick={onNavigateLexicon}
          className="py-3 px-4 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-blue-500/50 flex items-center justify-center gap-2 shadow-sm cursor-pointer transition-all active:scale-95"
        >
          <Search className="w-4 h-4 text-blue-500" />
          <span>Recherche Lexique ({totalQuestions})</span>
        </button>
        <button
          onClick={onStartBookmarks}
          className="py-3 px-4 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-amber-500/50 flex items-center justify-center gap-2 shadow-sm cursor-pointer transition-all active:scale-95"
        >
          <Star className={`w-4 h-4 ${bookmarkCount > 0 ? 'text-amber-500 fill-amber-500' : 'text-slate-400'}`} />
          <span>Questions Épinglées ({bookmarkCount})</span>
        </button>
      </div>
    </div>
  );
};
