import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstPage: true,
};

const introSlice = createSlice({
  name: 'intro',
  initialState,
  reducers: {
    toggleIntro: (state) => {
      state.firstPage = !state.firstPage;
    },
  },
});

export const { toggleIntro } = introSlice.actions;

export default introSlice.reducer;
