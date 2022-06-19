import { Board } from "../types";

const solveBoard = (board: Board) => {
	// Solve where there is one possible number and remove it from possible array in the row and column
	// Solve for all the other numbers
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			if (board[i][j].value === 0) {
				const possible = board[i][j].possible;
				for (let n = 0; n < possible.length; n++) {
					board[i][j].value = possible[n];
					solveBoard([...board]);
				}
				return;
			}
		}
	}
};

export default solveBoard;
