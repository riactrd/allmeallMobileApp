import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import FeaturedMealsItems from "./FeaturedMealsItems";
import { FeaturedMeal } from "../../model/DashboardModel";

const featuredMealsItems = [
  {
    id: 1,
    name: "Blackened Grilled Chicken",
    img: require("../../../assets/img/MaskGroup.png"),
  },
  {
    id: 2,
    name: "Blackened Shrimp and Seasonal Veggies",
    img: require("../../../assets/img/MaskGroup1.png"),
  },
  {
    id: 3,
    name: "Chicken Burger",
    img: require("../../../assets/img/MaskGroup2.png"),
  },
  {
    id: 4,
    name: "Sushi Makizushi",
    img: require("../../../assets/img/chickenBurger.png"),
  },
  {
    id: 5,
    name: "Keto Meals",
    img: require("../../../assets/img/MaskGroup.png"),
  },
];

type Props = {
  featuredMeals: FeaturedMeal[];
};

const FeaturedMeals = ({ featuredMeals }: Props) => {
  const [selected, Setselected] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.categoryText}>Featured Meals</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={styles.categoryItems}>
            {featuredMeals?.map((item, index) => (
              <View style={styles.categoryItemsContainer} key={index}>
                <FeaturedMealsItems
                  item={item}
                  selected={selected}
                  Setselected={Setselected}
                  index={index}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default FeaturedMeals;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: -40,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingVertical: 20,
    paddingLeft: 20,
    width: "100%",
    // backgroundColor: "red",
  },
  categoryText: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 30,
    letterSpacing: 0.15,
    color: "#262626",
  },
  categoryItems: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  categoryItemsContainer: {
    marginRight: 10,
    // marginLeft: 10,
    height: 205,
  },
});
