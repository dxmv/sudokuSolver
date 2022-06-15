import React from "react";
import Cell from "./Cell";

const BORDER = "3px solid black";

export default function Row({
	row,
	rowNumber,
}: {
	row: number[];
	rowNumber: number;
}) {
	return (
		<div
			className="row"
			style={{
				borderTop: rowNumber === 0 || rowNumber % 3 === 0 ? BORDER : "",
				borderBottom: rowNumber === 8 ? BORDER : "",
			}}
		>
			{row.map((el, j) => (
				<Cell num={el} col={j} key={j} />
			))}
		</div>
	);
}
