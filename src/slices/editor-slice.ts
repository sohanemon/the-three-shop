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
      console.log('🛑 ~ setColor ~ action:', payload);
    },
    setCurrentTab(state, { payload }) {
      state.currentTab = payload;
    },
  },
});

export const { setColor, setCurrentTab } = editorSlice.actions;

export default editorSlice.reducer;
