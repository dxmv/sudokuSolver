import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Board from "./components/Board/Board";
import Nav from "./components/Navigation/Nav";
import { NEW_BOARD } from "./redux/board/actions";
import "./style.css";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			NEW_BOARD([
				[0, 0, 0, 2, 6, 0, 7, 0, 1],
				[6, 8, 0, 0, 7, 0, 0, 9, 0],
				[1, 9, 0, 0, 0, 4, 5, 0, 0],
				[8, 2, 0, 1, 0, 0, 0, 4, 0],
				[0, 0, 4, 6, 0, 2, 9, 0, 0],
				[0, 5, 0, 0, 0, 3, 0, 2, 8],
				[0, 0, 9, 3, 0, 0, 0, 7, 4],
				[0, 4, 0, 0, 5, 0, 0, 3, 6],
				[7, 0, 3, 0, 1, 8, 0, 0, 0],
			])
		);
	});

	return (
		<>
			<Nav />
			<Board />
		</>
	);
}

export default App;
