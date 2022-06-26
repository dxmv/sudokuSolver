export type Board = ICell[][];

export type Cell = ICell;

export type Speed = 0 | 1 | 5 | 20 | 50;

interface ICell {
	value: number;
}
