import { Box, Stack } from "@mui/material";
import { FC, ReactElement } from "react";
import styled from "styled-components";
import PlayerControls from './PlayerControls';
import TrackInfoPanel from './TrackInfoPanel';
import TrackProgressText from './TrackProgressText';
import TrackTimeSlider from './TrackTimeSlider';
import VolumeControl from './VolumeControl';

const WallPaper = styled(Box)({
  position: 'fixed',
  width: '100%',
  height: '4rem',
  bottom: 0,
  left: 0,
  background: 'linear-gradient(rgb(14 44 255) 0%,rgb(159 189 255) 100%)',
  transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s'
});

const Widget = styled(Box)({
  padding: 16,
  borderRadius: 16,
  width: '100%',
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor: 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
});

const PlayerBar: FC<{}> = (): ReactElement => {

  return (
    <Box sx={{
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0
    }}>
      <Widget>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Stack sx={{ width: '100%' }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <TrackTimeSlider />
              <TrackProgressText />
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <TrackInfoPanel />
              <PlayerControls />
              <VolumeControl />
            </Box>
          </Stack>
        </Box>
      </Widget>
      <WallPaper />
    </Box>
  );
};

export default PlayerBar;