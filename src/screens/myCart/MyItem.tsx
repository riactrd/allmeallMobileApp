import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { FunctionComponent } from "react";
import mailPhote from "../../../assets/img/mealPhote.png";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import {
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import { CartModel } from "../../model/CartModel";
import { useDispatch } from "react-redux";
import {
  decreaseCart,
  getTotals,
  increaseCart,
  removeFromCart,
} from "../../redux/cartSlice";

interface Props {
  item: CartModel;
}

const MyItem: FunctionComponent<Props> = ({ item }) => {
  const navigation = useNavigation();

  const subtotal = item.price * item.cartQuantity;

  const dispatch = useDispatch();

  const HandlerRemove = (item: CartModel) => {
    dispatch(removeFromCart(item));
    dispatch(getTotals());
  };
  const HandlerDecrease = (item: CartModel) => {
    dispatch(decreaseCart(item));
    dispatch(getTotals());
  };

  const HandlerIncrease = (item: CartModel) => {
    dispatch(increaseCart(item));
    dispatch(getTotals());
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={mailPhote} />
        <View style={styles.ButtomContainer}>
          <View style={styles.headerButtomContainer}>
            <View style={styles.headerButtomTextContainer}>
              <Text style={styles.headerButtomText}>
                ${item.price.toFixed(2)}
              </Text>
            </View>
            <View style={styles.buttom}>
              <TouchableOpacity onPress={() => HandlerDecrease(item)}>
                <AntDesign
                  name="minuscircle"
                  type="ionicon"
                  style={styles.headerButtomIcon}
                />
              </TouchableOpacity>
              <Text style={styles.number}>{item.cartQuantity}</Text>
              <TouchableOpacity onPress={() => HandlerIncrease(item)}>
                <AntDesign
                  name="pluscircle"
                  type="ionicon"
                  style={styles.headerButtomIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.headerText}>{item.name}</Text>
          <View style={styles.bottomDelete}>
            <Text style={styles.headerButtomText}>
              Sub Total: ${subtotal.toFixed(2)}
            </Text>
            <TouchableOpacity onPress={() => HandlerRemove(item)}>
              <MaterialCommunityIcons
                name="delete"
                type="ionicon"
                style={styles.deletButtomIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
    backgroundColor: secundaryColor,
    // backgroundColor: "red",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { height: 3, width: 3 },
    backgroundColor: secundaryColor,
    // backgroundColor: "rgba(255, 255, 255, 0.1)",
    width: ScreenWidth - 20,
    height: 126,
    padding: 15,
    marginBottom: 25,
  },
  headerButtomContainer: {
    // marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: ScreenWidth / 1.61,
    // backgroundColor: "green",
  },
  headerButtomTextContainer: {
    backgroundColor: "rgba(242, 110, 33, 0.15)",
    padding: 5,
    borderRadius: 8,
    width: "auto",
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
    fontSize: 20,
  },
  deletButtomIcon: {
    color: thirdColor,
    fontSize: 24,
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
    // width: 220,
    backgroundColor: "white",
  },
  bottomDelete: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
});
