import { Box, Container, Typography } from "@mui/material";
import { FC, ReactElement } from "react";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'secondary.main',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'flex-end'
        }}
        >
          <Typography color="black" variant="h6">
            React apps
          </Typography>
          <Typography
            sx={{ paddingLeft: '1rem' }}
            color="textSecondary"
            variant="subtitle1"
          >
            {`${new Date().getFullYear()}`}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};