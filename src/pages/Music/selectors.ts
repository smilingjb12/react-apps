import { selector } from "recoil";
import { currentTrackState, volumeState } from "./state";

export const currentTrackSelector = selector({
  key: 'trackInfo',
  get: ({ get }) => get(currentTrackState)
});

export const volumeSelector = selector({
  key: 'volume',
  get: ({ get }) => get(volumeState)
});
