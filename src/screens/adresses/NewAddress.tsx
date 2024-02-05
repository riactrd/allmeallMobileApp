import {
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  mainColor,
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useToast } from "react-native-toast-notifications";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { useAddaddressesMutation } from "../../redux/api/addresses";
import GoogleAddress from "../../componets/googleAddress";

type Props = {
  route: RouteProp<{ params: { addressType: string } }, "params">;
};

const NewAddress: FunctionComponent<Props> = ({ route }) => {
  const { addressType } = route.params;
  // console.log(addressType);
  const navigation = useNavigation();
  let [optionalAddress, SetoptionalAddress] = useState("");
  const [newAddressState, SetNewAddressState] = useState({
    firstName: "",
    lastName: "",
    address: "",
    apartmentSuite: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    mobileNumber: "",
    deliveryInstructions: "",
    securityCode: "",
  });
  const toast = useToast();
  const [addaddresses, { data, isError, error, isLoading }] =
    useAddaddressesMutation();

  // item.first_name + " " + item.last_name, item.complete_address, item.phone_number

  const onChange = (text: string) => {
    SetoptionalAddress(text);
    // console.log(text)
  };

  // console.log(optionalAddress);

  useEffect(() => {
    if (data) {
      SetNewAddressState({
        firstName: "",
        lastName: "",
        address: "",
        apartmentSuite: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        mobileNumber: "",
        deliveryInstructions: "",
        securityCode: "",
      });
      toast.show("Address Added", {
        type: "success",
        placement: "bottom",
        duration: 8000,
        animationType: "slide-in",
      });
      // navigation.navigate('VerifyUser',
      // {
      //   screen: 'VerifyUser',
      //   params: {userId: data.data.user.id, message: data.message}
      // }
      // )
    }

    // console.log(optionalAddress)
    // console.log(newAddressState.address)

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
    SetNewAddressState((prev) => ({ ...prev, firstName: value }));
  };

  const onChangelastName = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetNewAddressState((prev) => ({ ...prev, lastName: value }));
  };

  const onChangeAddress = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetNewAddressState((prev) => ({ ...prev, address: value }));
  };

  const onChangeApartmentSuite = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetNewAddressState((prev) => ({ ...prev, apartmentSuite: value }));
  };

  const onChangeStreet = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetNewAddressState((prev) => ({ ...prev, street: value }));
  };

  const onChangeCity = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetNewAddressState((prev) => ({ ...prev, city: value }));
  };

  const onChangestate = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetNewAddressState((prev) => ({ ...prev, state: value }));
  };

  const onChangeMobileNumber = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetNewAddressState((prev) => ({ ...prev, mobileNumber: value }));
  };

  const onDeliveryInstructions = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetNewAddressState((prev) => ({ ...prev, deliveryInstructions: value }));
  };

  const onsecurityCode = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetNewAddressState((prev) => ({ ...prev, securityCode: value }));
  };

  const onChangezip = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    SetNewAddressState((prev) => ({ ...prev, zip: value }));
  };

  const address = {
    first_name: newAddressState.firstName,
    last_name: newAddressState.lastName,
    type_of_address: addressType,
    address1: newAddressState.address
      ? newAddressState.address
      : optionalAddress,
    address2: newAddressState.apartmentSuite,
    address3: "sublocality_level_1",
    lat: "",
    lng: "",
    formatted_address: "",
    street_number: newAddressState.street,
    postal_code: "60091",
    locality: "city",
    sublocality: "",
    country: "United States",
    country_short: "",
    state: "administrative_area_level_1",
    county: "administrative_area_level_2",
    city: newAddressState.city,
    state_short: newAddressState.state,
    email: "user@gmail.com",
    mobile_number: newAddressState.mobileNumber,
    phone_number: newAddressState.mobileNumber,
    instructions: newAddressState.deliveryInstructions,
    security_code: newAddressState.securityCode,
    sub_premise: "Test",
    route: "Street Address",
    complete_address:
      newAddressState.address +
      ", " +
      newAddressState.apartmentSuite +
      ", " +
      newAddressState.city +
      ", " +
      newAddressState.state,
  };

  const handlerAddress = async () => {
    if (!newAddressState.firstName) {
      toast.show("Please fill out the First Name field", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else if (!newAddressState.lastName) {
      toast.show("Please fill out the Last Name field", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else if (!optionalAddress) {
      // SetEmptyInput("Please fill out the Email field" )
      toast.show("Please fill out the address field", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else if (!newAddressState.street) {
      toast.show("Please fill out the street field", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else if (!newAddressState.city) {
      toast.show("Please fill out the city field", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else if (!newAddressState.state) {
      toast.show("Please fill out the state field", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else if (!newAddressState.mobileNumber) {
      toast.show("Please fill out the Mobile Number field", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else {
      await addaddresses({ address });
    }
  };

  return (
    <View style={{ backgroundColor: secundaryColor, flex: 1 }}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <ScrollView
              keyboardShouldPersistTaps="handled"
              style={{ width: ScreenWidth, marginBottom: 5 }}
            >
              <View style={styles.viewScroll}>
                {/* <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>Select type of addrees<Text style={{color:mainColor}}>*</Text></Text>
                  <TextInput placeholder='Type...' style={styles.input}/>
                </View> */}

                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    First Name<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Type First..."
                    style={styles.input}
                    value={newAddressState.firstName}
                    onChange={onChangeName}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    Last Name<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Type Last..."
                    style={styles.input}
                    value={newAddressState.lastName}
                    onChange={onChangelastName}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    Address<Text style={{ color: mainColor }}>*</Text>
                  </Text>

                  <GoogleAddress
                    SetNewAddressState={SetNewAddressState}
                    newAddressState={newAddressState}
                    onChange={onChange}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    Apartment, suite etc. (optional)
                  </Text>
                  <TextInput
                    placeholder="Type Apartment, suite etc. (optional)..."
                    style={styles.input}
                    value={newAddressState.apartmentSuite}
                    onChange={onChangeApartmentSuite}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    Street Address<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Type Street..."
                    style={styles.input}
                    value={newAddressState.street}
                    onChange={onChangeStreet}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    City<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Type City..."
                    style={styles.input}
                    value={newAddressState.city}
                    onChange={onChangeCity}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    State<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Type State..."
                    style={styles.input}
                    value={newAddressState.state}
                    onChange={onChangestate}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    Zip Code<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Type Code..."
                    keyboardType="number-pad"
                    style={styles.input}
                    value={newAddressState.zip}
                    onChange={onChangezip}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    Mobile Number<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Type Number..."
                    keyboardType="number-pad"
                    style={styles.input}
                    value={newAddressState.mobileNumber}
                    onChange={onChangeMobileNumber}
                  />
                </View>
                <View style={styles.textDivide}>
                  <MaterialIcons
                    name="delivery-dining"
                    color={mainColor}
                    style={styles.icon}
                  />
                  <Text style={styles.textDivideFont}>
                    Add Delivery Instructions
                  </Text>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.instructionsText}>
                    Do we need additional instructions to find this address?
                    <Text style={styles.instructionsTextsub}>
                      (building description, a nearby landmark, or other
                      navigation instructions.)
                    </Text>
                  </Text>
                  <TextInput
                    placeholder="Additional instructions"
                    style={styles.input}
                    value={newAddressState.deliveryInstructions}
                    onChange={onDeliveryInstructions}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.instructionsText}>
                    Do we need a security code or a call box number to enter
                    this building?<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Security code"
                    style={styles.input}
                    value={newAddressState.securityCode}
                    onChange={onsecurityCode}
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.saveButtom}
                  onPress={handlerAddress}
                >
                  <Text style={styles.saveButtomText}>Save</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default NewAddress;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20%",
    marginTop: 20,
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
  textDivideFont: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 15,
    letterSpacing: 0.15,
    color: thirdColor,
  },
  instructionsText: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    color: thirdColor,
    width: 286,
    height: "auto",
  },
  instructionsTextsub: {
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: 0.15,
    color: thirdColor,
    width: 286,
    height: "auto",
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
