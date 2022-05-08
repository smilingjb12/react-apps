import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import produce from "immer";
import { FC, ReactElement } from "react";
import { useRecoilState } from "recoil";
import { useTodoService } from "../actions";
import { TodoItem as TodoItemModel, todoState } from "../state";

interface Props {
  item: TodoItemModel;
}

const TodoItem: FC<Props> = ({ item }: Props): ReactElement => {
  const [state, setState] = useRecoilState(todoState);
  const todoService = useTodoService();

  const removeItem = (item: TodoItemModel): void => {
    setState(oldState => produce(oldState, draft => {
      draft.items = draft.items.filter(i => i.id !== item.id);
    }));
    todoService.deleteTodo(item.id);
  };

  const toggleTodo = (item: TodoItemModel): void => {
    setState(oldState => produce(oldState, draft => {
      const todo = draft.items.find(i => i.id === item.id)!;
      todo.isDone = !todo.isDone;
    }));
    todoService.toggleTodo(item.id);
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