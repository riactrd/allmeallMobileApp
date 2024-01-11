import RootDrawer from "./src/navigators/RootDrawer";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { ToastProvider } from "react-native-toast-notifications";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import { getTotals } from "./src/redux/cartSlice";
import CardDetails from "./src/screens/checkout/CardDetails";
import Checkout from "./src/screens/checkout/Checkout";
import { StripeProvider } from "@stripe/stripe-react-native";

export default function App() {
  return (
   // <StripeProvider publishableKey="pk_test_h99KEoNojWNDvDaWfWpA9CBG006jTMI7Yw">
    <StripeProvider publishableKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
      <ToastProvider>
        <Provider store={store}>
          {/* <Toast /> */}
          {/* <CardDetails /> */}
          {/* <Checkout /> */}
          <RootDrawer />
        </Provider>
      </ToastProvider>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
