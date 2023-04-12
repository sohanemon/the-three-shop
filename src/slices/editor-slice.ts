import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTab: '',
  color: '#125978',
  textureImg: '/madrid.png',
  centerLogo: false,
  sideLogo: true,
  imageURL: '',
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
    toggleCenterLogo(state) {
      if (state.centerLogo) {
        state.centerLogo = false;
      } else if (!state.centerLogo) {
        state.centerLogo = true;
        state.sideLogo = false;
      }
    },
    toggleSideLogo(state) {
      if (state.sideLogo) {
        state.sideLogo = false;
      } else if (!state.sideLogo) {
        state.sideLogo = true;
        state.centerLogo = false;
      }
    },
    setImageURL(state, { payload }) {
      state.imageURL = payload;
    },
  },
});

export const {
  setColor,
  setCurrentTab,
  setTextureImg,
  toggleCenterLogo,
  toggleSideLogo,
  setImageURL,
} = editorSlice.actions;

/* -------------------------- selectors export ------------------------- */
export const color = (state: RootState) => state.editor.color;
export const currentTab = (state: RootState) => state.editor.currentTab;
export const textureImg = (state: RootState) => state.editor.textureImg;
export const selectLogo = (state: RootState) => {
  return {
    sideLogo: state.editor.sideLogo,
    centerLogo: state.editor.centerLogo,
  };
};
export const selectImageURL = (state: RootState) => state.editor.imageURL;
export default editorSlice.reducer;
