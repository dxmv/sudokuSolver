import { combineReducers, createStore } from "redux";
import boardRedux from "./board/redux";
import filterRedux from "./filter/filterRedux";

const reducers = combineReducers({ board: boardRedux, filter: filterRedux });
const store = createStore(reducers);

export default store;
export type RootState = ReturnType<typeof store.getState>;
