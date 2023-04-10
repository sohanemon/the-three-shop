import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTab: '',
  color: '#aaa',
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setColor(state, action) {
      console.log('🛑 ~ setColor ~ action:', action);
    },
  },
});

export const { setColor } = editorSlice.actions;

export default editorSlice.reducer;
