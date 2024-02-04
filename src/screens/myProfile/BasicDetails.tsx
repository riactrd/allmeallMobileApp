import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  ScreenWidth,
  mainColor,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import { RadioButton } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";

export default function BasicDetails({
  name,
  onChangeName,
  lastname,
  onChangeLastName,
  phone,
  onChangePhone,
  dateofBirth,
  onChanDateofBirth,
  secondaryPhone,
  onChangeSecondaryPhone,
  gender,
  setGender,
  handleLogout,
}) {
  return (
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
          placeholder=" (960) 123-4567"
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
          keyboardType="number-pad"
          placeholder="(960) 123-4567"
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
              gender === "Male" ? styles.radiobutomActive : styles.radiobutom,
            ]}
          >
            <RadioButton
              value="Male"
              status={gender === 1 ? "checked" : "unchecked"}
              onPress={() => setGender(1)}
              color={mainColor}
            />
          </View>

          <Text style={styles.radioText}>Male</Text>
        </View>
        <View style={styles.textDivide}>
          <View
            style={[gender === 2 ? styles.radiobutomActive : styles.radiobutom]}
          >
            <RadioButton
              value="Female"
              status={gender === 2 ? "checked" : "unchecked"}
              onPress={() => setGender(2)}
              color={mainColor}
            />
          </View>

          <Text style={styles.radioText}>Female</Text>
        </View>
        <View style={styles.textDivide}>
          <View
            style={[gender === 3 ? styles.radiobutomActive : styles.radiobutom]}
          >
            <RadioButton
              value="Other"
              status={gender === 3 ? "checked" : "unchecked"}
              onPress={() => setGender(3)}
              // status={gender === 3 ? "checked" : "unchecked"}
              // onPress={() => SetGender(3)}
              // color={mainColor}
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
          <Feather name="log-out" color={secundaryColor} style={styles.icon} />
          <Text style={styles.saveButtomText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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

  buttomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: ScreenWidth - 20,
    paddingBottom: 20,
  },
});
