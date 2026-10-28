import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateMastery,
  calculateScoreOn20,
  formatTimer,
  getScoreEvaluation,
  filterLexicon,
  exportBackupCode,
  importBackupCode,
  AppState,
} from './quizLogic';
import { RANKS, Question } from '../data/examData';

test('formatTimer formats seconds into mm:ss', () => {
  assert.equal(formatTimer(0), '00:00');
  assert.equal(formatTimer(65), '01:05');
  assert.equal(formatTimer(1200), '20:00');
});

test('calculateScoreOn20 calculates accurate scores', () => {
  assert.equal(calculateScoreOn20(20, 20), 20);
  assert.equal(calculateScoreOn20(10, 20), 10);
  assert.equal(calculateScoreOn20(15, 20), 15);
  assert.equal(calculateScoreOn20(0, 20), 0);
  assert.equal(calculateScoreOn20(17, 20), 17);
});

test('getScoreEvaluation provides appropriate feedback', () => {
  assert.equal(getScoreEvaluation(18).badgeColor, 'text-emerald-400');
  assert.equal(getScoreEvaluation(14).badgeColor, 'text-blue-400');
  assert.equal(getScoreEvaluation(10).badgeColor, 'text-amber-400');
  assert.equal(getScoreEvaluation(8).badgeColor, 'text-rose-500');
});

test('calculateMastery computes rank progression properly', () => {
  const emptyResult = calculateMastery({}, 100, RANKS);
  assert.equal(emptyResult.pct, 0);
  assert.equal(emptyResult.currentRank.title, 'Élève Gardien de la Paix');

  const halfStats = {
    1: { correct: true, attempts: 1, wrongCount: 0, lastChoice: 0 },
    2: { correct: true, attempts: 1, wrongCount: 0, lastChoice: 1 },
    3: { correct: false, attempts: 2, wrongCount: 1, lastChoice: 2 },
    4: { correct: true, attempts: 1, wrongCount: 0, lastChoice: 3 },
  };
  const result = calculateMastery(halfStats, 10, RANKS);
  // 3 out of 10 = 30% -> should be Gardien de la Paix (6e échelon) Sous-Brigadier (>= 25%)
  assert.equal(result.masteredCount, 3);
  assert.equal(result.pct, 30);
  assert.equal(result.currentRank.title, 'Gardien de la Paix (6e échelon)');
});

test('filterLexicon filters by keyword and module', () => {
  const dummyQuestions: Question[] = [
    {
      id: 1,
      module: 'm4',
      ref: 'L. 435-1 CSI',
      q: 'Usage des armes en maintien de l ordre',
      options: ['A', 'B'],
      correct: 0,
      exp: 'Article L. 435-1',
    },
    {
      id: 2,
      module: 'm5',
      ref: 'Art. 78-2 CPP',
      q: 'Contrôle d identité',
      options: ['C', 'D'],
      correct: 1,
      exp: 'Police judiciaire',
    },
  ];

  const res1 = filterLexicon(dummyQuestions, 'armes', 'all');
  assert.equal(res1.length, 1);
  assert.equal(res1[0].id, 1);

  const res2 = filterLexicon(dummyQuestions, 'contrôle', 'm5');
  assert.equal(res2.length, 1);
  assert.equal(res2[0].id, 2);

  const res3 = filterLexicon(dummyQuestions, 'nonexistent', 'all');
  assert.equal(res3.length, 0);
});

test('exportBackupCode and importBackupCode round-trip correctly', () => {
  const mockState: AppState = {
    stats: {
      1: { correct: true, attempts: 2, wrongCount: 1, lastChoice: 1 },
    },
    errorIds: [42],
    examHistory: [
      {
        date: '27/10 18:00',
        scoreOn20: 16.5,
        correctCount: 16,
        total: 20,
        durationSec: 450,
      },
    ],
    bookmarks: [1, 5, 12],
  };

  const code = exportBackupCode(mockState);
  assert.ok(typeof code === 'string' && code.length > 10);

  const restored = importBackupCode(code);
  assert.deepEqual(restored, mockState);
});
