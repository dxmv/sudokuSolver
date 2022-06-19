import { IClearBoard, INewBoard } from "./boardReduxTypes";

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
