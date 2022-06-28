import React from "react";
import { useDispatch } from "react-redux";
import {
	CHANGE_DIFFICULTY,
	CHANGE_SPEED,
} from "../../redux/filter/filterActions";
import { Difficulty, Speed } from "../../redux/filter/filterTypes";
import "./customselect.css";

export default function CustomSelect({
	name,
	active,
	options,
}: {
	name: string;
	active: string;
	options: string[];
}) {
	const dispatch = useDispatch();
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		if (name === "Speed") {
			dispatch(CHANGE_SPEED(e.target.value as Speed));
		} else {
			dispatch(CHANGE_DIFFICULTY(e.target.value as Difficulty));
		}
	};

	return (
		<div className="main-select">
			<label htmlFor="select">{name}</label>
			<select name="select" value={active} onChange={handleChange}>
				{options.map((el, i) => (
					<option key={i} value={el}>
						{el}
					</option>
				))}
			</select>
		</div>
	);
}
