import test from 'node:test';
import assert from 'node:assert/strict';
import { verifyPasscode, hashString } from './security';

test('verifyPasscode correctly validates 101', async () => {
  assert.equal(await verifyPasscode('101'), true);
  assert.equal(await verifyPasscode(' 101 '), true);
});

test('verifyPasscode rejects invalid codes', async () => {
  assert.equal(await verifyPasscode('100'), false);
  assert.equal(await verifyPasscode('000'), false);
  assert.equal(await verifyPasscode('admin'), false);
  assert.equal(await verifyPasscode(''), false);
});

test('hashString produces expected SHA-256 for 101', async () => {
  const hash = await hashString('101');
  assert.equal(hash, '16dc368a89b428b2485484313ba67a3912ca03f2b2b42429174a4f8b3dc84e44');
});
