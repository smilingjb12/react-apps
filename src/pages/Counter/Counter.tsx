import { Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import IncrementButton from "./components/IncrementButton";
import { counterStats } from "./selectors";
import { counterState } from "./state";

const Counter: FC<{}> = (): ReactElement => {
  const stats = useRecoilValue(counterStats);
  const [state, setState] = useRecoilState(counterState);

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
        <Box sx={{ padding: '0 2rem', fontSize: '2rem', minWidth: '2rem' }}>{stats.current}</Box>
        <IncrementButton label="More" increment={+1} />
      </Box>
      <Typography variant="subtitle2" sx={{ paddingTop: '1rem' }}>Clicks: {stats.clicks}</Typography>
    </Box>
  );
}

export default Counter;