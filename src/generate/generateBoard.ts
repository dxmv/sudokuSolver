import solveBoard from "../solve/solveBoard";
import { Board } from "../types";
import animationToNormal from "../utils/animationToNormal";
import convertNumToBoard from "../utils/convertNumToBoard";

const generateBoard = async (numToDelete: number) => {
	// Empty board
	const grid: Board = convertNumToBoard([
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
	]);

	// Solve the empty board, using the shuffle method
	let newBoard = await solveBoard(grid, 20);

	await sleep(500);
	if (newBoard) {
		animationToNormal(newBoard);
		// Deleting the numbers from solved board
		newBoard = await deleteFromBoard(newBoard, numToDelete);
	}
	return newBoard;
};

const deleteFromBoard = async (grid: Board, numToDelete: number) => {
	// Deep copy array
	const newBoard = JSON.parse(JSON.stringify(grid));

	while (numToDelete > 0) {
		let i = Math.floor(Math.random() * 9);
		let j = Math.floor(Math.random() * 9);

		const prev = newBoard[i][j].value;
		newBoard[i][j].value = 0;
		// Check if it is possible to solve without this value
		const b = await solveBoard(newBoard, 1, false);
		if (b) {
			numToDelete--;
			newBoard[i][j].value = 0;
			const el = document.getElementById(`${i} ${j}`);
			if (el) {
				el.innerHTML = " ";
			}
		} else {
			newBoard[i][j].value = prev;
		}
	}
	return newBoard;
};

const sleep = (time: number) => {
	return new Promise(resolve => setTimeout(resolve, time));
};

export default generateBoard;
