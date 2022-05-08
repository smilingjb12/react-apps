import { Box, styled, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { currentTrackSelector } from "../selectors";

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

function formatDuration(value: number) {
  const minute = Math.floor(value / 60);
  const secondLeft = value - minute * 60;
  return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
}

const TrackProgressText: FC<{}> = (): ReactElement => {
  const currentTrack = useRecoilValue(currentTrackSelector)!;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '1rem',
        marginRight: '2rem',
        width: 20
      }}
    >
      <TinyText>{formatDuration(currentTrack.second)}</TinyText>
      <TinyText>-{formatDuration(currentTrack.track.duration)}</TinyText>
    </Box>
  );
};

export default TrackProgressText;