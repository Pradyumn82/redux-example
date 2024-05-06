
import todoReducers from "./features/todos/todoSlice"

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    todolist: todoReducers
  }
})