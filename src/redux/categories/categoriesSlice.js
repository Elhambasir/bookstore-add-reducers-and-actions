// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      state.categories = action.payload === 'Under construction' ? 'Under construction' : state.categories;
    },
  },
});
export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
