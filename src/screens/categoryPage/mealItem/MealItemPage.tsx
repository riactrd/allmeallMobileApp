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
import React, { useEffect, useState } from "react";
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
  ScreenWidth,
  Screenheight,
  mainColor,
  secundaryColor,
  secundaryColor7,
  thirdColor,
} from "../../../componets/shared";
import { useToast } from "react-native-toast-notifications";
import { useCreateAddCartMutation } from "../../../redux/api/addCartOld";
import Spinner from "react-native-loading-spinner-overlay";
import { useSelector } from "react-redux";
import { useDecreaseCartMutation } from "../../../redux/api/decreaseCartApi";
import { addItem } from "../../../redux/cartQuantitySlice";
import {
  useGetmyCartQuery,
  useIncreaseCartMutation,
} from "../../../redux/api/myCartApi";

// const itemsProps=[1,2,3,4,5,6]

const { width } = Dimensions.get("screen");
const card = width / 3.9;

const MealItemPage = ({ route }) => {
  const navigation = useNavigation();
  const [quantity, SetQuantity] = useState<number>(0);
  const dispatch = useDispatch();
  const [carting, setCarting] = useState(null);
  // -------------------------------------------------------------------------------
  const [
    createAddCart,
    { data, isError, error, isLoading, isSuccess, isFetching },
  ] = useCreateAddCartMutation();

  const toast = useToast();
  const { meal, carroId, mycart } = route.params;

  const mycartArry = Object.values(mycart);

  const {
    name,
    price,
    description,
    id,
    ingredients,
    calories,
    proteins,
    fat,
    carbohydrates,
    fiber,
    sodium,
    pictures,
  } = meal;

  // ---------------------------------------------------------------------------------

  const {
    data: datagetmycart,
    refetch,
    isLoading: loading,
  } = useGetmyCartQuery("bulbasaur", {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  });

  //---------------------------------------------------------------------------------

  useEffect(() => {
    if (datagetmycart) {
      setCarting(datagetmycart?.data.my_cart?.cart_items);
    }
  }, [datagetmycart]);

  // if (datagetmycart?.data.my_cart?.cart_items) {
  //
  //   console.log(myItemsCart);

  //   const findId = myItemsCart.find((item) => {
  //     return item.pictures[0].pictureable_id === id;
  //   });
  //   useEffect(() => {
  //     if (findId) {
  //       SetQuantity(findId.quantity);
  //     }
  //   }, [findId]);
  // }

  useEffect(() => {
    if (carting && carting.length > 0) {
      console.log("carting", carting);
      const findId = carting.find((item) => {
        return item.pictures[0].pictureable_id === id;
      });

      if (findId) {
        SetQuantity(findId.quantity);
      }
    } else if (mycart) {
      const findId = mycart.find((item) => {
        return item.pictures[0].pictureable_id === id;
      });

      if (findId) {
        console.log("se encontro finid!!:", findId.quantity);
        SetQuantity(findId.quantity);
      }
    }
  }, [carting, id]);

  //--------------------------------------------------------------------------------

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

  const total = price * quantity;

  const [decreaseCart, { data: dataDecreaseCart }] = useDecreaseCartMutation();

  const [increaseCart, { data: dataincreaseCart }] = useIncreaseCartMutation();

  const handlerdecrease = async () => {
    const result = await decreaseCart(carroId);

    SetQuantity(quantity - 1);
    const itemsState = { id, cantidad: quantity - 1 };

    dispatch(addItem(itemsState));

    // trigger();

    // Lógica adicional si es necesario
  };

  const handlerincrease = async () => {
    const result = await increaseCart(carroId);

    SetQuantity(quantity + 1);
    const itemsState = { id, cantidad: quantity + 1 };
    dispatch(addItem(itemsState));

    // trigger();

    // Lógica adicional si es necesario
  };

  // useEffect(() => {
  //   if (testquantity) SetQuantity(testquantity.cantidad);
  // }, []);

  useEffect(() => {
    if (isSuccess) {
      toast.show("Item Added to cart", {
        type: "success",
        placement: "bottom",
        duration: 8000,
        animationType: "slide-in",
      });

      SetQuantity(1);
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

  const cart = {
    food_id: id,
    quantity: quantity,
    food_combo_id: null,
  };

  const handleControl = (direction: string) => {
    if (direction === "increase") {
      if (quantity <= 99) {
        SetQuantity((currentQuantity) => currentQuantity + 1);
        handlerAddCart();
        refetch();
      }
    } else if (direction === "decrease") {
      if (quantity >= 1) {
        SetQuantity((currentQuantity) => currentQuantity - 1);
        handlerAddCart();
        refetch();
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

  const handlerAddCart = async () => {
    if (!quantity) {
      toast.show("No quantity added", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
    } else if (!id) {
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

  const nutricion = {
    calories,
    proteins,
    fat,
    carbohydrates,
    fiber,
    sodium,
  };
  const singleFood = {
    id: id,
    cartQuantity: quantity,
    quantity: quantity,
    name: name,
    price: price,
    desc: description,
    nutricion: nutricion,
    ingredients: ingredients,
  };

  return (
    <>
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
              // textContent={"Loading..."}
              //Text style of the Spinner Text
              textStyle={styles.spinnerTextStyle}
            />
          </View>
        </View>
      )}

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
              <View
                style={{
                  backgroundColor: secundaryColor,
                  // height: 169,
                  borderRadius: 8,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 10,
                  elevation: 2,
                }}
              >
                <View style={styles.ButtomContainer}>
                  <View style={styles.headerButtomContainer}>
                    <View style={styles.headerButtomTextContainer}>
                      <Text style={styles.headerButtomText}>
                        ${price.toFixed(2)} / Meal
                      </Text>
                    </View>
                    <View style={styles.buttom}>
                      <TouchableOpacity
                        // onPress={() => handleControl("decrease")}
                        onPress={() => handlerdecrease()}
                      >
                        <AntDesign
                          name="minuscircle"
                          type="ionicon"
                          style={styles.headerButtomIcon}
                        />
                      </TouchableOpacity>
                      <Text style={styles.number}>{quantity}</Text>
                      <TouchableOpacity onPress={() => handlerincrease()}>
                        <AntDesign
                          name="pluscircle"
                          type="ionicon"
                          style={styles.headerButtomIcon}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text style={styles.headerText}>{name}</Text>
                  <Text style={styles.headerTextp}>{description}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      // backgroundColor: 'black',
                      justifyContent: "space-between",
                      marginTop: 10,
                    }}
                  >
                    <Image
                      style={{ marginTop: 10 }}
                      source={require("../../../../assets/img/minilogo.png")}
                    />
                    {/* {quantity ? (
                      <TouchableOpacity
                        style={{
                          backgroundColor: mainColor,
                          padding: 10,
                          borderRadius: 8,
                        }}
                        onPress={() => {
                          // selectedItems()
                          handlerAddCart();
                        }}
                      >
                        <Text style={styles.addButtomText}>
                          Add {quantity} to order - $ {total.toFixed(2)}
                        </Text>
                      </TouchableOpacity>
                    ) : (
                      <></>
                    )} */}
                  </View>
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
                    marginTop: 10,
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

              <View style={styles.containerDetails}>
                <View style={styles.headerDetails}>
                  <Image
                    source={require("../../../../assets/img/huevo.png")}
                    style={{ marginRight: 10 }}
                  />
                  <Text style={styles.bottomText}>Ingrediends</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 10,
                    marginTop: 10,
                  }}
                >
                  {ingredients && ingredients.length > 0 ? (
                    ingredients.map((item, index) => (
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
                          {item.name}
                        </Text>
                      </View>
                    ))
                  ) : (
                    <Text>Empty</Text>
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
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
    top: -20,
    // backgroundColor: "#fff",
    position: "absolute",
    width: 342,
    // height: 169,
    // borderRadius: 8,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 10,
    // elevation: 2,
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
    marginTop: 10,
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
