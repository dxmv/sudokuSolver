export type Board = ICell[][];

export type Cell = ICell;

export type Speed = 1 | 20 | 50 | 80;

interface ICell {
	value: number;
}
