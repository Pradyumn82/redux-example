import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../features/todos/todoSlice";
export const TodoList = () => {
  const [todoItem, settodoItem] = useState("");
  const [editIndex, seteditIndex] = useState("");
  const [toggleBtn, settoggleBtn] = useState(true);
  const todolist = useSelector((state) => state.todolist.todoList);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    settodoItem(e.target.value);
  };
  const handleAddTodo = () => {
    if (toggleBtn) {
      dispatch(addTodo(todoItem));
    } else {
      dispatch(editTodo({ index: editIndex, value: todoItem }));
      settoggleBtn(true);
      seteditIndex("");
    }

    settodoItem("");
  };
  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };
  const handleEdit = (item, index) => {
    settodoItem(item);
    seteditIndex(index);
    settoggleBtn(false);
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Typography variant="h3">Task</Typography>
        <TextField
          onChange={(e) => handleChange(e)}
          value={todoItem}
          name="todoItem"
        ></TextField>
        <Button onClick={handleAddTodo} variant="contained" color="primary">
          {toggleBtn ? "ADD" : "Update"}
        </Button>
      </div>
      <div>
        {todolist.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <Typography style={{ marginLeft: "20px" }} key={index}>
              {item}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleDelete(index)}
              style={{ marginLeft: "20px" }}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEdit(item, index)}
              style={{ marginLeft: "20px" }}
            >
              Edit
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
