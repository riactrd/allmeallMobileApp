import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FunctionComponent, useEffect, useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import CategoryPageItem from "./OrderState";
import MealItem from "./mealItem/MealItem";
import { RootStackParamList } from "../../navigators/RootStack";
import OrderState from "./OrderState";
import MyOrderItem from "./MyOrderItem";
import OrdersList from "./OrdersList";
import { useGetmyorderQuery } from "../../redux/api/myorderApi";
import { ScreenWidth, Screenheight } from "../../componets/shared";
import Spinner from "react-native-loading-spinner-overlay";
import Loader from "../../utils/Loader";

const itemsCategories = [
  {
    id: 1,
    text: "All",
  },
  {
    id: 2,
    text: "New order",
  },
  {
    id: 3,
    text: "Preparing",
  },
  {
    id: 4,
    text: "Delivered",
  },
  {
    id: 5,
    text: "Canceled",
  },
];

type props = StackScreenProps<RootStackParamList, "MyOrders">;

const MyOrders: FunctionComponent<props> = ({ navigation }) => {
  const [selected, Setselected] = useState(0);
  const [ordersList, setOrdersList] = useState([]);

  const { data, isLoading } = useGetmyorderQuery();

  useEffect(() => {
    if (data) {
      setOrdersList(data?.data.orders);
    }
  }, [data]);

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <View style={{ flex: 1 }}>
        {/* <TopMenuCategory /> */}
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <View style={styles.categoryItems}>
                {itemsCategories.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate("Category")}
                    style={styles.categoryItemsContainer}
                  >
                    <OrderState
                      item={item}
                      selected={selected}
                      Setselected={Setselected}
                      index={index}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            <OrdersList
              navigation={navigation}
              ordersList={ordersList}
              selected={selected}
            />
          </View>
        </View>
        {/* <BottomMenu/> */}
      </View>
    </>
  );
};

export default MyOrders;

const styles = StyleSheet.create({
  // container: {
  //   display: "flex",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginBottom: 65,
  // },
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

  // mealItems: {
  //   marginTop: 10,
  //   display: "flex",
  //   flexDirection: "column",
  //   paddingBottom: 20,
  //   paddingTop: 20,
  // },
});
