import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { FeaturedMeal } from "../../model/DashboardModel";

import { ScreenWidth } from "../shared";
import { useNavigation } from "@react-navigation/native";
const itemWidth = ScreenWidth / 2.9;

interface Props {
  item: FeaturedMeal;
  selected: number;
  Setselected: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}

const FeaturedMealsItems: React.FC<Props> = ({
  item,
  // navigation,
  selected,
  index,
  Setselected,
  cart,
}) => {
  const navigation = useNavigation();
  const [idCart, setIdCart] = useState(1);
  const [mycart, setMycart] = useState([]);

  useEffect(() => {
    if (cart && Array.isArray(cart)) {
      cart.map((item, index) => {
        const idItemCart = item.id;
        const id = item?.pictures[0]?.pictureable_id;
        const { quantity } = item;
        const cantidad = quantity;
        const itemsState = { id, cantidad, idItemCart };
        // dispatch(addItem(itemsState));

        setIdCart(item.id);
        setMycart(cart?.data?.my_cart?.cart_items);
      });
    }
  }, [cart]);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.buttom}
      onPress={() =>
        navigation.navigate("CategoryTab", {
          screen: "MealItemPage",
          params: {
            meal: item,
            mycart: mycart,
            carroId: idCart,
          },
        })
      }
    >
      <View>
        <Image
          source={{
            uri: `https://allmealprep.com/${item.pictures[0].image.url}`,
          }}
          style={styles.imgContainer}
        />
        {/* <Image
          source={require("../../../assets/img/MaskGroup1.png")}
          style={styles.imgContainer}
        /> */}
      </View>
      <Text style={styles.textCategory}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default FeaturedMealsItems;

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
    // backgroundColor: "#fff",
    width: 150,
    height: 85,
  },
  iconItemActive: {},
  textCategory: {
    marginTop: 10,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    color: "#262626",
    width: 118,
    height: 40,
    // paddingBottom: 10,
    textAlign: "center",
  },
  buttom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { height: 3, width: 3 },
    backgroundColor: "#fff",
    width: itemWidth,
    // height: 165,
    borderRightColor: "red",
  },
  imgContainer: {
    // width: 118,
    width: itemWidth - 20,
    height: 90,
    marginTop: 5,
    borderRadius: 8,
  },
});
