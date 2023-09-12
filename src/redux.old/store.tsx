import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { authApi } from "./api/authApi";
import { categoriesApi } from "./api/categoriesApi";
import imageReducer from './imageSlice';
import loginReducer from './loginSlice';
import mealReducer from './mealSlice';


 const store = configureStore({
    reducer: { 
      [authApi.reducerPath]: authApi.reducer,
      [categoriesApi.reducerPath]: categoriesApi.reducer,
      avatar: imageReducer,
      login: loginReducer,
      cart: cartReducer,
      meal: mealReducer,
    },
    middleware: (getDefaultMiddleware) =>{
      return  getDefaultMiddleware().concat(authApi.middleware, categoriesApi.middleware);
     },
  });

  export default store;

  type RootState = ReturnType<typeof store.getState>;
  export const selectcartItems = (state:RootState) => state.cart.cartItems;
  export const selectTotalAmount = (state:RootState) => state.cart.cartTotalAmount;
  export const selectcartTotalQuantity = (state:RootState) => state.cart.cartTotalQuantity;
  export const selectQuantity = (state:RootState) => state.meal.cartTotalQuantity;
  export const selectimgAvatar = (state:RootState) => state.avatar.image;
  export const selectloginToken = (state:RootState) => state.login.token;
  export const selectUserLogin = (state:RootState) => state.login.userLogin;
  export const selectUserData = (state:RootState) => state.login.userData;
  