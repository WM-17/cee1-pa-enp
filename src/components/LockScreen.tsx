import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldAlert,
  Lock,
  Unlock,
  KeyRound,
  Delete,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import {
  verifyPasscode,
  getSecurityLockoutState,
  recordFailedAttempt,
} from '../utils/security';

interface LockScreenProps {
  onUnlock: () => void;
  onShowToast: (msg: string, type?: 'info' | 'success' | 'warning' | 'error') => void;
}

export const LockScreen: React.FC<LockScreenProps> = ({ onUnlock, onShowToast }) => {
  const [pin, setPin] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [lockoutState, setLockoutState] = useState(getSecurityLockoutState());
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input automatically on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Lockout countdown timer
  useEffect(() => {
    if (!lockoutState.isLocked) return;

    const timer = setInterval(() => {
      const current = getSecurityLockoutState();
      setLockoutState(current);
      if (!current.isLocked) {
        clearInterval(timer);
        setErrorMsg('');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [lockoutState.isLocked]);

  const handleSubmit = async (codeToSubmit: string) => {
    if (lockoutState.isLocked) {
      setErrorMsg(`Accès temporairement bloqué (${lockoutState.remainingSeconds}s restantes).`);
      return;
    }

    if (!codeToSubmit) {
      setErrorMsg('Veuillez entrer votre code d\'accès.');
      return;
    }

    const isValid = await verifyPasscode(codeToSubmit);
    if (isValid) {
      setErrorMsg('');
      onUnlock();
      onShowToast('Session déverrouillée avec succès.', 'success');
    } else {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      const newLockout = recordFailedAttempt();
      setLockoutState(newLockout);
      setPin('');

      if (newLockout.isLocked) {
        setErrorMsg('Nombre maximal de tentatives atteint. Système bloqué pendant 30s.');
      } else {
        const remaining = 5 - newLockout.failedCount;
        setErrorMsg(`Code d'accès incorrect. (${remaining} tentative${remaining > 1 ? 's' : ''} restante${remaining > 1 ? 's' : ''})`);
      }
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (num: string) => {
    if (lockoutState.isLocked) return;
    setErrorMsg('');
    if (pin.length < 8) {
      const updated = pin + num;
      setPin(updated);
      // If user typed 3 digits, we can let them click submit or submit directly if matching length
      if (updated === '101') {
        handleSubmit(updated);
      }
    }
  };

  const handleDelete = () => {
    if (lockoutState.isLocked) return;
    setErrorMsg('');
    setPin((prev) => prev.slice(0, -1));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(pin);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white relative overflow-hidden">
      {/* Tricolor Official Bar */}
      <div className="h-2 w-full tricolor-bar sticky top-0 z-50 shadow-md" />

      {/* Subtle background ambient police light */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Lock Form Container */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 z-10">
        <div
          className={`w-full max-w-md bg-[#0B132B]/95 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 transition-all duration-300 ${
            isShaking ? 'animate-shake' : ''
          }`}
        >
          {/* Header & Badging */}
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-900 via-[#1C2541] to-slate-900 border-2 border-blue-500/40 flex items-center justify-center shadow-lg shadow-blue-900/30">
              <Lock className="w-8 h-8 text-blue-400" />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-[11px] font-mono font-extrabold uppercase tracking-widest text-blue-400">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Zone Privée • Accès Réservé</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-2">
                OBJECTIF CEE1
              </h1>
              <p className="text-xs text-slate-400 font-medium mt-1">
                Entraînement QCM • Police Nationale
              </p>
            </div>
          </div>

          <p className="text-xs text-center text-slate-300/80 leading-relaxed px-2">
            Cette application et son contenu sont strictement protégés. Veuillez saisir votre code secret pour déverrouiller l'accès.
          </p>

          {/* Form */}
          <form onSubmit={handleFormSubmit} className="space-y-4">
            {/* PIN Display / Input Field */}
            <div className="space-y-2">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="password"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={pin}
                  onChange={(e) => {
                    if (lockoutState.isLocked) return;
                    setErrorMsg('');
                    setPin(e.target.value);
                  }}
                  disabled={lockoutState.isLocked}
                  placeholder="Code d'accès..."
                  aria-label="Code d'accès confidentiel"
                  className="w-full text-center text-2xl tracking-[0.35em] font-mono font-bold py-3 px-4 rounded-2xl bg-[#060B19] border-2 border-slate-700 focus:border-blue-500 focus:outline-none text-white placeholder:text-slate-600 transition-colors"
                />
                <KeyRound className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Error message */}
              {errorMsg && (
                <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold animate-fadeIn">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </div>

            {/* Tactile Keypad (0-9) */}
            <div className="grid grid-cols-3 gap-2 pt-1 select-none">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
                <button
                  key={digit}
                  type="button"
                  onClick={() => handleKeyPress(digit)}
                  disabled={lockoutState.isLocked}
                  className="py-3 rounded-2xl bg-[#1C2541]/80 hover:bg-[#2A365F] active:scale-95 border border-slate-700/60 font-mono text-lg font-bold text-white transition-all shadow-sm cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {digit}
                </button>
              ))}

              {/* Backspace */}
              <button
                type="button"
                onClick={handleDelete}
                disabled={lockoutState.isLocked || pin.length === 0}
                aria-label="Effacer le dernier chiffre"
                className="py-3 rounded-2xl bg-[#1C2541]/80 hover:bg-[#2A365F] active:scale-95 border border-slate-700/60 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Delete className="w-5 h-5" />
              </button>

              {/* Zero */}
              <button
                type="button"
                onClick={() => handleKeyPress('0')}
                disabled={lockoutState.isLocked}
                className="py-3 rounded-2xl bg-[#1C2541]/80 hover:bg-[#2A365F] active:scale-95 border border-slate-700/60 font-mono text-lg font-bold text-white transition-all shadow-sm cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                0
              </button>

              {/* Valider / Submit Button */}
              <button
                type="submit"
                disabled={lockoutState.isLocked || pin.length === 0}
                aria-label="Valider le code"
                className="py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-extrabold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-1 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Unlock className="w-4 h-4" />
                <span className="text-xs">OK</span>
              </button>
            </div>
          </form>

          {/* Security Features Info Box */}
          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1.5">
            <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Protections actives sur l'application :</span>
            </div>
            <ul className="list-disc list-inside text-slate-500 space-y-0.5 text-[10px]">
              <li>Authentification chiffrée avec contrôle de force brute</li>
              <li>Protection contre l'inspection et la copie du code source</li>
              <li>Données d'entraînement et carnet d'erreurs sanctuarisés</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center text-[11px] text-slate-600 border-t border-slate-900 bg-black/40">
        Initiative d'entraînement indépendante • Accès strictement confidentiel
      </footer>
    </div>
  );
};
