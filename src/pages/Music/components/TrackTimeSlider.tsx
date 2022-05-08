import { Slider } from "@mui/material";
import produce from "immer";
import { FC, ReactElement } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentTrackSelector } from "../selectors";
import { currentTrackState } from "../state";

const TrackTimeSlider: FC<{}> = (): ReactElement => {
  const currentTrack = useRecoilValue(currentTrackSelector)!;
  const [trackState, setTrackState] = useRecoilState(currentTrackState);

  const setPosition = (value: number): void => {
    setTrackState(prevState => produce(prevState, draft => {
      draft!.second = value;
    }));
  };

  return (
    <Slider
      size="small"
      value={currentTrack.second}
      min={0}
      step={1}
      max={currentTrack.track.duration}
      onChange={(_, value) => setPosition(value as number)}
      sx={{
        color: 'rgba(0,0,0,0.87)',
        height: 4,
        '& .MuiSlider-thumb': {
          width: 8,
          height: 8,
          transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
          '&:before': {
            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
          },
          '&:hover, &.Mui-focusVisible': {
            boxShadow: `0px 0px 0px 8px ${'rgb(0 0 0 / 16%)'}`,
          },
          '&.Mui-active': {
            width: 20,
            height: 20,
          },
        },
        '& .MuiSlider-rail': {
          opacity: 0.28,
        },
      }}
    />
  );
};

export default TrackTimeSlider;