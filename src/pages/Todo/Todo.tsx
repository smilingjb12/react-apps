import { Box, Container } from "@mui/material";
import React, { FC, ReactElement, useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import { actions } from './todoSlice';

const Todo: FC<{}> = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.fetchTodos());
  }, []);

  return (
    <Container sx={{
      background: 'white',
      width: '50%',
      height: '100%',
      padding: '2rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: 2,
      margin: '2rem 0'
    }}>
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
        <TodoInput />
        <TodoList />
      </Box>
      <TodoStats />
    </Container>
  );
}

export default Todo;
