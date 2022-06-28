import { IChangeDiff, IChangeSpeed, Speed, Difficulty } from "./filterTypes";

export const CHANGE_DIFFICULTY = (diff: Difficulty): IChangeDiff => {
	return {
		type: "CHANGE_DIFF",
		payload: diff,
	};
};

export const CHANGE_SPEED = (speed: Speed): IChangeSpeed => {
	return {
		type: "CHANGE_SPEED",
		payload: speed,
	};
};
