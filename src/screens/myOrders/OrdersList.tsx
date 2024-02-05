import { View, Text, FlatList, Button } from "react-native";
import React from "react";
// import foods from "../../foods";
import OrderCard from "./OrderCard";
import orderData from "../../utils/orderTestList";

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

export default function OrdersList({ navigation, ordersList, selected }) {
  // Filtrar los elementos en base a selected y newOrder

  console.log(selected);

  const resultOrder =
    selected === 0
      ? orderData
      : orderData.filter((item) => {
          if (selected === 1) {
            return item.delivery_status === "Neworder";
          }
          if (selected === 2) {
            return item.delivery_status === "Preparing";
          }
          if (selected === 3) {
            return item.delivery_status === "Delivered";
          } else {
            return item.delivery_status === "Canceled"; // Si selected no es 0 ni 1, incluir todos los elementos
          }
        });

  console.log("this is a result order", resultOrder);

  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={resultOrder}
        renderItem={({ item }) => (
          <OrderCard item={item} navigation={navigation} />
        )}
        ListFooterComponent={<View style={{ marginBottom: "60%" }}></View>}
      />
    </>
  );
}
