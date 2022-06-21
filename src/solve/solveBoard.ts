import { Board } from "../types";
import isValidBoard from "./isValidBoard";

const solveBoard = (board: Board): Board | undefined => {
	// for (let i = 0; i < board.length; i++) {
	// 	for (let j = 0; j < board.length; j++) {
	// 		if (board[i][j].value === 0) {
	// 			const possible = getPossible(board, 0, 0);
	// 			for (let n of possible) {
	// 				console.log(n);
	// 			}
	// 		}
	// 	}
	// }

	let copy: Board = JSON.parse(JSON.stringify(board));
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j].value === 0) {
				const possible = getPossible(board, i, j);
				for (let n of possible) {
					copy[i][j].value = n;
					const newBoard = solveBoard(copy);
					if (newBoard && isValidBoard(newBoard)) {
						return newBoard;
					}
				}
				return undefined;
			}
		}
	}
	return copy;
};

const getPossible = (board: Board, i: number, j: number): number[] => {
	const arrayIntersection = (arr1: number[], arr2: number[]): number[] =>
		arr1.filter(value => arr2.includes(value));

	const colRow = arrayIntersection(
		getPossibleRow(board, i),
		getPossibleCol(board, j)
	);
	return arrayIntersection(colRow, getPossibleSquare(board, i, j));
};

const getPossibleRow = (board: Board, i: number): number[] => {
	const arr: number[] = [];
	let map = [1, 1, 1, 1, 1, 1, 1, 1, 1];
	for (let j = 0; j < 9; j++) {
		map[board[i][j].value - 1]--;
	}
	for (let k = 0; k < map.length; k++) {
		if (map[k] === 1) {
			arr.push(k + 1);
		}
	}
	return arr;
};

const getPossibleCol = (board: Board, j: number): number[] => {
	const arr: number[] = [];
	let map = [1, 1, 1, 1, 1, 1, 1, 1, 1];
	for (let i = 0; i < 9; i++) {
		map[board[i][j].value - 1]--;
	}
	for (let k = 0; k < map.length; k++) {
		if (map[k] === 1) {
			arr.push(k + 1);
		}
	}
	return arr;
};

const getPossibleSquare = (board: Board, i: number, j: number) => {
	let currentRow = 0,
		currentCol = 0;
	if (i >= 0 && i < 3) {
		currentRow = 0;
	} else if (i >= 3 && i < 6) {
		currentRow = 3;
	} else if (i >= 6 && i < 9) {
		currentRow = 6;
	}
	if (j >= 0 && j < 3) {
		currentCol = 0;
	} else if (j >= 3 && j < 6) {
		currentCol = 3;
	} else if (j >= 6 && j < 9) {
		currentCol = 6;
	}
	let map = [1, 1, 1, 1, 1, 1, 1, 1, 1];
	for (let i = currentRow, ci = 0; ci < 3; i++, ci++) {
		for (let j = currentCol, cj = 0; cj < 3; j++, cj++) {
			map[board[i][j].value - 1]--;
		}
	}
	const arr: number[] = [];
	for (let k = 0; k < map.length; k++) {
		if (map[k] === 1) {
			arr.push(k + 1);
		}
	}
	return arr;
};

export default solveBoard;
