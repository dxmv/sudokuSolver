import { Board } from "../types";

const convertNumToBoard = (numbers: number[][]): Board => {
	const newBoard: Board = [];
	for (let i = 0; i < 9; i++) {
		newBoard.push([]);
		for (let j = 0; j < 9; j++) {
			newBoard[i].push({ value: numbers[i][j] });
		}
	}
	return newBoard;
};

export default convertNumToBoard;
