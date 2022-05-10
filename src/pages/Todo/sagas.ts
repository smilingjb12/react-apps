import { call, put, takeLatest } from 'redux-saga/effects';
import { todoApi } from './todoApi';
import { actions } from './todoSlice';

function* fetchTodos(): any {
  try {
    const todos = yield call(todoApi.fetchTodos);
    yield put({ type: actions.fetchTodosSuccess.type, payload: { todos } });
  } catch {
    yield put({ type: actions.fetchTodosFailure.type });
  }
}

export function* applyTodoEffects() {
  yield takeLatest(actions.fetchTodos.type, fetchTodos);
}
