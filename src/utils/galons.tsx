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
    case 'chef_supreme':
      return (
        <svg viewBox="0 0 40 56" className={className}>
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="25%" stopColor="#FBBF24" />
              <stop offset="60%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <linearGradient id="glowGold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            <radialGradient id="sunburst" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0B132B" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Velvet Deep Base with Golden Border */}
          <rect width="40" height="56" rx="4" fill="#040816" stroke="url(#goldGrad)" strokeWidth="2" />
          <circle cx="20" cy="24" r="16" fill="url(#sunburst)" />

          {/* Top Tricolor Cocarde Strip */}
          <rect x="13" y="4" width="4.6" height="3" fill="#002395" />
          <rect x="17.6" y="4" width="4.8" height="3" fill="#FFFFFF" />
          <rect x="22.4" y="4" width="4.6" height="3" fill="#ED2939" />
          <rect x="12" y="3.5" width="16" height="4" rx="1" fill="none" stroke="url(#goldGrad)" strokeWidth="0.8" />

          {/* Golden Laurel Wreath (Palmes de Commandement) */}
          <path
            d="M8 38 C 7 24, 12 12, 19 9 M32 38 C 33 24, 28 12, 21 9"
            fill="none"
            stroke="url(#goldGrad)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M9 32 C 6 30, 8 26, 12 28 M31 32 C 34 30, 32 26, 28 28 M10 24 C 7 22, 9 18, 14 20 M30 24 C 33 22, 31 18, 26 20 M13 16 C 11 13, 14 11, 17 14 M27 16 C 29 13, 26 11, 23 14"
            fill="none"
            stroke="url(#glowGold)"
            strokeWidth="1.2"
          />

          {/* Central Crossed Golden Ceremonial Batons */}
          <path d="M12 36 L28 14 M28 36 L12 14" stroke="url(#goldGrad)" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="20" cy="25" r="2.2" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="0.8" />

          {/* 5 Etoiles Diamant Or */}
          {/* Top Star */}
          <polygon points="20,11 21.2,14.5 24.8,14.5 21.8,16.7 23,20.2 20,18 17,20.2 18.2,16.7 15.2,14.5 18.8,14.5" fill="url(#goldGrad)" />
          {/* Mid Left Star */}
          <polygon points="12,21 13,23.8 15.8,23.8 13.5,25.5 14.4,28.2 12,26.5 9.6,28.2 10.5,25.5 8.2,23.8 11,23.8" fill="url(#goldGrad)" />
          {/* Mid Right Star */}
          <polygon points="28,21 29,23.8 31.8,23.8 29.5,25.5 30.4,28.2 28,26.5 25.6,28.2 26.5,25.5 24.2,23.8 27,23.8" fill="url(#goldGrad)" />
          {/* Bottom Left Star */}
          <polygon points="15,33 15.9,35.5 18.5,35.5 16.4,37.1 17.2,39.5 15,38 12.8,39.5 13.6,37.1 11.5,35.5 14.1,35.5" fill="url(#goldGrad)" />
          {/* Bottom Right Star */}
          <polygon points="25,33 25.9,35.5 28.5,35.5 26.4,37.1 27.2,39.5 25,38 22.8,39.5 23.6,37.1 21.5,35.5 24.1,35.5" fill="url(#goldGrad)" />

          {/* Ceremonial Gold Braided Fringe at the Bottom */}
          <rect x="4" y="46" width="32" height="4" rx="1" fill="url(#goldGrad)" />
          <path d="M5 50 L5 53 M8 50 L8 53 M11 50 L11 53 M14 50 L14 53 M17 50 L17 53 M20 50 L20 53 M23 50 L23 53 M26 50 L26 53 M29 50 L29 53 M32 50 L32 53 M35 50 L35 53" stroke="#FDE047" strokeWidth="1" />
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
