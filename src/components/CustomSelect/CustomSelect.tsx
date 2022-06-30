import React, { createRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
	CHANGE_DIFFICULTY,
	CHANGE_SPEED,
} from "../../redux/filter/filterActions";
import { Difficulty, Speed } from "../../redux/filter/filterTypes";
import "./customselect.css";
import { BiDownArrow } from "react-icons/bi";

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
	const menu = createRef<HTMLDivElement>();
	const [visible, setVisible] = useState<boolean>(false);
	const [current, setCurrent] = useState<string>(active);

	const handleChange = async (e: any) => {
		await setVisible(true);
		console.log(visible);

		const val: string = e.target.id;
		await setCurrent(val);
		if (name === "Game speed:") {
			dispatch(CHANGE_SPEED(val as Speed));
		} else {
			dispatch(CHANGE_DIFFICULTY(val as Difficulty));
		}
	};

	const openSelect = async () => {
		await setVisible(prev => !prev);
	};

	useEffect(() => {
		const el = document.getElementById(`arrow-${name}`);
		if (visible) {
			el?.classList.remove("arrow-down");
			el?.classList.add("arrow-up");
		} else {
			el?.classList.remove("arrow-up");
			el?.classList.add("arrow-down");
		}
	}, [visible]);

	return (
		<div className="main-select">
			<label htmlFor="select">{name}</label>
			<div className="select" onClick={openSelect}>
				<div className="active">
					<span style={{ minWidth: "75%", textAlign: "left" }}>{current}</span>
					<BiDownArrow size={16} id={`arrow-${name}`} className="arrow-up" />
				</div>
				{visible && (
					<div className="options" ref={menu}>
						{options.map((el, i) => (
							<div className="option" key={i} onClick={handleChange} id={el}>
								{el}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
