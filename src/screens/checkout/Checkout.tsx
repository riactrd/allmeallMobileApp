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
import { useNavigation } from "@react-navigation/native";
import CardDetails from "./CardDetails";

const Checkout = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.textDivide}>
            <MaterialIcons
              name="credit-card"
              color={mainColor}
              style={styles.icon}
            />
            <Text style={styles.textDivideFont}>Card Details</Text>
          </View>

          <CardDetails />

          {/* <View style={styles.inputContainer}>
              <Text style={styles.headerTextInput}>Card Number</Text>
              <TextInput placeholder='4566-2222-3333-4532'  keyboardType='number-pad'  style={styles.input}/>
            </View>

            <View style={styles.containerCard}>
            <View style={styles.inputContainerCard}>
              <Text style={styles.headerTextInput}>Expiration</Text>
              <TextInput placeholder='4566-2222-3333-4532'  keyboardType='number-pad'  style={styles.input}/>
            </View>
            <View style={styles.inputContainerCard}>
              <Text style={styles.headerTextInput}>CVC</Text>
              <TextInput placeholder='4566-2222-3333-4532'  keyboardType='number-pad'  style={styles.input}/>
            </View>
            </View> */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.saveButtom}
            onPress={() => navigation.navigate("CheckoutInfoDrawer")}
          >
            <Text style={styles.saveButtomText}>Pay $33.36</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.bottomText}>
              Your card will be immediately charged
              <Text style={styles.bottomTextTotal}> $164.71.</Text>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
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
  textDivide: {
    flexDirection: "row",
    width: ScreenWidth - 20,
    marginBottom: 20,
    alignItems: "center",
    marginTop: 30,
  },
  inputContainer: {
    // flexDirection: "column",
    // justifyContent: "center",
    // width: ScreenWidth - 20,
    // marginBottom: 20,
  },
  headerTextInput: {
    // fontWeight: "600",
    // fontSize: 12,
    // lineHeight: 21,
    // letterSpacing: 0.15,
    // color: thirdColor,
  },
  input: {
    // padding: 20,
    // marginTop: 10,
    // borderWidth: 0.5,
    // borderRadius: 5,
    // borderColor: "rgba(0, 0, 0, 0.12)",
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
    // fontWeight: "600",
    // fontSize: 12,
    // lineHeight: 15,
    // letterSpacing: 0.15,
    // color: thirdColor,
    // width: 286,
    // height: "auto",
  },
  instructionsTextsub: {
    // fontWeight: "400",
    // fontSize: 10,
    // lineHeight: 15,
    // letterSpacing: 0.15,
    // color: thirdColor,
    // width: 286,
    // height: "auto",
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
  inputContainerHeader: {
    flexDirection: "row",
    justifyContent: "center",
    width: ScreenWidth - 20,
    marginBottom: 20,
    alignItems: "center",
  },
  textHeader: {
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: thirdColor,
    width: 250,
    textAlign: "center",
  },
  picker: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: ScreenWidth - 20,
    marginBottom: 20,
    alignItems: "center",
    padding: 20,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.12)",
  },
  textHeaderPicker: {
    color: "rgba(0, 0, 0, 0.62)",
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  addButtom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    marginBottom: 20,
    backgroundColor: mainColor,
    padding: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  containerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: ScreenWidth - 20,
  },
  inputCard: {
    padding: 20,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.12)",
    width: 100,
  },
  inputContainerCard: {
    flexDirection: "column",
    justifyContent: "center",
    width: 169,
    marginBottom: 20,
    // marginRight: 10,
  },
  bottomTextTotal: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: thirdColor,
  },
  bottomText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1.25,
    color: thirdColor,
    textAlign: "center",
    width: 300,
  },
});
