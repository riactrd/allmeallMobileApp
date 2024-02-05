import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ImagePickerExample from "../../componets/PickImage";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/store";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import { setProfileData } from "../../redux/profileSlice";
import { useGetprofileApiQuery } from "../../redux/api/profileApi";
import { format } from "date-fns";
import { formatDate, formatPhoneNumber } from "../../utils/formatDate";
import TopTabsMenu from "./TopTabsMenu";
import Loader from "../../utils/Loader";
import BasicDetails from "./BasicDetails";
import {
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  TextInputChangeEventData,
  View,
} from "react-native";

import { mainColor, ScreenWidth, thirdColor } from "../../componets/shared";
import TopTabRefer from "./TopTabRefer";

const MyProfile = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const { data, isLoading, error } = useGetprofileApiQuery();
  const { first_name, last_name, phone_number } = userData;
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
      setReferrer(data?.data.profile.referrer_id.toString());
      setReferralEmail(data?.data.profile.referral_email);

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

  useEffect(() => {
    dispatch(
      setProfileData({
        name,
        lastname,
        phone,
        dateofBirth,
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
    const format = formatPhoneNumber(value);
    SetPhone(format);
  };

  const onChangeSecondaryPhone = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    const format = formatPhoneNumber(value);
    SetSecondaryPhone(format);
  };

  const onChanDateofBirth = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    const farmat = formatDate(value);
    SetDateofBirth(farmat);
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
      {isLoading && <Loader isLoading={isLoading} />}
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
            <TopTabsMenu selected={selected} Setselected={Setselected} />

            <View style={styles.viewScroll}>
              {selected === "1" ? (
                <View>
                  <View style={styles.image}>
                    <ImagePickerExample />
                  </View>
                  <BasicDetails
                    name={name}
                    onChangeName={onChangeName}
                    lastname={lastname}
                    onChangeLastName={onChangeLastName}
                    phone={phone}
                    onChangePhone={onChangePhone}
                    dateofBirth={dateofBirth}
                    onChanDateofBirth={onChanDateofBirth}
                    secondaryPhone={secondaryPhone}
                    onChangeSecondaryPhone={onChangeSecondaryPhone}
                    gender={gender}
                    setGender={SetGender}
                    handleLogout={handleLogout}
                  />
                </View>
              ) : (
                <TopTabRefer
                  referrer={referrer}
                  onChangeReferrer={onChangeReferrer}
                  referralEmail={referralEmail}
                  onChangeReferralEmail={onChangeReferralEmail}
                />
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
  text: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.15,
    color: "#000",
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

  headerContainer: {
    flexDirection: "row",
    width: ScreenWidth - 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
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
});
