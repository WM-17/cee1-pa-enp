import React from 'react';

interface GalonBadgeProps {
  type: string;
  className?: string;
}

export const GalonBadge: React.FC<GalonBadgeProps> = ({ type, className = 'w-full h-full' }) => {
  const baseBg = (
    <>
      <rect width="40" height="56" rx="4" fill="#080F26" stroke="#334155" strokeWidth="1.5" />
      <circle cx="20" cy="9" r="2.2" fill="#CBD5E1" />
    </>
  );

  switch (type) {
    case 'egpx':
      return (
        <svg viewBox="0 0 40 56" className={className}>
          {baseBg}
        </svg>
      );
    case 'gpx':
      return (
        <svg viewBox="0 0 40 56" className={className}>
          {baseBg}
          <path d="M6 44 L20 34 L34 44" stroke="#F8FAFC" strokeWidth="3" fill="none" />
          <path d="M6 50 L20 40 L34 50" stroke="#F8FAFC" strokeWidth="3" fill="none" />
        </svg>
      );
    case 'sbrig':
      return (
        <svg viewBox="0 0 40 56" className={className}>
          {baseBg}
          <path d="M6 38 L20 28 L34 38" stroke="#F8FAFC" strokeWidth="2.8" fill="none" />
          <path d="M6 44 L20 34 L34 44" stroke="#F8FAFC" strokeWidth="2.8" fill="none" />
          <path d="M6 50 L20 40 L34 50" stroke="#F8FAFC" strokeWidth="2.8" fill="none" />
        </svg>
      );
    case 'bchef':
      return (
        <svg viewBox="0 0 40 56" className={className}>
          {baseBg}
          <rect x="4" y="42" width="32" height="6" fill="#F8FAFC" />
          <rect x="4" y="44" width="32" height="2" fill="#E11D48" />
        </svg>
      );
    case 'major_rulp':
      return (
        <svg viewBox="0 0 40 56" className={className}>
          {baseBg}
          <polygon points="20,22 25,27 20,32 15,27" fill="none" stroke="#F8FAFC" strokeWidth="2" />
          <rect x="4" y="38" width="32" height="2" fill="#F8FAFC" />
          <rect x="4" y="43" width="32" height="6" fill="#F8FAFC" />
          <rect x="4" y="45" width="32" height="2" fill="#E11D48" />
        </svg>
      );
    case 'capitaine':
      return (
        <svg viewBox="0 0 40 56" className={className}>
          {baseBg}
          <rect x="4" y="34" width="32" height="3" fill="#F8FAFC" />
          <rect x="4" y="40" width="32" height="3" fill="#F8FAFC" />
          <rect x="4" y="46" width="32" height="3" fill="#F8FAFC" />
        </svg>
      );
    case 'commissaire':
      return (
        <svg viewBox="0 0 40 56" className={className}>
          {baseBg}
          <rect x="3" y="3" width="34" height="50" rx="3" fill="none" stroke="#CBD5E1" strokeWidth="1.2" />
          <path
            d="M20 46 L20 18 M20 38 L12 32 M20 38 L28 32 M20 28 L12 22 M20 28 L28 22"
            stroke="#E2E8F0"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="20" cy="17" r="2.5" fill="#E2E8F0" />
        </svg>
      );
    case 'commissaire_gen':
      return (
        <svg viewBox="0 0 40 56" className={className}>
          {baseBg}
          <rect x="3" y="3" width="34" height="50" rx="3" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
          <path
            d="M20 38 L20 16 M20 32 L11 26 M20 32 L29 26 M20 23 L12 18 M20 23 L28 18"
            stroke="#E2E8F0"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <polygon points="14,42 18,46 14,50 10,46" fill="#F59E0B" />
          <polygon points="26,42 30,46 26,50 22,46" fill="#F59E0B" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 40 56" className={className}>
          {baseBg}
        </svg>
      );
  }
};
