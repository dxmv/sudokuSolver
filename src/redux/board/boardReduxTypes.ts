import { Board } from "../../types";

export interface State {
	board: Board;
}

export type Actions = INewBoard | IClearBoard;

export interface INewBoard {
	type: "NEW_BOARD";
	payload: number[][];
}

export interface IClearBoard {
	type: "CLEAR_BOARD";
}
