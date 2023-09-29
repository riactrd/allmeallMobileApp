import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCart,
  getTotals,
  increaseCart,
} from "../../../redux/cartSlice";
import { CartModel } from "../../../model/CartModel";
import {
  mainColor,
  secundaryColor,
  thirdColor,
} from "../../../componets/shared";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const itemsProps = [1, 2, 3, 4, 5, 6];

const { width } = Dimensions.get("screen");
const card = width / 3.9;

const MealItemPage = ({ route }) => {
  const { meal } = route.params;
  const {
    name,
    price,
    desc,
    id,
    nutricion,
    ingredients,
    calories,
    carbohydrates,
    proteins,
    fat,
    fiber,
    sodium,
    pictures,
  } = meal;

  const nutritionFacts = [
    // { value: "377.0 g", name: "Calories" },
    // { value: "31,0 g", name: "Carbs" },
    // { value: "50.0 g", name: "Protein" },
    // { value: "6.0 g", name: "Fat" },
    // { value: "6.0 g", name: "Fiber" },
    // { value: "447.0 mg", name: "Sodium" },
    { value: `${calories ? calories.toFixed(1) : "N/A"} g`, name: "Calories" },
    {
      value: `${carbohydrates ? carbohydrates.toFixed(1) : "N/A"} g`,
      name: "Carbs",
    },
    { value: `${proteins ? proteins.toFixed(1) : "N/A"} g`, name: "Protein" },
    { value: `${fat ? fat.toFixed(1) : "N/A"} g`, name: "Fat" },
    { value: `${fiber ? fiber.toFixed(1) : "N/A"} g`, name: "Fiber" },
    { value: `${sodium ? sodium.toFixed(1) : "N/A"} mg`, name: "Sodium" },
  ];

  const Ingrediends = [
    " Potatoes (oz)",
    "6 oz Blackened Chicken",
    "Broccoli (oz)",
    "Squash (oz)",
    "Garlic (oz)",
    "Grape Tomato Slices",
    "Minced Parsley (oz)",
    "Zuchinni (oz)",
  ];

  const navigation = useNavigation();
  const [quantity, SetQuantity] = useState<number>(1);
  const dispatch = useDispatch();

  const total = price * quantity;

  const handleControl = (direction: string) => {
    if (direction === "increase") {
      if (quantity <= 99) {
        SetQuantity((currentQuantity) => currentQuantity + 1);
      }
    } else if (direction === "decrease") {
      if (quantity >= 1) {
        SetQuantity((currentQuantity) => currentQuantity - 1);
      }
    }
  };

  const selectedItems = () => {
    if (quantity) {
      dispatch(addToCart({ ...singleFood }));
      dispatch(getTotals());
      SetQuantity(0);
    } else {
      //   toast.error(`Please add quantity on ${singleFood.name}`, {
      //     position: "bottom-left",
      //   });
    }
  };

  const singleFood: CartModel = {
    id: id,
    cartQuantity: quantity,
    quantity: quantity,
    name: name,
    price: price,
    desc: desc,
    nutricion: nutricion,
    ingredients: ingredients,
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ImageBackground
        source={
          pictures && pictures.length > 0
            ? { uri: `https://allmealprep.com/${pictures[0].image.url}` }
            : require("../../../../assets/img/meailMenu.png") // Agrega una imagen por defecto si pictures[0] no está definido
        }
        resizeMode="cover"
        style={styles.img}
      ></ImageBackground>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.containerMeal}>
            <View style={styles.ButtomContainer}>
              <View style={styles.headerButtomContainer}>
                <View style={styles.headerButtomTextContainer}>
                  <Text style={styles.headerButtomText}>
                    ${price.toFixed(2)} / Meal
                  </Text>
                </View>
                <View style={styles.buttom}>
                  <TouchableOpacity onPress={() => handleControl("decrease")}>
                    <AntDesign
                      name="minuscircle"
                      type="ionicon"
                      style={styles.headerButtomIcon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.number}>{quantity}</Text>
                  <TouchableOpacity onPress={() => handleControl("increase")}>
                    <AntDesign
                      name="pluscircle"
                      type="ionicon"
                      style={styles.headerButtomIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.headerText}>{name}</Text>
              <Text style={styles.headerTextp}>{desc}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  // backgroundColor: 'black',
                  justifyContent: "space-between",
                }}
              >
                <Image
                  style={{ marginTop: 10 }}
                  source={require("../../../../assets/img/minilogo.png")}
                />
                {quantity ? (
                  <TouchableOpacity
                    style={{
                      backgroundColor: mainColor,
                      padding: 10,
                      borderRadius: 8,
                    }}
                    onPress={() => selectedItems()}
                  >
                    <Text style={styles.addButtomText}>
                      Add {quantity} to order - $ {total.toFixed(2)}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <></>
                )}
              </View>
            </View>
            <View style={styles.containerDetails}>
              <View style={styles.headerDetails}>
                <Image
                  source={require("../../../../assets/img/fork.png")}
                  style={{ marginRight: 10 }}
                />
                <Text style={styles.bottomText}>Nutrition Facts</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 5,
                }}
              >
                {nutritionFacts.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      width: card,
                      backgroundColor: `${mainColor}20`,
                      padding: 5,
                      borderRadius: 5,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.subItemsText}>{item.value}</Text>
                    <Text style={styles.subItemsTextSecond}>{item.name}</Text>
                  </View>
                ))}
              </View>
            </View>
            {/* <View style={styles.containerDetails}>
              <View style={styles.headerDetails}>
                <Image
                  source={require("../../../../assets/img/huevo.png")}
                  style={{ marginRight: 10 }}
                />
                <Text style={styles.bottomText}>Ingrediends</Text>
              </View>

              <View style={styles.containersubItems}>
                {ingredients.map((item, index) => (
                  <View style={styles.subItems} key={index}>
                    <Text style={styles.subItemsTextSecond}>{item} (oz)</Text>
                  </View>
                ))}
              </View>
            </View> */}

            {/* <View style={{ top: -50, marginHorizontal: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <MaterialIcons
                  name="restaurant"
                  size={24}
                  color={mainColor}
                  style={{ marginRight: 10 }}
                />
                <Text style={{ fontSize: 12, fontWeight: 600 }}>
                  Nutrition Facts
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                {nutritionFacts.map((item) => (
                  <View
                    style={{
                      width: card,
                      backgroundColor: `${mainColor}20`,
                      padding: 5,
                      borderRadius: 5,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 11,
                        color: mainColor,
                        marginRight: 5,
                        fontWeight: 600,
                      }}
                    >
                      {item.value}
                    </Text>
                    <Text style={{ fontSize: 11, fontWeight: 600 }}>
                      {item.name}
                    </Text>
                  </View>
                ))}
              </View>
            </View> */}

            {/* Ingredientes */}
            <View style={{ marginVertical: 30 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <Ionicons
                  name="ios-egg"
                  size={24}
                  color={mainColor}
                  style={{ marginRight: 10 }}
                />
                <Text style={{ fontSize: 12, fontWeight: 600 }}>
                  Ingrediends
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                {Ingrediends.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      backgroundColor: `${mainColor}20`,
                      padding: 5,
                      borderRadius: 5,
                      // minWidth: card,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 11,
                        paddingHorizontal: 10,

                        marginRight: 5,
                        fontWeight: 600,
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MealItemPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  img: {
    height: 228,
  },
  containerMeal: {
    backgroundColor: "#fff",
    position: "absolute",
    width: 342,
    height: 169,
    borderRadius: 8,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,
  },
  headerButtomContainer: {
    // marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
  },
  headerButtomTextContainer: {
    backgroundColor: "rgba(242, 110, 33, 0.15)",
    padding: 5,
    borderRadius: 8,
    width: 128,
    alignItems: "center",
  },

  headerButtomText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 15,
    letterSpacing: 0.15,
    color: "#FF6F00",
  },
  addButtomText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 15,
    letterSpacing: 0.15,
    color: secundaryColor,
  },
  bottomText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    color: "#000",
  },
  buttom: {
    display: "flex",
    flexDirection: "row",
  },
  buttomItem: {
    marginLeft: 10,
    marginRight: 10,
  },
  headerButtomIcon: {
    color: "#FF6F00",
    fontSize: 20,
  },
  number: {
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
  },
  headerText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginTop: 5,
  },
  headerTextp: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "300",
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginTop: 5,
  },
  ButtomContainer: {
    padding: 20,
    width: 350,
  },
  containerDetails: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  headerDetails: {
    //   marginTop:8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  containersubItems: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    justifyContent: "flex-start",
  },
  subItems: {
    backgroundColor: "rgba(242, 110, 33, 0.15)",
    padding: 5,
    borderRadius: 8,
    alignItems: "center",
    margin: 5,
    flexDirection: "row",
    justifyContent: "center",
    width: 111,
    height: 32,
  },
  subItemsText: {
    fontWeight: "600",
    fontSize: 11,
    lineHeight: 15,
    letterSpacing: 0.15,
    color: "#F26E21",
    marginRight: 5,
  },
  subItemsTextSecond: {
    fontWeight: "600",
    fontSize: 11,
    lineHeight: 15,
    letterSpacing: 0.15,
    color: "#000",
  },
  Card: {
    top: -70,
    height: 170,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: secundaryColor,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  textRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "red",
    paddingVertical: 10,
  },
});
