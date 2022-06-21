import React from "react";

const BORDER = "3px solid black";

export default function Cell({
	num,
	col,
	row,
}: {
	num: number;
	col: number;
	row: number;
}) {
	return (
		<div
			className="cell"
			style={{ borderRight: (col + 1) % 3 === 0 ? BORDER : "1px solid black" }}
			id={`${row} ${col}`}
		>
			{num !== 0 && num}
		</div>
	);
}
