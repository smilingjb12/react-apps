import { atom } from "recoil";
import { Track } from "./fileStorage";

interface TrackInfo {
  track: Track;
  second: number;
  paused: boolean;
  audioSource: HTMLAudioElement;
}

export interface MusicState {
  currentTrack: TrackInfo | null;
  volume: number;
}

export const currentTrackState = atom<TrackInfo | null>({
  key: 'currentTrackState',
  default: null
});

export const volumeState = atom<number>({
  key: 'volumeState',
  default: 100
});
