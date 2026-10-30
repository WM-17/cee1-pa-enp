import React, { useState } from 'react';
import { Rank } from '../data/examData';
import { GalonBadge } from '../utils/galons';
import {
  X,
  Share2,
  Copy,
  Check,
  ShieldCheck,
  Flame,
  Trophy,
  Award,
  Smartphone,
  ExternalLink,
} from 'lucide-react';

export interface ChallengeData {
  type: 'suddendeath' | 'exam' | 'general';
  scoreValue: string | number;
  subtitle: string;
  mention?: string;
}

interface ShareChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentRank: Rank;
  challengeData: ChallengeData;
  onShowToast: (text: string, type: 'info' | 'success' | 'warning' | 'error') => void;
}

export const ShareChallengeModal: React.FC<ShareChallengeModalProps> = ({
  isOpen,
  onClose,
  currentRank,
  challengeData,
  onShowToast,
}) => {
  const [copied, setCopied] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Generate punchy share text
  const shareText = (() => {
    if (challengeData.type === 'suddendeath') {
      return `🚨 DÉFI CEE1 POLICE NATIONALE 🇫🇷\nJ'ai validé ${challengeData.scoreValue} questions sans aucune faute en Mort Subite !\nPenses-tu pouvoir battre mon record sur les 465 questions du CEE1 ?\n\n🎯 Rejoins le défi : ${currentUrl}`;
    }
    if (challengeData.type === 'exam') {
      return `🎖️ EXAMEN BLANC CEE1 POLICE NATIONALE 🇫🇷\nNote obtenue : ${challengeData.scoreValue} / 20 (${challengeData.mention || 'Apte'})\nPrêt pour l'épreuve finale ! Peux-tu faire mieux ?\n\n👉 Teste tes réflexes : ${currentUrl}`;
    }
    return `👮 OBJECTIF CEE1 POLICE NATIONALE 🇫🇷\nGrade atteint : ${currentRank.title} (${challengeData.scoreValue})\nAvancement opérationnel validé.\n\n👉 Révise tes fiches et QCMs ici : ${currentUrl}`;
  })();

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      onShowToast('Texte du défi copié dans le presse-papier !', 'success');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      onShowToast('Impossible de copier automatiquement.', 'error');
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopiedLink(true);
      onShowToast('Lien de révision copié !', 'success');
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      onShowToast('Impossible de copier le lien.', 'error');
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Défi CEE1 Police Nationale',
          text: shareText,
          url: currentUrl,
        });
        onShowToast('Défi partagé avec succès !', 'success');
      } catch {
        // User cancelled share
      }
    } else {
      handleCopyText();
    }
  };

  const canShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#0F172A] via-[#0B132B] to-[#060B19] border-2 border-blue-500/40 rounded-3xl p-5 sm:p-6 shadow-2xl text-white space-y-5 overflow-hidden">
        {/* Glow ambient background effect */}
        <div className="absolute -top-20 -right-20 w-52 h-52 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-white">
                Carte de Défi Promotion
              </h3>
              <p className="text-[11px] text-slate-400">
                Défiez vos collègues de brigade sur WhatsApp, SMS ou Snapchat
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* The Visual Badge Card (Tactical Police Cockpit Style) */}
        <div
          id="tactical-badge"
          className="relative bg-gradient-to-br from-[#0B132B] via-[#16203B] to-[#0A1A3A] border-2 border-cyan-500/40 rounded-2xl p-5 shadow-2xl overflow-hidden space-y-4"
        >
          {/* Top Tricolor Strip */}
          <div className="h-1.5 w-full tricolor-bar absolute top-0 left-0" />

          {/* Badge Header */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-[10px] uppercase tracking-widest font-extrabold text-cyan-400">
                  RÉPUBLIQUE FRANÇAISE
                </div>
                <div className="text-xs font-black tracking-wider text-slate-200">
                  POLICE NATIONALE • CEE1
                </div>
              </div>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[9px] font-extrabold uppercase tracking-wider">
              Homologué
            </span>
          </div>

          {/* Badge Centerpiece : Galon & Score */}
          <div className="flex items-center gap-4 py-2 border-y border-slate-700/60 bg-black/25 rounded-xl px-3.5">
            <div className="w-12 h-16 rounded-xl overflow-hidden shadow-lg border border-slate-600 shrink-0 bg-[#060B19]">
              <GalonBadge type={currentRank.svgType} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-[10px] uppercase font-bold text-slate-400">
                Titulaire du Grade
              </div>
              <div className="text-sm font-black text-white truncate">
                {currentRank.title}
              </div>

              <div className="mt-1 flex items-baseline gap-1.5 flex-wrap">
                {challengeData.type === 'suddendeath' ? (
                  <>
                    <span className="text-xs font-extrabold text-rose-400 uppercase flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5" />
                      Série Mort Subite :
                    </span>
                    <span className="text-xl font-black font-mono text-amber-400">
                      {challengeData.scoreValue} d'affilée
                    </span>
                  </>
                ) : challengeData.type === 'exam' ? (
                  <>
                    <span className="text-xs font-extrabold text-blue-400 uppercase flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      Note Examen Blanc :
                    </span>
                    <span className="text-xl font-black font-mono text-emerald-400">
                      {challengeData.scoreValue} / 20
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-xs font-extrabold text-cyan-400 uppercase flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5" />
                      Maîtrise Globale :
                    </span>
                    <span className="text-xl font-black font-mono text-cyan-300">
                      {challengeData.scoreValue}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Badge Punchline */}
          <div className="text-center bg-blue-950/40 border border-blue-500/20 rounded-xl p-2.5">
            <p className="text-xs font-semibold text-slate-300 italic">
              « {challengeData.subtitle} »
            </p>
          </div>

          {/* Badge Footer Micro-Details */}
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>REF: POL-CEE1-OFFICIEL</span>
            <span>465 QCMs • ÉCOLE DE POLICE</span>
          </div>
        </div>

        {/* Text Preview Box */}
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-3 text-xs text-slate-300 font-mono relative">
          <div className="whitespace-pre-line leading-relaxed line-clamp-4">
            {shareText}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-1">
          {/* Main Copy / Share Button */}
          <button
            onClick={canShare ? handleNativeShare : handleCopyText}
            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Copié dans le presse-papier !</span>
              </>
            ) : canShare ? (
              <>
                <Share2 className="w-4 h-4" />
                <span>Partager le défi (WhatsApp / Snap / SMS)</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copier le texte du défi</span>
              </>
            )}
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleCopyLink}
              className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-700 cursor-pointer transition-all active:scale-95"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Lien copié !</span>
                </>
              ) : (
                <>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copier le lien</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-700 cursor-pointer transition-all active:scale-95"
            >
              <span>Fermer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
