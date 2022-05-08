import { VolumeDownRounded, VolumeUpRounded } from "@mui/icons-material";
import { Slider, Stack } from "@mui/material";
import { FC, ReactElement } from "react";
import { useRecoilState } from "recoil";
import { volumeState } from "../state";

const VolumeControl: FC<{}> = (): ReactElement => {
  const [volume, setVolume] = useRecoilState(volumeState);
  const lightIconColor = 'rgba(0,0,0,0.4)';

  const updateVolume = (event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  return (
    <Stack spacing={2}
      direction="row"
      sx={{
        mb: 1,
        px: 1,
        position: 'absolute',
        bottom: 25,
        right: 10,
        width: 200
      }}
      alignItems="center">
      <VolumeDownRounded htmlColor={lightIconColor} />
      <Slider
        aria-label="Volume"
        defaultValue={100}
        value={volume}
        onChange={updateVolume}
        sx={{
          color: 'rgba(0,0,0,0.87)',
          '& .MuiSlider-track': {
            border: 'none',
          },
          '& .MuiSlider-thumb': {
            width: 24,
            height: 24,
            backgroundColor: '#fff',
            '&:before': {
              boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
            },
            '&:hover, &.Mui-focusVisible, &.Mui-active': {
              boxShadow: 'none',
            }
          },
        }}
      />
      <VolumeUpRounded htmlColor={lightIconColor} />
    </Stack>
  );
};

export default VolumeControl;