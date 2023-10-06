import { createSlice } from "@reduxjs/toolkit";

const indexCategorySlice = createSlice({
  name: "indexCategory",
  initialState: {
    index: 0,
  },
  reducers: {
    setIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { setIndex } = indexCategorySlice.actions;

export default indexCategorySlice.reducer;
