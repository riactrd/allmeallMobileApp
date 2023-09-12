import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartModel } from "../model/CartModel";
import { useGetmyCartQuery } from "./api/myCartApi";

export type cartType={
  cartItems: CartModel[],
  cartTotalQuantity: number,
  cartTotalAmount: number
}


const initialState:cartType = {

  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action:PayloadAction<CartModel>) {
      const existingIndex:number = state.cartItems.findIndex(
        (item:CartModel) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + action.payload.quantity ,
        };
       
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: action.payload.quantity };
        state.cartItems.push(tempProductItem);
        
      }
      
    },
    decreaseCart(state, action:PayloadAction<CartModel>) {
      const itemIndex = state.cartItems.findIndex(
        (item:CartModel) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;


      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item:CartModel) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

      }

      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action:PayloadAction<CartModel>) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item:CartModel) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

        }
        // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    
    },
    increaseCart(state, action:PayloadAction<CartModel>){
        const existingIndex = state.cartItems.findIndex(
          (item:CartModel) => item.id === action.payload.id
        );
  
        if (existingIndex >= 0) {
          state.cartItems[existingIndex] = {
            ...state.cartItems[existingIndex],
            cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
          };
          

        } else {
          let tempProductItem = { ...action.payload, cartQuantity: 1 };
          state.cartItems.push(tempProductItem);
         
        }
        // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      
    }
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart, increaseCart } =
  cartSlice.actions;

export default cartSlice.reducer;