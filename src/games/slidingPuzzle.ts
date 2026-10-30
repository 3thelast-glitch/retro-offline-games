export type Board = number[];
export const BOARD_WIDTH = 4;
const GOAL: Board = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];

export function isValidBoard(value: unknown): value is Board {
  if (!Array.isArray(value) || value.length !== 16) return false;
  if (!value.every(n => Number.isInteger(n) && n >= 0 && n <= 15)) return false;
  if (new Set(value).size !== 16) return false;
  let inversions = 0;
  for (let i = 0; i < 16; i++) {
    if (value[i] === 0) continue;
    for (let j = i + 1; j < 16; j++) {
      if (value[j] !== 0 && value[i] > value[j]) inversions++;
    }
  }
  const emptyRowFromBottom = 4 - Math.floor(value.indexOf(0) / 4);
  return (inversions + emptyRowFromBottom) % 2 === 1;
}

export function solved(board: Board): boolean {
  return isValidBoard(board) && board.every((value, index) => value === GOAL[index]);
}

function neighbors(index: number): number[] {
  const row = Math.floor(index / BOARD_WIDTH);
  const col = index % BOARD_WIDTH;
  return [
    ...(row > 0 ? [index - BOARD_WIDTH] : []),
    ...(row < BOARD_WIDTH - 1 ? [index + BOARD_WIDTH] : []),
    ...(col > 0 ? [index - 1] : []),
    ...(col < BOARD_WIDTH - 1 ? [index + 1] : [])
  ];
}

// Every board is obtained by legal moves starting from the solved board.
export function newBoard(steps = 140): Board {
  const board = [...GOAL];
  let blank = 15;
  let previous = -1;
  const count = Number.isFinite(steps) ? Math.max(2, Math.min(10_000, Math.floor(steps))) : 140;
  for (let n = 0; n < count; n++) {
    const possibilities = neighbors(blank).filter(index => index !== previous);
    const next = possibilities[Math.floor(Math.random() * possibilities.length)];
    [board[blank], board[next]] = [board[next], board[blank]];
    previous = blank;
    blank = next;
  }
  if (solved(board)) {
    const next = neighbors(blank)[0];
    [board[blank], board[next]] = [board[next], board[blank]];
  }
  return board;
}

export function nextBoard(board: Board, selected: number): Board | null {
  if (!isValidBoard(board) || solved(board) || !Number.isInteger(selected) || selected < 0 || selected >= 16) return null;
  const blank = board.indexOf(0);
  if (!neighbors(blank).includes(selected)) return null;
  const result = [...board];
  [result[selected], result[blank]] = [result[blank], result[selected]];
  return result;
}
