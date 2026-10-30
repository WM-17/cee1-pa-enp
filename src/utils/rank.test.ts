import test from 'node:test';
import assert from 'node:assert/strict';
import { RANKS } from '../data/examData';
import { calculateMastery } from './quizLogic';

test('RANKS includes Chef Délégué Suprême at 100%', () => {
  const supreme = RANKS.find(r => r.minPct === 100);
  assert.ok(supreme, 'Chef Délégué Suprême should exist in RANKS');
  assert.equal(supreme.title, 'Chef Délégué Suprême');
  assert.equal(supreme.svgType, 'chef_supreme');
});

test('calculateMastery awards Chef Délégué Suprême when 100% is reached', () => {
  const dummyStats: Record<number, { correct: boolean; attempts: number; wrongCount: number; lastChoice: number | null }> = {};
  for (let i = 1; i <= 10; i++) {
    dummyStats[i] = { correct: true, attempts: 1, wrongCount: 0, lastChoice: 0 };
  }
  const result = calculateMastery(dummyStats, 10);
  assert.equal(result.pct, 100);
  assert.equal(result.currentRank.title, 'Chef Délégué Suprême');
  assert.equal(result.nextRank, null);
});

test('calculateMastery unlocks rank via Mort Subite best streak even at 0% mastery', () => {
  const emptyStats = {};
  // Streak of 60 should unlock Chef Délégué Suprême
  const result60 = calculateMastery(emptyStats, 10, RANKS, 60);
  assert.equal(result60.currentRank.title, 'Chef Délégué Suprême');
  assert.equal(result60.unlockedBy, 'streak');

  // Streak of 20 should unlock Major de Police RULP
  const result20 = calculateMastery(emptyStats, 10, RANKS, 20);
  assert.equal(result20.currentRank.title, 'Major de Police RULP');
  assert.equal(result20.unlockedBy, 'streak');
});
