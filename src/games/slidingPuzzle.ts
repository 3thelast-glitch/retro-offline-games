export type Board = number[];
const WIDTH = 4;
const GOAL: Board = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];

export function solved(board: Board): boolean {
  return board.every((value, i) => value === GOAL[i]);
}

// Shuffle by valid moves from a solved board; every generated board is solvable.
export function newBoard(steps = 140): Board {
  const board = [...GOAL];
  let blank = 15;
  let previous = -1;
  for (let n = 0; n < steps; n += 1) {
    const candidates = neighbors(blank).filter(i => i !== previous);
    const next = candidates[Math.floor(Math.random() * candidates.length)];
    [board[blank], board[next]] = [board[next], board[blank]];
    previous = blank;
    blank = next;
  }
  return solved(board) ? newBoard(steps + 1) : board;
}

function neighbors(index: number): number[] {
  const row = Math.floor(index / WIDTH);
  const col = index % WIDTH;
  return [
    ...(row > 0 ? [index - WIDTH] : []),
    ...(row < WIDTH - 1 ? [index + WIDTH] : []),
    ...(col > 0 ? [index - 1] : []),
    ...(col < WIDTH - 1 ? [index + 1] : [])
  ];
}

export function nextBoard(board: Board, selected: number): Board | null {
  if (solved(board)) return null;
  const blank = board.indexOf(0);
  if (!neighbors(blank).includes(selected)) return null;
  const result = [...board];
  [result[selected], result[blank]] = [result[blank], result[selected]];
  return result;
}
