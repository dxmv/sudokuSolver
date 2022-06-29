import { Board, Cell } from "../types";

const isValidBoard = (board: Board): boolean => {
	return isValidRows(board) && isValidCols(board) && isValidSquare(board);
};

const isValidRows = (board: Board): boolean => {
	const isValidRow = (row: Cell[]): boolean => {
		let map = [1, 1, 1, 1, 1, 1, 1, 1, 1];
		for (let i = 0; i < row.length; i++) {
			if (row[i].value >= 1 && row[i].value <= 9) {
				if (map[row[i].value - 1] === 1) {
					map[row[i].value - 1]--;
				} else if (map[row[i].value - 1] === 0) {
					return false;
				}
			} else if (row[i].value !== 0) {
				return false;
			}
		}
		return true;
	};

	for (let i = 0; i < board.length; i++) {
		if (!isValidRow(board[i])) {
			return false;
		}
	}
	return true;
};

const isValidCols = (board: Board): boolean => {
	for (let j = 0; j < board.length; j++) {
		let map = [1, 1, 1, 1, 1, 1, 1, 1, 1];
		for (let i = 0; i < board.length; i++) {
			if (board[i][j].value >= 1 && board[i][j].value <= 9) {
				if (map[board[i][j].value - 1] === 1) {
					map[board[i][j].value - 1]--;
				} else if (map[board[i][j].value - 1] === 0) {
					return false;
				}
			} else if (board[i][j].value !== 0) {
				return false;
			}
		}
	}
	return true;
};

// Checking 3 by 3 square
const isValidSquare = (board: Board): boolean => {
	let currentRow = 0,
		currentCol = 0;

	for (let k = 0; k < 9; k++) {
		let map = [1, 1, 1, 1, 1, 1, 1, 1, 1];
		for (let i = currentRow, ci = 0; ci < 3; i++, ci++) {
			for (let j = currentCol, cj = 0; cj < 3; j++, cj++) {
				if (board[i][j].value >= 1 && board[i][j].value <= 9) {
					if (map[board[i][j].value - 1] === 1) {
						map[board[i][j].value - 1]--;
					} else if (map[board[i][j].value - 1] === 0) {
						return false;
					}
				} else if (board[i][j].value !== 0) {
					return false;
				}
			}
		}

		// We have reached the end of the row
		if (currentCol === 6) {
			currentCol = 0;
			currentRow += 3;
		} else {
			currentCol += 3;
		}
	}
	return true;
};

export default isValidBoard;
