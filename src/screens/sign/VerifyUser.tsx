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
import React, { FunctionComponent, useEffect, useState } from "react";
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
import { useToast } from "react-native-toast-notifications";
import { RouteProp } from "@react-navigation/native";
import { useVerificationCodeSendMutation } from "../../redux/api/verificationCode";
import ResentCode from "../../componets/ResentCode";

type Props = {
  route: RouteProp<{ params: { userId: string; message: string } }, "params">;
};
const VerifyUser: FunctionComponent<Props> = ({ route }) => {
  const { userId, message } = route.params;
  // const {id}=user;
  const toast = useToast();
  const navigation = useNavigation();
  const [verificationCode, SetVerificationCode] = useState<string>("");

  const [verificationCodeSend, { data, isError, error, isLoading }] =
    useVerificationCodeSendMutation();

  //  () => {

  //     toast.show(message, {
  //       type: "success",
  //       placement: "bottom",
  //       duration: 20000,
  //       animationType: "slide-in",

  //     });
  //   }

  useEffect(() => {
    // toast.show(message, {
    //   type: "success",
    //   placement: "bottom",
    //   duration: 8000,
    //   animationType: "slide-in",

    // });

    if (data) {
      SetVerificationCode("");

      navigation.navigate("SigninDrawer");
    }

    if (isError) {
      if (error) {
        if ("status" in error) {
          // you can access all properties of `FetchBaseQueryError` here
          toast.show(JSON.stringify(error.data.error), {
            type: "error",
            placement: "bottom",
            duration: 8000,
            animationType: "slide-in",
          });
        }
      }
    }
  }, [data, isError]);

  const onChangeVerificationCode = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetVerificationCode(value);
  };

  const verify_user = {
    id: `${userId}`,
    verification_code: `${verificationCode}`,
  };

  const handlerVerification = async () => {
    if (!verificationCode) {
      toast.show("Please fill out the Verification code field", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else {
      await verificationCodeSend({ verify_user });
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
                  <Text style={styles.headertext}>Verify Account</Text>
                </View>
                <View style={{ marginTop: 30 }}></View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    Verification code<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Enter verification code..."
                    value={verificationCode}
                    onChange={onChangeVerificationCode}
                    style={styles.input}
                  />
                </View>

                <TouchableOpacity
                  onPress={handlerVerification}
                  activeOpacity={0.7}
                  style={styles.saveButtom}
                >
                  <FontAwesome5
                    name="user-check"
                    color={secundaryColor}
                    style={styles.icon}
                  />
                  <Text style={styles.saveButtomText}>Verify</Text>
                </TouchableOpacity>
                <ResentCode id={userId} />
              </View>
            </SafeAreaView>
            {/* </View> */}
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default VerifyUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: secundaryColor,
  },
  containerKey: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
    backgroundColor: secundaryColor,
    height: Screenheight,
  },
  wrapper: {
    // backgroundColor: '#000',
    // width: ScreenWidth-20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
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
  saveButtomSecond: {
    flexDirection: "row",
    justifyContent: "center",
    width: ScreenWidth - 20,
    marginBottom: 20,
    // backgroundColor: mainColor,
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtomTextSecond: {
    // color:secundaryColor,
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
