import React from 'react';
import { Rank, RANKS } from '../data/examData';
import { GalonBadge } from '../utils/galons';
import { X, Award, Crown, Sparkles } from 'lucide-react';

interface RankModalProps {
  isOpen: boolean;
  onClose: () => void;
  masteryPct: number;
  bestStreak?: number;
}

export const RankModal: React.FC<RankModalProps> = ({ isOpen, onClose, masteryPct, bestStreak = 0 }) => {
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
                Déblocable soit par % de Maîtrise, soit par Série en Mort Subite
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
            const unlockedByPct = masteryPct >= r.minPct;
            const unlockedByStreak = r.minStreak > 0 && bestStreak >= r.minStreak;
            const unlocked = unlockedByPct || unlockedByStreak;
            const isSupreme = r.minPct === 100;

            return (
              <div
                key={r.title}
                className={`flex items-center gap-3.5 p-3 rounded-2xl border transition-all ${
                  isSupreme
                    ? unlocked
                      ? 'bg-gradient-to-r from-amber-950/40 via-yellow-950/30 to-amber-900/40 border-amber-400/80 shadow-lg shadow-amber-500/20 ring-1 ring-amber-400/50'
                      : 'bg-gradient-to-r from-amber-950/20 to-slate-900/60 border-amber-500/30 opacity-75'
                    : unlocked
                    ? 'bg-blue-500/10 border-blue-500/40 shadow-sm'
                    : 'bg-slate-50 dark:bg-[#060B19]/60 border-slate-200 dark:border-slate-800/80 opacity-60'
                }`}
              >
                <div className={`w-9 h-12 rounded-lg overflow-hidden shrink-0 shadow-md border ${isSupreme ? 'border-amber-400 ring-1 ring-amber-400/40' : 'border-slate-700'} bg-[#060B19]`}>
                  <GalonBadge type={r.svgType} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1.5 flex-wrap">
                    <span className={`text-xs sm:text-sm font-black leading-tight flex items-center gap-1.5 ${isSupreme ? 'text-amber-400 dark:text-amber-300' : 'text-slate-900 dark:text-white'}`}>
                      {isSupreme && <Crown className="w-4 h-4 text-amber-400 shrink-0 fill-amber-400/20" />}
                      <span>{r.title}</span>
                    </span>
                    <div className="flex items-center gap-1">
                      {unlockedByStreak && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
                          🔥 Série {bestStreak}
                        </span>
                      )}
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 ${
                          isSupreme
                            ? unlocked
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-black'
                              : 'bg-amber-500/10 text-amber-400/80 border border-amber-500/30'
                            : unlocked
                            ? 'bg-emerald-500/20 text-emerald-500'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                        }`}
                      >
                        {r.minPct}% OU {r.minStreak > 0 ? `Série ${r.minStreak}` : 'Départ'}
                      </span>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Appellation : <strong className={isSupreme ? 'text-amber-300 dark:text-amber-200' : 'text-slate-700 dark:text-slate-200'}>{r.appellation}</strong> •{' '}
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
