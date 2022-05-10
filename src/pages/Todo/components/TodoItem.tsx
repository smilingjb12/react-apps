import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { FC, ReactElement } from "react";
import { useAppDispatch } from "../../../hooks";
import { actions, TodoItem as TodoItemModel } from "../todoSlice";

interface Props {
  item: TodoItemModel;
}

const TodoItem: FC<Props> = ({ item }: Props): ReactElement => {
  const dispatch = useAppDispatch();

  const removeItem = (item: TodoItemModel): void => {
    dispatch(actions.deleteTodo({ id: item.id }));
  };

  const toggleTodo = (item: TodoItemModel): void => {
    dispatch(actions.toggleTodo({ id: item.id }));
  };

  return (
    <ListItem
      disablePadding
      sx={{ color: item.isDone ? '#aaa' : 'black' }}>
      <ListItemButton
        dense
        onClick={() => toggleTodo(item)}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={item.isDone}
            disableRipple></Checkbox>
        </ListItemIcon>
        <ListItemText primary={item.text}></ListItemText>
      </ListItemButton>
      <IconButton onClick={() => removeItem(item)}>
        <DeleteOutlineIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;