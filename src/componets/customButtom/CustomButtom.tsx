import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScreenWidth } from "../shared";

const CustomButtom = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("Category")}
    >
      <Image
        source={require("../../../assets/img/menuIcom2.png")}
        resizeMode="contain"
        style={{
          width: ScreenWidth / 6,
          height: ScreenWidth / 6,
          //   tintColor: color
        }}
      />
    </TouchableOpacity>
  );
};

export default CustomButtom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // width: 67,
    // height: 67,
    // position: "absolute",
    top: -15,
    borderRadius: 40,
  },
});
