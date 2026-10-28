import React from 'react';
import { Rank, RANKS } from '../data/examData';
import { GalonBadge } from '../utils/galons';
import { X, Award } from 'lucide-react';

interface RankModalProps {
  isOpen: boolean;
  onClose: () => void;
  masteryPct: number;
}

export const RankModal: React.FC<RankModalProps> = ({ isOpen, onClose, masteryPct }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="rank-modal-title"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
    >
      <div className="bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-700 rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 id="rank-modal-title" className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Tableau d'Avancement & Galons
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Progression hiérarchique conforme aux fiches de l'Académie de Police
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer la fenêtre des galons"
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-2.5 overflow-y-auto flex-1 pr-1">
          {RANKS.map((r: Rank) => {
            const unlocked = masteryPct >= r.minPct;
            return (
              <div
                key={r.title}
                className={`flex items-center gap-3.5 p-3 rounded-2xl border transition-all ${
                  unlocked
                    ? 'bg-blue-500/10 border-blue-500/40 shadow-sm'
                    : 'bg-slate-50 dark:bg-[#060B19]/60 border-slate-200 dark:border-slate-800/80 opacity-60'
                }`}
              >
                <div className="w-9 h-12 rounded-lg overflow-hidden shrink-0 shadow-md border border-slate-700 bg-[#060B19]">
                  <GalonBadge type={r.svgType} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      {r.title}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 ${
                        unlocked
                          ? 'bg-emerald-500/20 text-emerald-500'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                      }`}
                    >
                      {r.minPct}% requis
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Appellation : <strong className="text-slate-700 dark:text-slate-200">{r.appellation}</strong> •{' '}
                    <span>{r.corps}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-md transition-all"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
