import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { useToast } from "react-native-toast-notifications";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { CartModel } from "../model/CartModel";

// const toast = useToast();

export type cartType={
  
  cartTotalQuantity: number,
  
}


const initialState:cartType = {
 
  cartTotalQuantity: 0,
};

const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    addToMeal(state, action:PayloadAction<cartType>) {
      state.cartTotalQuantity = action.payload.cartTotalQuantity
      console.log(state.cartTotalQuantity)
    },
   
  },
});

export const { addToMeal} =
  mealSlice.actions;

export default mealSlice.reducer;