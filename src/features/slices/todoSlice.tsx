import { createSlice, Slice } from "@reduxjs/toolkit";
import { PayloadAction } from "react-redux-typescript";
import { RootState } from "../../app/store";

//types
type TodoId = string;
// todo object
type Todo = {
  id: TodoId;
  title: string;
  completed: boolean;
};
// todo state
type TodosState = {
  todoList: Todo[];
};
// init state
const initialState = {
  todoList: []
} as TodosState;

const todoSlice = createSlice({
  // name used in action types
  name: "todos",
  // initial state
  initialState,
  // an object of "case reducers"
  // key names are used to generate actions
  reducers: {
    //  arguments of action are same first one is state
    //& second one is action
    addTodo(
      state, //type is infered from the initial state
      // `PayloadAction` is a generic-type
      // that allows you to specify an action
      // with a typped payload.
      action: PayloadAction<string, Todo>
    ) {
      state.todoList.push(action.payload);
    },
    toggleTodo(state, action: PayloadAction<string, Todo>) {
      //  find the index of passed task id
      const index = state.todoList.findIndex(
        ({ id }) => id === action.payload.id
      );
      //  if task id is found toggle the completed property
      if (index) {
        state.todoList[index].completed = !state.todoList[index].completed;
      }
    }
  }
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;

// create and export the selector
export const selectTodos = (state: RootState) => state.todos.todoList;
