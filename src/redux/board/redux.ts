import { Board, Cell } from "../../types";
import { State, Actions } from "./boardReduxTypes";

const initialState: State = {
	board: [],
};

const boardRedux = (state = initialState, action: Actions): State => {
	switch (action.type) {
		case "NEW_BOARD":
			let payload = action.payload;
			const arr: Board = [];
			for (let i = 0; i < payload.length; i++) {
				arr.push([]);
				for (let j = 0; j < payload[i].length; j++) {
					const cell: Cell = {
						value: payload[i][j],
						possible: [],
					};
					arr[i].push(cell);
				}
			}
			return {
				...state,
				board: arr,
			};
		case "CLEAR_BOARD":
			const newBoard: Board = [];
			for (let i = 0; i < 9; i++) {
				newBoard.push([]);
				for (let j = 0; j < 9; j++) {
					newBoard[i].push({ value: 0, possible: [] });
				}
			}
			return {
				...state,
				board: newBoard,
			};
		default:
			return state;
	}
};

export default boardRedux;
