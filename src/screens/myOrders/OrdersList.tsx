import { View, Text, FlatList, Button } from "react-native";
import React from "react";
// import foods from "../../foods";
import OrderCard from "./OrderCard";

const foods = [
  {
    id: "1",
    name: "Blackened Grilled Chicken",
    ingredients: "Mixed Pizza",
    price: "8.30",
    image: require("../../../assets/img/order1.png"),
  },
  {
    id: "2",
    name: "Blackened Shrimp  and Seasonal Veggies",
    ingredients: "Cheese Pizza",
    price: "7.10",
    image: require("../../../assets/img/order2.png"),
  },
  {
    id: "3",
    name: "Chicken Burger",
    ingredients: "Fried Chicken",
    price: "5.10",
    image: require("../../../assets/img/order3.png"),
  },
  {
    id: "4",
    name: "Sushi Makizushi",
    ingredients: "Salmon Meat",
    price: "9.55",
    image: require("../../../assets/img/order4.png"),
  },
  {
    id: "5",
    name: "Blackened Grilled Chicken",
    ingredients: "Mixed Pizza",
    price: "8.30",
    image: require("../../../assets/img/order1.png"),
  },
  {
    id: "6",
    name: "Blackened Shrimp  and Seasonal Veggies",
    ingredients: "Cheese Pizza",
    price: "7.10",
    image: require("../../../assets/img/order2.png"),
  },
];

export default function OrdersList({ navigation, ordersList }) {
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={ordersList}
        renderItem={({ item }) => (
          <OrderCard item={item} navigation={navigation} />
        )}
        ListFooterComponent={<View style={{ marginBottom: 10 }}></View>}
        // ListFooterComponentStyle={
        //   {
        //     // paddingHorizontal: 20,
        //     // marginTop: 20,
        //   }
        // }
      />
    </>
  );
}
