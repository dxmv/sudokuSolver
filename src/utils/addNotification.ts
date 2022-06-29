import { ADD_NOTI, DELETE_NOTI } from "../redux/notification/notiAction";
import { v4 as uuid4 } from "uuid";

const NOTI_LENGTH = 3000;

const addNotification = async (
	dispatch: any,
	text: string,
	type: "Success" | "Warning"
) => {
	const id = uuid4();

	// Create a new notification
	dispatch(ADD_NOTI(text, type, id));

	// The end animation, whose length is 500 ms
	await setTimeout(() => {
		document.getElementById(id)?.classList.add("notification-end");
	}, NOTI_LENGTH - 500);

	// Delete the notification
	await setTimeout(() => {
		dispatch(DELETE_NOTI(id));
	}, NOTI_LENGTH);
};

export default addNotification;
