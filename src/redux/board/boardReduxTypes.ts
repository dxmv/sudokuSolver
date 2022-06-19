import { Board } from "../../types";

export interface State {
	board: Board;
	previous: Board[];
}

export type Actions = INewBoard | IClearBoard | IPreviousBoard;

export interface INewBoard {
	type: "NEW_BOARD";
	payload: number[][];
}

export interface IClearBoard {
	type: "CLEAR_BOARD";
}

export interface IPreviousBoard {
	type: "PREVIOUS_BOARD";
}
