import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ScreenWidth, Screenheight, mainColor } from "../../componets/shared";
import { useLoginUserMutation } from "../../redux/api/authApi";
import { useToast } from "react-native-toast-notifications";
import { useDispatch } from "react-redux";
import { loginData } from "../../redux/loginSlice";
import Spinner from "react-native-loading-spinner-overlay";

export default function Signin({ navigation }) {
  const [loginUser, { data, isError, error, isLoading }] =
    useLoginUserMutation();
   const [email, SetUserEmail] = useState<string>("euro@gmail.com");
   const [password, SetPassword] = useState<string>("password");
  //const [email, SetUserEmail] = useState<string>(
  //  "parthisivaraj@brandxfocus.com"
  //);
  //const [password, SetPassword] = useState<string>("password");
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data && data.data.access_token) {
      SetUserEmail("");
      SetPassword("");
      // SetIsLogin(true)
      // console.log(data)
      dispatch(
        loginData({
          userLogin: true,
          token: data.data.access_token,
          userData: data.data.user,
        })
      );

      navigation.navigate("HomeDrawer");
    }
    if (isError) {
      if (error) {
        if ("status" in error) {
          // you can access all properties of `FetchBaseQueryError` here

          toast.show(JSON.stringify("Email or password is incorrect"), {
            type: "danger",
            placement: "bottom",
            duration: 8000,
            animationType: "slide-in",
          });

          console.log(error);

          SetUserEmail("");
          SetPassword("");
        }
      }
    }
  }, [data, isError]);

  const sign_in = {
    login: email.toLowerCase(),
    password: password,
  };

  const HandlerLogin = async () => {
    if (email == "" || password == "") {
      toast.show("Email or password are required", {
        type: "danger",
        placement: "bottom",
        duration: 8000,
        animationType: "slide-in",
      });
    } else {
      await loginUser({ sign_in });
      ``;
    }
  };

  const onChangeEmail = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetUserEmail(value);
  };
  const onChangePassword = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetPassword(value);
  };

  return (
    <>
      {isLoading && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(3, 0, 2, 0.30)",
            height: Screenheight,
            width: ScreenWidth,
            position: "absolute",
            zIndex: 99,
          }}
        >
          <View>
            <Spinner
              //visibility of Overlay Loading Spinner
              visible={isLoading}
              //Text with the Spinner
              // textContent={"Loading..."}
              //Text style of the Spinner Text
              // textStyle={styles.spinnerTextStyle}
            />
          </View>
        </View>
      )}
      <View style={{ flex: 1, backgroundColor: "white", position: "relative" }}>
        <ImageBackground
          source={require("../../../assets/img/Welcome.png")}
          style={{ flex: 1, resizeMode: "cover" }}
        >
          <View
            style={{
              position: "absolute",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              top: "15%",
            }}
          >
            <Image
              source={require("../../../assets/img/logoAMP.png")}
              style={{ width: 80, height: 80 }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              top: "60%",
            }}
          >
            <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>
              All Meal Prep
            </Text>
            {/* <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>
              Prep
            </Text> */}
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          flex: 1,
          // backgroundColor: "red",
          paddingHorizontal: 24,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flexDirection: "column",
          // justifyContent: "space-around",
          // alignItems: "flex-end",
          marginBottom: 10,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: Screenheight * 0.02,
            }}
          >
            Log In
          </Text>
          <View style={{ marginTop: Screenheight * 0.02 }}>
            <TextInput
              style={{
                width: "100%",
                height: 56,
                borderRadius: 10,
                borderColor: "gray",
                borderWidth: 1,
                paddingLeft: 16,
                marginBottom: 16,
              }}
              placeholder="Username or Email"
              value={email}
              onChange={onChangeEmail}
            />

            <TextInput
              style={{
                width: "100%",
                height: 56,
                borderRadius: 10,
                borderColor: "gray",
                borderWidth: 1,
                paddingLeft: 16,
                marginBottom: 16,
              }}
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              value={password}
              onChange={onChangePassword}
            />

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate("HomeDrawer")}
              style={styles.buttomSignin}
              onPress={HandlerLogin}
            >
              <Icon
                name="user-check"
                type="ionicon"
                color="#fff"
                style={styles.iconLogin}
              />
              <Text style={styles.textButtomLogin}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            // marginTop: Screenheight * 0.01,
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              // marginBottom: 8,
              alignSelf: "center",
              fontSize: 14,
              fontStyle: "italic",
            }}
          >
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignupDrawer")}>
            <Text
              style={{ alignSelf: "center", fontSize: 16, fontWeight: "bold" }}
            >
              Register here
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 8 }}
            onPress={() => navigation.navigate("ForgotPasswordDrawer")}
          >
            <Text style={styles.textRegister}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  // img: {
  //   width: ScreenWidth,
  //   height: Screenheight + 40,
  // },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop:30,
  },

  title: {
    color: "#FFFFFF",
    // fontFamily: 'Poppins',
    // fontsStyle: 'normal',
    fontWeight: "700",
    fontSize: 36,
    lineheight: 54,
  },
  containerTitle: {
    display: "flex",
    flexDirection: "column",
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  containerbuttom: {
    marginTop: 50,
  },
  buttomSignin: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6F00",
    padding: 20,
    borderRadius: 8,
    width: "100%",
    height: 56,
    marginBottom: 10,
  },
  textButtomLogin: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 16,
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "capitalize",
    color: "#FFFFFF",
  },
  iconLogin: {
    color: "#FFFFFF",
    fontSize: 18,
    marginRight: 40,
    marginLeft: -60,
  },
  buttomSignup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#262626",
    padding: 20,
    borderRadius: 8,
    width: "90%",
    height: 56,
    marginBottom: 15,
  },
  textButtomLogup: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 16,
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "capitalize",
    color: "#FFFFFF",
    paddingTop: 1,
    height: 18,
  },
  iconLogup: {
    color: "#FFFFFF",
    fontSize: 18,
    marginRight: 40,
    marginLeft: -40,
  },
  titleBottom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 40,
  },
  textBottom: {
    color: "#FFFFFF",
    fontsStyle: "normal",
    fontWeight: "700",
    fontSize: 26,
    lineheight: 54,
    marginBottom: 20,
  },

  textRegister: {
    fontStyle: "normal",
    // fontWeight: "600",
    // fontSize: 18,
    // lineHeight: 16,
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "capitalize",
    // marginTop: 20,
    paddingTop: 1,
  },
});
