import { State, Action, INotification } from "./notiType";

const initialState: State = {
	notifications: [],
};

const notificationReducer = (state = initialState, action: Action): State => {
	switch (action.type) {
		case "ADD_NOTI":
			const noti: INotification = {
				type: action.payload.type,
				text: action.payload.text,
				id: action.payload.id,
			};
			return {
				...state,
				notifications: [...state.notifications, noti],
			};
		case "DELETE_NOTI":
			const index = state.notifications.findIndex(
				el => el.id === action.payload
			);
			const arr = [...state.notifications];
			arr.splice(index, 1);
			return {
				...state,
				notifications: arr,
			};
		default:
			return state;
	}
};

export default notificationReducer;
