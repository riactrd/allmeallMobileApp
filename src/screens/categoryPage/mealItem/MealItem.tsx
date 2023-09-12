import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
} from "react-native";
import React, { FunctionComponent, useState } from "react";
import mailPhote from "../../../../assets/img/mealPhote.png";
import AntDesign from "react-native-vector-icons/AntDesign";
import { StackScreenProps } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { CartModel } from "../../../model/CartModel";
import {
  addToCart,
  decreaseCart,
  getTotals,
  increaseCart,
} from "../../../redux/cartSlice";
import { addToMeal } from "../../../redux/mealSlice";
import { ContentCutOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";

type Props = {
  item: CartModel;
};

const MealItem: FunctionComponent<Props> = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("MealItemPage", { meal: item })}
    >
      <View style={styles.wrapper}>
        <Image source={mailPhote} />
        <View style={styles.ButtomContainer}>
          <View style={styles.headerButtomContainer}>
            <View style={styles.headerButtomTextContainer}>
              <Text style={styles.headerButtomText}>
                ${item.price.toFixed(2)} / Meal
              </Text>
            </View>
            <View style={styles.buttom}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("MealItemPage", { meal: item })
                }
              >
                <AntDesign
                  name="pluscircle"
                  type="ionicon"
                  style={styles.headerButtomIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.headerText}>{item.name}</Text>
          <Text style={styles.headerTextp}>{item.desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MealItem;

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
    justifyContent: "flex-start",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { height: 3, width: 3 },
    backgroundColor: "#fff",
    // backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: "95%",
    height: "auto",
    padding: 15,
    marginBottom: 25,
  },
  headerButtomContainer: {
    // marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 210,
  },
  headerButtomTextContainer: {
    backgroundColor: "rgba(242, 110, 33, 0.15)",
    padding: 5,
    borderRadius: 8,
    width: 120,
  },
  headerButtomText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: "#FF6F00",
  },
  buttom: {
    display: "flex",
    flexDirection: "row",
  },
  buttomItem: {
    marginLeft: 10,
    marginRight: 10,
  },
  headerButtomIcon: {
    color: "#FF6F00",
    fontSize: 30,
  },
  number: {
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
  },
  headerText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginTop: 5,
  },
  headerTextp: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "300",
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginTop: 5,
  },
  ButtomContainer: {
    marginLeft: 10,
    width: 220,
  },
});

function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
