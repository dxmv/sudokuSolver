import { Board } from "../types";

const isValidBoard = (board: Board): boolean => {
	return isValidRows(board) && isValidCols(board) && isValidSquare(board);
};

const isValidRows = (board: Board): boolean => {
	const isValidRow = (row: number[]): boolean => {
		let map = [1, 1, 1, 1, 1, 1, 1, 1, 1];
		for (let i = 0; i < row.length; i++) {
			if (row[i] >= 1 && row[i] <= 9) {
				if (map[row[i] - 1] === 1) {
					map[row[i] - 1]--;
				} else if (map[row[i] - 1] === 0) {
					return false;
				}
			} else if (row[i] !== 0) {
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
			if (board[i][j] >= 1 && board[i][j] <= 9) {
				if (map[board[i][j] - 1] === 1) {
					map[board[i][j] - 1]--;
				} else if (map[board[i][j] - 1] === 0) {
					return false;
				}
			} else if (board[i][j] !== 0) {
				return false;
			}
		}
	}
	return true;
};

const isValidSquare = (board: Board): boolean => {
	let currentRow = 0,
		currentCol = 0;
	for (let k = 0; k < 9; k++) {
		let map = [1, 1, 1, 1, 1, 1, 1, 1, 1];
		for (let i = currentRow; i < 3; i++) {
			for (let j = currentCol; j < 3; j++) {
				if (board[i][j] >= 1 && board[i][j] <= 9) {
					if (map[board[i][j] - 1] === 1) {
						map[board[i][j] - 1]--;
					} else if (map[board[i][j] - 1] === 0) {
						return false;
					}
				} else if (board[i][j] !== 0) {
					return false;
				}
			}
		}
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
