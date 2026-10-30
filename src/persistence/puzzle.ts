import { isValidBoard, type Board } from '../games/slidingPuzzle.ts';

export const PUZZLE_STORAGE_KEY = 'rog-puzzle-v1';
export interface PuzzleProgress {
  version: 1;
  board: Board;
  moves: number;
}

export interface KeyValueStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export function validateProgress(input: unknown): PuzzleProgress | null {
  if (!input || typeof input !== 'object') return null;
  const value = input as Record<string, unknown>;
  if (value.version !== 1 || !isValidBoard(value.board) ||
      !Number.isSafeInteger(value.moves) || (value.moves as number) < 0) return null;
  return { version: 1, board: [...value.board], moves: value.moves as number };
}

export function loadProgress(storage: KeyValueStorage): PuzzleProgress | null {
  try {
    const encoded = storage.getItem(PUZZLE_STORAGE_KEY);
    return encoded ? validateProgress(JSON.parse(encoded)) : null;
  } catch {
    return null;
  }
}

export function storeProgress(storage: KeyValueStorage, board: Board, moves: number): boolean {
  const validated = validateProgress({ version: 1, board, moves });
  if (!validated) return false;
  try {
    storage.setItem(PUZZLE_STORAGE_KEY, JSON.stringify(validated));
    return true;
  } catch {
    return false; // storage may be unavailable or full; do not claim the save succeeded
  }
}
