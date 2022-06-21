import { Board, Cell } from "../types";

const isValidBoard = (board: Board): boolean => {
	return isValidRows(board) && isValidCols(board) && isValidSquare(board);
};

// const convertMapToNumArr = (map: number[]): number[] => {
// 	const arr = [];
// 	for (let i = 0; i < map.length; i++) {
// 		if (map[i] === 1) {
// 			arr.push(i + 1);
// 		}
// 	}
// 	return arr;
// };

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
		// if (firstTime) {
		// 	addPossibleToRow(row, convertMapToNumArr(map));
		// }
		return true;
	};

	// const addPossibleToRow = (row: Cell[], map: number[]) => {
	// 	for (let i = 0; i < row.length; i++) {
	// 		if (row[i].value === 0) {
	// 			row[i].possible = map;
	// 		}
	// 	}
	// };

	for (let i = 0; i < board.length; i++) {
		if (!isValidRow(board[i])) {
			return false;
		}
	}
	return true;
};

const isValidCols = (board: Board): boolean => {
	// const addPossibleToCol = (y: number, map: number[]) => {
	// 	for (let x = 0; x < board.length; x++) {
	// 		if (board[x][y].value === 0) {
	// 			board[x][y].possible = arrayIntersection(board[x][y].possible, map);
	// 		}
	// 	}
	// };

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
		// if (firstTime) {
		// 	addPossibleToCol(j, convertMapToNumArr(map));
		// }
	}
	return true;
};

const isValidSquare = (board: Board): boolean => {
	// const addPossibleToSquare = (map: number[]) => {
	// 	for (let i = currentRow; i < 3; i++) {
	// 		for (let j = currentCol; j < 3; j++) {
	// 			board[i][j].possible = arrayIntersection(board[i][j].possible, map);
	// 		}
	// 	}
	// };
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
		// if (firstTime) {
		// 	addPossibleToSquare(convertMapToNumArr(map));
		// }

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
