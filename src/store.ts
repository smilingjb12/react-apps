import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from './pages/Counter/counterSlice';
import { applyTodoEffects } from './pages/Todo/sagas';
import todoReducer from './pages/Todo/todoSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(applyTodoEffects);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;