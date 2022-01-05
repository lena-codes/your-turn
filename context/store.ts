import { configureStore } from '@reduxjs/toolkit';
import listReducer from '../lib/list-reducer';
import resultReducer from '../lib/result-reducer';

export const store = configureStore({
  reducer: {
    names: listReducer,
    result: resultReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
