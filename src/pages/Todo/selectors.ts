import { useAppSelector } from "../../hooks";

export function useTodoSelectors() {
  const info = useAppSelector(state => ({
    total: state.todo.items.length,
    remaining: state.todo.items.filter(i => !i.isDone).length,
    todos: state.todo.items
  }));

  const isLoadingTodos = useAppSelector(state => state.todo.loading);

  return { info, isLoadingTodos };
}
