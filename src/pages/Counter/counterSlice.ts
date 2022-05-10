import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
  clicks: number;
}

const initialState: CounterState = {
  count: 0,
  clicks: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.count += 1;
      state.clicks += 1;
    },
    decrement: state => {
      state.count -= 1;
      state.clicks += 1;
    }
  }
});

export const actions = counterSlice.actions;

export default counterSlice.reducer;
