import React, { FunctionComponent, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/dashboard/Dashboard";
import CategoryPage from "../screens/categoryPage/CategoryPage";
import Welcome from "../screens/sign/Welcome";
import Signin from "../screens/sign/Signin";
import MyOrders from "../screens/myOrders/MyOrders";
import Wellness from "../screens/wellness/Wellness";
import MyProfile from "../screens/myProfile/MyProfile";
import Icon from "react-native-vector-icons/Ionicons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import MealItemPage from "../screens/categoryPage/mealItem/MealItemPage";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SingleOrder from "../screens/myOrders/SingleOrder";
import Adresses from "../screens/adresses/Adresses";
import EditAddress from "../screens/adresses/EditAddress";
import NewAddress from "../screens/adresses/NewAddress";
import BookCatering from "../screens/bookCatering/BookCatering";
import Containers from "../screens/containers/Containers";
import ContactUs from "../screens/contactUs/ContactUs";
import Faq from "../screens/faq/Faq";
import Allergic from "../screens/allergic/Allergic";
import Refer from "../screens/refer/Refer";
import Pickup from "../screens/pickup/Pickup";
import MyCart from "../screens/myCart/MyCart";
import {
  ScreenWidth,
  mainColor,
  secundaryColor,
  secundaryColor7,
  thirdColor,
} from "../componets/shared";
import Checkout from "../screens/checkout/Checkout";
import CheckoutInfo from "../screens/checkout/CheckoutInfo";
import SignUp from "../screens/sign/SignUp";
import NutritionPackages from "../screens/nutritionPackages/NutritionPackages";
import GiftCards from "../screens/giftCards/GiftCards";
import NewGift from "../screens/newGift/NewGift";
import Donate from "../screens/donate/Donate";
import Password from "../screens/password/Password";
import PostDetails from "../screens/wellness/PostDetails";
import Wallet from "../screens/wallet/Wallet";
import AmpStore from "../screens/ampStore/AmpStore";
import { useSelector } from "react-redux";
import { selectUserData, selectcartTotalQuantity } from "../redux/store";
import CartNotification from "../componets/cartNotification";
import ForgotPassword from "../screens/sign/ForgotPassword";
import ResetPassword from "../screens/sign/ResetPassword";
import Login from "../screens/sign/Login";
import VerifyUser from "../screens/sign/VerifyUser";
import { useUpdateprofileMutation } from "../redux/api/profileApi";
import { useToast } from "react-native-toast-notifications";
import Transactions from "../screens/wallet/Transactions";
import NewMenuCode from "../screens/categoryPage/categoryCode/NewMenuCode";
import CbdMeals from "../screens/categoryPage/categoryCode/CbdMeals";
import ComboMeals from "../screens/categoryPage/categoryCode/ComboMeals";
import SixDollarMeal from "../screens/categoryPage/categoryCode/SixDollarMeal";
import BulkMeal from "../screens/categoryPage/categoryCode/BulkMeal";
import SignatureMeal from "../screens/categoryPage/categoryCode/SignatureMeal";
import DiabeticFriendly from "../screens/categoryPage/categoryCode/DiabeticFriendly";
import KetoMeal from "../screens/categoryPage/categoryCode/KetoMeal";
import PaleoMeal from "../screens/categoryPage/categoryCode/PaleoMeal";
import FamilyMeal from "../screens/categoryPage/categoryCode/FamilyMeal";
import VeganMeals from "../screens/categoryPage/categoryCode/VeganMeals";
import DessertMenu from "../screens/categoryPage/categoryCode/DessertMenu";
import Notification from "../screens/notification/Notification";
import ReferList from "../screens/refer/ReferList";
import { useChangePasswordMutation } from "../redux/api/authApi";
import { useDispatch } from "react-redux";
import { reset, setIsLoding } from "../redux/changePasswordSlice";
// import CartNotification from '../componets/CartNotification';

export type RootStackParamList = {
  HomeStack: undefined;
  HomeDrawer: undefined;
  Category: undefined;
  SigninDrawer: undefined;
  WelcomeDrawer: undefined;
  SignupDrawer: undefined;
  VerifyUser: undefined;
  ForgotPasswordDrawer: undefined;
  ResetPasswordDrawer: undefined;
  MyOrders: undefined;
  SingleOrder: undefined;
  Wellness: undefined;
  MyProfile: undefined;
  MealItemPage: undefined;
  Adresses: undefined;
  CheckoutInfoDrawer: undefined;
  NewAddressStack: undefined;
  EditAddress: undefined;
  NewAddress: undefined;
  BookCatering: undefined;
  Containers: undefined;
  ContactUs: undefined;
  Faq: undefined;
  Allergic: undefined;
  Refer: undefined;
  Pickup: undefined;
  MyCartStack: undefined;
  Checkout: undefined;
  CheckoutInfo: undefined;
  SignUp: undefined;
  NutritionPackages: undefined;
  GiftCards: undefined;
  NewGift: undefined;
  Donate: undefined;
  Password: undefined;
  PostDetails: undefined;
  Wallet: undefined;
  AmpStore: undefined;
  Transactions: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const SigninStackNavigator: FunctionComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Signin"
        component={Signin}
        // component={Signin}
      />
    </Stack.Navigator>
  );
};

export const SignUpStackNavigator: FunctionComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.navigate("SigninDrawer")}
            />
          ),
          headerTransparent: true,
          title: "",
        })}
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
};

export const ForgoPasswordStackNavigator: FunctionComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={25}
              color="#000"
              style={{ marginLeft: 10 }}
              // backgroundColor="black"
              onPress={() => navigation.navigate("SigninDrawer")}
            />
          ),
          headerTransparent: true,
          title: "",
          // headerShown: false,
        })}
        name="ForgotPassword"
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
};

export const VerifyUserStackNavigator: FunctionComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.navigate("SigninDrawer")}
            />
          ),
          headerTransparent: true,
          title: "",
        })}
        name="VerifyUser"
        component={VerifyUser}
      />
    </Stack.Navigator>
  );
};

export const ResetPasswordStackNavigator: FunctionComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ResetPasswordDrawer"
        component={ResetPassword}
      />
    </Stack.Navigator>
  );
};

export const WelcomeStackNavigator: FunctionComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // gestureEnabled: false
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export const DashboardStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  const userData = useSelector(selectUserData);
  const { first_name } = userData;
  const totalQuantity = useSelector(selectcartTotalQuantity);
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: secundaryColor7, // Cambia 'tu_color_aqui' al color que desees
          },
          headerLeft: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="ios-menu"
                size={25}
                color="#3C3C3C"
                style={{ marginLeft: 10 }}
                // backgroundColor="white"
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              ></Icon>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 20,
                }}
              >
                <Text style={styles.textWelcom}>Welcome, </Text>
                <Text style={styles.textName}>{first_name}</Text>
              </View>
            </View>
          ),
          headerRight: () => <CartNotification />,
        }}
        name="HomeStack"
        component={Dashboard}
      />
    </Stack.Navigator>
  );
};

// CATEGORY STACK
export const CategoryStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
          title: "All Meal Prep",
        }}
        name="Category"
        component={CategoryPage}
      />

      <Stack.Screen
        options={{
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
          title: "All Meal Prep",
        }}
        name="CategoryNew-menu"
        component={NewMenuCode}
      />

      <Stack.Screen
        options={{
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
          title: "All Meal Prep",
        }}
        name="CategoryCbd-meal"
        component={CbdMeals}
      />

      <Stack.Screen
        options={{
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
          title: "All Meal Prep",
        }}
        name="CategoryCombo-meal"
        component={ComboMeals}
      />

      <Stack.Screen
        options={{
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
          title: "All Meal Prep",
        }}
        name="CategorySix-dollar-meal"
        component={SixDollarMeal}
      />

      <Stack.Screen
        options={{
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
          title: "All Meal Prep",
        }}
        name="CategoryBulk-meal"
        component={BulkMeal}
      />

      <Stack.Screen
        options={{
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
          title: "All Meal Prep",
        }}
        name="CategorySignature-meal"
        component={SignatureMeal}
      />

      <Stack.Screen
        options={{
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
          title: "All Meal Prep",
        }}
        name="CategoryDiabetic-friendly"
        component={DiabeticFriendly}
      />

      <Stack.Screen
        options={{
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
          title: "All Meal Prep",
        }}
        name="CategoryKeto-meals"
        component={KetoMeal}
      />

      <Stack.Screen
        options={{
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
          title: "All Meal Prep",
        }}
        name="CategoryPaleo-meals"
        component={PaleoMeal}
      />

      <Stack.Screen
        options={{
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
          title: "All Meal Prep",
        }}
        name="CategoryFamily-meals"
        component={FamilyMeal}
      />

      <Stack.Screen
        options={{
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
          title: "All Meal Prep",
        }}
        name="CategoryVegan-meals"
        component={VeganMeals}
      />

      <Stack.Screen
        options={{
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
          title: "All Meal Prep",
        }}
        name="CategoryDessert-menu"
        component={DessertMenu}
      />

      <Stack.Screen
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={25}
              color="#fff"
              style={{ marginLeft: 10 }}
              // backgroundColor='white'
              onPress={() => navigation.navigate("Category")}
            />
          ),
          headerRight: () => <CartNotification />,
          headerTransparent: true,
          title: "",
        })}
        name="MealItemPage"
        component={MealItemPage}
      />
    </Stack.Navigator>
  );
};

export const MyOrderstackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
          title: "My Orders",
        }}
        name="MyOrdersStack"
        component={MyOrders}
      />
      <Stack.Screen
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={25}
              color="#000"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => <CartNotification />,
          // headerTransparent:true,
          title: "Order 4100F5",
        })}
        name="SingleOrder"
        component={SingleOrder}
      />
    </Stack.Navigator>
  );
};

export const WellnessstackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
        }}
        name="Wellness"
        component={Wellness}
      />
      <Stack.Screen
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={25}
              color="#fff"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => <CartNotification />,
          headerTransparent: true,
          title: "",
        })}
        name="PostDetails"
        component={PostDetails}
      />
    </Stack.Navigator>
  );
};

export const MyProfilestackNavigator: FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const toast = useToast();
  const [updateProfile, { data: profiles }] = useUpdateprofileMutation();
  const {
    name,
    lastname,
    phone,
    dateofBirth,
    secondaryPhone,
    gender,
    referralEmail,
    referrer,
  } = useSelector((state) => state.myProfile);

  const passwordState = useSelector((state) => state.changePassword);
  const loginState = useSelector((state) => state.login);

  const id = loginState?.userData?.id;

  const isValidPhoneNumber = (phoneNumber) => {
    // Expresión regular para validar un número de teléfono con formato (XXX) XXX-XXXX
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

    return phoneRegex.test(phoneNumber);
  };

  const isValidDateOfBirth = (dateOfBirth) => {
    // Expresión regular para validar la fecha de nacimiento en formato dd/mm/yy
    const dateOfBirthRegex =
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{2}$/;

    return dateOfBirthRegex.test(dateOfBirth);
  };

  const isValidEmailRefer = (email) => {
    // Expresión regular para validar la fecha de nacimiento en formato dd/mm/yy
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  };

  const handlerSave = async () => {
    try {
      // // Validar los números de teléfono antes de enviar a la API
      // if (!isValidPhoneNumber(phone) || !isValidPhoneNumber(secondaryPhone)) {
      //   // Mostrar una alerta o manejar la validación de acuerdo a tus necesidades
      //   alert("Invalid phone number, Please enter a 10 digit number.");
      //   return;
      // }

      // Validar la fecha de nacimiento antes de enviar a la API
      if (!isValidDateOfBirth(dateofBirth)) {
        alert(
          "Invalid date of birth. Please enter a valid date in the format dd/mm/yy."
        );
        return;
      }

      if (!isValidEmailRefer(referralEmail)) {
        console.log(referralEmail);
        alert("Please enter a valid email address", referralEmail);
        return;
      }

      const response = await updateProfile({
        name,
        lastname,
        phone,
        dateofBirth,
        secondaryPhone,
        gender,
        referralEmail,
        referrer,
      }).unwrap();

      toast.show(JSON.stringify(response.message), {
        type: "success",
        placement: "center",
        duration: 8000,
        animationType: "slide-in",
      });

      console.log("Response Server:", response.message);
    } catch (error) {
      console.error("Error :", error);
      toast.show(JSON.stringify(error), {
        type: "danger",
        placement: "center",
        duration: 8000,
        animationType: "slide-in",
      });
    }
  };

  const [changePassword, { isLoading, isSuccess }] =
    useChangePasswordMutation();

  useEffect(() => {
    if (isLoading === true) {
      dispatch(setIsLoding(true));
    }

    if (isLoading === false) {
      dispatch(setIsLoding(false));
    }
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [isSuccess]);

  const update_password = {
    id: id,
    current_password: passwordState.oldPassword,
    password: passwordState.newPassword,
    password_confirmation: passwordState.confirmNewPassword,
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.show(JSON.stringify("password Change"), {
  //       type: "success",
  //       placement: "center",
  //       duration: 8000,
  //       animationType: "slide-in",
  //     });
  //   }
  // }, [isSuccess]);

  const handlerChangePassword = async () => {
    if (!update_password.current_password) {
      toast.show(JSON.stringify("Please fill out the Old Password field"), {
        type: "danger",
        placement: "bottom",
        duration: 8000,
        animationType: "slide-in",
      });
    } else if (!update_password.password) {
      toast.show(JSON.stringify("Please fill out the New Password field"), {
        type: "danger",
        placement: "bottom",
        duration: 8000,
        animationType: "slide-in",
      });
    } else if (!update_password.password_confirmation) {
      toast.show(
        JSON.stringify("Please fill out the Confirm  Password field"),
        {
          type: "danger",
          placement: "bottom",
          duration: 8000,
          animationType: "slide-in",
        }
      );
    } else if (
      update_password.password !== update_password.password_confirmation
    ) {
      toast.show(
        JSON.stringify("Password and Confirm Password doesn't match"),
        {
          type: "danger",
          placement: "bottom",
          duration: 8000,
          animationType: "slide-in",
        }
      );
    } else if (update_password.current_password.length <= 5) {
      toast.show(
        JSON.stringify("Password is too short ,minimum is 6 characters"),
        {
          type: "danger",
          placement: "bottom",
          duration: 8000,
          animationType: "slide-in",
        }
      );
    } else {
      try {
        const result = await changePassword({ update_password }).unwrap();
        toast.show(JSON.stringify("Password changed"), {
          type: "success",
          placement: "center",
          duration: 8000,
          animationType: "slide-in",
        });
      } catch (error) {
        toast.show(JSON.stringify(error.data.error.message), {
          type: "danger",
          placement: "bottom",
          duration: 8000,
          animationType: "slide-in",
        });
      }
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Profile",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={handlerSave}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          ),
        }}
        name="MyProfile"
        component={MyProfile}
      />
      <Stack.Screen
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={25}
              color="#000"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => <CartNotification />,
          // headerTransparent:true,
          title: "Adresses",
        })}
        name="Adresses"
        component={Adresses}
      />
      <Stack.Screen
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={25}
              color="#000"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => <CartNotification />,
          // headerTransparent:true,
          title: "Edit Address",
        })}
        name="EditAddress"
        component={EditAddress}
      />

      <Stack.Screen
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={25}
              color="#000"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => <CartNotification />,
          // headerTransparent:true,
          title: "New adress",
        })}
        name="NewAddress"
        component={NewAddress}
      />
      <Stack.Screen
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={25}
              color="#000"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={handlerChangePassword}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          ),
          // headerTransparent:true,
          title: "Password",
        })}
        name="Password"
        component={Password}
      />

      <Stack.Screen
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={25}
              color="#000"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => <CartNotification />,
          // headerTransparent:true,
          title: "Allergic Preferences",
        })}
        name="Allergic"
        component={Allergic}
      />
    </Stack.Navigator>
  );
};

// export const AdressesStackNavigator: FunctionComponent = () =>{
//   const navigation = useNavigation();
//   return (
//   <Stack.Navigator>
//       <Stack.Screen
//           options ={{
//                       headerLeft: () =>(
//                         <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
//                         backgroundColor='white'
//                         onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
//                       ),
//                       headerRight: () =>(
//                         <View style={{
//                           flexDirection: 'row',
//                           justifyContent: 'center',
//                           alignItems: 'center'}}>
//                             <View style={{position: 'relative'}} >
//                                 <View style={styles.bellContainer}>
//                                   <Text style={styles.textbel}>2</Text>
//                                 </View>

//                            <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#3C3C3C" style={{marginRight: 20}}
//                               // onPress={() => navigation.goBack()}
//                               />
//                             </View >
//                             <View style={{position: 'relative'}} >
//                                 <View style={styles.bellContainer}>
//                                   <Text style={styles.textbel}>12</Text>
//                                 </View>
//                                 <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#3C3C3C" style={{marginRight: 20}}
//                                   onPress={() => navigation.navigate('MyCart')}
//                                 />
//                             </View>
//                         </View>

//                       ),
//                     }}
//       name="Adresses" component={Adresses} />
//       <Stack.Screen
//           options ={({ navigation, route }) => ({
//             headerLeft: () =>(
//               <AntDesign name='arrowleft' size={25} color="#000" style={{marginLeft: 10}}
//               backgroundColor='white'
//               onPress={() => navigation.goBack()}
//               />
//             ),
//             headerRight: () =>(
//               <View style={{
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 alignItems: 'center'}}>
//                   <View style={{position: 'relative'}} >
//                       <View style={styles.bellContainer}>
//                         <Text style={styles.textbel}>2</Text>
//                       </View>

//                  <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#000" style={{marginRight: 20}}
//                     // onPress={() => navigation.goBack()}
//                     />
//                   </View >
//                   <View style={{position: 'relative'}} >
//                       <View style={styles.bellContainer}>
//                         <Text style={styles.textbel}>12</Text>
//                       </View>
//                       <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#000" style={{marginRight: 20}}
//                       onPress={() => navigation.navigate('MyCart')}
//                       />
//                   </View>
//               </View>

//             ),
//             // headerTransparent:true,
//             title: "Edit Address",

//           })}
//         name="EditAddress" component={EditAddress} />

//       <Stack.Screen
//           options ={({ navigation, route }) => ({
//             headerLeft: () =>(
//               <AntDesign name='arrowleft' size={25} color="#000" style={{marginLeft: 10}}
//               backgroundColor='white'
//               onPress={() => navigation.goBack()}
//               />
//             ),
//             headerRight: () =>(
//               <View style={{
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 alignItems: 'center'}}>
//                   <View style={{position: 'relative'}} >
//                       <View style={styles.bellContainer}>
//                         <Text style={styles.textbel}>2</Text>
//                       </View>

//                  <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#000" style={{marginRight: 20}}
//                     // onPress={() => navigation.goBack()}
//                     />
//                   </View >
//                   <View style={{position: 'relative'}} >
//                       <View style={styles.bellContainer}>
//                         <Text style={styles.textbel}>12</Text>
//                       </View>
//                       <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#000" style={{marginRight: 20}}
//                       onPress={() => navigation.navigate('MyCart')}
//                       />
//                   </View>
//               </View>

//             ),
//             // headerTransparent:true,
//             title: "New adress",

//           })}
//         name="NewAddress" component={NewAddress} />

//     </Stack.Navigator>
//   )
// }

export const AdressesStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: secundaryColor7 },
          title: "Adresses",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              // backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
        }}
        name="Adresses"
        component={Adresses}
      />
    </Stack.Navigator>
  );
};

export const NewAdressesStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: secundaryColor7 },
          title: "New Address",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              // backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          // headerRight: () => <CartNotification />,
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                height: 30,
                // marginBottom: 20,
                backgroundColor: mainColor,
                // padding: 20,
                borderRadius: 8,
                right: 20,
              }}
            >
              <Text
                style={{
                  color: secundaryColor,
                  fontWeight: "600",
                  fontSize: 10,
                  letterSpacing: 1.25,
                  lineHeight: 16,
                }}
              >
                Save
              </Text>
            </TouchableOpacity>
          ),
        }}
        name="NewAddress"
        component={NewAddress}
      />
    </Stack.Navigator>
  );
};

export const EditAdressesStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: secundaryColor7 },
          title: "Edit Address",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              // backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          // headerRight: () => <CartNotification />,
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                height: 30,
                // marginBottom: 20,
                backgroundColor: mainColor,
                // padding: 20,
                borderRadius: 8,
                right: 20,
              }}
            >
              <Text
                style={{
                  color: secundaryColor,
                  fontWeight: "600",
                  fontSize: 10,
                  letterSpacing: 1.25,
                  lineHeight: 16,
                }}
              >
                Save
              </Text>
            </TouchableOpacity>
          ),
        }}
        name="EditAdressesStack"
        component={EditAddress}
      />
    </Stack.Navigator>
  );
};

export const BookCateringStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Book Catering",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
        }}
        name="BookCatering"
        component={BookCatering}
      />
    </Stack.Navigator>
  );
};

export const ContainersStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Containers",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
        }}
        name="Containers"
        component={Containers}
      />
    </Stack.Navigator>
  );
};

export const AmpStoreStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Amp Store",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
        }}
        name="AmpStore"
        component={AmpStore}
      />
    </Stack.Navigator>
  );
};

export const ContactUsStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Contact Us",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
        }}
        name="ContactUs"
        component={ContactUs}
      />
    </Stack.Navigator>
  );
};

export const FaqStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  const userData = useSelector(selectUserData);
  const { id } = userData;
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "FAQ",
          headerLeft: () =>
            id ? (
              <Icon
                name="ios-menu"
                size={25}
                color="#3C3C3C"
                style={{ marginLeft: 10 }}
                backgroundColor="white"
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              ></Icon>
            ) : (
              <AntDesign
                name="arrowleft"
                size={25}
                color="#3C3C3C"
                style={{ marginLeft: 10 }}
                backgroundColor="white"
                onPress={() => navigation.navigate("WelcomeDrawer")}
              />
            ),
          headerRight: () => (id ? <CartNotification /> : null),
        }}
        name="Faq"
        component={Faq}
      />
    </Stack.Navigator>
  );
};

// export const AllergicStackNavigator: FunctionComponent = () =>{
//   const navigation = useNavigation();
//   return (
//   <Stack.Navigator>
//       <Stack.Screen
//        options ={{
//         title: "Allergic Preferences",
//           headerLeft: () =>(
//             <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
//             backgroundColor='white'
//             onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
//           )
//           ,headerRight: () =>(
//                         <View style={{
//                           flexDirection: 'row',
//                           justifyContent: 'center',
//                           alignItems: 'center'}}>
//                             <View style={{position: 'relative'}} >
//                                 <View style={styles.bellContainer}>
//                                   <Text style={styles.textbel}>2</Text>
//                                 </View>

//                            <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#3C3C3C" style={{marginRight: 20}}
//                               // onPress={() => navigation.goBack()}
//                               />
//                             </View >
//                             <View style={{position: 'relative'}} >
//                                 <View style={styles.bellContainer}>
//                                   <Text style={styles.textbel}>12</Text>
//                                 </View>
//                                 <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#3C3C3C" style={{marginRight: 20}}
//                                 onPress={() => navigation.navigate('MyCart')}
//                                 />
//                             </View>
//                         </View>

//                       ),
//         }}
//       name="Allergic" component={Allergic} />

//     </Stack.Navigator>
//   )
// }

export const ReferStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Refer & Earn",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
        }}
        name="Refer"
        component={Refer}
      />
      <Stack.Screen
        options={{
          title: "Refer & Earn History",
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={25}
              color="#000"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.navigate("Refer")}
            />
          ),
          headerRight: () => <CartNotification />,
        }}
        name="ReferList"
        component={ReferList}
      />
    </Stack.Navigator>
  );
};

export const PickupStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Pickup Glassware",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
        }}
        name="Pickup"
        component={Pickup}
      />
    </Stack.Navigator>
  );
};

export const MyCartStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "My Cart",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={() => navigation.navigate("Checkout")}
              >
                <Text style={styles.buttonText}>Checkout</Text>
              </TouchableOpacity> */}
            </View>
          ),
        }}
        name="MyCartStack"
        component={MyCart}
      />

      <Stack.Screen
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ position: "relative" }}>
                <View style={styles.bellContainer}>
                  <Text style={styles.textbel}>2</Text>
                </View>

                <MaterialCommunityIcons
                  name="bell-outline"
                  type="ionicon"
                  size={25}
                  color="#3C3C3C"
                  style={{ marginRight: 20 }}
                  // onPress={() => navigation.goBack()}
                />
              </View>
              <View style={{ position: "relative" }}>
                <View style={styles.bellContainer}>
                  <Text style={styles.textbel}>12</Text>
                </View>
                <AntDesign
                  name="shoppingcart"
                  type="ionicon"
                  size={25}
                  color="#3C3C3C"
                  style={{ marginRight: 20 }}
                  onPress={() => navigation.navigate("MyCart")}
                />
              </View>
            </View>
          ),
          // headerTransparent:true,
          title: "Checkout",
        })}
        name="Checkout"
        component={Checkout}
      />
    </Stack.Navigator>
  );
};

export const NutritionPackagesStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Nutrition Packages",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
        }}
        name="NutritionPackages"
        component={NutritionPackages}
      />
    </Stack.Navigator>
  );
};

export const CheckoutInfoStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
          // headerLeft: () =>(
          //   <Icon name='ios-menu' size={25} color="#3C3C3C" style={{marginLeft: 10}}
          //   backgroundColor='white'
          //   onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}></Icon>
          // )
          // ,headerRight: () =>(
          //               <View style={{
          //                 flexDirection: 'row',
          //                 justifyContent: 'center',
          //                 alignItems: 'center'}}>
          //                   <View style={{position: 'relative'}} >
          //                       <View style={styles.bellContainer}>
          //                         <Text style={styles.textbel}>2</Text>
          //                       </View>

          //                  <MaterialCommunityIcons name="bell-outline" type="ionicon"  size={25} color="#3C3C3C" style={{marginRight: 20}}
          //                     // onPress={() => navigation.goBack()}
          //                     />
          //                   </View >
          //                   <View style={{position: 'relative'}} >
          //                       <View style={styles.bellContainer}>
          //                         <Text style={styles.textbel}>12</Text>
          //                       </View>
          //                       <AntDesign name="shoppingcart"  type="ionicon" size={25} color="#3C3C3C" style={{marginRight: 20}}
          //                       onPress={() => navigation.navigate('MyCart')}
          //                       />
          //                   </View>
          //               </View>

          //             ),
        }}
        name="CheckoutInfo"
        component={CheckoutInfo}
      />
    </Stack.Navigator>
  );
};

export const GiftCardsStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Gift Cards",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
        }}
        name="GiftCards"
        component={GiftCards}
      />

      <Stack.Screen
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => <CartNotification />,
          // headerTransparent:true,
          title: "New Gift card",
        })}
        name="NewGift"
        component={NewGift}
      />
    </Stack.Navigator>
  );
};

export const DonateStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Donate",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
        }}
        name="Donate"
        component={Donate}
      />
    </Stack.Navigator>
  );
};

export const PasswordstackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Password",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          ),
        }}
        name="Password"
        component={Password}
      />
    </Stack.Navigator>
  );
};

export const WalletStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Digital Wallet",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
        }}
        name="Wallet"
        component={Wallet}
      />

      <Stack.Screen
        options={{
          title: "Digital Wallet History",
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.navigate("Wallet")}
            />
          ),
          headerRight: () => <CartNotification />,
        }}
        name="Transactions"
        component={Transactions}
      />
    </Stack.Navigator>
  );
};

// NOTIFICATIONS

export const NotificationStackNavigator: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Notification",
          headerLeft: () => (
            <Icon
              name="ios-menu"
              size={25}
              color="#3C3C3C"
              style={{ marginLeft: 10 }}
              backgroundColor="white"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            ></Icon>
          ),
          headerRight: () => <CartNotification />,
        }}
        name="NotificationStack"
        component={Notification}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  bellContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // padding:5,
    backgroundColor: "#F26E21",
    borderRadius: 30,
    width: 18,
    height: 18,
    position: "absolute",
    top: -12,
    left: 10,
  },
  textbel: {
    color: "#fff",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 1.25,
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 92,
    height: 32,
    backgroundColor: mainColor,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 5,
  },
  buttonText: {
    color: secundaryColor,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 1.25,
    textAlign: "center",
  },
  textWelcom: {
    color: thirdColor,
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 1.25,
    textAlign: "center",
  },
  textName: {
    color: thirdColor,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 1.3,
    textAlign: "center",
  },
});
