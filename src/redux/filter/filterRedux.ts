import { State, Action, Speed, Difficulty } from "./filterTypes";

const initialState: State = {
	speed: "Fast",
	difficulty: "Medium",
};

const filterRedux = (state = initialState, action: Action): State => {
	switch (action.type) {
		case "CHANGE_DIFF":
			return {
				...state,
				difficulty: action.payload as Difficulty,
			};
		case "CHANGE_SPEED":
			return {
				...state,
				speed: action.payload as Speed,
			};
		default:
			return {
				...state,
			};
	}
};

export default filterRedux;
