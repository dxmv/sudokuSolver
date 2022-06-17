import { Board } from "../../types";
import { INewBoard } from "./boardReduxTypes";

export const NEW_BOARD = (board: Board): INewBoard => {
	return {
		type: "NEW_BOARD",
		payload: [...board],
	};
};
