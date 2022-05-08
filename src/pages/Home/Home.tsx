import { Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";

const Home: FC<{}> = (): ReactElement => {
  return (
    <Box sx={{
      flexGrow: 1,
      backgroundColor: 'whitesmoke',
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Typography variant="h3">Home</Typography>
    </Box>
  );
}

export default Home;