import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import FeaturedMealsItems from "./FeaturedMealsItems";
import { FeaturedMeal } from "../../model/DashboardModel";
import { ScreenWidth, Screenheight, mainColor, thirdColor } from "../shared";
import Spinner from "react-native-loading-spinner-overlay";

type Props = {
  featuredMeals: FeaturedMeal[];
};

const FeaturedMeals = ({
  featuredMeals,
  navigation,
  cart,
  dataSearchApi,
  isFetching,
}: Props) => {
  const [selected, Setselected] = useState(0);

  return (
    <View style={styles.container}>
      {isFetching && (
        <>
          <Spinner
            // visibility of Overlay Loading Spinner
            visible={isFetching}
            // color={mainColor}
            //Text with the Spinner
            // textContent={"Loading..."}
            //Text style of the Spinner Text
            // textStyle={styles.spinnerTextStyle}
          />
        </>
      )}
      <View style={styles.wrapper}>
        {dataSearchApi ? (
          <Text style={styles.categoryText}>Search Result</Text>
        ) : (
          <Text style={styles.categoryText}>Featured Meals</Text>
        )}

        {/* <Text style={styles.categoryText}>Featured Meals</Text> */}
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={styles.categoryItems}>
            {featuredMeals?.map((item, index) => (
              <View style={styles.categoryItemsContainer} key={index}>
                <FeaturedMealsItems
                  item={item}
                  selected={selected}
                  Setselected={Setselected}
                  index={index}
                  navigation={navigation}
                  cart={cart}
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
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    // paddingVertical: 20,
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
