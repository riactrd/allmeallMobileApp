import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type countOrderType = {
  orderQuantity: number;
};

const initialState: countOrderType = {
  orderQuantity: 0,
};

const countOrderSlice = createSlice({
  name: "countOrder",
  initialState,
  reducers: {
    updateCount(state, action: PayloadAction<countOrderType>) {
      state.orderQuantity = action.payload;
      console.log(state);
    },
  },
});

export const { updateCount } = countOrderSlice.actions;

export default countOrderSlice.reducer;
