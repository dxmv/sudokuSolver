import { Board } from "../../types";

export interface InitialState {
	board: Board;
}

export type Actions = INewBoard;

export interface INewBoard {
	type: "NEW_BOARD";
	payload: Board;
}
