import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { mainColor, ScreenWidth, secundaryColor } from "../../componets/shared";
import { CommonActions } from "@react-navigation/native";

const CheckoutInfo = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          source={require("../../../assets/img/Successful.png")}
          style={styles.img}
        />
        <View style={{ marginBottom: 20 }}></View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.saveButtom}
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{ name: "HomeDrawer" }],
              })
            )
          }
        >
          <Text style={styles.saveButtomText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  img: {
    width: 316,
    height: 316,
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
