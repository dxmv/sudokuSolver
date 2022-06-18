import React from "react";
import Row from "./Row";
import "./board.css";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import isValidBoard from "../../solve/isValidBoard";

//[0, 0, 0, 0, 0, 0, 0, 0, 0],

export default function Board() {
	const board = useSelector((store: RootState) => store.board.board);
	const handleClick = () => {
		console.log(isValidBoard(board));
	};
	return (
		<main>
			<div id="board">
				{board.map((row, i) => (
					<Row row={row} rowNumber={i} key={i} />
				))}
			</div>
			<button className="main-button" id="solve-button" onClick={handleClick}>
				SOLVE SUDOKU
			</button>
		</main>
	);
}
