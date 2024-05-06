import { useState } from "react";
import { Button, TextField } from "@mui/material";

const Crud = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, settodoTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "task") {
      settodoTitle(e.target.value);
    } else if (e.target.name === "description") {
      setNewDescription(e.target.value);
    }
  };

  const handleAdd = () => {
    if (todoTitle.trim()) {
      const todoItem = { task: todoTitle.trim(), description: newDescription };
      setTodos([...todos, todoItem]);
      settodoTitle("");
      setNewDescription("");
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

  const handleUpdate = (item, index) => {
    settodoTitle(item.task);
    setNewDescription(item.description);
    setEditIndex(index);
  };

  const handleUpdateTask = () => {
    if (todoTitle.trim() && editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = {
        task: todoTitle.trim(),
        description: newDescription,
      };
      setTodos(updatedTodos);
      settodoTitle("");
      setNewDescription("");
      setEditIndex(null);
    }
  };

  return (
    <div>
      <div>
        <TextField
          name="task"
          value={todoTitle}
          onChange={handleChange}
          label="Task"
          variant="outlined"
          fullWidth
        />
        <TextField
          name="description"
          value={newDescription}
          onChange={handleChange}
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          style={{ marginTop: "10px" }}
        />
        <Button
          variant="contained"
          onClick={editIndex !== null ? handleUpdateTask : handleAdd}
          style={{ marginTop: "10px" }}
        >
          {editIndex !== null ? "Update" : "Add"}
        </Button>
      </div>
      <div style={{ marginTop: "20px" }}>
        {todos.map((item, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <div>
              <strong>{item.task}</strong> - {item.description}
            </div>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDelete(index)}
              style={{ marginRight: "10px" }}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleUpdate(item, index)}
            >
              Edit
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crud;
