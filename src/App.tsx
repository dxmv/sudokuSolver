import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Board from "./components/Board/Board";
import Nav from "./components/Navigation/Nav";
import { NEW_BOARD } from "./redux/board/actions";
import "./style.css";
import Notification from "./components/Notification/Notification";
import { RootState } from "./redux/store";

function App() {
	const dispatch = useDispatch();
	const notifications = useSelector(
		(state: RootState) => state.notifications.notifications
	);
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
	}, []);

	return (
		<>
			<Nav />
			<Board />
			<div className="notifications">
				{notifications.slice(0, 3).map(el => (
					<Notification key={el.id} text={el.text} type={el.type} id={el.id} />
				))}
			</div>
		</>
	);
}

export default App;
