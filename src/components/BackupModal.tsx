import React, { useState } from 'react';
import { AppState, exportBackupCode, importBackupCode } from '../utils/quizLogic';
import { X, Copy, Check, Upload, RotateCcw, Shield } from 'lucide-react';

interface BackupModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: AppState;
  onRestoreState: (restored: AppState) => void;
  onResetState: () => void;
  onShowToast: (msg: string, type?: 'info' | 'success' | 'warning' | 'error') => void;
  syncLabel: string;
}

export const BackupModal: React.FC<BackupModalProps> = ({
  isOpen,
  onClose,
  state,
  onRestoreState,
  onResetState,
  onShowToast,
  syncLabel,
}) => {
  const [importInput, setImportInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  if (!isOpen) return null;

  const exportCode = exportBackupCode(state);

  const handleCopy = () => {
    navigator.clipboard.writeText(exportCode).then(() => {
      setCopied(true);
      onShowToast('Code de sauvegarde copié dans le presse-papiers !', 'success');
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleImport = () => {
    if (!importInput.trim()) {
      onShowToast('Veuillez coller un code de sauvegarde valide.', 'warning');
      return;
    }
    try {
      const restored = importBackupCode(importInput);
      onRestoreState(restored);
      setImportInput('');
      onShowToast('Progression restaurée avec succès !', 'success');
      onClose();
    } catch {
      onShowToast('Code de sauvegarde invalide ou corrompu.', 'error');
    }
  };

  const handleResetClick = () => {
    if (!confirmReset) {
      setConfirmReset(true);
      return;
    }
    onResetState();
    setConfirmReset(false);
    onShowToast('Progression remise à zéro.', 'info');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="backup-modal-title"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
    >
      <div className="bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-700 rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl overflow-hidden flex flex-col space-y-4 max-h-[92vh]">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 id="backup-modal-title" className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <span>Sauvegarde & Synchronisation</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Exportez ou restaurez vos résultats pour réviser sur mobile et tablette.
            </p>
          </div>
          <button
            onClick={() => {
              setConfirmReset(false);
              onClose();
            }}
            aria-label="Fermer la sauvegarde"
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sync indicator */}
        <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-700 dark:text-blue-300 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>État : {syncLabel}</span>
          </div>
          <span className="text-[11px] opacity-80">Sauvegarde locale active</span>
        </div>

        {/* Export Code */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Copier mon code de sauvegarde (pour changer d'appareil)
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={exportCode}
              aria-label="Code de sauvegarde exporté"
              className="flex-1 px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#060B19] border border-slate-300 dark:border-slate-700 font-mono text-xs text-slate-700 dark:text-slate-300 focus:outline-none select-all"
            />
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-xs shrink-0 flex items-center gap-1.5 cursor-pointer shadow transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copié !' : 'Copier'}</span>
            </button>
          </div>
        </div>

        {/* Import Code */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Restaurer un code de sauvegarde
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={importInput}
              onChange={(e) => setImportInput(e.target.value)}
              placeholder="Collez votre code de sauvegarde ici..."
              aria-label="Code de sauvegarde à importer"
              className="flex-1 px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#060B19] border border-slate-300 dark:border-slate-700 font-mono text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleImport}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs shrink-0 flex items-center gap-1.5 cursor-pointer shadow transition-all"
            >
              <Upload className="w-4 h-4" />
              <span>Importer</span>
            </button>
          </div>
        </div>

        {/* Reset progress */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
          <span className="text-xs text-slate-500 dark:text-slate-400">Remettre les statistiques à zéro :</span>
          <button
            onClick={handleResetClick}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
              confirmReset
                ? 'bg-rose-600 text-white border-rose-600 animate-pulse'
                : 'bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 border-rose-500/30'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{confirmReset ? 'Confirmer la remise à zéro ?' : 'Réinitialiser'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
