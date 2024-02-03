import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FunctionComponent, useEffect, useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import CategoryPageItem from "./CategoryPageItem";
import MealItem from "./mealItem/MealItem";
import { mealsList } from "../../data/meals";
import MealPrepList from "./mealItem/MealPrepList";
import Calendar from "./mealItem/Calendar";
import { Entypo } from "@expo/vector-icons";
import { ScreenWidth, Screenheight, mainColor } from "../../componets/shared";
import { RootStackParamList } from "../../navigators/RootStack";
import { useGetcategoriesQuery } from "../../redux/api/categoriesApi";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { itemsCategories } from "../../data/categories";
import Spinner from "react-native-loading-spinner-overlay";

type props = StackScreenProps<RootStackParamList, "Category">;

const CategoryPage: FunctionComponent<props> = ({ navigation }) => {
  const currentIndex = useSelector((state) => state.indexCategory.index);
  const [selected, Setselected] = useState(currentIndex);
  const [meal, setMeal] = useState([]);
  const [code, setCode] = useState("new-menu");
  const { params } = useRoute();
  const { data, isLoading, isError } = useGetcategoriesQuery(code);

  const isFocused = useIsFocused();
  useEffect(() => {
    if (params && params.itemcode) {
      setCode(params.itemcode);
    }
  }, [params]);

  useEffect(() => {
    setMeal(data?.data);
  }, [data, isFocused]);

  return (
    <View>
      {/* <TopMenuCategory /> */}
      <View style={styles.container}>
        <View
        // style={styles.wrapper}
        >
          {isLoading && (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(3, 0, 2, 0.30)",
                height: Screenheight,
                width: ScreenWidth,
                position: "absolute",
                zIndex: 99,
              }}
            >
              <View>
                <Spinner
                  //visibility of Overlay Loading Spinner
                  visible={isLoading}
                  //Text with the Spinner
                  textContent={"Loading..."}
                  //Text style of the Spinner Text
                  textStyle={styles.spinnerTextStyle}
                />
              </View>
            </View>
          )}
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.categoryItems}>
              {itemsCategories.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate("Category")}
                  // style={styles.categoryItemsContainer}
                >
                  <CategoryPageItem
                    item={item}
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
            {isError ? (
              <View style={{ marginTop: 40 }}>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#a1a1a1",
                  }}
                >
                  Error loading data
                </Text>
              </View>
            ) : meal && meal.menu && meal.menu.length >= 1 ? (
              <MealPrepList navigation={navigation} meal={meal.menu} />
            ) : (
              meal &&
              meal.menu &&
              meal.menu.length === 0 && (
                <View style={{ marginTop: 40 }}>
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 20,
                      fontWeight: 600,
                      color: "#a1a1a1",
                    }}
                  >
                    Empty menu
                  </Text>
                </View>
              )
            )}
          </ScrollView>
        </View>
      </View>
      {/* <BottomMenu/> */}
    </View>
  );
};

export default CategoryPage;

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
