import { Track, TRACKS } from "./fileStorage";

export function useTrackStorage() {
  const getTracks = (): Track[] => {
    return TRACKS;
  }

  return {
    getTracks
  };
}