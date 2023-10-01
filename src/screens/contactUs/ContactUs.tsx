import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  mainColor,
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSentcontactMutation } from "../../redux/api/ContactApi";
import { useSelector } from "react-redux";
import { useGetprofileApiQuery } from "../../redux/api/profileApi";
import { useToast } from "react-native-toast-notifications";

const ContactUs = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const userData = useSelector((state) => state.login.userData);
  const [phone, setPhone] = useState("");

  const { data: dataProfile } = useGetprofileApiQuery();
  const toast = useToast();

  useEffect(() => {
    if (dataProfile && dataProfile.data) {
      setPhone(dataProfile?.data?.profile.phone_number);
    }
  }, [dataProfile]);

  const [send, { isloading, isSuccess }] = useSentcontactMutation();

  useEffect(() => {
    if (userData && userData.first_name) {
      setFullName(userData.first_name + userData.last_name);
      setEmail(userData.email);
    }
  }, [userData]);

  useEffect(() => {
    navigation.navigate("HomeDrawer");
  }, [isSuccess]);

  const handlerSend = async () => {
    try {
      const response = await send({
        fullName,
        email,
        phone,
        subject,
        message,
      }).unwrap();
      toast.show(JSON.stringify("Thanks for Contacting Us!"), {
        type: "success",
        placement: "center",
        duration: 8000,
        animationType: "slide-in",
      });
      // console.log("Response Server:", response);

      setSubject("");
      setMessage("");
    } catch (error) {
      // console.error("Error :", error);
      toast.show(JSON.stringify(error.data), {
        type: "danger",
        placement: "center",
        duration: 8000,
        animationType: "slide-in",
      });
    }
  };

  const onChangeSubject = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setSubject(value);
  };

  const onChangeMessage = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setMessage(value);
  };
  // console.log(message);

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: secundaryColor }}
    >
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.containerheaderText}>
            <Text style={styles.headerText}>
              If you want to Contact All Meal Prep fill the details below and
              we’ll get back to you shortly.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Your Subject"
              style={styles.input}
              onChange={onChangeSubject}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Your Message"
              style={styles.inputMult}
              multiline={true}
              onChange={onChangeMessage}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.saveButtom}
            onPress={handlerSend}
          >
            <Text style={styles.saveButtomText}>Submit Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: secundaryColor,
  },
  wrapper: {
    // backgroundColor: '#000',
    width: ScreenWidth - 20,
    flexDirection: "column",
    alignItems: "center",
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
    letterSpacing: 0.15,
    color: thirdColor,
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: ScreenWidth - 20,
    marginBottom: 20,
  },
  input: {
    padding: 20,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.12)",
  },
  inputMult: {
    height: 162,
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
});
