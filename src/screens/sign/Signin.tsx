import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  ActivityIndicator,
} from "react-native";
import React, { FunctionComponent, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { StackScreenProps } from "@react-navigation/stack";
import {
  Screenheight,
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import { useLoginUserMutation } from "../../redux/api/authApi";
import { useToast } from "react-native-toast-notifications";
import { useDispatch } from "react-redux";
import { loginData } from "../../redux/loginSlice";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Spinner from "react-native-loading-spinner-overlay";
import { RootStackParamList } from "../../navigators/RootStack";

interface errorModel {
  data: {
    code: number;
    error: {
      message: string;
    };
    success: boolean;
  };
}

type props = StackScreenProps<RootStackParamList, "SigninDrawer">;

const Signin: FunctionComponent<props> = ({ navigation }) => {
  const [loginUser, { data, isError, error, isLoading }] =
    useLoginUserMutation();
  const [email, SetUserEmail] = useState<string>("");
  const [password, SetPassword] = useState<string>("");
  const toast = useToast();
  const dispatch = useDispatch();

  // if(isLoading){
  //   return (
  //     <View style={{
  //       flex:1, justifyContent: 'center', alignItems: 'center'
  //     }}>
  //        <ActivityIndicator size='large'/>
  //     </View>
  //   );

  // }

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

          SetUserEmail("");
          SetPassword("");
        }
      }
    }
  }, [data, isError]);

  const sign_in = {
    login: email,
    password: password,
  };

  // console.log(sign_in)
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
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
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
              textContent={"Loading..."}
              //Text style of the Spinner Text
              textStyle={styles.spinnerTextStyle}
            />
          </View>
        </View>
      )}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require("../../../assets/img/Welcome.png")}
          resizeMode="cover"
          style={styles.img}
        >
          <SafeAreaView>
            <View style={styles.wrapper}>
              <View style={styles.header}>
                <Image
                  source={require("../../../assets/img/logoAMP.png")}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                />
                <View style={styles.containerTitle}>
                  <Text style={styles.title}>Meal Prep</Text>
                  <Text style={styles.title}>Chicago</Text>
                </View>
              </View>
              <View style={styles.containerBottom}>
                <View style={styles.wrapperButton}>
                  <Text style={styles.textLogin}>Log In</Text>
                </View>
                <View style={styles.containerInput}>
                  <TextInput
                    style={styles.input}
                    placeholder="Username or Email"
                    value={email}
                    onChange={onChangeEmail}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChange={onChangePassword}
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.buttomSignin}
                  // onPress={()=>navigation.navigate('Home')}
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
                <TouchableOpacity
                  style={styles.forgotPassword}
                  onPress={() => navigation.navigate("ForgotPasswordDrawer")}
                >
                  <Text style={styles.textRegister}>Forgot Password</Text>
                </TouchableOpacity>
                <View style={styles.containertextBottom}>
                  <Text style={styles.textAccount}>Don’t have an account?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("SignupDrawer")}
                  >
                    <Text style={styles.textRegister}>Register here</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  containerKey: {
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    width: ScreenWidth,
    height: 812,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop:30,
    height: Screenheight + 50,
  },
  headertext: {
    color: secundaryColor,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 24,
    letterSpacing: 0.15,
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
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  containerBottom: {
    width: ScreenWidth,
    height: 520,
    backgroundColor: "#fff",
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  wrapperButton: {
    marginTop: 20,
  },
  textLogin: {
    color: "#262626",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  containerInput: {
    marginTop: 30,
  },
  input: {
    width: 328,
    height: 56,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
    borderColor: "gray",
    marginBottom: 20,
    color: "black",
  },
  buttomSignin: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6F00",
    padding: 20,
    borderRadius: 8,
    width: 328,
    height: 56,
    // marginBottom:30,
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
  containertextBottom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textAccount: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 16,
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "capitalize",
  },
  textRegister: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 16,
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "capitalize",
    marginTop: 20,
    paddingTop:1,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 80,
  },
  forgotPassword: {
    marginBottom: 20,
  },
  loading: {
    backgroundColor: thirdColor,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});
