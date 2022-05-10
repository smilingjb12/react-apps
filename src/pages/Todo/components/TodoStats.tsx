import { Box, Chip } from "@mui/material";
import { FC, ReactElement } from "react";
import { useTodoSelectors } from "../selectors";

const TodoStats: FC<{}> = (): ReactElement => {
  const info = useTodoSelectors().info;

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%'
    }}>
      <Chip sx={{ marginRight: '0.5rem' }} label={`Total: ${info.total}`} variant="outlined" />
      <Chip label={`Remaining: ${info.remaining}`} variant="outlined" />
    </Box>
  );
};

export default TodoStats;