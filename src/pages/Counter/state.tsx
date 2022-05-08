import { atom } from "recoil";

export interface CounterState {
  count: number;
  clicks: number;
}

export const counterState = atom<CounterState>({
  key: 'counterState',
  default: {
    count: 0,
    clicks: 0
  }
});
