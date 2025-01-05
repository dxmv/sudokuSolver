import { Board } from "../types";

const isValidBoard = (board: Board): boolean => {
	const rows = Array(9)
		.fill(0)
		.map(() => new Set());
	const cols = Array(9)
		.fill(0)
		.map(() => new Set());
	const boxes = Array(9)
		.fill(0)
		.map(() => new Set());

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			const value = board[i][j].value;
			if (value === 0) continue;

			const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

			if (
				rows[i].has(value) ||
				cols[j].has(value) ||
				boxes[boxIndex].has(value)
			) {
				return false;
			}

			rows[i].add(value);
			cols[j].add(value);
			boxes[boxIndex].add(value);
		}
	}
	return true;
};

export default isValidBoard;
