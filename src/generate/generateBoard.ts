import solveBoard from "../solve/solveBoard";
import { Board } from "../types";
import animationToNormal from "../utils/animationToNormal";
import convertNumToBoard from "../utils/convertNumToBoard";

const generateBoard = async (numToDelete: number) => {
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
	const newBoard = await solveBoard(grid, 1);
	await sleep(500);
	if (newBoard) {
		animationToNormal(newBoard);
		deleteFromBoard(newBoard, numToDelete);
	}
	return newBoard;
};

const deleteFromBoard = async (grid: Board, numToDelete: number) => {
	while (numToDelete > 0) {
		let i = Math.floor(Math.random() * 9);
		let j = Math.floor(Math.random() * 9);
		const prev = grid[i][j].value;
		grid[i][j].value = 0;
		const b = await solveBoard(grid, 1, false);
		if (b) {
			numToDelete--;
			const el = document.getElementById(`${i} ${j}`);
			if (el) {
				el.innerHTML = " ";
			}
		} else {
			grid[i][j].value = prev;
		}
	}
};

const sleep = (time: number) => {
	return new Promise(resolve => setTimeout(resolve, time));
};

export default generateBoard;
