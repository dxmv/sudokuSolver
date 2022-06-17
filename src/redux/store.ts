import { combineReducers, createStore } from "redux";
import boardRedux from "./board/redux";

const reducers = combineReducers({ board: boardRedux });
const store = createStore(reducers);

export default store;
export type RootState = ReturnType<typeof store.getState>;
