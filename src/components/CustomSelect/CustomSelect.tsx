import React from "react";
import "./customselect.css";

export default function CustomSelect({
	name,
	options,
}: {
	name: string;
	options: string[];
}) {
	return (
		<div className="main-select">
			<label htmlFor="select">{name}</label>
			<select name="select">
				{options.map((el, i) => (
					<option key={i} value={el}>
						{el}
					</option>
				))}
			</select>
		</div>
	);
}
