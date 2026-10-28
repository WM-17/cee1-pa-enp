import { Question, Rank, RANKS } from '../data/examData';

export interface UserStats {
  correct: boolean;
  attempts: number;
  wrongCount: number;
  lastChoice: number | null;
}

export interface AppState {
  stats: Record<number, UserStats>;
  errorIds: number[];
  examHistory: {
    date: string;
    scoreOn20: number;
    correctCount: number;
    total: number;
    durationSec: number;
  }[];
  bookmarks: number[];
}

export const INITIAL_STATE: AppState = {
  stats: {},
  errorIds: [],
  examHistory: [],
  bookmarks: [],
};

export function calculateMastery(
  stats: Record<number, UserStats>,
  totalQuestions: number,
  ranks: Rank[] = RANKS
) {
  let masteredCount = 0;
  let seenCount = 0;

  Object.values(stats).forEach((st) => {
    if (st) {
      seenCount++;
      if (st.correct) masteredCount++;
    }
  });

  const pct = totalQuestions > 0 ? Math.round((masteredCount / totalQuestions) * 100) : 0;
  let currentRank = ranks[0];
  let nextRank: Rank | null = null;

  for (let i = 0; i < ranks.length; i++) {
    if (pct >= ranks[i].minPct) {
      currentRank = ranks[i];
      nextRank = ranks[i + 1] || null;
    }
  }

  return {
    totalQuestions,
    masteredCount,
    seenCount,
    pct,
    currentRank,
    nextRank,
  };
}

export function shuffleQuestions<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function formatTimer(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function calculateScoreOn20(correctCount: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round(((correctCount / total) * 20) * 10) / 10;
}

export function getScoreEvaluation(scoreOn20: number): {
  mention: string;
  badgeColor: string;
} {
  if (scoreOn20 >= 16) {
    return {
      mention: 'Excellent — Niveau Major de Promotion CEE1',
      badgeColor: 'text-emerald-400',
    };
  }
  if (scoreOn20 >= 12) {
    return {
      mention: 'Solide — Acquis professionnels maîtrisés',
      badgeColor: 'text-blue-400',
    };
  }
  if (scoreOn20 >= 10) {
    return {
      mention: 'Admissible — Attention aux pièges procéduraux',
      badgeColor: 'text-amber-400',
    };
  }
  return {
    mention: 'Insuffisant — Reprenez les modules et le Carnet d\'erreurs',
    badgeColor: 'text-rose-500',
  };
}

export function filterLexicon(
  questions: Question[],
  search: string,
  moduleId: string
): Question[] {
  const term = search.toLowerCase().trim();
  return questions.filter((q) => {
    if (moduleId !== 'all' && q.module !== moduleId) return false;
    if (!term) return true;
    return (
      q.q.toLowerCase().includes(term) ||
      q.exp.toLowerCase().includes(term) ||
      q.ref.toLowerCase().includes(term) ||
      q.options.some((o) => o.toLowerCase().includes(term))
    );
  });
}

export function exportBackupCode(state: AppState): string {
  return btoa(encodeURIComponent(JSON.stringify(state)));
}

export function importBackupCode(codeStr: string): AppState {
  const parsed = JSON.parse(decodeURIComponent(atob(codeStr.trim())));
  if (!parsed || typeof parsed !== 'object' || typeof parsed.stats !== 'object') {
    throw new Error('Format de sauvegarde invalide');
  }
  return {
    stats: parsed.stats || {},
    errorIds: Array.isArray(parsed.errorIds) ? parsed.errorIds : [],
    examHistory: Array.isArray(parsed.examHistory) ? parsed.examHistory : [],
    bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
  };
}
