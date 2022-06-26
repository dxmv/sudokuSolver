import React from "react";
import "./nav.css";
import { AiFillGithub } from "react-icons/ai";
import generateBoard from "../../generate/generateBoard";
import { useDispatch } from "react-redux";
import { NEW_BOARD } from "../../redux/board/actions";
import convertBoardToNumArray from "../../utils/convertBoardToNum";
import animationToNormal from "../../utils/animationToNormal";

export default function Nav() {
	const dispatch = useDispatch();
	const handleGen = async () => {
		const newBoard = await generateBoard(81 - 20);
		console.log(newBoard);
		if (newBoard) {
			dispatch(NEW_BOARD(convertBoardToNumArray(newBoard)));
			animationToNormal(newBoard);
		}
	};

	return (
		<nav>
			<div>
				<h1 id="title">Sudoku Solver</h1>
			</div>
			<div className="buttons">
				<button className="main-button" id="generate" onClick={handleGen}>
					Generate Board
				</button>
			</div>
			<div style={{ textAlign: "right" }}>
				<AiFillGithub size={40} color={"#f3eff5"} />
			</div>
		</nav>
	);
}
