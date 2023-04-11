import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTab: '',
  color: '#aaa',
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setColor(state, { payload }) {
      state.color = payload;
    },
    setCurrentTab(state, { payload }) {
      state.currentTab = payload;
    },
  },
});

export const { setColor, setCurrentTab } = editorSlice.actions;

/* -------------------------- selectors export ------------------------- */
export const color = (state: RootState) => state.editor.color;
export const currentTab = (state: RootState) => state.editor.currentTab;

export default editorSlice.reducer;
