import { State, Action } from "./notiType";

const initialState: State = {
	notifications: [],
};

const notificationReducer = (state = initialState, action: Action): State => {
	switch (action.type) {
		case "ADD_NOTI":
			return {
				...state,
				notifications: [
					...state.notifications,
					{
						type: action.payload.type,
						text: action.payload.text,
						id: action.payload.id,
					},
				],
			};
		case "DELETE_NOTI":
			const arr = [...state.notifications];
			arr.splice(state.notifications.findIndex(el => el.id === action.payload));
			return {
				...state,
				notifications: arr,
			};
		default:
			return state;
	}
};

export default notificationReducer;
