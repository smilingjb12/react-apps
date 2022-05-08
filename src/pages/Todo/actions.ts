import produce from "immer";
import { useRecoilState } from "recoil";
import { todoApi } from "./backend";
import { todoState } from './state';

export function useTodoService() {
  const [_, setState] = useRecoilState(todoState);

  const createTodo = async (text: string): Promise<void> => {
    const todoId = await todoApi.saveTodo(text);
    setState(oldState => produce(oldState, draft => {
      draft.items.push({
        id: todoId,
        isDone: false,
        text
      });
    }));
  };

  const deleteTodo = async (id: number): Promise<void> => {
    await todoApi.deleteTodo(id);
  };

  const toggleTodo = async (id: number): Promise<void> => {
    await todoApi.toggleDone(id);
  };

  return { createTodo, deleteTodo, toggleTodo };
}