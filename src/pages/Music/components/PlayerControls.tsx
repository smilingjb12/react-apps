import { FastForwardRounded, FastRewindRounded, PauseRounded, PlayArrowRounded } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import produce from "immer";
import { FC, ReactElement } from "react";
import { useRecoilState } from "recoil";
import { currentTrackState } from "../state";

const PlayerControls: FC<{}> = (): ReactElement => {
  const mainIconColor = '#000';
  const [currentTrack, setCurrentTrack] = useRecoilState(currentTrackState);

  const setPaused = (paused: boolean): void => {
    setCurrentTrack(oldTrack => produce(oldTrack, draft => {
      draft!.paused = paused;
    }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        mt: -1,
      }}
    >
      <IconButton aria-label="previous song">
        <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
      </IconButton>
      <IconButton
        aria-label={currentTrack?.paused ? 'play' : 'pause'}
        onClick={() => setPaused(!currentTrack?.paused)}
      >
        {currentTrack?.paused ? (
          <PlayArrowRounded
            sx={{ fontSize: '3rem' }}
            htmlColor={mainIconColor}
          />
        ) : (
          <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
        )}
      </IconButton>
      <IconButton aria-label="next song">
        <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
      </IconButton>
    </Box>
  );
};

export default PlayerControls;