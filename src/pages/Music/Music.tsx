import { ButtonGroup, Container } from "@mui/material";
import { FC, ReactElement, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import PlayerBar from "./components/PlayerBar";
import TabLink from "./components/TabLink";
import { currentTrackSelector, volumeSelector } from "./selectors";

const Music: FC<{}> = (): ReactElement => {
  const currentTrack = useRecoilValue(currentTrackSelector);
  const volume = useRecoilValue(volumeSelector);

  const makePlayerBar = (): ReactElement | null => {
    if (currentTrack != null) {
      return <PlayerBar />
    }

    return null;
  };

  useEffect(() => {
    if (currentTrack != null) {
      if (!currentTrack.paused) {
        currentTrack.audioSource.play();
      }
    }

    return () => {
      currentTrack?.audioSource?.pause();
    };
  }, [currentTrack]);

  useEffect(() => {
    if (currentTrack != null) {
      currentTrack.audioSource.volume = volume / 100.0;
    }
  }, [volume, currentTrack]);

  return (
    <Container sx={{
      background: 'white',
      width: '80vw',
      height: '100%',
      padding: '2rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      boxShadow: 2,
      margin: '0'
    }}>
      <ButtonGroup variant="contained">
        <TabLink to={'trending'} label="Trending" />
        <TabLink to={'library'} label="Library" />
      </ButtonGroup>
      <Outlet />
      {makePlayerBar()}
    </Container>
  );
};

export default Music;