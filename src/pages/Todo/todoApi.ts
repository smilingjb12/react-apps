import { TodoItem } from "./todoSlice";

function fetchTodos(): Promise<TodoItem[]> {
  return new Promise(resolve => {
    setTimeout(() => resolve([
      { id: 1, text: 'Buy milk', isDone: false },
      { id: 2, text: 'Go for a jog', isDone: false },
      { id: 3, text: 'Get 2 million dollars', isDone: true }
    ]), 1000)
  });
}

function saveTodo(text: string): Promise<number> {
  const newId = Math.round(Math.random() * 100000000);
  return new Promise(resolve => {
    setTimeout(() => resolve(newId), 800);
  });
}

function deleteTodo(id: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 1000);
  });
}

function toggleDone(id: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 1000);
  });
}

export const todoApi = {
  fetchTodos,
  saveTodo,
  deleteTodo,
  toggleDone
};
