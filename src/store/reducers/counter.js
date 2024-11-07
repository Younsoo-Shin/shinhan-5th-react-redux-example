// createSlice로 Counter 구성.
import { createSlice } from '@reduxjs/toolkit';
increaseCounter, decreaseCounter, setColor;

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
    color: 'black',
  },
  reducers: {
    increaseCounter(state, action) {
      state.counter += 1;
    },
    decreaseCounter(state, action) {
      state.counter -= 1;
    },
    setColor(state, action) {
      state.color = action.payload;
    },
  },
});

// action creator
export const { increaseCounter, decreaseCounter, setColor } =
  counterSlice.actions;
// reducer
export default counterSlice.reducer;
