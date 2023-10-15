import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectcartTotalQuantity } from "../redux/store";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { mainColor, secundaryColor, thirdColor } from "./shared";

const CartNotification = () => {
  const totalQuantity = useSelector(selectcartTotalQuantity);
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ position: "relative" }}>
        <View style={styles.bellContainer}>
          <Text style={styles.textbel}>2</Text>
        </View>

        <MaterialCommunityIcons
          name="bell-outline"
          type="ionicon"
          size={25}
          color="#3C3C3C"
          style={{ marginRight: 20 }}
          onPress={() => navigation.navigate("Notification")}
        />
      </View>
      <View style={{ position: "relative" }}>
        <View
          style={[
            totalQuantity ? styles.bellContainer : styles.bellContainerCero,
          ]}
        >
          <Text style={[totalQuantity ? styles.textbel : styles.textbelCero]}>
            {totalQuantity}
          </Text>
        </View>
        <AntDesign
          name="shoppingcart"
          type="ionicon"
          size={25}
          color="#3C3C3C"
          style={{ marginRight: 20 }}
          onPress={() => navigation.navigate("MyCart")}
        />
      </View>
    </View>
  );
};

export default CartNotification;

const styles = StyleSheet.create({
  bellContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // padding:5,
    backgroundColor: "#F26E21",
    borderRadius: 30,
    width: 18,
    height: 18,
    position: "absolute",
    top: -12,
    left: 10,
  },
  bellContainerCero: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // padding:5,
    backgroundColor: "rgba(0,0,0,0,0.0)",
    borderRadius: 30,
    width: 18,
    height: 18,
    position: "absolute",
    top: -12,
    left: 10,
  },
  textbel: {
    color: "#fff",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 1.25,
    textAlign: "center",
  },
  textbelCero: {
    // color: 'rgba(0,0,0,0,0.5)',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 1.25,
    textAlign: "center",
    opacity: 0,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 92,
    height: 32,
    backgroundColor: mainColor,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 5,
  },
  buttonText: {
    color: secundaryColor,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 16,
    letletterSpacingter: 1.25,
    textAlign: "center",
  },
  textWelcom: {
    color: thirdColor,
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 16,
    leletterSpacingtter: 1.25,
    textAlign: "center",
  },
  textName: {
    color: thirdColor,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 1.3,
    textAlign: "center",
  },
});
