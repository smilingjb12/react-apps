import { IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { FC, ReactElement } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { PLAYER_BAR_HEIGHT } from "../../../constants";
import { Track } from "../fileStorage";
import { currentTrackState } from "../state";
import { useTrackStorage } from "../trackStorage";

const Library: FC<{}> = (): ReactElement => {
  const tracks = useTrackStorage().getTracks();
  const [trackState, setTrackState] = useRecoilState(currentTrackState);
  const currentTrack = useRecoilValue(currentTrackState);

  const playTrack = (track: Track): void => {
    if (currentTrack?.track.id === track.id) {
      return;
    }
    setTrackState(oldState => ({
      track,
      second: 0,
      audioSource: new Audio(`/tracks/${track.filePath}`),
      paused: false
    }));
  };

  return (
    <ImageList sx={{ width: '100%', height: `calc(100% - ${PLAYER_BAR_HEIGHT})` }} cols={4} rowHeight={300}>
      {tracks.map((track: Track) => (
        <ImageListItem
          key={track.id}
          onClick={() => playTrack(track)}
          sx={{ '&:hover': { cursor: 'pointer' } }}>
          <img
            alt={track.title}
            src={`/tracks/${track.coverPath}`}
          />
          <ImageListItemBar
            title={track.title}
            subtitle={track.artist}
            actionIcon={
              <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54' }}></IconButton>
            }>
          </ImageListItemBar>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Library;
