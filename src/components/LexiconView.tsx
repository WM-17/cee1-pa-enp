import React, { useState, useMemo } from 'react';
import { MODULES, Question, QUESTIONS } from '../data/examData';
import { filterLexicon } from '../utils/quizLogic';
import { Search, ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';

interface LexiconViewProps {
  onReturnDashboard: () => void;
}

export const LexiconView: React.FC<LexiconViewProps> = ({ onReturnDashboard }) => {
  const [search, setSearch] = useState('');
  const [selectedModule, setSelectedModule] = useState('all');

  const filteredQuestions = useMemo(() => {
    return filterLexicon(QUESTIONS, search, selectedModule);
  }, [search, selectedModule]);

  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="max-w-4xl mx-auto space-y-5 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-500" />
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Référentiel Intégral ({QUESTIONS.length} Questions)
            </h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Recherchez instantanément par article (ex. L. 435-1, 78-3-1, 122-5, R. 434-16), sigle ou notion juridique.
          </p>
        </div>

        <button
          onClick={onReturnDashboard}
          className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#1C2541] dark:hover:bg-[#2A365F] text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5 cursor-pointer transition-all active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tableau de bord</span>
        </button>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-sm space-y-3.5">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher un article, un mot-clé, une infraction (ex: armes, vol, discernement)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-[#060B19] border border-slate-300 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <span className="self-center text-xs font-mono font-bold text-blue-600 dark:text-blue-400 px-3 py-2 rounded-xl bg-blue-500/10 shrink-0">
            {filteredQuestions.length} question{filteredQuestions.length > 1 ? 's' : ''} trouvée{filteredQuestions.length > 1 ? 's' : ''}
          </span>
        </div>

        {/* Pilules de filtres par module */}
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedModule('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedModule === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-[#1C2541] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#2A365F]'
            }`}
          >
            Tous ({QUESTIONS.length})
          </button>
          {MODULES.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedModule(m.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedModule === m.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-[#1C2541] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#2A365F]'
              }`}
            >
              {m.code} • {m.shortTitle}
            </button>
          ))}
        </div>
      </div>

      {/* Liste des questions */}
      <div className="space-y-3">
        {filteredQuestions.length === 0 ? (
          <div className="p-10 text-center text-slate-500 bg-white dark:bg-[#0B132B] rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2">
            <p className="font-bold text-sm">Aucune question ne correspond à votre recherche.</p>
            <p className="text-xs">Essayez un autre mot-clé ou réinitialisez le filtre de module.</p>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const modObj = MODULES.find((m) => m.id === q.module);
            return (
              <div
                key={q.id}
                className="bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 space-y-3 shadow-sm hover:border-blue-500/40 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span
                      className={`px-2.5 py-0.5 rounded-lg text-xs font-bold border ${
                        modObj ? modObj.badgeClass : 'bg-blue-500/10 text-blue-500 border-blue-500/30'
                      }`}
                    >
                      Q#{q.id} • {modObj ? modObj.shortTitle : ''}
                    </span>
                    {q.options.length === 2 && (
                      <span className="px-2 py-0.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">
                        Vrai / Faux
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-slate-400">{q.ref}</span>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug">
                  {q.q}
                </h3>

                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <strong>Réponse exacte ({letters[q.correct]}) :</strong> {q.options[q.correct]}
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                  <strong className="text-slate-800 dark:text-slate-200">Point de droit & Piège :</strong> {q.exp}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
