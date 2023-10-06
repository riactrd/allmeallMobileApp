import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setIndex } from "../../redux/indexCategorySlice";

interface Props {
  // item:categoryDataProps;
  selected: number;
  Setselected: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  item: string;
}
const CategoryPageItem: React.FC<Props> = ({
  selected,
  index,
  Setselected,
  item,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // console.log(item);
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setIndex(index));
        navigation.navigate("CategoryTab", {
          screen: item.code,
          params: { itemcode: item.code },
        });
      }}
      style={styles.container}
    >
      <View
        style={[selected === index ? styles.wrapperActive : styles.wrapper]}
      >
        <Text style={[selected === index ? styles.textActive : styles.text]}>
          {item?.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryPageItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { height: 3, width: 3 },
    // backgroundColor: '#fff',
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    width: 125,
    height: 46,
    padding: 15,
  },

  wrapperActive: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { height: 3, width: 3 },
    backgroundColor: "#FF6F00",
    width: 125,
    height: 46,
    padding: 15,
  },
  text: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.15,
    color: "#000",
  },
  textActive: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.15,
    color: "#fff",
  },
});
