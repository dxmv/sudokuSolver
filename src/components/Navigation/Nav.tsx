import React from "react";
import "./nav.css";
import { AiFillGithub } from "react-icons/ai";
import generateBoard from "../../generate/generateBoard";
import { useDispatch, useSelector } from "react-redux";
import { NEW_BOARD } from "../../redux/board/actions";
import convertBoardToNumArray from "../../utils/convertBoardToNum";
import animationToNormal from "../../utils/animationToNormal";
import CustomSelect from "../CustomSelect/CustomSelect";
import { RootState } from "../../redux/store";

export default function Nav() {
	const dispatch = useDispatch();
	const handleGen = async () => {
		const newBoard = await generateBoard(10);
		console.log(newBoard);
		if (newBoard) {
			dispatch(NEW_BOARD(convertBoardToNumArray(newBoard)));
			animationToNormal(newBoard);
		}
	};
	const diff = useSelector((state: RootState) => state.filter.difficulty);
	const speed = useSelector((state: RootState) => state.filter.speed);

	return (
		<nav>
			<div>
				<h1 id="title">Sudoku Solver</h1>
			</div>
			<div className="buttons">
				<CustomSelect
					name="Difficulty:"
					active={diff as string}
					options={["Easy", "Medium", "Hard"]}
				/>
				<button className="main-button" id="generate" onClick={handleGen}>
					Generate Board
				</button>
				<CustomSelect
					name="Game speed:"
					active={speed as string}
					options={["Slow", "Fast"]}
				/>
			</div>
			<div style={{ textAlign: "right" }}>
				<AiFillGithub
					size={40}
					color={"#f3eff5"}
					onClick={() =>
						(window.location.href = "https://github.com/dxmv/sudokuSolver")
					}
					id="github-link"
				/>
			</div>
		</nav>
	);
}
