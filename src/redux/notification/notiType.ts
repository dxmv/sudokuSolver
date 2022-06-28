export interface State {
	notifications: INotification[];
}

export interface INotification {
	type: "Success" | "Warning";
	text: string;
	id: string;
}

export type Action = IAddNoti | IDeleteNoti;

export interface IAddNoti {
	type: "ADD_NOTI";
	payload: {
		text: string;
		type: "Success" | "Warning";
		id: string;
	};
}

export interface IDeleteNoti {
	type: "DELETE_NOTI";
	payload: string;
}
