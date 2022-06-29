import React from "react";
import Row from "./Row";
import "./board.css";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import isValidBoard from "../../solve/isValidBoard";
import solveBoard from "../../solve/solveBoard";
import { Cell } from "../../types";
import { CLEAR_BOARD, NEW_BOARD } from "../../redux/board/actions";
import convertBoardToNumArray from "../../utils/convertBoardToNum";
import { isEmpty, isFull } from "../../utils/boardCapacity";
import addNotification from "../../utils/addNotification";
import animationToNormal from "../../utils/animationToNormal";

export default function Board() {
	const board = useSelector((store: RootState) => store.board.board);
	const dispatch = useDispatch();
	const speed = useSelector((state: RootState) => state.filter.speed);

	const handleClick = async () => {
		if (isEmpty(board)) {
			await addNotification(dispatch, "The board is empty", "Warning");
			return;
		}
		if (isFull(board)) {
			await addNotification(dispatch, "The board is full", "Warning");
		}
		if (isValidBoard(board)) {
			const newBoard = await solveBoard(board, speed === "Fast" ? 50 : 80);
			if (newBoard) {
				await addNotification(dispatch, "Solved", "Success");

				dispatch(NEW_BOARD(convertBoardToNumArray(newBoard)));
			}
		} else {
			await addNotification(dispatch, "No solution", "Warning");
		}
	};

	const handleClear = () => {
		dispatch(CLEAR_BOARD());
		animationToNormal(board);
	};

	return (
		<main>
			<button className="helper-button" id="clear-button" onClick={handleClear}>
				Clear board
			</button>

			<div id="board">
				{board.map((row: Cell[], i: number) => (
					<Row row={row} rowNumber={i} key={i} />
				))}
			</div>
			<button className="main-button" id="solve-button" onClick={handleClick}>
				SOLVE SUDOKU
			</button>
		</main>
	);
}
