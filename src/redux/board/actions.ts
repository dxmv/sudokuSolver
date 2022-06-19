import { IClearBoard, INewBoard, IPreviousBoard } from "./boardReduxTypes";

export const NEW_BOARD = (board: number[][]): INewBoard => {
	return {
		type: "NEW_BOARD",
		payload: [...board],
	};
};

export const CLEAR_BOARD = (): IClearBoard => {
	return {
		type: "CLEAR_BOARD",
	};
};

export const PREVIOUS_BOARD = (): IPreviousBoard => {
	return {
		type: "PREVIOUS_BOARD",
	};
};
