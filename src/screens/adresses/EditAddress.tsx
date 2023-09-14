import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  mainColor,
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const EditAddress = () => {
  return (
    <View style={{ backgroundColor: secundaryColor, flex: 1 }}>
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width: ScreenWidth, marginBottom: 5 }}
            >
              <View style={styles.viewScroll}>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    First Name<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput placeholder="Type..." style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    First Name<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput placeholder="Type First..." style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    Last Name<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput placeholder="Type Last..." style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    Address<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Type Address..."
                    style={styles.input}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    Apartment, suite etc. (optional)
                  </Text>
                  <TextInput
                    placeholder="Type Apartment, suite etc. (optional)..."
                    style={styles.input}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    Street Address<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Type Street..."
                    style={styles.input}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    City<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput placeholder="Type City..." style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    State<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput placeholder="Type State..." style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.headerTextInput}>
                    Zip Code<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Type Code..."
                    keyboardType="number-pad"
                    style={styles.input}
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
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.instructionsText}>
                    Do we need a security code or a call box number to enter
                    this building?<Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput placeholder="Security code" style={styles.input} />
                </View>
                {/* <TouchableOpacity activeOpacity={.7} style={styles.saveButtom}>
                <Text style={styles.saveButtomText}>Save</Text>
            </TouchableOpacity> */}
              </View>
            </ScrollView>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default EditAddress;

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
    // width: ScreenWidth-20,
    flexDirection: "column",
    alignItems: "center",
    // padding:1,
    // marginBottom:320,
    marginBottom: "auto",
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
