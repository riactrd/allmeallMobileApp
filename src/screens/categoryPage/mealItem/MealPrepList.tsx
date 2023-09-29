import { View, Text, FlatList } from "react-native";
import React from "react";

import MealPrepCard from "./MealPrepCard";

const foods = [
  {
    id: "1",
    name: "Blackened Grilled Chicken",
    ingredients: "Mixed Pizza",
    price: "8.30",
    image: require("../../../../assets/img/order1.png"),
  },
  {
    id: "2",
    name: "Blackened Shrimp  and Seasonal Veggies",
    ingredients: "Cheese Pizza",
    price: "7.10",
    image: require("../../../../assets/img/order2.png"),
  },
  {
    id: "3",
    name: "Chicken Burger",
    ingredients: "Fried Chicken",
    price: "5.10",
    image: require("../../../../assets/img/food1.png"),
  },
  {
    id: "4",
    name: "Sushi Makizushi",
    ingredients: "Salmon Meat",
    price: "9.55",
    image: require("../../../../assets/img/food1.png"),
  },
];

export const mealsList = [
  {
    id: 1,
    name: "Chicken Fried Rice Combo",
    price: 10.2,
    desc: "A delicious twist on a classical favorite packed with lean protein and delicious carrots and celery. A smart low fat and high protein meal option.",
    nutricion: [
      "Calories 656",
      "Carbs 656",
      "Protein 656",
      "Fat 656",
      "Fiber 653",
      "Sodium 656",
    ],
    ingredients: ["Potatoes", "Potatoes", "Potatoes", "Potatoes", "Potatoes"],
    category: "Meal Prep Menu",
    imgLink:
      "https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg",
    image: require("../../../../assets/img/order1.png"),
  },
  {
    id: 2,
    name: "Asian Fried Rice Combo",
    price: 6.2,
    desc: "A delicious twist on a classical favorite packed with lean protein and delicious carrots and celery. A smart low fat and high protein meal option.",
    nutricion: [
      "Calories 656",
      "Carbs 656",
      "Protein 656",
      "Fat 656",
      "Fiber 653",
      "Sodium 656",
    ],
    ingredients: ["Potatoes", "Potatoes", "Potatoes", "Potatoes", "Potatoes"],
    category: "Meal Prep Menu",
    imgLink:
      "https://kutv.com/resources/media2/16x9/full/1015/center/80/6b7a7c7c-3c44-489c-9880-4a17508cdc6d-large16x9_Postworkout_meal.jpg",
    image: require("../../../../assets/img/order2.png"),
  },
  {
    id: 3,
    name: "Asian Chicken Rice Combo",
    price: 16.2,
    desc: "A delicious twist on a classical favorite packed with lean protein and delicious carrots and celery. A smart low fat and high protein meal option.",
    nutricion: [
      "Calories 656",
      "Carbs 656",
      "Protein 656",
      "Fat 656",
      "Fiber 653",
      "Sodium 656",
    ],
    ingredients: ["Potatoes", "Potatoes", "Potatoes", "Potatoes", "Potatoes"],
    category: "Meal Prep Menu",
    imgLink:
      "https://www.freshnlean.com/wp-content/uploads/2021/03/Meal-Plan-plate-protein.png",
    image: require("../../../../assets/img/order3.png"),
  },
  {
    id: 4,
    name: "Asian Chicken Fried Rice",
    price: 11.2,
    desc: "A delicious twist on a classical favorite packed with lean protein and delicious carrots and celery. A smart low fat and high protein meal option.",
    nutricion: [
      "Calories 656",
      "Carbs 656",
      "Protein 656",
      "Fat 656",
      "Fiber 653",
      "Sodium 656",
    ],
    ingredients: ["Potatoes", "Potatoes", "Potatoes", "Potatoes", "Potatoes"],
    category: "Meal Prep Menu",
    imgLink:
      "https://img.taste.com.au/m3W-xKYX/taste/2017/07/quick-and-easy-meal-planner-128684-2.jpg",
    image: require("../../../../assets/img/order4.png"),
  },
  {
    id: 5,
    name: "Asian Chicken Fried Rice Combo",
    price: 7.2,
    desc: "A delicious twist on a classical favorite packed with lean protein and delicious carrots and celery. A smart low fat and high protein meal option.",
    nutricion: [
      "Calories 656",
      "Carbs 656",
      "Protein 656",
      "Fat 656",
      "Fiber 653",
      "Sodium 656",
    ],
    ingredients: ["Potatoes", "Potatoes", "Potatoes", "Potatoes", "Potatoes"],
    category: "Meal Prep Menu",
    imgLink: "https://static.toiimg.com/photo/76942221.cms",
    image: require("../../../../assets/img/chickenBurger.png"),
  },
  {
    id: 6,
    name: "Fried Rice Combo",
    price: 5.2,
    desc: "A delicious twist on a classical favorite packed with lean protein and delicious carrots and celery. A smart low fat and high protein meal option.",
    nutricion: [
      "Calories 656",
      "Carbs 656",
      "Protein 656",
      "Fat 656",
      "Fiber 653",
      "Sodium 656",
    ],
    ingredients: ["Potatoes", "Potatoes", "Potatoes", "Potatoes", "Potatoes"],
    category: "Meal Prep Menu",
    imgLink:
      "https://assets.cntraveller.in/photos/6164302c536a64b77fac804f/master/pass/navratri-meals-lead.jpg",
    image: require("../../../../assets/img/food1.png"),
  },
  {
    id: 7,
    name: "Asian Chicken Combo",
    price: 12.2,
    desc: "A delicious twist on a classical favorite packed with lean protein and delicious carrots and celery. A smart low fat and high protein meal option.",
    nutricion: [
      "Calories 656",
      "Carbs 656",
      "Protein 656",
      "Fat 656",
      "Fiber 653",
      "Sodium 656",
    ],
    ingredients: ["Potatoes", "Potatoes", "Potatoes", "Potatoes", "Potatoes"],
    category: "Meal Prep Menu",
    imgLink:
      "https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Chicken-chow-mein-7aeec1d.png",
    image: require("../../../../assets/img/order1.png"),
  },
  {
    id: 8,
    name: "Asian Rice Combo",
    price: 8.2,
    desc: "A delicious twist on a classical favorite packed with lean protein and delicious carrots and celery. A smart low fat and high protein meal option.",
    nutricion: [
      "Calories 656",
      "Carbs 656",
      "Protein 656",
      "Fat 656",
      "Fiber 653",
      "Sodium 656",
    ],
    ingredients: ["Potatoes", "Potatoes", "Potatoes", "Potatoes", "Potatoes"],
    category: "Meal Prep Menu",
    imgLink:
      "https://www.heynutritionlady.com/wp-content/uploads/2018/01/winter_vegetable_meal_prep_bowls_3-500x453.jpg",
    image: require("../../../../assets/img/order2.png"),
  },
  {
    id: 9,
    name: "Fried Rice Combo",
    price: 20.2,
    desc: "A delicious twist on a classical favorite packed with lean protein and delicious carrots and celery. A smart low fat and high protein meal option.",
    nutricion: [
      "Calories 656",
      "Carbs 656",
      "Protein 656",
      "Fat 656",
      "Fiber 653",
      "Sodium 656",
    ],
    ingredients: ["Potatoes", "Potatoes", "Potatoes", "Potatoes", "Potatoes"],
    category: "Meal Prep Menu",
    imgLink:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ghk110118weeknight-007-1609291845.jpg?crop=0.673xw:1.00xh;0.212xw,0&resize=640:*",
    image: require("../../../../assets/img/order3.png"),
  },
  {
    id: 10,
    name: "Asian Chicken Fried Rice Combo",
    price: 4.2,
    desc: "A delicious twist on a classical favorite packed with lean protein and delicious carrots and celery. A smart low fat and high protein meal option.",
    nutricion: [
      "Calories 656",
      "Carbs 656",
      "Protein 656",
      "Fat 656",
      "Fiber 653",
      "Sodium 656",
    ],
    ingredients: ["Potatoes", "Potatoes", "Potatoes", "Potatoes", "Potatoes"],
    category: "Meal Prep Menu",
    imgLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcgs-Zso6pNoiNXD0zyQnYj-k1FegrkDDHg&usqp=CAU",
    image: require("../../../../assets/img/order4.png"),
  },
];

export default function MealPrepList({ navigation, meal }) {
  return (
    <View>
      {meal &&
        meal.length > 0 &&
        meal.map((item, index) => (
          <View
            key={item.id}
            style={
              {
                // marginVertical: 20, // Aplicamos el margen superior a cada elemento
                // paddingHorizontal: 20, // Estilo para el pie de cada elemento
              }
            }
          >
            <MealPrepCard item={item} navigation={navigation} />
          </View>
        ))}
      <View style={{ marginBottom: 60 }}></View>
    </View>
  );
}
