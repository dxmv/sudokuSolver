import { Board } from "../types";

const animationToNormal = (grid: Board) => {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			document
				.getElementById(`${i} ${j}`)
				?.classList.remove("current", "checked");
		}
	}
};

export default animationToNormal;
