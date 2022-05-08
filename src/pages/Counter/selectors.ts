import { selector } from "recoil";
import { counterState } from "./state";

export const counterStats = selector({
  key: 'counterValue',
  get: ({ get }) => ({
    current: get(counterState).count,
    clicks: get(counterState).clicks
  })
});