import { Board } from "../types";

export const isFull = (grid: Board): boolean => {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (grid[i][j].value === 0) {
				return false;
			}
		}
	}
	return true;
};

export const isEmpty = (grid: Board): boolean => {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (grid[i][j].value !== 0) {
				return false;
			}
		}
	}
	return true;
};
