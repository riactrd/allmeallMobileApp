import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CustomButtom = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("Category")}
    >
      <Image
        source={require("../../../assets/img/menuIcom.png")}
        resizeMode="contain"
        style={{
          width: 75,
          height: 75,
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
    width: 67,
    height: 67,
    position: "absolute",
    top: -15,
    borderRadius: 30,
  },
});
