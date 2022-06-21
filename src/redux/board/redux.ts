import { Board, Cell } from "../../types";
import { State, Actions } from "./boardReduxTypes";

const initialState: State = {
	board: [],
	previous: [],
};

const boardRedux = (state = initialState, action: Actions): State => {
	let newBoard: Board;
	switch (action.type) {
		case "NEW_BOARD":
			let payload = action.payload;
			newBoard = [];
			let addingSolve = true;
			for (let i = 0; i < payload.length; i++) {
				newBoard.push([]);
				for (let j = 0; j < payload[i].length; j++) {
					const cell: Cell = {
						value: payload[i][j],
					};
					if (payload[i][j] === 0) {
						addingSolve = false;
					}
					newBoard[i].push(cell);
				}
			}
			if (!addingSolve) {
				const copy = [...state.previous];
				copy.push(newBoard);
				return {
					...state,
					board: newBoard,
					previous: copy,
				};
			} else {
				return {
					...state,
					board: newBoard,
				};
			}
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
				previous: [...state.previous, newBoard],
			};
		case "PREVIOUS_BOARD":
			const copy = [...state.previous];
			if (copy.length <= 1) {
				throw new Error("No previous board");
			}
			const pop = copy.pop();
			console.log(copy);
			if (pop) {
				newBoard = pop;
				return {
					...state,
					board: newBoard,
					previous: copy,
				};
			} else {
				throw new Error("No previous board");
			}
		default:
			return state;
	}
};

export default boardRedux;
