import { configureStore } from '@reduxjs/toolkit';
import introSlice from './slices/intro-slice';
import editorSlice from './slices/editor-slice';

export const store = configureStore({
  reducer: {
    intro: introSlice,
    editor: editorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
