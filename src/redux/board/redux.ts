import { InitialState, Actions } from "./boardReduxTypes";

const initialState: InitialState = {
	board: [],
};

const boardRedux = (state = initialState, action: Actions) => {
	switch (action.type) {
		case "NEW_BOARD":
			return {
				...state,
				board: action.payload,
			};
		default:
			return state;
	}
};

export default boardRedux;
