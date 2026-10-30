import test from 'node:test';
import assert from 'node:assert/strict';
import { loadProgress, storeProgress, validateProgress } from '../src/persistence/puzzle.ts';
const board = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,0,15];
test('stores and restores valid puzzle state', () => {
  const data = new Map();
  const storage = {getItem:k=>data.get(k) ?? null,setItem:(k,v)=>data.set(k,v)};
  assert.equal(storeProgress(storage, board, 14), true);
  assert.deepEqual(loadProgress(storage), {version:1,board,moves:14});
  assert.equal(validateProgress({version:1,board:[],moves:0}), null);
});
test('corrupt JSON, quota errors and impossible boards fail safely', () => {
  const broken = {getItem:()=>'{bad json',setItem:()=>{throw Error('QuotaExceededError')}};
  assert.equal(loadProgress(broken), null);
  assert.equal(storeProgress(broken,board,2),false);
  assert.equal(validateProgress({version:1,board,moves:-1}),null);
});
