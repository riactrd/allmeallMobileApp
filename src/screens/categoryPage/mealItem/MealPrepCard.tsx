import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Colors from "../../colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { mainColor, secundaryColor } from "../../../componets/shared";

export default function MealPrepCard({ item, navigation }) {
  const [quantity, setQuantity] = useState(1);

  // console.log("los ingredientes son :", item.ingredients[0].name);

  const increaseQuantity = () => {
    if (quantity < 15) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const navigateToDetails = () => {
    navigation.navigate("MealprepItemScreen", { itemId: item.id });
  };
  {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("MealItemPage", { meal: item })}
        style={styles.orderCard}
      >
        {item.pictures?.length > 0 && (
          <Image
            source={{
              uri: `https://allmealprep.com/${item.pictures[0].image.url}`,
            }}
            style={{
              height: 110,
              width: "35%",
              // left: "-20%",
              resizeMode: "cover",
              borderRadius: 5,
            }}
          />
        )}

        <View style={styles.textContainer}>
          <View style={styles.textRow}>
            <View
              style={{
                backgroundColor: `${mainColor}50`,
                borderRadius: 8,
                padding: 5,
                marginRight: 10,
              }}
            >
              <Text style={{ fontWeight: 800, color: mainColor }}>
                ${item.price} / Meal
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              {/* <TouchableOpacity
                activeOpacity={0.7}
                onPress={decreaseQuantity}
                style={{
                  backgroundColor: mainColor,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <Icon name="remove" size={25} color={secundaryColor} />
              </TouchableOpacity> */}
              {/* <View
                style={{
                  marginHorizontal: 10,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>{quantity}</Text>
              </View> */}
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate("MealItemPage", { meal: item })
                }
                style={{
                  backgroundColor: mainColor,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <Icon name="add" size={25} color={secundaryColor} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.paidByText}>
            <View>
              <Text style={{ fontSize: 12, fontWeight: 600 }}>{item.name}</Text>
              <Text style={{ fontSize: 10 }}>{item.description}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  orderCard: {
    elevation: 15,
    borderRadius: 10,
    backgroundColor: secundaryColor,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 15,
    // paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    // flexDirection: "column",
    // justifyContent: "space-around",
    height: "100%",
    // backgroundColor: "blue",
    paddingHorizontal: 10, // Agregado para un mejor espacio
  },
  textRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "red",
    paddingVertical: 4,
  },
  paidByText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "green",

    paddingVertical: 4,
  },

  cartCard: {
    width: 30,
    height: 30,
    backgroundColor: mainColor,
    borderRadius: 30,
    // paddingHorizontal: 5,
    // flexDirection: "row",
    // justifyContent: "center",
    // alignContent: "center",
  },
});
