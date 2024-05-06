import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: [],
}

export const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload)
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((item, index) => index !== action.payload)
    },
    editTodo: (state, action) => {
      const { index, value } = action.payload
      state.todoList[index] = value
    }
  }
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer
