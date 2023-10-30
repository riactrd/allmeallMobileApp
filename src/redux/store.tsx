import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import cartQuantityReducer from "./cartQuantitySlice";
import { authApi } from "./api/authApi";
import { categoriesApi } from "./api/categoriesApi";
import imageReducer from "./imageSlice";
import loginReducer from "./loginSlice";
import mealReducer from "./mealSlice";
import notificationsReducer from "./notificationSlice";
import { dashboardApi } from "./api/dashboardApi";
import { verificationCodeApi } from "./api/verificationCode";
import { addressesApi } from "./api/addresses";
import { contactApi } from "./api/ContactApi";
import { resentCodeApi } from "./api/resentCode";
import { resetpasswordApi } from "./api/resetpasswordApi";
import { forgotpasswordApi } from "./api/ForgotPassword";
import { addCartApi } from "./api/addCart";
import { giftvouchersApi } from "./api/giftvouchersApi";
import { profileApi } from "./api/profileApi";
import { allergicApi } from "./api/allergicApi";
import { masterDataApi } from "./api/masterDataApi";
import { myCartApi } from "./api/myCartApi";
import { decreaseCartApi } from "./api/decreaseCartApi";
import { deleteItemCartApi } from "./api/deleteItemCartApi";
import { myorderApi } from "./api/myorderApi";
import { WellnessApi } from "./api/WellnessApi";
import { digitalwalletApi } from "./api/digitalwalletApi";
import { pickupGlasswareApi } from "./api/pickupGlasswareApi";
import { updateCartApi } from "./api/updateCartApi";
import { increasemyCartApi } from "./api/increaseCartApi";
import myProfileReducer from "./profileSlice";
import indexCategoryReducer from "./indexCategorySlice";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [verificationCodeApi.reducerPath]: verificationCodeApi.reducer,
    [addressesApi.reducerPath]: addressesApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [resentCodeApi.reducerPath]: resentCodeApi.reducer,
    [resetpasswordApi.reducerPath]: resetpasswordApi.reducer,
    [forgotpasswordApi.reducerPath]: forgotpasswordApi.reducer,
    [addCartApi.reducerPath]: addCartApi.reducer,
    [giftvouchersApi.reducerPath]: giftvouchersApi.reducer,
    [digitalwalletApi.reducerPath]: digitalwalletApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [allergicApi.reducerPath]: allergicApi.reducer,
    [masterDataApi.reducerPath]: masterDataApi.reducer,
    [myCartApi.reducerPath]: myCartApi.reducer,
    [increasemyCartApi.reducerPath]: increasemyCartApi.reducer,
    [decreaseCartApi.reducerPath]: decreaseCartApi.reducer,
    [deleteItemCartApi.reducerPath]: deleteItemCartApi.reducer,
    [myorderApi.reducerPath]: myorderApi.reducer,
    [WellnessApi.reducerPath]: WellnessApi.reducer,
    [pickupGlasswareApi.reducerPath]: pickupGlasswareApi.reducer,
    [updateCartApi.reducerPath]: updateCartApi.reducer,
    myProfile: myProfileReducer,
    indexCategory: indexCategoryReducer,
    avatar: imageReducer,
    login: loginReducer,
    cart: cartReducer,
    meal: mealReducer,
    notifications: notificationsReducer,
    cartQuantity: cartQuantityReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      authApi.middleware,
      verificationCodeApi.middleware,
      dashboardApi.middleware,
      addressesApi.middleware,
      contactApi.middleware,
      resentCodeApi.middleware,
      resetpasswordApi.middleware,
      forgotpasswordApi.middleware,
      categoriesApi.middleware,
      addCartApi.middleware,
      giftvouchersApi.middleware,
      digitalwalletApi.middleware,
      profileApi.middleware,
      allergicApi.middleware,
      masterDataApi.middleware,
      myCartApi.middleware,
      increasemyCartApi.middleware,
      decreaseCartApi.middleware,
      deleteItemCartApi.middleware,
      myorderApi.middleware,
      WellnessApi.middleware,
      pickupGlasswareApi.middleware,
      updateCartApi.middleware
    );
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export const selectcartItems = (state: RootState) => state.cart.cartItems;
export const selectTotalAmount = (state: RootState) =>
  state.cart.cartTotalAmount;
export const selectcartTotalQuantity = (state: RootState) =>
  state.cart.cartTotalQuantity;
export const selectQuantity = (state: RootState) =>
  state.meal.cartTotalQuantity;
export const selectimgAvatar = (state: RootState) => state.avatar.image;
export const selectloginToken = (state: RootState) => state.login.token;
export const selectUserLogin = (state: RootState) => state.login.userLogin;
export const selectUserData = (state: RootState) => state.login.userData;
export const selectNotificationItems = (state: RootState) =>
  state.notifications.notificationsItems;
export const selectNotificationTotal = (state: RootState) =>
  state.notifications.notificationsTotal;
