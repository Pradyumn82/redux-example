export const ADD_TODO = "ADD_TODO";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const DEL_TODO = "DEL_TODO";

export const deleteTodo = (id) => ({
  type: "DEL_TODO",
  payload: id,
});

export const EDIT_TODO = "EDIT_TODO";
 
export const editTodo = (todoId, updatedTitle, updatedDescription) => ({
  type: EDIT_TODO,
  payload: { id: todoId, title: updatedTitle, description: updatedDescription },
});