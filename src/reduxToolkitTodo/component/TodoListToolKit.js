import React from "react";
import { TodoList } from "./TodoList";
import { store } from "../store";
import { Provider } from "react-redux";

const TodoListToolKit = () => {
  return (
    <div>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
};

export default TodoListToolKit;
