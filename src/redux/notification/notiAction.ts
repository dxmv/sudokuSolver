import { IAddNoti, IDeleteNoti } from "./notiType";

export const ADD_NOTI = (
	text: string,
	type: "Success" | "Warning",
	id: string
): IAddNoti => {
	return {
		type: "ADD_NOTI",
		payload: {
			text: text,
			type: type,
			id: id,
		},
	};
};

export const DELETE_NOTI = (id: string): IDeleteNoti => {
	return {
		type: "DELETE_NOTI",
		payload: id,
	};
};
