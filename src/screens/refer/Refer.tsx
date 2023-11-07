import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  mainColor,
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  useCreateReferEarnMutation,
  useGeneratePromoCodeMutation,
} from "../../redux/api/referEarnApi";
import { useToast } from "react-native-toast-notifications";

const Refer = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const toast = useToast();

  const [createRefer, { data, isError, error, isSuccess }] =
    useCreateReferEarnMutation();

  const [
    generateCode,
    { data: dataCode, isError: isErrorCode, error: errorCode },
  ] = useGeneratePromoCodeMutation();

  useEffect(() => {
    if (dataCode) {
      // console.log(dataCode);
    }
    if (isErrorCode) {
      console.log(errorCode?.data?.error?.message);
      toast.show(JSON.stringify(errorCode.data.error.message), {
        type: "danger",
        placement: "bottom",
        duration: 8000,
        animationType: "slide-in",
      });
    }
  }, [dataCode, isErrorCode]);

  useEffect(() => {
    if (isSuccess) {
      toast.show(JSON.stringify(data?.data?.message), {
        type: "success",
        placement: "bottom",
        duration: 8000,
        animationType: "slide-in",
      });
    }
    if (isError) {
      // console.log(error.data.error.message);
      toast.show(JSON.stringify(error.data.error.message), {
        type: "danger",
        placement: "bottom",
        duration: 8000,
        animationType: "slide-in",
      });
    }
  }, [data, isError]);

  const onChangePromoCode = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setPromoCode(value);
  };

  const onChangeName = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setName(value);
  };
  const onChangeEmail = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setEmail(value);
  };

  const sendApiRefer = {
    referral: {
      email: email,
      name: name,
    },
  };

  const handlerSubmit = async () => {
    await createRefer(sendApiRefer);
    setName(""), setEmail("");
  };

  const handlerSubitGenerateCode = async () => {
    await generateCode(promoCode);
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: secundaryColor }}
    >
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.inputContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.headerTextInput}>My Promo Code </Text>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => navigation.navigate("ReferList")}
              >
                <MaterialIcons
                  name="history"
                  size={24}
                  color={mainColor}
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.headerTextInput}>History </Text>
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder="Type Promo Code..."
              style={styles.input}
              onChange={onChangePromoCode}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.saveButtom}
            onPress={handlerSubitGenerateCode}
          >
            <Text style={styles.saveButtomText}>Generate Promo Code</Text>
          </TouchableOpacity>
          <View style={styles.containerheaderText}>
            <Text style={styles.headerText}>Your promo code is:</Text>
            <Text style={styles.headerTextCode}>675ABPROMOAMP</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.headerTextInput}>
              Name<Text style={{ color: mainColor }}>*</Text>
            </Text>
            <TextInput
              placeholder="Type Name..."
              style={styles.input}
              onChange={onChangeName}
              value={name}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.headerTextInput}>
              Email Address<Text style={{ color: mainColor }}>*</Text>
            </Text>
            <TextInput
              placeholder="Type Email Address..."
              style={styles.input}
              value={email}
              onChange={onChangeEmail}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.saveButtom}
            onPress={handlerSubmit}
          >
            <Text style={styles.saveButtomText}>Refer & Earn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Refer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: secundaryColor,
  },
  wrapper: {
    // backgroundColor: '#000',
    // width: ScreenWidth-20,
    flexDirection: "column",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: ScreenWidth - 20,
    marginBottom: 20,
    marginTop: 20,
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
  },
  saveButtomText: {
    color: secundaryColor,
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 1.25,
    lineHeight: 16,
  },
  containerheaderText: {
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    width: 280,
    textAlign: "center",
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1.25,
    color: thirdColor,
  },
  headerTextCode: {
    width: 280,
    textAlign: "center",
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1.25,
    color: mainColor,
  },
});
