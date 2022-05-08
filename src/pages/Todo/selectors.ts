import { selector } from "recoil";
import { todoApi } from "./backend";
import { todoState } from "./state";

export const todoInfo = selector({
  key: 'todoInfo',
  get: ({ get }) => {

    const remainingItems = get(todoState).items.filter(i => !i.isDone).length;

    return {
      todos: get(todoState).items,
      remaining: remainingItems,
      total: get(todoState).items.length
    };
  }
});

export const todoListQuery = selector({
  key: 'todoListQuery',
  get: async ({ get }) => {
    const items = await todoApi.fetchTodos();

    return items;
  }
});