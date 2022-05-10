import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoItem {
  id: number;
  isDone: boolean;
  text: string;
}

export interface TodoState {
  items: TodoItem[];
  loading: boolean;
}

const initialState: TodoState = {
  items: [],
  loading: false
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<{ text: string }>) => {
      state.items.push({
        id: state.items.length + 1,
        isDone: false,
        text: action.payload.text
      });
    },
    fetchTodos: (state) => {
      state.loading = true;
    },
    fetchTodosSuccess: (state, action: PayloadAction<{ todos: TodoItem[] }>) => {
      state.loading = false;
      state.items = action.payload.todos;
    },
    fetchTodosFailure: state => {
      state.loading = false;
    },
    deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
      console.log(action.type);
      state.items = state.items.filter(i => i.id !== action.payload.id);
    },
    toggleTodo: (state, action: PayloadAction<{ id: number }>) => {
      const todo = state.items.find(i => i.id === action.payload.id)!;
      todo.isDone = !todo.isDone;
    }
  }
});

export const actions = todoSlice.actions;

export default todoSlice.reducer;