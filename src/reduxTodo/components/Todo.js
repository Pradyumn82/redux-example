import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import { addTodo, deleteTodo, editTodo } from "../actions";
const Todo = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleAdd = () => {
    if (newTitle.trim() !== "") {
      dispatch(addTodo({
        id: Date.now(),
        title: newTitle,
        description: newDescription
      }));
      setNewTitle("");
      setNewDescription("");
    }
  };

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const handleEdit = (todo) => {
    setNewTitle(todo.title);
    setNewDescription(todo.description);
    setEditIndex(todo.id);
  };

  const handleUpdateTask = () => {
    if (newTitle.trim() !== "" && editIndex !== null) {
      dispatch(editTodo(editIndex, newTitle, newDescription));
      setNewTitle("");
      setNewDescription("");
      setEditIndex(null);
    }
  };

  return (
    <div>
      <TextField
        label="Task Title"
        variant="outlined"
        fullWidth
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "10px" }}
        onClick={editIndex !== null ? handleUpdateTask : handleAdd}
      >
        {editIndex !== null ? "Update" : "Add"}
      </Button>

      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleEdit(todo)}
            >
              Edit
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;