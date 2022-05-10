import { Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { useAppSelector } from "../../hooks";
import IncrementButton from "./components/IncrementButton";

const Counter: FC<{}> = (): ReactElement => {
  const count = useAppSelector(state => state.counter.count);
  const clicks = useAppSelector(state => state.counter.clicks);

  return (
    <Box sx={{
      flexGrow: 1,
      backgroundColor: 'whitesmoke',
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      paddingBottom: '5rem',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <IncrementButton label="Less" increment={-1} />
        <Box sx={{ padding: '0 2rem', fontSize: '2rem', minWidth: '2rem' }}>{count}</Box>
        <IncrementButton label="More" increment={+1} />
      </Box>
      <Typography variant="subtitle2" sx={{ paddingTop: '1rem' }}>Clicks: {clicks}</Typography>
    </Box>
  );
}

export default Counter;