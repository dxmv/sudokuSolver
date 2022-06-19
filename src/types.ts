export type Board = ICell[][];

export type Cell = ICell;

interface ICell {
	value: number;
	possible: number[];
}
