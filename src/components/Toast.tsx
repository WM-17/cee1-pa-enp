import React from 'react';
import { CheckCircle2, AlertTriangle, AlertCircle, Info } from 'lucide-react';

export interface ToastMessage {
  id: string;
  text: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

interface ToastProps {
  toasts: ToastMessage[];
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts }) => {
  if (toasts.length === 0) return null;

  const icons = {
    info: <Info className="w-4 h-4 text-blue-300" />,
    success: <CheckCircle2 className="w-4 h-4 text-emerald-300" />,
    warning: <AlertTriangle className="w-4 h-4 text-amber-300" />,
    error: <AlertCircle className="w-4 h-4 text-rose-300" />,
  };

  const bgStyles = {
    info: 'bg-blue-600 border-blue-400 text-white',
    success: 'bg-emerald-600 border-emerald-400 text-white',
    warning: 'bg-amber-600 border-amber-400 text-white',
    error: 'bg-rose-600 border-rose-400 text-white',
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`px-4 py-3 rounded-2xl shadow-2xl border text-xs font-bold flex items-center gap-2 pointer-events-auto animate-bounceIn ${
            bgStyles[t.type] || bgStyles.info
          }`}
        >
          {icons[t.type]}
          <span>{t.text}</span>
        </div>
      ))}
    </div>
  );
};
