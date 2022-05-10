import { Box, CircularProgress } from "@mui/material";
import { FC, ReactElement } from "react";
import { APP_HEADER_HEIGHT } from "../constants";

const Loader: FC<{}> = (): ReactElement => {
  return (
    <Box sx={{
      width: '100%',
      height: `calc(100vh - ${APP_HEADER_HEIGHT})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;