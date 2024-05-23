import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  id: number;
  todo: string;
  isCompleted: boolean;
}

interface MyState {
  todosList: TodoState[];
}

const initialState: MyState = {
  todosList: [],
};

interface AddTodoPayload {
  id: number;
  todo: string;
  isCompleted: boolean;
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // push new todo in todos store
    addTodo(state, action: PayloadAction<AddTodoPayload>) {
      const { id, todo, isCompleted } = action.payload;
      state.todosList.push({
        id,
        todo,
        isCompleted,
      });
    },
    // toggle checkbox click
    toggleCheckbox(state, action: PayloadAction<number>){
      const id = action.payload;
      const todo = state.todosList.find(todo => todo.id === id);
      if(todo) {
        todo.isCompleted = !todo.isCompleted
      }
    }
  },
});

export const { addTodo, toggleCheckbox } = todosSlice.actions;

export default todosSlice.reducer;
