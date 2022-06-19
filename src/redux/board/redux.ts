import { Board, Cell } from "../../types";
import { InitialState, Actions } from "./boardReduxTypes";

const initialState: InitialState = {
	board: [],
};

const boardRedux = (state = initialState, action: Actions) => {
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
		default:
			return state;
	}
};

export default boardRedux;
