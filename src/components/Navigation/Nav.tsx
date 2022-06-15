import React from "react";
import "./nav.css";
import { AiFillGithub } from "react-icons/ai";

export default function Nav() {
	return (
		<nav>
			<div>
				<h1 id="title">Sudoku Solver</h1>
			</div>
			<div className="buttons">
				<button className="main-button" id="generate">
					Generate Board
				</button>
			</div>
			<div style={{ textAlign: "right" }}>
				<AiFillGithub size={40} color={"#f3eff5"} />
			</div>
		</nav>
	);
}
