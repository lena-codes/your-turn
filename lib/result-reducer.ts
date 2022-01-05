import { createSlice } from '@reduxjs/toolkit';
import { getRandomInt } from './utils';

export const resultReducer = createSlice({
  name: 'result',
  initialState: '',
  reducers: {
    getTurn: (state, action) => {
      const names = action.payload;
      const random = getRandomInt(0, names.length);
      if (names.length > 0) {
        return names[random].name;
      } else {
        return 'Please add names first!';
      }
    }
  }
});

export const { getTurn } = resultReducer.actions;

export default resultReducer.reducer;
