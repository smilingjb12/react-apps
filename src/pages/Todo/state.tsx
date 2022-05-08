import { atom, selector } from "recoil";
import { todoApi } from "./backend";

export interface TodoItem {
  id: number;
  isDone: boolean;
  text: string;
}

export interface TodoState {
  items: TodoItem[];
}

export const todoState = atom<TodoState>({
  key: 'todoState',
  default: selector({
    key: 'todosLoader',
    get: async () => {
      const items = await todoApi.fetchTodos();
      return { items };
    }
  })
});
