import { ADD_TODO, DEL_TODO, EDIT_TODO } from "../actions";
const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DEL_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case EDIT_TODO:
      const { id, title, description } = action.payload;
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, title, description } : todo
      );
      return {
        ...state,
        todos: updatedTodos,
      };

    default:
      return state;
  }
};

export default todosReducer;