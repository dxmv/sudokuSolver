import React from "react";
import Row from "./Row";
import "./board.css";

//[0, 0, 0, 0, 0, 0, 0, 0, 0],

export default function Board() {
	const GRID = [
		[0, 0, 0, 2, 6, 0, 7, 0, 1],
		[6, 8, 0, 0, 7, 0, 0, 9, 0],
		[1, 9, 0, 0, 0, 4, 5, 0, 0],
		[8, 2, 0, 1, 0, 0, 0, 4, 0],
		[0, 0, 4, 6, 0, 2, 9, 0, 0],
		[0, 5, 0, 0, 0, 3, 0, 2, 8],
		[0, 0, 9, 3, 0, 0, 0, 7, 4],
		[0, 4, 0, 0, 5, 0, 0, 3, 6],
		[7, 0, 3, 0, 1, 8, 0, 0, 0],
	];
	return (
		<main>
			<div id="board">
				{GRID.map((row, i) => (
					<Row row={row} rowNumber={i} key={i} />
				))}
			</div>
			<button className="main-button" id="solve-button">
				SOLVE SUDOKU
			</button>
		</main>
	);
}
