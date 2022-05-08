import { Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { currentTrackSelector } from "../selectors";

const CoverImage = styled(Box)({
  width: 60,
  height: 60,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
});

const TrackInfoPanel: FC<{}> = (): ReactElement => {
  const currentTrack = useRecoilValue(currentTrackSelector);

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      position: 'absolute',
      left: 16,
      bottom: 7
    }}>
      <CoverImage>
        <img
          alt="Album cover"
          src={`/tracks/${currentTrack?.track.coverPath}`}
        />
      </CoverImage>
      <Box sx={{ ml: 1.5, minWidth: 0 }}>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          {currentTrack?.track.artist}
        </Typography>
        <Typography noWrap letterSpacing={-0.25}>
          {currentTrack?.track.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default TrackInfoPanel;