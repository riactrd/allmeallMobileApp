import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FunctionComponent, useEffect, useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import CategoryPageItem from "../CategoryPageItem";
import MealItem from "../mealItem/MealItem";
import { mealsList } from "../../../data/meals";
import MealPrepList from "../mealItem/MealPrepList";
import Calendar from "../mealItem/Calendar";
import { Entypo } from "@expo/vector-icons";
import { mainColor } from "../../../componets/shared";
import { RootStackParamList } from "../../../navigators/RootStack";
import { useGetcategoriesQuery } from "../../../redux/api/categoriesApi";
import { useRoute } from "@react-navigation/native";

const itemsCategories = [
  {
    id: 1,
    text: "Meal Prep Menu",
  },
  {
    id: 2,
    text: "Bulk Meal Prep Menu",
  },
  {
    id: 3,
    text: "Preselected Meals",
  },
  {
    id: 4,
    text: "$8 Meal Prep Menu",
  },
  {
    id: 5,
    text: "Keto Meals",
  },
  {
    id: 6,
    text: "$8 Meal Prep Menu",
  },
  {
    id: 7,
    text: "Keto Meals",
  },
  {
    id: 8,
    text: "$8 Meal Prep Menu",
  },
  {
    id: 9,
    text: "Keto Meals",
  },
  {
    id: 10,
    text: "$8 Meal Prep Menu",
  },
  {
    id: 11,
    text: "Keto Meals",
  },
];

type props = StackScreenProps<RootStackParamList, "Category">;

const BulkMeal: FunctionComponent<props> = ({ navigation }) => {
  const [selected, Setselected] = useState(0);
  const [meal, setMeal] = useState(null);
  const { data, isLoading, isError } = useGetcategoriesQuery("bulk-meal");

  useEffect(() => {
    if (data) {
      setMeal(data?.data);
    }
  }, [data]);

  return (
    <View>
      {/* <TopMenuCategory /> */}
      <View style={styles.container}>
        <View
        // style={styles.wrapper}
        >
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.categoryItems}>
              {itemsCategories.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate("Category")}
                  // style={styles.categoryItemsContainer}
                >
                  <CategoryPageItem
                    // item={item}

                    selected={selected}
                    Setselected={Setselected}
                    index={index}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            alwaysBounceVertical={true}
          >
            {/* <View style={styles.mealItems}>
              {mealsList.map((item, index) => (
                <TouchableOpacity
                // onPress={() => navigation.navigate("Category")}
                >
                  <MealItem
                    item={item}
                    key={index}
                    // selected={selected}
                    // Setselected={Setselected}
                    // index={index}
                  />
                </TouchableOpacity>
              ))}
            </View> */}
            <View style={{ marginHorizontal: 10, marginTop: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <Entypo name="calendar" size={28} color={mainColor} />
                <Text
                  style={{ marginStart: 20, fontSize: 16, fontWeight: "800" }}
                >
                  Expected Delivery Date
                </Text>
              </View>
              <Calendar />
            </View>
            {isLoading ? (
              <Text>Cargando...</Text>
            ) : isError ? (
              <Text>Error al cargar los datos</Text>
            ) : meal && meal.menu && meal.menu.length >= 1 ? (
              <MealPrepList navigation={navigation} meal={meal.menu} />
            ) : (
              meal && meal.menu && meal.menu.length === 0 && <Text>Vacio</Text>
            )}
          </ScrollView>
        </View>
      </View>
      {/* <BottomMenu/> */}
    </View>
  );
};

export default BulkMeal;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 65,
  },
  // wrapper: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   // padding: 20,
  // },
  categoryItems: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },

  mealItems: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    paddingBottom: 20,
    paddingTop: 20,
    // width: 500,
  },
});
