import { Button } from "@mui/material";
import { FC, ReactElement } from "react";
import { useAppDispatch } from "../../../hooks";
import { actions } from '../counterSlice';

interface Props {
  label: string;
  increment: number;
}

const IncrementButton: FC<Props> = (props: Props): ReactElement => {
  const dispatch = useAppDispatch();

  const incrementCount = (diff: number): void => {
    dispatch(diff > 0 ? actions.increment() : actions.decrement());
  };

  return (
    <Button
      variant="contained"
      sx={{ fontSize: '2rem' }}
      onClick={() => incrementCount(props.increment)}>{props.label}</Button>
  );
};

export default IncrementButton;

