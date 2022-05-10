import { CircularProgress, List } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { useTodoSelectors } from "../selectors";
import TodoItem from "./TodoItem";

const TodoList: FC<{}> = (): ReactElement => {
  const data = useTodoSelectors();

  return (
    <React.Fragment>
      {data.isLoadingTodos && (
        <CircularProgress sx={{ marginTop: 3 }} />
      )}
      <List sx={{
        width: '100%',
        bgColor: 'background.paper',
        overflow: 'auto',
        maxHeight: '60vh'
      }}>
        {data.info.todos.map(item => (<TodoItem key={item.id} item={item} />))}
      </List>
    </React.Fragment>
  );
};

export default TodoList;