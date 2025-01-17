import { combineReducers, createStore } from "redux";
import todosReducer from "../reducers/todosReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
});

const store = createStore(rootReducer);
export default store;

