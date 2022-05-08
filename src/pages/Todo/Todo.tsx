import { Box, Chip, Container, List } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Loader from "../../components/Loader";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import { todoInfo } from "./selectors";
import { todoState } from "./state";

const Todo: FC<{}> = (): ReactElement => {
  const info = useRecoilValue(todoInfo);
  const [state, setState] = useRecoilState(todoState);

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
        <React.Suspense fallback={<Loader />}>
          <List sx={{
            width: '100%',
            bgColor: 'background.paper',
            overflow: 'auto',
            maxHeight: '60vh'
          }}>
            {info.todos.map(item => (<TodoItem key={item.id} item={item} />))}
          </List>
        </React.Suspense>
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%'
      }}>
        <Chip sx={{ marginRight: '0.5rem' }} label={`Total: ${info.total}`} variant="outlined" />
        <Chip label={`Remaining: ${info.remaining}`} variant="outlined" />
      </Box>
    </Container>
  );
}

export default Todo;
