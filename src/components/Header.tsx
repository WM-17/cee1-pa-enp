import React from 'react';
import { Rank } from '../data/examData';
import { GalonBadge } from '../utils/galons';
import { Bookmark, Moon, Sun, Download, ShieldCheck, Lock } from 'lucide-react';

interface HeaderProps {
  currentRank: Rank;
  onNavigateHome: () => void;
  onOpenRankModal: () => void;
  onOpenBackupModal: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  syncLabel: string;
  onLockSession: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRank,
  onNavigateHome,
  onOpenRankModal,
  onOpenBackupModal,
  isDark,
  onToggleTheme,
  syncLabel,
  onLockSession,
}) => {
  return (
    <>
      {/* Top Tricolor Official Strip */}
      <div className="h-1.5 w-full tricolor-bar sticky top-0 z-50 shadow-sm" />

      {/* Header Navigation */}
      <header className="bg-white/95 dark:bg-[#0B132B]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-1.5 z-40 transition-colors">
        <div className="max-w-6xl mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between gap-3">
          {/* Brand / Home Button */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none cursor-pointer"
            aria-label="Accueil Objectif CEE1"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-900 via-[#1C2541] to-slate-900 border border-blue-500/30 flex items-center justify-center shadow-md group-hover:border-blue-400 transition-colors shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black tracking-tight text-base sm:text-lg text-slate-900 dark:text-white">
                  OBJECTIF CEE1
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                Entraînement QCM • 465 Questions
              </p>
            </div>
          </button>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Save Status Pill */}
            <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#1C2541]/80 border border-slate-200 dark:border-slate-700/70 text-xs text-slate-600 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{syncLabel}</span>
            </div>

            {/* Current Grade Badge */}
            <button
              onClick={onOpenRankModal}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#1C2541] dark:hover:bg-[#2A365F] border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
              title="Voir votre grade de progression"
              aria-label="Voir le tableau d'avancement"
            >
              <div className="w-5 h-7 rounded bg-[#060B19] border border-slate-600 flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
                <GalonBadge type={currentRank.svgType} />
              </div>
              <div className="text-left hidden sm:block">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold leading-none">
                  Grade actuel
                </div>
                <div className="text-xs font-bold text-slate-800 dark:text-white leading-tight mt-0.5 truncate max-w-[120px]">
                  {currentRank.title}
                </div>
              </div>
            </button>

            {/* Backup / Export Code Modal Trigger */}
            <button
              onClick={onOpenBackupModal}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#1C2541] dark:hover:bg-[#2A365F] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
              title="Sauvegarde & Exportation"
              aria-label="Ouvrir la sauvegarde"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#1C2541] dark:hover:bg-[#2A365F] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
              title={isDark ? 'Passer en thème clair' : 'Passer en thème sombre'}
              aria-label="Basculer le thème"
            >
              {isDark ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
              )}
            </button>

            {/* Lock Session Button */}
            <button
              onClick={onLockSession}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-rose-500/15 dark:bg-[#1C2541] dark:hover:bg-rose-500/20 text-slate-700 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 border border-slate-200 dark:border-slate-700 hover:border-rose-500/30 transition-colors cursor-pointer"
              title="Verrouiller la session (Code 101 requis)"
              aria-label="Verrouiller l'accès"
            >
              <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
