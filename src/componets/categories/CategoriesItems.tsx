import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import { categoryDataProps } from "./types";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScreenWidth, secundaryColor, secundaryColor7 } from "../shared";
import { color } from "react-native-elements/dist/helpers";
const itemWidth = ScreenWidth / 6;

interface Props {
  item: {
    id: number;
    text: string;
    code: string;
    img: string;
    icon: {
      iconType: "ionicons" | "material-community";
      name: string;
      size: number;
    };
  };
  selected: number;
  Setselected: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}

const CategoriesItems: React.FC<Props> = ({
  item,
  selected,
  index,
  Setselected,
}) => {
  const IconComponent = (iconType: string) => {
    if (iconType === "material-community") {
      return (
        <MaterialCommunityIcons
          name={item.icon.name}
          size={item.icon.size}
          color={index === selected ? "white" : "black"}
        />
      );
    } else {
      return (
        <Ionicons
          name={item.icon.name}
          size={item.icon.size}
          color={index === selected ? "white" : "black"}
        />
      );
    }
  };
  return (
    <TouchableOpacity
      onPress={() => Setselected(index)}
      activeOpacity={0.7}
      style={styles.buttom}
    >
      <View
        style={[selected === index ? styles.iconItemActive : styles.iconItem]}
      >
        {/* <Image source={require('../../../assets/img/plate.png')} style={styles.imgContainer}/> */}
        {IconComponent(item.icon.iconType)}
      </View>
      <Text style={styles.textCategory}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default CategoriesItems;

const styles = StyleSheet.create({
  iconItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { height: 3, width: 3 },
    backgroundColor: "white",
    width: "100%",
    height: itemWidth,
  },
  iconItemActive: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { height: 3, width: 3 },
    backgroundColor: "#FF6F00",
    width: "100%",
    height: itemWidth,
  },
  textCategory: {
    marginTop: 10,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: "#262626",
    // backgroundColor: "red",
    width: "100%",
    // height: 40,
  },
  buttom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  //   imgContainer: {
  //     width: 55,
  //     height: 55,
  //   },
});
