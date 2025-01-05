import { Board, Speed } from "../types";
import isValidBoard from "./isValidBoard";

const shuffle = (array: number[]) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

const sleep = (time: number) => {
	return new Promise(resolve => setTimeout(resolve, time));
};

// Loop through the board
// If the element is zero (empty cell) than:
// Get the possible answers
// Shuffle them
// Try to solve with every one of them
// If nothing matches return undefined

const solveBoard = async (
	board: Board,
	speed: Speed,
	animation = true
): Promise<Board | undefined> => {
	const copy: Board = JSON.parse(JSON.stringify(board));
	const emptySpots: [number, number][] = [];

	// Find all empty spots first
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j].value === 0) {
				emptySpots.push([i, j]);
			}
		}
	}

	const solve = async (index: number): Promise<boolean> => {
		if (index === emptySpots.length) return true;

		const [i, j] = emptySpots[index];
		const possible = getPossible(copy, i, j);

		if (animation) {
			const el = document.getElementById(`${i} ${j}`);
			el?.classList.add("current");
		}

		for (const num of possible) {
			copy[i][j].value = num;
			const el = document.getElementById(`${i} ${j}`);

			if (animation && el) {
				el.innerHTML = `${num}`;
				el.classList.add("checked");
				await sleep(speed);
			}

			if (await solve(index + 1)) return true;
		}

		copy[i][j].value = 0;
		return false;
	};

	await solve(0);
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
