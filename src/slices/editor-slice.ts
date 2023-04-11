import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTab: '',
  color: '#aaa',
  textureImg: null,
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
    setTextureImg(state, { payload }) {
      state.textureImg = payload;
    },
  },
});

export const { setColor, setCurrentTab, setTextureImg } = editorSlice.actions;

/* -------------------------- selectors export ------------------------- */
export const color = (state: RootState) => state.editor.color;
export const currentTab = (state: RootState) => state.editor.currentTab;
export const textureImg = (state: RootState) => state.editor.textureImg;

export default editorSlice.reducer;
