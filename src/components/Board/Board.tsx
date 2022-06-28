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

export default function Board() {
	const board = useSelector((store: RootState) => store.board.board);
	const dispatch = useDispatch();

	const handleClick = async () => {
		if (isEmpty(board)) {
			console.log("Empty board");
			return;
		}
		if (isFull(board)) {
			console.log("Full board");
			return;
		}
		if (isValidBoard(board)) {
			const newBoard = await solveBoard(board, 50);
			if (newBoard) {
				dispatch(NEW_BOARD(convertBoardToNumArray(newBoard)));
			}
		} else {
			console.log("Invalid board");
		}
	};

	const handleClear = () => {
		dispatch(CLEAR_BOARD());
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
