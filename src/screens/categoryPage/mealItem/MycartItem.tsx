import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { FunctionComponent, useEffect } from "react";
import mailPhote from "../../../../assets/img/mealPhote.png";
import { useToast } from "react-native-toast-notifications";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { CartItems } from "../../../model/MyCartModel";
import {
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../../componets/shared";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  useIncreaseCartMutation,
  useDecreaseCartMutation,
  useDeleteItemCartMutation,
} from "../../../redux/api/myCartApi";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../../redux/cartQuantitySlice";

{
  /* <FlatList<CartItems>
keyExtractor={(item) => item.id.toString()}
 renderItem={({ item }) => <MycartItem refreshdata={refreshdata} item={item} />}
 data={data?.data.my_cart.cart_items}
/> */
}

interface Props {
  item: CartItems;
  refreshdata: () => void;
  index: number;
  increaseCart: () => void;
  decreaseCart: () => void;
  DeleteIteCart: () => void;
  // increseSuccess: boolean;
  // descreseSuccess: boolean;
  // deleteSuccess: boolean;
}

const MycartItem: FunctionComponent<Props> = ({
  item,
  refreshdata,
  index,
  increaseCart,
  decreaseCart,
  DeleteIteCart,
  increseSuccess,
  descreseSuccess,
  deleteSuccess,
}) => {
  const toast = useToast();
  const dispatch = useDispatch();
  // const [increaseCart,{isSuccess: increseSuccess}] = useIncreaseCartMutation();
  // const [decreaseCart,{isSuccess: descreseSuccess} ] = useDecreaseCartMutation();
  // const [DeleteIteCart,{isSuccess: deleteSuccess}] = useDeleteItemCartMutation();

  useEffect(() => {
    if (increseSuccess) {
      toast.show("Cart update", {
        type: "success",
        placement: "bottom",
        duration: 8000,
        animationType: "slide-in",
      });
    }
    // if(descreseSuccess){
    //     toast.show('Item descresed', {
    //         type: "danger",
    //         placement: "bottom",
    //         duration: 8000,
    //         animationType: "slide-in",

    //       });
    // }

    // if(deleteSuccess){
    //     toast.show('Item deleted', {
    //         type: "danger",
    //         placement: "bottom",
    //         duration: 8000,
    //         animationType: "slide-in",

    //       });
    // }
  }, [deleteSuccess, descreseSuccess, increseSuccess]);

  const handlerDeleteCart = async (id) => {
    const result = await DeleteIteCart(id).unwrap();
    dispatch(deleteItem({ id: id }));

    // Lógica adicional si es necesario
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {/* <Image source={mailPhote} /> */}
        <Image
          source={{
            uri:
              item.pictures &&
              item.pictures[0] &&
              item.pictures[0].image &&
              item.pictures[0].image.url
                ? `https://allmealprep.com/${item.pictures[0].image.url}`
                : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg",
          }}
          style={{
            height: 110,
            width: "35%",
            // left: "-20%",
            resizeMode: "cover",
            borderRadius: 5,
          }}
        />
        <View style={styles.ButtomContainer}>
          <View style={styles.headerButtomContainer}>
            <View style={styles.headerButtomTextContainer}>
              <Text style={styles.headerButtomText}>
                ${item.price.toFixed(2)}
              </Text>
            </View>
            <View style={styles.buttom}>
              {/* <Decrease id={item.id} refreshdata={refreshdata}/> */}
              <TouchableOpacity
                onPress={() => {
                  // SetNewId(id)
                  // refetch()
                  decreaseCart(item.id);
                  refreshdata();
                }}
              >
                <AntDesign
                  name="minuscircle"
                  type="ionicon"
                  style={styles.headerButtomIcon}
                />
              </TouchableOpacity>
              <Text style={styles.number}>{item.quantity}</Text>

              <TouchableOpacity
                onPress={() => {
                  // SetNewId(28224)
                  // refetch()
                  increaseCart(item.id);
                  refreshdata();
                }}
              >
                <AntDesign
                  name="pluscircle"
                  type="ionicon"
                  style={styles.headerButtomIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.headerText}>{item.name}</Text>
          <View style={styles.bottomDelete}>
            <Text style={styles.headerButtomText}>
              Sub Total: ${item.sub_total.toFixed(2)}
            </Text>

            <TouchableOpacity
              onPress={() => {
                // SetNewId(28224)
                // refetch()
                handlerDeleteCart(item.id);
                // DeleteIteCart(item.id);
                refreshdata();
              }}
            >
              <MaterialCommunityIcons
                name="delete"
                type="ionicon"
                style={styles.deletButtomIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MycartItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
    backgroundColor: secundaryColor,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { height: 3, width: 3 },
    backgroundColor: "#fff",
    // backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: ScreenWidth - 20,
    height: 126,
    padding: 15,
    marginBottom: 25,
  },
  headerButtomContainer: {
    // marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 210,
  },
  headerButtomTextContainer: {
    backgroundColor: "rgba(242, 110, 33, 0.15)",
    padding: 5,
    borderRadius: 8,
    width: "auto",
  },
  headerButtomText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: "#FF6F00",
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
  deletButtomIcon: {
    color: thirdColor,
    fontSize: 24,
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
    marginLeft: 10,
    width: 220,
  },
  bottomDelete: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
});
