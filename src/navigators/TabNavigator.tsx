// ./navigation/TabNavigator.js
import React, { FunctionComponent } from "react";
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  AdressesStackNavigator,
  AllergicStackNavigator,
  AmpStoreStackNavigator,
  BookCateringStackNavigator,
  CategoryStackNavigator,
  CheckoutInfoStackNavigator,
  CheckoutStackNavigator,
  ContactUsStackNavigator,
  ContainersStackNavigator,
  DashboardStackNavigator,
  DonateStackNavigator,
  FaqStackNavigator,
  GiftCardsStackNavigator,
  MyCartStackNavigator,
  MyOrderstackNavigator,
  MyProfilestackNavigator,
  NutritionPackagesStackNavigator,
  PasswordstackNavigator,
  PickupStackNavigator,
  ReferStackNavigator,
  WalletStackNavigator,
  WelcomeStackNavigator,
  WellnessstackNavigator,
} from "./RootStack";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import CustomButtom from "../componets/customButtom/CustomButtom";

// type props = {
//   children: JSX.Element | undefined ,
//   onPress(): void
// };

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // gestureEnabled: false
        tabBarShowLabel: false,
        tabBarStyle: {
          height: "8.5%",
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: "#262626",
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={DashboardStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                // top: 10,
              }}
            >
              <Ionicons
                name="home-outline"
                type="ionicon"
                style={{
                  fontSize: 25,
                  color: focused ? "#FF6F00" : "#fff",
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? "#FF6F00" : "#fff",
                  // fontFamily: "Poppins",
                  fontWeight: "600",
                  // lineHeight: 20,
                  letterSpacing: 0.15,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MyOrdersTab"
        component={MyOrderstackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                // top: 10,
              }}
            >
              <MaterialIcons
                name="list-alt"
                type="ionicon"
                style={{
                  fontSize: 25,
                  color: focused ? "#FF6F00" : "#fff",
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? "#FF6F00" : "#fff",
                  // fontFamily: "Poppins",
                  fontWeight: "600",
                  // lineHeight: 20,
                  letterSpacing: 0.15,
                }}
              >
                My Orders
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryStackNavigator}
        // options={{
        //   tabBarIcon:({focused})=>(
        //     <Image source={require('../../assets/img/menuIcom.png')}
        //     resizeMode='contain'
        //     style={{
        //       width:67,
        //       height:67,
        //       tintColor: '#fff'
        //     }}/>
        //   ),
        //   tabBarButton: (props) =>(
        //     <CustomTabBarButton {...props}/>
        //   )
        // }}
        options={{
          tabBarIcon: ({ size, color }) => <CustomButtom />,
        }}
      />

      <Tab.Screen
        name="Wellness"
        component={WellnessstackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                // top: 10,
              }}
            >
              <MaterialIcons
                name="list-alt"
                type="ionicon"
                style={{
                  fontSize: 25,
                  color: focused ? "#FF6F00" : "#fff",
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? "#FF6F00" : "#fff",
                  // fontFamily: "Poppins",
                  fontWeight: "600",
                  // lineHeight: 20,
                  letterSpacing: 0.15,
                }}
              >
                Wellness
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfilestackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                // top: 10,
              }}
            >
              <FontAwesome5
                name="user-circle"
                type="ionicon"
                style={{
                  fontSize: 25,
                  color: focused ? "#FF6F00" : "#fff",
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? "#FF6F00" : "#fff",
                  // fontFamily: "Poppins",
                  fontWeight: "600",
                  // lineHeight: 20,
                  letterSpacing: 0.15,
                }}
              >
                My Profile
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AdressesTab"
        component={AdressesStackNavigator}
        options={{ tabBarItemStyle: { display: "none" } }}
      />

      <Tab.Screen
        name="BookCateringTab"
        component={BookCateringStackNavigator}
        options={{ tabBarItemStyle: { display: "none" } }}
      />

      <Tab.Screen
        name="ContainersTab"
        component={ContainersStackNavigator}
        options={{ tabBarItemStyle: { display: "none" } }}
      />

      <Tab.Screen
        name="ContactUsTab"
        component={ContactUsStackNavigator}
        options={{ tabBarItemStyle: { display: "none" } }}
      />
      <Tab.Screen
        name="FaqTab"
        component={FaqStackNavigator}
        options={{ tabBarItemStyle: { display: "none" } }}
      />

      {/* <Tab.Screen 
      name="Allergic" component={AllergicStackNavigator}
      options={{ tabBarItemStyle: { display: 'none', }, }}
      />    */}

      <Tab.Screen
        name="ReferTab"
        component={ReferStackNavigator}
        options={{ tabBarItemStyle: { display: "none" } }}
      />

      <Tab.Screen
        name="PickupTab"
        component={PickupStackNavigator}
        options={{ tabBarItemStyle: { display: "none" } }}
      />
      <Tab.Screen
        name="MyCart"
        component={MyCartStackNavigator}
        options={{ tabBarItemStyle: { display: "none" } }}
      />

      <Tab.Screen
        name="NutritionPackagesTab"
        component={NutritionPackagesStackNavigator}
        options={{ tabBarItemStyle: { display: "none" } }}
      />

      <Tab.Screen
        name="GiftCardsTab"
        component={GiftCardsStackNavigator}
        options={{ tabBarItemStyle: { display: "none" } }}
      />

      <Tab.Screen
        name="DonateTab"
        component={DonateStackNavigator}
        options={{ tabBarItemStyle: { display: "none" } }}
      />

      <Tab.Screen
        name="PasswordTab"
        component={PasswordstackNavigator}
        options={{ tabBarItemStyle: { display: "none" } }}
      />

      <Tab.Screen
        name="WalletTab"
        component={WalletStackNavigator}
        options={{ tabBarItemStyle: { display: "none" } }}
      />

      <Tab.Screen
        name="AmpStore"
        component={AmpStoreStackNavigator}
        options={{ tabBarItemStyle: { display: "none" } }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
