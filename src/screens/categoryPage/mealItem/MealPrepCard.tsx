import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { mainColor, secundaryColor } from "../../../componets/shared";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useToast } from "react-native-toast-notifications";
import { useCreateAddCartMutation } from "../../../redux/api/addCartOld";

export default function MealPrepCard({ item, navigation }) {
  const [quantity, SetQuantity] = useState<number>(0);
  const toast = useToast();

  const [
    createAddCart,
    { data, isError, error, isLoading, isSuccess, isFetching },
  ] = useCreateAddCartMutation();

  console.log(quantity);

  // const handleControl = (direction: string) => {
  //   if (direction === "increase") {
  //     if (quantity <= 99) {
  //       SetQuantity((currentQuantity) => currentQuantity + 1);
  //       handlerAddCart();
  //       console.log(quantity);
  //     }
  //   } else if (direction === "decrease") {
  //     if (quantity >= 1) {
  //       SetQuantity((currentQuantity) => currentQuantity - 1);
  //       // handlerAddCart();
  //       console.log(quantity);
  //     }
  //   }
  // };

  const handleControl = (direction: string) => {
    if (direction === "increase") {
      if (quantity < 99) {
        SetQuantity((currentQuantity) => {
          const newQuantity = currentQuantity + 1;
          console.log(newQuantity); // Esto mostrará la nueva cantidad
          handlerAddCart(); // Llama a handlerAddCart después de actualizar la cantidad
          return newQuantity; // Devuelve la nueva cantidad para actualizar el estado
        });
      }
    } else if (direction === "decrease") {
      if (quantity > 1) {
        SetQuantity((currentQuantity) => {
          const newQuantity = currentQuantity - 1;
          console.log(newQuantity); // Esto mostrará la nueva cantidad
          handlerAddCart(); // Llama a handlerAddCart después de actualizar la cantidad
          return newQuantity; // Devuelve la nueva cantidad para actualizar el estado
        });
      }
    }
  };

  const cart = {
    food_id: item.id,
    quantity: quantity + 1,
    food_combo_id: null,
  };

  const handlerAddCart = async () => {
    if (quantity > 100) {
      toast.show("No quantity added", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else if (!item.id) {
      toast.show("No id added", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else {
      await createAddCart({ cart });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.show("Item Added to cart", {
        type: "success",
        placement: "bottom",
        duration: 8000,
        animationType: "slide-in",
      });

      // SetQuantity(1);
      navigation.navigate("Category");

      // navigation.navigate('VerifyUser',
      // {
      //   screen: 'VerifyUser',
      //   params: {userId: data.data.user.id, message: data.message}
      // }
      // )
    }

    if (isError) {
      if (error) {
        if ("status" in error) {
          // you can access all properties of `FetchBaseQueryError` here
          toast.show(JSON.stringify("Internal error"), {
            type: "error",
            placement: "bottom",
            duration: 8000,
            animationType: "slide-in",
          });
        }
      }
    }
  }, [data, isError]);
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
              </TouchableOpacity> */}
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
  buttom: {
    display: "flex",
    flexDirection: "row",
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
});
