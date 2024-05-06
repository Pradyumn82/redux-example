import React from "react";
import { Provider } from "react-redux";
import store from "../store/configureStore";
import Todo from "./Todo";

const TodoRedux = () => {
  return (
    <div>
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
};

export default TodoRedux;
