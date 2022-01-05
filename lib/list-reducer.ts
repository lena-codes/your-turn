import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRandomId, ItemType } from './utils';

const initialState: ItemType[] = [];

export const listReducer = createSlice({
  name: 'names',
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.push({ id: getRandomId(5), name: action.payload });
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    removeAll: () => {
      return [];
    }
  }
});

export const { add, remove, removeAll } = listReducer.actions;

export default listReducer.reducer;
