import { configureStore } from "@reduxjs/toolkit";
// importing the reducer from todo slice
import todosReducer from "../features/slices/todoSlice";

// use 'configreStrore'  function to create the store
export const store = configureStore({
  reducer: {
    todos: todosReducer
  }
});

// defining the 'rootstate' as the return type
export type RootState = ReturnType<typeof store.getState>;
