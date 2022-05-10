import { TextField } from "@mui/material";
import React, { FC, ReactElement, useState } from "react";
import Loader from "../../../components/Loader";
import { useAppDispatch } from "../../../hooks";
import { actions } from "../todoSlice";

const TodoInput: FC<{}> = (): ReactElement => {
  const [text, setText] = useState('');
  const [postingEmptyText, setPostingEmptyText] = useState(false);
  const dispatch = useAppDispatch();

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
      dispatch(actions.createTodo({ text }));
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