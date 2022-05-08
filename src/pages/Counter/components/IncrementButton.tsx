import { Button } from "@mui/material";
import { FC, ReactElement } from "react";
import { useRecoilState } from "recoil";
import { counterState } from "../state";

interface Props {
  label: string;
  increment: number;
}

const IncrementButton: FC<Props> = (props: Props): ReactElement => {
  const [state, setState] = useRecoilState(counterState);

  const incrementCount = (increment: number): void => {
    setState(oldState => ({
      count: oldState.count + increment,
      clicks: oldState.clicks + 1
    }));
  };

  return (
    <Button
      variant="contained"
      sx={{ fontSize: '2rem' }}
      onClick={() => incrementCount(props.increment)}>{props.label}</Button>
  );
};

export default IncrementButton;

