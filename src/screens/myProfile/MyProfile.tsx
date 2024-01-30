import {
  Keyboard,
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import React, { useEffect, useState } from "react";
import {
  mainColor,
  Screenheight,
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import { RadioButton } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import ImagePickerExample from "../../componets/PickImage";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/store";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useDispatch } from "react-redux";
import { setProfileData } from "../../redux/profileSlice";
import {
  useGetprofileApiQuery,
  useUpdateprofileMutation,
} from "../../redux/api/profileApi";
import Spinner from "react-native-loading-spinner-overlay";
import { format } from "date-fns";

const MyProfile = () => {
  const dispatch = useDispatch();

  const userData = useSelector(selectUserData);

  const { data, isLoading, error } = useGetprofileApiQuery();
  const [updateProfile, { data: profiles }] = useUpdateprofileMutation();
  const { first_name, last_name, date_of_birth, phone_number } = userData;
  const [selected, Setselected] = useState("1");

  const [gender, SetGender] = useState();
  const navigation = useNavigation();
  const [name, SetName] = useState(first_name);
  const [lastname, SetLastName] = useState(last_name);
  const [phone, SetPhone] = useState(phone_number);
  const [secondaryPhone, SetSecondaryPhone] = useState("");
  const [referrer, setReferrer] = useState("");
  const [referralEmail, setReferralEmail] = useState("");
  const [dateofBirth, SetDateofBirth] = useState("");

  useEffect(() => {
    if (data) {
      SetName(data?.data.profile.first_name);
      SetLastName(data?.data.profile.last_name);
      SetPhone(data?.data.profile.phone_number);
      SetSecondaryPhone(data?.data.profile.sec_phone_number);
      SetGender(data?.data.profile.gender);
      setReferrer(data?.data.profile.referral_email);
      setReferralEmail(data?.data.profile.referral_email);

      // // SetDateofBirth
      // if (data?.data.profile.date_of_birth) {
      //   const isoDate = data?.data.profile.date_of_birth;
      //   const dateObject = new Date(isoDate);
      //   // Ajusta la fecha a la zona horaria local del usuario
      //   const adjustedDate = new Date(
      //     dateObject.getTime() - dateObject.getTimezoneOffset() * 60000
      //   );
      //   const formattedDate = format(adjustedDate, "dd/MM/yy");
      //   SetDateofBirth(formattedDate);
      // }
      // SetDateofBirth;
      if (data?.data.profile.date_of_birth) {
        const isoDate = data?.data.profile.date_of_birth;
        const dateObject = new Date(isoDate);
        // Agrega un día a la fecha antes de ajustarla a la zona horaria local
        dateObject.setDate(dateObject.getDate() + 1);
        // Ajusta la fecha a la zona horaria local del usuario
        const adjustedDate = new Date(
          dateObject.getTime() - dateObject.getTimezoneOffset() * 60000
        );
        const formattedDate = format(adjustedDate, "dd/MM/yy");
        SetDateofBirth(formattedDate);
      }
    }
  }, [data]);
  // console.log(data?.data.profile.date_of_birth);
  // console.log(dateofBirth);

  useEffect(() => {
    dispatch(
      setProfileData({
        name,
        lastname,
        phone,
        dateofBirth,
        // dateofBirth: formatDateForBackend(dateofBirth),
        secondaryPhone,
        gender,
        referrer,
        referralEmail,
      })
    );
  }, [
    name,
    lastname,
    phone,
    dateofBirth,
    secondaryPhone,
    gender,
    referrer,
    referralEmail,
  ]);

  useEffect(() => {
    // if (data) {
    //   SetName(data?.data.profile.first_name);
    //   SetLastName(data?.data.profile.last_name);
    //   SetPhone(data?.data.profile.phone_number);
    //   if (data?.data.profile.date_of_birth) {
    //     const isoDate = data?.data.profile.date_of_birth;
    //     const dateObject = new Date(isoDate);
    //     const formattedDate = format(dateObject, "dd/MM/yy");
    //     SetDateofBirth(formattedDate);
    //   }
    //   SetSecondaryPhone(data?.data.profile.sec_phone_number);
    //   SetGender(data?.data.profile.gender);
    // }
    // if (data?.data.profile.date_of_birth) {
    //   const isoDate = data?.data.profile.date_of_birth;
    //   const dateObject = new Date(isoDate);
    //   // Ajusta la fecha a la zona horaria local del usuario
    //   const adjustedDate = new Date(
    //     dateObject.getTime() - dateObject.getTimezoneOffset() * 60000
    //   );
    //   const formattedDate = format(adjustedDate, "dd/MM/yy");
    //   SetDateofBirth(formattedDate);
    // }
    if (data?.data.profile.date_of_birth) {
      const isoDate = data?.data.profile.date_of_birth;
      const dateObject = new Date(isoDate);
      // Agrega un día a la fecha antes de ajustarla a la zona horaria local
      dateObject.setDate(dateObject.getDate() + 1);
      // Ajusta la fecha a la zona horaria local del usuario
      const adjustedDate = new Date(
        dateObject.getTime() - dateObject.getTimezoneOffset() * 60000
      );
      const formattedDate = format(adjustedDate, "dd/MM/yy");
      SetDateofBirth(formattedDate);
    }
    SetDateofBirth;
  }, [data]);

  useEffect(() => {
    dispatch(
      setProfileData({
        name,
        lastname,
        phone,
        dateofBirth,
        secondaryPhone,
        gender,
      })
    );
  }, [name, lastname, phone, dateofBirth, secondaryPhone, gender]);

  const handleLogout = () => {
    navigation.navigate("WelcomeDrawer");
  };

  const onChangeName = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetName(value);
  };

  const onChangeLastName = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetLastName(value);
  };

  const onChangePhone = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetPhone(value);
  };

  const onChangeSecondaryPhone = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetSecondaryPhone(value);
  };

  const onChanDateofBirth = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetDateofBirth(value);
  };

  const onChangeReferrer = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setReferrer(value);
  };

  const onChangeReferralEmail = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setReferralEmail(value);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
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
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: ScreenWidth, marginBottom: -10 }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              marginBottom: "20%",
            }}
          >
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{ width: ScreenWidth, marginBottom: 5 }}
            >
              <View style={styles.headerTop}>
                <TouchableOpacity
                  onPress={() => Setselected("1")}
                  style={styles.containerItem}
                >
                  <View
                    style={[
                      selected === "1"
                        ? styles.wrapperActive
                        : styles.wrapperItem,
                    ]}
                  >
                    <Text
                      style={[
                        selected === "1" ? styles.textActive : styles.text,
                      ]}
                    >
                      Basic Details
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Setselected("2")}
                  style={styles.containerItem}
                >
                  <View
                    style={[
                      selected === "2"
                        ? styles.wrapperActive
                        : styles.wrapperItem,
                    ]}
                  >
                    <View>
                      <Text
                        style={[
                          selected === "2" ? styles.textActive : styles.text,
                        ]}
                      >
                        How did you
                      </Text>
                      <Text
                        // style={{
                        //   fontWeight: "600",
                        //   fontSize: 10,
                        //   lineHeight: 16,
                        //   letterSpacing: 0.15,
                        // }}
                        style={[
                          selected === "2" ? styles.textActive : styles.text,
                        ]}
                      >
                        hear about us?
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Setselected("3")}
                  style={styles.containerItem}
                  onPress={() => navigation.navigate("Adresses")}
                >
                  <View
                    style={[
                      selected === "3"
                        ? styles.wrapperActive
                        : styles.wrapperItem,
                    ]}
                  >
                    <Text
                      style={[
                        selected === "3" ? styles.textActive : styles.text,
                      ]}
                    >
                      Adresses
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Setselected("4")}
                  style={styles.containerItem}
                  onPress={() => navigation.navigate("Allergic")}
                >
                  <View
                    style={[
                      selected === "4"
                        ? styles.wrapperActive
                        : styles.wrapperItem,
                    ]}
                  >
                    <Text
                      style={[
                        selected === "4" ? styles.textActive : styles.text,
                      ]}
                    >
                      Food Preferences
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Setselected("5")}
                  style={styles.containerItem}
                  onPress={() => navigation.navigate("Password")}
                >
                  <View
                    style={[
                      selected === "5"
                        ? styles.wrapperActive
                        : styles.wrapperItem,
                    ]}
                  >
                    <Text
                      style={[
                        selected === "5" ? styles.textActive : styles.text,
                      ]}
                    >
                      Password
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View></View>
            </ScrollView>

            <View style={styles.viewScroll}>
              {selected === "1" ? (
                <View>
                  <View style={styles.image}>
                    <ImagePickerExample />
                  </View>
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      marginBottom: "auto",
                    }}
                  >
                    <View style={styles.inputContainer}>
                      <Text style={styles.headerTextInput}>
                        First Name<Text style={{ color: mainColor }}>*</Text>
                      </Text>
                      <TextInput
                        placeholder="Type first Name..."
                        style={styles.input}
                        value={name}
                        onChange={onChangeName}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.headerTextInput}>
                        Last Name<Text style={{ color: mainColor }}>*</Text>
                      </Text>
                      <TextInput
                        placeholder="Type last Name..."
                        style={styles.input}
                        value={lastname}
                        onChange={onChangeLastName}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.headerTextInput}>
                        Phone Number<Text style={{ color: mainColor }}>*</Text>
                      </Text>
                      <TextInput
                        keyboardType="number-pad"
                        placeholder="Type email..."
                        style={styles.input}
                        value={phone}
                        onChange={onChangePhone}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.headerTextInput}>
                        Date of Birth*
                        <Text style={{ color: mainColor }}>*</Text>
                      </Text>
                      <TextInput
                        keyboardType="number-pad"
                        placeholder="Type email..."
                        style={styles.input}
                        value={dateofBirth}
                        onChange={onChanDateofBirth}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.headerTextInput}>
                        Secondary Phone Number
                        <Text style={{ color: mainColor }}>*</Text>
                      </Text>
                      <TextInput
                        placeholder="Type amount..."
                        style={styles.input}
                        value={secondaryPhone}
                        onChange={onChangeSecondaryPhone}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.headerTextInput}>Gender</Text>
                    </View>
                    <View style={styles.headerContainer}>
                      <View style={styles.textDivide}>
                        <View
                          style={[
                            gender === "Male"
                              ? styles.radiobutomActive
                              : styles.radiobutom,
                          ]}
                        >
                          <RadioButton
                            value="Male"
                            // label="Carto Base MAp"
                            status={gender === 1 ? "checked" : "unchecked"}
                            onPress={() => SetGender(1)}
                            color={mainColor}
                          />
                        </View>

                        <Text style={styles.radioText}>Male</Text>
                      </View>
                      <View style={styles.textDivide}>
                        <View
                          style={[
                            gender === 2
                              ? styles.radiobutomActive
                              : styles.radiobutom,
                          ]}
                        >
                          <RadioButton
                            value="Female"
                            // label="Carto Base MAp"
                            status={gender === 2 ? "checked" : "unchecked"}
                            onPress={() => SetGender(2)}
                            color={mainColor}
                          />
                        </View>

                        <Text style={styles.radioText}>Female</Text>
                      </View>
                      <View style={styles.textDivide}>
                        <View
                          style={[
                            gender === 3
                              ? styles.radiobutomActive
                              : styles.radiobutom,
                          ]}
                        >
                          <RadioButton
                            value="Other"
                            // label="Carto Base MAp"
                            status={gender === 3 ? "checked" : "unchecked"}
                            onPress={() => SetGender(3)}
                            status={gender === 3 ? "checked" : "unchecked"}
                            onPress={() => SetGender(3)}
                            color={mainColor}
                          />
                        </View>

                        <Text style={styles.radioText}>Other</Text>
                      </View>
                    </View>
                    <View style={styles.buttomContainer}>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.saveButtom}
                        onPress={handleLogout}
                      >
                        <Feather
                          name="log-out"
                          color={secundaryColor}
                          style={styles.icon}
                        />
                        <Text style={styles.saveButtomText}>Logout</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ) : (
                <>
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      marginBottom: "auto",
                    }}
                  >
                    <View style={styles.inputContainer}>
                      <Text style={styles.headerTextInput}>
                        Referrer<Text style={{ color: mainColor }}>*</Text>
                      </Text>
                      <TextInput
                        placeholder="Type Referrer..."
                        style={styles.input}
                        onChange={onChangeReferrer}
                        value={referralEmail}
                        onChange={onChangeReferrer}
                        value={referralEmail}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.headerTextInput}>
                        Referral Email
                        <Text style={{ color: mainColor }}>*</Text>
                      </Text>
                      <TextInput
                        placeholder="Type Referral Email*..."
                        style={styles.input}
                        onChange={onChangeReferralEmail}
                        value={referralEmail}
                        onChange={onChangeReferralEmail}
                        value={referralEmail}
                      />
                    </View>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  containerItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
  },
  headerTop: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    // width: ScreenWidth,
  },
  wrapperItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { height: 3, width: 3 },
    // elevation: 1.4,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    width: "auto",
    height: 46,
    padding: 15,
  },

  wrapperActive: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { height: 3, width: 3 },
    elevation: 1.4,
    backgroundColor: "#FF6F00",
    width: "auto",
    height: 46,
    padding: 15,
  },

  text: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.15,
    color: "#000",
  },
  textActive: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.15,
    color: "#fff",
  },
  viewScroll: {
    marginTop: 20,
  },
  image: {
    // marginBottom:10,
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
    // width: ScreenWidth-20,
    marginBottom: 20,
    alignItems: "center",
  },
  icon: {
    fontSize: 15,
    marginRight: 10,
  },
  saveButtom: {
    flexDirection: "row",
    justifyContent: "center",
    width: 100,
    height: 40,
    marginBottom: 20,
    backgroundColor: mainColor,
    // padding:20,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtomText: {
    color: secundaryColor,
    fontWeight: "600",
    fontSize: 12,
    letterSpacing: 1.25,
    lineHeight: 16,
  },
  headerContainer: {
    flexDirection: "row",
    width: ScreenWidth - 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerContainerRadio: {
    flexDirection: "row",
    // width: ScreenWidth-20,
    // justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 20,
    marginRight: 20,
  },
  radiobutom: {
    // backgroundColor: 'rgba(242, 110, 33, 0.15)',
    borderRadius: 30,
    width: "auto",
    height: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderColor: "rgba(0, 0, 0, 0.54)",
    borderWidth: 0.3,
  },
  radiobutomActive: {
    backgroundColor: "rgba(242, 110, 33, 0.15)",
    borderRadius: 30,
    width: "auto",
    height: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderColor: "rgba(242, 110, 33, 0.15)",
    borderWidth: 0.3,
  },
  radioText: {
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 15,
    letterSpacing: 0.15,
    color: thirdColor,
  },
  radioPriceText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    // color: '#FF6F00',
  },
  buttomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: ScreenWidth - 20,
    paddingBottom: 20,
  },
});
