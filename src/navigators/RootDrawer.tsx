import React, { FunctionComponent } from "react";

// react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryPage from "../screens/categoryPage/CategoryPage";
import Welcome from "../screens/sign/Welcome";
import Signin from "../screens/sign/Signin";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContent } from "../componets/CustomDrawerContent";
import {
  ForgoPasswordStackNavigator,
  ResetPasswordStackNavigator,
  RootStackParamList,
  SigninStackNavigator,
  SignUpStackNavigator,
} from "./RootStack";
import TabNavigator from "./TabNavigator";
import CheckoutInfo from "../screens/checkout/CheckoutInfo";

const Drawer = createDrawerNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const RootDrawer: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeDrawer"
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: "yellow",
          swipeEnabled: false,
          // gestureEnabled: false
        }}
        //   drawerContent={props => <DrawerContent {...props}/>}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="HomeDrawer" component={TabNavigator} />

        <Drawer.Screen name="CategoryDrawer" component={CategoryPage} />
        <Drawer.Screen name="WelcomeDrawer" component={Welcome} />
        <Drawer.Screen name="SigninDrawer" component={SigninStackNavigator} />
        <Drawer.Screen name="SignUpDrawer" component={SignUpStackNavigator} />

        <Drawer.Screen
          name="ForgotPasswordDrawer"
          component={ForgoPasswordStackNavigator}
        />

        <Drawer.Screen
          name="ResetPasswordDrawer"
          component={ResetPasswordStackNavigator}
        />

        <Drawer.Screen name="CheckoutInfoDrawer" component={CheckoutInfo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootDrawer;
