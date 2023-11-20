import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  mainColor,
  Screenheight,
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRegisterUserMutation } from "../../redux/api/authApi";
import { useToast } from "react-native-toast-notifications";

const SignUp = () => {
  const navigation = useNavigation();
  const [newUser, SetNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });
  const toast = useToast();

  const [registerUser, { data, isError, error, isLoading }] =
    useRegisterUserMutation();

  useEffect(() => {
    if (data) {
      SetNewUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        ConfirmPassword: "",
      });

      navigation.navigate("VerifyUser", {
        screen: "VerifyUser",
        params: { userId: data.data.user.id, message: data.message },
      });
    }

    if (isError) {
      if (error) {
        if ("status" in error) {
          // you can access all properties of `FetchBaseQueryError` here
          toast.show(JSON.stringify(error.data.error.message), {
            type: "error",
            placement: "bottom",
            duration: 8000,
            animationType: "slide-in",
          });
        }
      }
    }
  }, [data, isError]);

  const onChangeName = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetNewUser((prev) => ({ ...prev, firstName: value }));
  };

  const onChangelastName = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetNewUser((prev) => ({ ...prev, lastName: value }));
  };

  const onChangeEmail = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetNewUser((prev) => ({ ...prev, email: value }));
  };

  const onChangePassword = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetNewUser((prev) => ({ ...prev, password: value }));
  };

  const onChangeConfirmPassword = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetNewUser((prev) => ({ ...prev, ConfirmPassword: value }));
  };

  const sign_up = {
    first_name: newUser.firstName,
    last_name: newUser.lastName,
    email: newUser.email,
    password: newUser.password,
    username: newUser.firstName + newUser.lastName,
  };

  function isValiEmail(val: string) {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(val)) {
      return true;
    }
  }

  const handlerRegister = async () => {
    const emailCheck = isValiEmail(newUser.email);

    if (!newUser.firstName) {
      toast.show("Please fill out the First Name field", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else if (!newUser.lastName) {
      toast.show("Please fill out the Last Name field", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else if (!newUser.email) {
      // SetEmptyInput("Please fill out the Email field" )
      toast.show("Please fill out the Email field", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else if (emailCheck) {
      toast.show("Please fill out a valid Email", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else if (!newUser.password) {
      toast.show("Please fill out the Password field", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else if (!newUser.ConfirmPassword) {
      toast.show("Please fill out the Confirm Password field", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else if (newUser.password !== newUser.ConfirmPassword) {
      toast.show("Password and Confirm Password doesn't match", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else if (newUser.password.length <= 5) {
      toast.show("Password is too short ,minimum is 6 characters", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else {
      await registerUser({ sign_up });
    }
  };
  return (
    <SafeAreaView style={{ backgroundColor: secundaryColor }}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="padding" style={styles.containerKey}>
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
                <Text style={styles.headertext}>Loading....</Text>
              </View>
            )}
            {/* <View style={styles.container}> */}
            <SafeAreaView>
              <View style={styles.wrapper}>
                <Image
                  source={require("../../../assets/img/logoAMP.png")}
                  style={styles.img}
                />
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.headertext}>Create an account</Text>
                </View>
                <View style={{ marginTop: 30 }}></View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    First Name<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Enter First Name..."
                    value={newUser.firstName}
                    onChange={onChangeName}
                    style={styles.input}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    Last Name<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Enter Last Name..."
                    value={newUser.lastName}
                    onChange={onChangelastName}
                    style={styles.input}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    Email Address<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Enter Email Address..."
                    style={styles.input}
                    value={newUser.email}
                    onChange={onChangeEmail}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    Password<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Enter Password..."
                    style={styles.input}
                    value={newUser.password}
                    onChange={onChangePassword}
                    secureTextEntry={true}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    Confirm Password<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Enter Confirm Password..."
                    style={styles.input}
                    value={newUser.ConfirmPassword}
                    onChange={onChangeConfirmPassword}
                    secureTextEntry={true}
                  />
                </View>
                <TouchableOpacity
                  onPress={handlerRegister}
                  activeOpacity={0.7}
                  style={styles.saveButtom}
                >
                  <FontAwesome5
                    name="user-check"
                    color={secundaryColor}
                    style={styles.icon}
                  />
                  <Text style={styles.saveButtomText}>Create Account</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity 
                    onPress={()=>navigation.navigate('VerifyUser',
                    {
                      screen: 'VerifyUser',
                      params: {userId: "2530", message: 'se te envio el mensaje'}
                    }
                    
                    )
                  }
                    ><Text>VerifyUser</Text></TouchableOpacity> */}
              </View>
            </SafeAreaView>
            {/* </View> */}
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: secundaryColor,
  },
  containerKey: {
    // flex:1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: secundaryColor,
    height: Screenheight,
  },
  wrapper: {
    // backgroundColor: '#000',
    // width: ScreenWidth-20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 69,
    height: 69,
    marginTop: 20,
  },
  headertext: {
    color: thirdColor,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: ScreenWidth - 20,
    marginBottom: 20,
  },
  headerTextInput: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 0.15,
    color: thirdColor,
  },
  input: {
    padding: 20,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.12)",
  },
  saveButtom: {
    flexDirection: "row",
    justifyContent: "center",
    width: ScreenWidth - 20,
    marginBottom: 20,
    backgroundColor: mainColor,
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtomText: {
    color: secundaryColor,
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 1.25,
    // lineHeight: 16,
  },
  icon: {
    fontSize: 24,
    marginRight: 20,
  },
});
