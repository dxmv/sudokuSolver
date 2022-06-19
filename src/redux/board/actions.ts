import { INewBoard } from "./boardReduxTypes";

export const NEW_BOARD = (board: number[][]): INewBoard => {
	return {
		type: "NEW_BOARD",
		payload: [...board],
	};
};
