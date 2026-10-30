import test from 'node:test';
import assert from 'node:assert/strict';
import { GAME_CATALOG, validateCatalog } from '../src/catalog/catalog.ts';
import { browserCapabilities } from '../src/engines/capabilities.ts';

test('only a real local playable puzzle is in shipped catalog', () => {
  assert.doesNotThrow(() => validateCatalog(GAME_CATALOG));
  assert.equal(GAME_CATALOG.length, 1);
  assert.equal(GAME_CATALOG[0].engine, 'original-puzzle');
  assert.equal(browserCapabilities('original-puzzle').available, true);
  assert.equal(browserCapabilities('ppsspp-native').available, false);
  assert.equal(browserCapabilities('ppsspp-native').reason, 'ENGINE_UNAVAILABLE');
});
test('duplicate game IDs and content with unreviewed rights fail', () => {
  assert.throws(() => validateCatalog([GAME_CATALOG[0], GAME_CATALOG[0]]), /duplicate/);
  assert.throws(() => validateCatalog([{...GAME_CATALOG[0], rights: {...GAME_CATALOG[0].rights, redistribution: 'review-required'}}]), /redistribution/);
});
