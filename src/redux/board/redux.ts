import { Board, Cell } from "../../types";
import { State, Actions } from "./boardReduxTypes";

const initialState: State = {
	board: [],
};

const boardRedux = (state = initialState, action: Actions): State => {
	let newBoard: Board;
	switch (action.type) {
		case "NEW_BOARD":
			let payload = action.payload;
			newBoard = [];
			for (let i = 0; i < payload.length; i++) {
				newBoard.push([]);
				for (let j = 0; j < payload[i].length; j++) {
					const cell: Cell = {
						value: payload[i][j],
					};
					newBoard[i].push(cell);
				}
			}
			return {
				...state,
				board: newBoard,
			};
		case "CLEAR_BOARD":
			newBoard = [];
			for (let i = 0; i < 9; i++) {
				newBoard.push([]);
				for (let j = 0; j < 9; j++) {
					newBoard[i].push({ value: 0 });
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
