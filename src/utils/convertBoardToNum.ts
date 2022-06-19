import { Board } from "../types";

const convertBoardToNumArray = (board: Board): number[][] => {
	const newArr: number[][] = [];
	for (let i = 0; i < board.length; i++) {
		newArr.push([]);
		for (let j = 0; j < board[i].length; j++) {
			newArr[i].push(board[i][j].value);
		}
	}
	return newArr;
};

export default convertBoardToNumArray;
