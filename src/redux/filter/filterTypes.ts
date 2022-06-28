export interface State {
	speed: Speed;
	difficulty: Difficulty;
}

export type Action = IChangeSpeed | IChangeDiff;

export type Speed = "Slow" | "Fast";
export type Difficulty = "Easy" | "Medium" | "Hard";

export interface IChangeSpeed {
	type: "CHANGE_SPEED";
	payload: Speed;
}

export interface IChangeDiff {
	type: "CHANGE_DIFF";
	payload: Difficulty;
}
