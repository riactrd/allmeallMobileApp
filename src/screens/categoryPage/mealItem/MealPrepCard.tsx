import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { mainColor, secundaryColor } from "../../../componets/shared";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useToast } from "react-native-toast-notifications";
import { useCreateAddCartMutation } from "../../../redux/api/addCartOld";
import { useSelector } from "react-redux";
import { selectcartItems } from "../../../redux/store";

import { useDecreaseCartMutation } from "../../../redux/api/decreaseCartApi";
import {
  useGetmyCartQuery,
  useIncreaseCartMutation,
  useLazyGetmyCartQuery,
} from "../../../redux/api/myCartApi";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/cartQuantitySlice";

export default function MealPrepCard({ item, navigation }) {
  const [quantity, SetQuantity] = useState<number>(0);
  const [idCart, setIdCart] = useState(null);
  const toast = useToast();
  const [mycart, setMycart] = useState([]);
  const dispatch = useDispatch();

  const [createAddCart, { data, isError, error, isSuccess, reset }] =
    useCreateAddCartMutation();
  const [decreaseCart, { data: dataDecreaseCart }] = useDecreaseCartMutation();
  const [increaseCart, { data: dataIncreaseCart }] = useIncreaseCartMutation();

  // -------------------------------------------------------------------------------
  const [trigger, { data: dataGetcartTrigger }] = useLazyGetmyCartQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  });
  //------------------------------------------------------------------------------------
  const {
    data: testing,
    isFetching,
    isLoading,
  } = useGetmyCartQuery("", {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    // pollingInterval: 5,
  });

  //---------------------------------------------------------------------------

  useEffect(() => {
    if (dataGetcartTrigger) {
      setMycart(dataGetcartTrigger?.data?.my_cart?.cart_items);
    }
  }, [dataGetcartTrigger, isFetching]);
  // -------------------------------------------------------------------------------
  const cartItems = useSelector((state) => state.cartQuantity);

  useEffect(() => {
    if (mycart && Array.isArray(mycart)) {
      mycart.map((item, index) => {
        const idItemCart = item.id;
        const id = item?.food_id;
        const { quantity } = item;
        const cantidad = quantity;
        const itemsState = { id, cantidad, idItemCart };
        dispatch(addItem(itemsState));
        setIdCart(item.id);
      });
    }
  }, [mycart]);

  //---------------------------------------------------------------

  // Buscar el elemento en el estado del carrito con el mismo ID
  const testquantity = cartItems.items.find((cartItem) => {
    return cartItem.id === item.id;
  });

  useEffect(() => {
    if (testquantity != undefined) {
      SetQuantity(testquantity.cantidad);
      setIdCart(testquantity.idItemCart);
    } else {
      SetQuantity(0);
    }
  }, [cartItems, trigger, testquantity]);

  const handleControl = (direction: string) => {
    if (direction === "increase") {
      if (quantity === 0) {
        // SetQuantity(quantity + 1);
        handlerAddCart();

        // Llama a handlerAddCart después de actualizar la cantidad
      }
      if (quantity > 0) {
        handlerincrease();
        SetQuantity(quantity + 1);

        // Llama a handlerAddCart después de actualizar la cantidad
      }
    } else if (direction === "decrease") {
      if (quantity > 1) {
        // SetQuantity((currentQuantity) => {
        //   const newQuantity = currentQuantity - 1;
        //   // Llama a handlerAddCart después de actualizar la cantidad
        //   handlerdecrease();
        //   return newQuantity; // Devuelve la nueva cantidad para actualizar el estado
        // });
      }
    }
  };

  const handlerAddCart = async () => {
    if (!quantity) {
      SetQuantity(quantity + 1);

      const response = await createAddCart({
        food_id: item.id,
        quantity: 1,
        food_combo_id: null,
      }).unwrap();

      setIdCart(item.id);

      trigger();
    }
  };

  const handlerdecrease = async () => {
    const result = await decreaseCart(idCart).unwrap();
    SetQuantity(quantity - 1);

    // Lógica adicional si es necesario
  };

  const handlerincrease = async () => {
    const result = await increaseCart(idCart).unwrap();

    trigger("");

    // Lógica adicional si es necesario
  };

  useEffect(() => {
    if (isSuccess) {
      trigger();
      toast.show("Item Added to cart", {
        type: "success",
        placement: "bottom",
        duration: 8000,
        animationType: "slide-in",
      });

      // SetQuantity(1);
      // navigation.navigate("MyCart");

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
        onPress={() =>
          navigation.navigate("MealItemPage", {
            meal: item,
            carroId: idCart,
            mycart,
          })
        }
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
              <Text>{item.id}</Text>
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
                <TouchableOpacity onPress={() => handlerdecrease()}>
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
