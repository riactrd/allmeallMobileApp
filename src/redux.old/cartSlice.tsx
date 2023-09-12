import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartModel } from "../model/CartModel";


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
        // toast.info("Increased product quantity", {
        //   position: "bottom-left",
        // });
        // toast.show('Increased product quantity', {
        //   type: "normal",
        //   placement: "bottom",
        //   duration: 4000,
        //   animationType: "slide-in",
          
        // });
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: action.payload.quantity };
        state.cartItems.push(tempProductItem);
        // toast.success("Product added to cart", {
        //   position: "bottom-left",
        // });

        // toast.show("Product added to cart", {
        //   type: "success",
        //   placement: "bottom",
        //   duration: 4000,
        //   animationType: "slide-in",
          
        // });
      }
      
    },
    decreaseCart(state, action:PayloadAction<CartModel>) {
      const itemIndex = state.cartItems.findIndex(
        (item:CartModel) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        // toast.info("Decreased product quantity", {
        //   position: "bottom-left",
        // });

        // toast.show("Decreased product quantity", {
        //   type: "normal",
        //   placement: "bottom",
        //   duration: 4000,
        //   animationType: "slide-in",
          
        // });

      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item:CartModel) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        // toast.error("Product removed from cart", {
        //   position: "bottom-left",
        // });

        // toast.show("Product removed from cart", {
        //   type: "danger",
        //   placement: "bottom",
        //   duration: 4000,
        //   animationType: "slide-in",
          
        // });
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

          // toast.error("Product removed from cart", {
          //   position: "bottom-left",
          // });

          // toast.show("Product removed from cart", {
          //   type: "danger",
          //   placement: "bottom",
          //   duration: 4000,
          //   animationType: "slide-in",
            
          // });
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
      // toast.error("Cart cleared", { position: "bottom-left" });
      // toast.show("Cart cleared", {
      //   type: "danger",
      //   placement: "bottom",
      //   duration: 4000,
      //   animationType: "slide-in",
        
      // });
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
          // toast.info("Increased product quantity", {
          //   position: "bottom-left",
          // });

          // toast.show("Increased product quantity", {
          //   type: "normal",
          //   placement: "bottom",
          //   duration: 4000,
          //   animationType: "slide-in",
            
          // });

        } else {
          let tempProductItem = { ...action.payload, cartQuantity: 1 };
          state.cartItems.push(tempProductItem);
          // toast.success("Product added to cart", {
          //   position: "bottom-left",
          // });
          // toast.show("Product added to cart", {
          //   type: "success",
          //   placement: "bottom",
          //   duration: 4000,
          //   animationType: "slide-in",
            
          // });
        }
        // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      
    }
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart, increaseCart } =
  cartSlice.actions;

export default cartSlice.reducer;