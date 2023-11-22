import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  mainColor,
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import { useCreateGiftvouchersMutation } from "../../redux/api/giftvouchersApi";
import { useSelector } from "react-redux";
import { useToast } from "react-native-toast-notifications";

const NewGift = () => {
  const toast = useToast();
  const [giftData, setGiftData] = useState({
    sender_first_name: "",
    sender_last_name: "",
    recipient_first_name: "",
    recipient_last_name: "",
    recipient_email: "",
    amount: "",
    message: "",
  });
  const [createGift, { data }] = useCreateGiftvouchersMutation();

  const userInfo = useSelector((state) => state.login);

  useEffect(() => {
    if (userInfo) {
      setGiftData((prev) => ({
        ...prev,
        sender_first_name: userInfo.userData.first_name,
      }));
      setGiftData((prev) => ({
        ...prev,
        sender_last_name: userInfo.userData.last_name,
      }));
    }
  }, [userInfo]);

  console.log(giftData);

  const onChangeRecipient_first_name = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setGiftData((prev) => ({ ...prev, recipient_first_name: value }));
  };

  const onChangeRecipient_last_name = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setGiftData((prev) => ({ ...prev, recipient_last_name: value }));
  };

  const onChangeRecipient_email = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setGiftData((prev) => ({ ...prev, recipient_email: value }));
  };

  const onChangeAmount = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setGiftData((prev) => ({ ...prev, amount: value }));
  };

  const onChangeMessage = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setGiftData((prev) => ({ ...prev, message: value }));
  };

  const gift_card = giftData;

  const handlerNewGift = async () => {
    console.log({ gift_card });
    try {
      const result = await createGift({ gift_card }).unwrap();
      toast.show(JSON.stringify("is Success"), {
        type: "success",
        placement: "center",
        duration: 8000,
        animationType: "slide-in",
      });

      setGiftData((prev) => ({ ...prev, recipient_first_name: "" }));
      setGiftData((prev) => ({ ...prev, recipient_last_name: "" }));
      setGiftData((prev) => ({ ...prev, recipient_email: "" }));
      setGiftData((prev) => ({ ...prev, amount: "" }));
      setGiftData((prev) => ({ ...prev, message: "" }));
      console.log(result);
    } catch (error) {
      toast.show(JSON.stringify(error.data.error.message), {
        type: "danger",
        placement: "center",
        duration: 8000,
        animationType: "slide-in",
      });
      console.log("this is error", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.viewScroll}
        >
          <View style={styles.inputContainer}>
            <Text style={styles.headerTextInput}>
              Recipient First Name<Text style={{ color: mainColor }}>*</Text>
            </Text>
            <TextInput
              placeholder="Type first Name..."
              style={styles.input}
              value={giftData.recipient_first_name}
              onChange={onChangeRecipient_first_name}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.headerTextInput}>
              Recipient Last Name<Text style={{ color: mainColor }}>*</Text>
            </Text>
            <TextInput
              placeholder="Type last Name*..."
              style={styles.input}
              onChange={onChangeRecipient_last_name}
              value={giftData.recipient_last_name}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.headerTextInput}>
              Email Address Receiving Gift Card
              <Text style={{ color: mainColor }}>*</Text>
            </Text>
            <TextInput
              placeholder="Type email..."
              style={styles.input}
              onChange={onChangeRecipient_email}
              value={giftData.recipient_email}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.headerTextInput}>
              Digital Gift Card Amount(Min. $50.0)
              <Text style={{ color: mainColor }}>*</Text>
            </Text>
            <TextInput
              placeholder="Type amount..."
              style={styles.input}
              onChange={onChangeAmount}
              value={giftData.amount}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.headerTextInput}>Message to Recipient</Text>
            <TextInput
              placeholder="Type message..."
              style={styles.input}
              onChange={onChangeMessage}
              value={giftData.message}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.saveButtom}
            onPress={handlerNewGift}
          >
            <Text style={styles.saveButtomText}>Submit Gift Card</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default NewGift;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display:'flex',
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: secundaryColor,
  },
  wrapper: {
    // backgroundColor: '#000',
    // width: ScreenWidth-20,
    flexDirection: "column",
    alignItems: "center",
  },
  viewScroll: {
    // width: ScreenWidth-20,
    flexDirection: "column",
    // alignItems: "center",
    // padding:1,
    // marginBottom:320,
    marginBottom: "auto",
    marginTop: 30,
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
  textDivide: {
    flexDirection: "row",
    width: ScreenWidth - 20,
    marginBottom: 20,
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    marginRight: 20,
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
});
