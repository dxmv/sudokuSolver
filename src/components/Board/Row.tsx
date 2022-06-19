import React from "react";
import Cell from "./Cell";
import { Cell as CellType } from "../../types";

const BORDER = "3px solid black";

export default function Row({
	row,
	rowNumber,
}: {
	row: CellType[];
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
			{row.map((el: CellType, j: number) => (
				<Cell num={el.value} col={j} key={j} />
			))}
		</div>
	);
}
