import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidBoard, solved, newBoard, nextBoard } from '../src/games/slidingPuzzle.ts';

const solvedBoard = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];

test('valid board detection rejects missing/duplicate/unsolvable content', () => {
  assert.equal(isValidBoard(solvedBoard), true);
  assert.equal(isValidBoard([]), false);
  assert.equal(isValidBoard([...solvedBoard.slice(0,15), 15]), false);
  const swapped = [...solvedBoard]; [swapped[0], swapped[1]] = [swapped[1], swapped[0]];
  assert.equal(isValidBoard(swapped), false);
  assert.equal(solved([]), false);
  assert.equal(solved(solvedBoard), true);
});

test('new board remains solvable and not already solved', () => {
  for (let i = 0; i < 100; i++) {
    const board = newBoard(i);
    assert.equal(isValidBoard(board), true);
    assert.equal(solved(board), false);
  }
});

test('only adjacent tile may move', () => {
  assert.equal(nextBoard(solvedBoard, 0), null);
  assert.equal(nextBoard(solvedBoard, 14), null); // already won
  const board = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,0,15];
  assert.equal(isValidBoard(board), true);
  assert.deepEqual(nextBoard(board, 15), solvedBoard);
  assert.equal(nextBoard(board, 4), null);
  assert.equal(nextBoard(board, -1), null);
});
