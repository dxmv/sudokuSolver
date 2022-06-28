import { combineReducers, createStore } from "redux";
import boardRedux from "./board/redux";
import filterRedux from "./filter/filterRedux";
import notificationReducer from "./notification/notiReducer";

const reducers = combineReducers({
	board: boardRedux,
	filter: filterRedux,
	notifications: notificationReducer,
});
const store = createStore(reducers);

export default store;
export type RootState = ReturnType<typeof store.getState>;
