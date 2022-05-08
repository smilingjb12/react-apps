import { TextField } from "@mui/material";
import React, { FC, ReactElement, useState } from "react";
import { useRecoilState } from "recoil";
import Loader from "../../../components/Loader";
import { useTodoService } from "../actions";
import { todoState } from "../state";

const TodoInput: FC<{}> = (): ReactElement => {
  const [_, setState] = useRecoilState(todoState);
  const [text, setText] = useState('');
  const [postingEmptyText, setPostingEmptyText] = useState(false);
  const todoService = useTodoService();

  const handleTextChange = (event: any): void => {
    setText(event.target.value);
  };

  const isEmpty = (text: string): boolean => {
    return /^\s*$/.test(text)
  };

  const handleKeyPress = (event: any): void => {
    if (event.key === 'Enter') {
      if (isEmpty(text)) {
        setPostingEmptyText(true);
        return;
      } else {
        setPostingEmptyText(false);
      }
      todoService.createTodo(text);
      setText('');
    }
  };

  return (
    <React.Suspense fallback={<Loader />}>
      <TextField
        label="What needs to be done"
        value={text}
        error={postingEmptyText}
        variant="standard"
        sx={{ width: '100%' }}
        onKeyDown={handleKeyPress}
        onChange={handleTextChange} />
    </React.Suspense>
  );
};

export default TodoInput;