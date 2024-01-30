import {
  FlatList,
  NativeSyntheticEvent,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { RadioButton } from "react-native-paper";
import Checkbox from "expo-checkbox";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {
  Bags,
  CartItems,
  Choiseofcontainer,
  Coupon,
  Expecteddeliverydate,
  Isgift,
  Membership,
  Nocontactdelivery,
  Options,
  Ordersummary,
  Total,
  UpdateMyCart,
  Usedigitalwallet,
  Useexistingbags,
} from "../../model/MyCartModel";
import { selectcartItems } from "../../redux/store";
import {
  ScreenWidth,
  Screenheight,
  mainColor,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";

import {
  useDecreaseCartMutation,
  useDeleteItemCartMutation,
  useGetmyCartQuery,
  useIncreaseCartMutation,
  useLazyGetmyCartQuery,
} from "../../redux/api/myCartApi";
import MyAdresses from "../myCart/MyAdresses";
import MycartItem from "../categoryPage/mealItem/MycartItem";
import Spinner from "react-native-loading-spinner-overlay";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartQuantitySlice";
import { useCreateOrderMutation } from "../../redux/api/myorderApi";

const wait = (timeout: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const MyCart = () => {
  const navigation = useNavigation();
  const [checked, Setchecked] = useState("glassware");
  const [container, Setcontainer] = useState<Options>();
  const [containertwo, Setcontainertwo] = useState<Options>();
  const [checkedglasswarek, Setcheckedglasswarek] = useState(false);
  const [bag, Setbag] = useState<Useexistingbags>();
  const [isMembership, setMembership] = useState<Membership>();
  const [expecteddelivery, setExpecteddelivery] =
    useState<Expecteddeliverydate>();
  const [nocontactdelivery, setNocontactdelivery] =
    useState<Nocontactdelivery>();
  const [usedigitalwallet, setUsedigitalwallet] = useState<Usedigitalwallet>();
  const [isgift, setisgift] = useState<Isgift>();
  const [coupon, setCoupon] = useState<Coupon>();
  const [ordersummary, setOrdersummary] = useState<Ordersummary>();
  const [delivery, SetDelivery] = useState("delivery");
  const [bagUniPrice, SetBagUniPrice] = useState<Total>();
  // date side
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [modalData, setModalData] = useState(false);
  const itemMeals = useSelector(selectcartItems);
  // const totalQuantity = useSelector(selectcartTotalQuantity);
  // const totalAmount = useSelector(selectTotalAmount);
  const dispatch = useDispatch();

  const cartItemsState = useSelector((state) => state.cartQuantity);
  const userState = useSelector((state) => state.login);

  //--------------------------GET MY CART API----------------------------------
  const { data, isError, error, isLoading, refetch, isFetching } =
    useGetmyCartQuery("bulbasaur", { refetchOnMountOrArgChange: true });

  //console.log(userState)

  const handleCreateOrder = async () => {
    try {
      const result = await createOrder({
        billing_address: data?.data.my_cart.billing_addresses.options[0].id,
        coupon_code: "",
        delivery_address: data?.data.my_cart.billing_addresses.options[0].id,
        // "delivery_frequency":data?.data.my_cart.delivery_frequency.selected,
        delivery_frequency: "7",
        delivery_type: "1",
        exp_delivery_date: data?.data.my_cart.expected_delivery_date.selected,
        is_admin_order: "false",
        is_gift: "true",
        is_prime_membership: "true",
        is_same_as_billing_address: "true",
        no_contact_delivery: "true",
        notes: "",
        order_id: "",
        order_payment_status: "false",
        order_type: "Food",
        pickup_time_slot_id: "12",
        use_reusable_glassware: "true",
        use_reward_points: "true",
        user_id: userState.userData.id,
        voucher_code: "",
      });

      if (result) {
        navigation.navigate("Checkout", {
          createOrderId: result.data.data.order.id,
          grandTotal: ordersummary?.grand_total.value,
        });
      } else {
        console.error("La respuesta de createOrder es falsa o indefinida.");
      }
    } catch (error) {
      console.error("Error al realizar la mutación:", error);
    }

    //  navigation.navigate("Checkout", {createOrder: createOrderData})
  };

  //--------------------------------------------------------------------
  const [trigger, { data: dataMycart }] = useLazyGetmyCartQuery({
    refetchOnFocus: true,
  });

  // console.log(dataMycart?.data.length > 0);

  useEffect(() => {
    if (dataMycart?.message === "No Items in your cart!") {
      // console.log("No hay items en el carrito");
      // Actualiza el estado de redux con un arreglo vacío sin utilizar Immer
      dispatch({ type: "ADD_ITEM", payload: [] });
    }
  }, [dataMycart]);

  //---------------------------------------------------------------------
  const [myItem, SetMyItem] = useState<CartItems[]>([]);
  const [updateItem, SetupdateItem] = useState({
    id: "",
  });

  const [increaseCart, { isSuccess: increseSuccess }] =
    useIncreaseCartMutation();
  const [decreaseCart, { isSuccess: descreseSuccess }] =
    useDecreaseCartMutation();
  const [DeleteIteCart, { isSuccess: deleteSuccess }] =
    useDeleteItemCartMutation();

  useEffect(() => {
    trigger("");
  }, [increseSuccess, descreseSuccess, deleteSuccess]);

  const [updateCart, SetupdateCart] = useState<UpdateMyCart>({
    is_prime_membership: isMembership?.checked.toString(),
    delivery_option: "",
    grocery_delivery_option: "",
    delivery_frequency: "",
    use_reward_points: "",
    use_existing_glassware: "",
    use_reusable_glassware: "",
    use_existing_bags: "",
    no_contact_delivery: "",
    subscription_for: "",
    exp_delivery_date: "",
    is_gift: "",
    zipcode: "",
    referrer_id: "",
    is_note_removed: "",
    billing_address: "",
    delivery_address: "",
    is_same_as_billing_address: "",
    notes: "",
    selected_add_ons: "",
    cart_id: "",
    is_diabetic_friendly: "",
    coupon_code: "",
    voucher_code: "",
    remove_voucher: "",
    remove_coupon: "",
  });
  const UpdateMyCart = {
    // "is_prime_membership": updateCart.is_prime_membership,
    // "delivery_option": updateCart.delivery_option,
    // "grocery_delivery_option": updateCart.grocery_delivery_option,
    // "delivery_frequency": updateCart.delivery_frequency,
    // "use_reward_points": updateCart.use_reward_points,
    // "use_existing_glassware": updateCart.use_existing_glassware,
    use_reusable_glassware: container?.checked.toString(),
    // "use_existing_bags": updateCart.use_existing_bags,
    // "no_contact_delivery": updateCart.no_contact_delivery,
    // "subscription_for": updateCart.subscription_for,
    // "exp_delivery_date": updateCart.exp_delivery_date,
    // "is_gift": updateCart.is_gift,

    // "zipcode": updateCart.zipcode,
    // "referrer_id": updateCart.referrer_id,
    // "is_note_removed": updateCart.is_note_removed,
    // "billing_address": updateCart.billing_address,
    // "delivery_address": updateCart.delivery_address,
    // "is_same_as_billing_address": updateCart.is_same_as_billing_address,
    // "notes": updateCart.notes,
    // "selected_add_ons": updateCart.selected_add_ons,
    // "cart_id": data?.data.my_cart.cart_items.,
    // "is_diabetic_friendly": updateCart.is_diabetic_friendly,
    // "coupon_code": updateCart.coupon_code,
    // "voucher_code": updateCart.voucher_code,
    // "remove_voucher": updateCart.remove_voucher,
    // "remove_coupon": updateCart.remove_coupon
  };

  // const UpdateNow =()=>{
  //  const funtionUpdate = useGetUpdateCartQuery(UpdateMyCart);
  //     console.log(funtionUpdate);
  // }

  // const {isSuccess} = useUpdatecartQuery('bulbasaur', { refetchOnMountOrArgChange: true});

  function refreshdata() {
    if (!isError) {
      refetch();
    }
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refreshdata();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const isFocused = useIsFocused();

  useEffect(() => {
    refreshdata();

    if (data?.data?.my_cart?.cart_items) {
      try {
        SetMyItem(data?.data?.my_cart?.cart_items);

        // if(){}

        // console.log(data.data.my_cart.choise_of_container.use_existing_glassware.checked)
        Setcontainer(data?.data?.my_cart?.choise_of_container?.options[0]);
        Setcontainertwo(data?.data?.my_cart?.choise_of_container?.options[1]);
        Setbag(data?.data?.my_cart?.bags?.use_existing_bags);
        SetBagUniPrice(data?.data?.my_cart?.bags?.total);
        setMembership(data?.data?.my_cart?.membership);
        setExpecteddelivery(data?.data?.my_cart?.expected_delivery_date);
        setNocontactdelivery(data?.data?.my_cart?.no_contact_delivery);
        setUsedigitalwallet(data?.data?.my_cart?.use_digital_wallet);
        setOrdersummary(data?.data?.my_cart?.order_summary);
        // console.log(data.data.my_cart.membership);
      } catch (error) {
        console.log(error);
      }
    } else if (dataMycart) {
      SetMyItem(dataMycart?.data?.my_cart?.cart_items);
    }
  }, [
    data,
    error,
    isFocused,
    increseSuccess,
    descreseSuccess,
    deleteSuccess,
    dataMycart,
  ]);

  const onChangeGlasswares = (): void => {
    // const value = e.nativeEvent.text;
    let newContainer: Options = {
      checked: true,
      info: "<b>Note:</b><br>Glass is only charged on your FIRST order, afterwards you will swap out your previous bag and containers with your new order",
      lable: "Use Reusable Glasswares",
      price: 6,
      value: false,
    };

    Setcontainer({ ...newContainer });

    let newContainertwo: Options = {
      checked: false,
      info: "<b>Note:</b><br>Glass is only charged on your FIRST order, afterwards you will swap out your previous bag and containers with your new order",
      lable: "Use Plastic",
      price: 1,
      value: true,
    };

    Setcontainertwo(newContainertwo);
    refetch();
  };

  const onChangePlastic = (): void => {
    // const value = e.nativeEvent.text;
    let newContainertwo: Options = {
      checked: true,
      info: "<b>Note:</b><br>Glass is only charged on your FIRST order, afterwards you will swap out your previous bag and containers with your new order",
      lable: "Use Plastic",
      price: 1,
      value: false,
    };

    Setcontainertwo(newContainertwo);

    let newContainer: Options = {
      checked: false,
      info: "<b>Note:</b><br>Glass is only charged on your FIRST order, afterwards you will swap out your previous bag and containers with your new order",
      lable: "Use Reusable Glasswares",
      price: 6,
      value: true,
    };

    Setcontainer(newContainer);
    refetch();
  };

  const [
    createOrder,
    {
      data: createOrderData,
      isSuccess,
      isLoading: createOrderIsLoading,
      isError: createOrderIsError,
      error: createOrderError,
    },
  ] = useCreateOrderMutation();

  // useEffect(() => {
  //    if(createOrderData){
  //
  //     console.log("create Order Data",createOrderData);
  //   }
  //    if(createOrderIsError){
  //     console.log(createOrderError)
  //   }

  // }, [createOrderData, createOrderIsError, createOrderError])

  return (
    <>
      {isFetching && (
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
              visible={isFetching}
              //Text with the Spinner
              // textContent={"Loading..."}
              //Text style of the Spinner Text
              textStyle={styles.spinnerTextStyle}
            />
          </View>
        </View>
      )}

      <View style={styles.container}>
        <View style={styles.wrapper}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: ScreenWidth, marginBottom: 5 }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <View style={styles.viewScroll}>
              {/* scroll */}

              {isError ? (
                <Text>
                  {error?.data?.error} {error?.data?.status}
                </Text>
              ) : data?.message !== "No Items in your cart!" ? (
                <>
                  {myItem?.map((item, index) => (
                    <MycartItem
                      item={item}
                      key={index}
                      index={index}
                      refreshdata={refreshdata}
                      increaseCart={increaseCart}
                      decreaseCart={decreaseCart}
                      DeleteIteCart={DeleteIteCart}
                      // increseSuccess={increseSuccess}
                      // descreseSuccess={descreseSuccess}
                      // deleteSuccess={deleteSuccess}
                    />
                  ))}
                  <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                      <MaterialIcons
                        name="takeout-dining"
                        color={mainColor}
                        style={styles.icon}
                      />
                      <Text style={styles.textDivideFont}>
                        {container?.lable}
                      </Text>
                    </View>
                    {/* <View style={styles.headerButtomTextContainer}>
                        <Text style={styles.headerButtomText}>$40.00</Text>
                      </View> */}
                  </View>
                  {/* {
                container.map((item, index)=>(
                  <View style={styles.headerContainer}>
                  <View style={styles.textDivide}>
                      <View style={[item.checked ? styles.radiobutomActive : styles.radiobutom]}>
                          <RadioButton
                              // value={item.checked}
                              // label="Carto Base MAp"
                              status={item.checked ? 'checked' : 'unchecked'}
                              onPress={() =>onChangeContainer(!item.checked)}
                              color={mainColor}
                              />
                      </View>
                      
                  <Text style={styles.radioText}>{item.lable}</Text>
                  </View>
                        <Text style={styles.radioPriceText}>${item.price.toFixed(2)}</Text>
              </View>
                ))
              } */}

                  <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                      <View
                        style={[
                          container?.checked
                            ? styles.radiobutomActive
                            : styles.radiobutom,
                        ]}
                      >
                        <RadioButton
                          // value={item.checked}
                          // label="Carto Base MAp"
                          status={container?.checked ? "checked" : "unchecked"}
                          onPress={onChangeGlasswares}
                          color={mainColor}
                        />
                      </View>

                      <Text style={styles.radioText}>{container?.lable}</Text>
                    </View>
                    <Text style={styles.radioPriceText}>
                      ${container?.price.toFixed(2)}
                    </Text>
                  </View>

                  <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                      <View
                        style={[
                          containertwo?.checked
                            ? styles.radiobutomActive
                            : styles.radiobutom,
                        ]}
                      >
                        <RadioButton
                          // value={item.checked}
                          // label="Carto Base MAp"
                          status={
                            containertwo?.checked ? "checked" : "unchecked"
                          }
                          onPress={onChangePlastic}
                          color={mainColor}
                        />
                      </View>

                      <Text style={styles.radioText}>
                        {containertwo?.lable}
                      </Text>
                    </View>
                    <Text style={styles.radioPriceText}>
                      ${containertwo?.price.toFixed(2)}
                    </Text>
                  </View>

                  {/* <View style={styles.headerContainer}>
                  <View style={styles.textDivide}>
                      <View style={[checked==='Plastic' ? styles.radiobutomActive : styles.radiobutom]}>
                          <RadioButton
                              value="Plastic"
                              // label="Carto Base MAp"
                              status={checked=== 'Plastic' ? 'checked' : 'unchecked'}
                              onPress={() => Setchecked('Plastic')}
                              color={mainColor}
                              />
                      </View>
                      
                  <Text style={styles.radioText}>Use Plastic</Text>
                  </View>
                       
              </View> */}
                  <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                      <MaterialCommunityIcons
                        name="shopping-outline"
                        color={mainColor}
                        style={styles.icon}
                      />
                      <Text style={styles.textDivideFont}>Bag</Text>
                    </View>
                    <View style={styles.headerButtomTextContainer}>
                      <Text style={styles.headerButtomText}>
                        ${bagUniPrice?.price_per_quantity.toFixed(2)}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.details}>
                    <Text style={styles.radioDetails}>
                      No. of foods Per bag: 10 Bag Price: $5.00 Total Foods
                      Count: 8
                    </Text>
                  </View>
                  <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                      <View
                        style={[
                          bag?.value
                            ? styles.radiobutomActive
                            : styles.radiobutom,
                        ]}
                      >
                        <RadioButton
                          value="bag"
                          // label="Carto Base MAp"
                          status={bag?.value ? "checked" : "unchecked"}
                          // onPress={() => Setbag('bag')}
                          color={mainColor}
                        />
                      </View>

                      <Text style={styles.radioText}>{bag?.label}</Text>
                    </View>
                    {/* <Text style={styles.radioPriceText}>1x$5.00</Text> */}
                  </View>
                  <View style={{ marginBottom: 20 }}></View>
                  <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                      <MaterialIcons
                        name="loyalty"
                        color={mainColor}
                        style={styles.icon}
                      />
                      <Text style={styles.textDivideFont}>
                        {isMembership?.label} ({isMembership?.price.toFixed(2)})
                      </Text>
                    </View>
                  </View>
                  <View style={styles.containerChekbox}>
                    <Checkbox
                      value={isMembership?.value}
                      //  onValueChange={setMembership}
                      style={styles.checkbox}
                      color={isMembership?.value ? mainColor : undefined}
                    />
                    <Text style={styles.checkDetails}>
                      {isMembership?.info}
                    </Text>
                  </View>
                  <MyAdresses />
                  <View style={{ marginBottom: 30 }}></View>
                  {/* <View style={styles.headerContainer}>
                  <View style={styles.textDivide}>
                    <MaterialIcons name="delivery-dining" color={mainColor} style={styles.icon}/>
                    <Text style={styles.textDivideFont}>Delivery Pick Up</Text>
                  </View>
              </View> */}

                  {/* <View style={styles.containerRadio}>
                  <View style={styles.headerContainerRadio}>
                      <View style={styles.textDivide}>
                          <View style={[delivery==='delivery' ? styles.radiobutomActive : styles.radiobutom]}>
                              <RadioButton
                                  value="Delivery"
                                  // label="Carto Base MAp"
                                  status={delivery=== 'delivery' ? 'checked' : 'unchecked'}
                                  onPress={() => SetDelivery('delivery')}
                                  color={mainColor}
                                  />
                          </View>
                          
                      <Text style={styles.radioText}>Delivery</Text>
                      </View>
                  </View>
                  <View style={styles.headerContainerRadio}>
                      <View style={styles.textDivide}>
                          <View style={[delivery==='Pickup' ? styles.radiobutomActive : styles.radiobutom]}>
                              <RadioButton
                                  value="Pickup"
                                  // label="Carto Base MAp"
                                  status={delivery=== 'Pickup' ? 'checked' : 'unchecked'}
                                  onPress={() => SetDelivery('Pickup')}
                                  color={mainColor}
                                  />
                          </View>
                          
                      <Text style={styles.radioText}>Pickup</Text>
                      </View>
                  </View>
              </View>
              <View style={{marginBottom:30}}>

              </View> */}
                  <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                      <MaterialIcons
                        name="calendar-today"
                        color={mainColor}
                        style={styles.icon}
                      />
                      <Text style={styles.textDivideFont}>
                        Select Delivery Day
                      </Text>
                    </View>
                  </View>
                  <View style={styles.picker}>
                    <Text style={styles.textHeaderPicker}>
                      {date?.toLocaleDateString()}
                    </Text>
                    <TouchableOpacity
                      onPress={() => setModalData(true)}
                    ></TouchableOpacity>
                    {/* <ReadMeExampleSingle date={date} setDate={setDate}/> */}
                  </View>
                  <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                      <Text style={styles.textDivideFont}>Delivery Date</Text>
                    </View>
                    <View style={styles.headerButtomTextContainer}>
                      <Text style={styles.headerButtomText}>
                        {expecteddelivery?.selected}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.containerChekbox}>
                    <Checkbox
                      value={nocontactdelivery?.value}
                      //  onValueChange={setMembership}
                      style={styles.checkbox}
                      color={nocontactdelivery?.value ? mainColor : undefined}
                    />
                    <Text style={styles.checkDetails}>
                      {nocontactdelivery?.label}
                    </Text>
                  </View>
                  <View style={styles.containerChekbox}>
                    <Checkbox
                      value={usedigitalwallet?.checked}
                      //  onValueChange={setMembership}
                      style={styles.checkbox}
                      color={usedigitalwallet?.checked ? mainColor : undefined}
                    />
                    <Text style={styles.checkDetails}>
                      Use Digital Wallet (Wallet Balance: $100003.80)
                    </Text>
                  </View>
                  <View style={styles.containerChekbox}>
                    <Checkbox
                      value={isgift?.checked}
                      onValueChange={setMembership}
                      style={styles.checkbox}
                      color={isgift?.checked ? mainColor : undefined}
                    />
                    <Text style={styles.checkDetails}>Gift</Text>
                  </View>
                  <View style={{ marginBottom: 30 }}></View>
                  <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                      <FontAwesome5
                        name="percent"
                        color={mainColor}
                        style={{ fontSize: 20, marginRight: 10 }}
                      />
                      <Text style={styles.textDivideFont}>
                        Coupon or Discount
                      </Text>
                    </View>
                    <TouchableOpacity style={styles.ButtomTextContainer}>
                      <Text style={styles.buttomText}>Apply</Text>
                    </TouchableOpacity>
                  </View>
                  <TextInput
                    placeholder="Coupon Or Discount"
                    style={styles.input}
                  />
                  <View style={{ marginBottom: 10 }}></View>
                  <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                      <MaterialIcons
                        name="card-giftcard"
                        color={mainColor}
                        style={{ fontSize: 20, marginRight: 10 }}
                      />
                      <Text style={styles.textDivideFont}>Gift Voucher</Text>
                    </View>
                    <TouchableOpacity style={styles.ButtomTextContainer}>
                      <Text style={styles.buttomText}>Apply</Text>
                    </TouchableOpacity>
                  </View>
                  <TextInput
                    placeholder="Apply Gift Voucher"
                    style={styles.input}
                  />
                  <View style={{ marginBottom: 10 }}></View>

                  <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                      <SimpleLineIcons
                        name="note"
                        color={mainColor}
                        style={styles.icon}
                      />
                      <Text style={styles.textDivideFont}>Notes</Text>
                    </View>
                  </View>
                  <TextInput placeholder="Notes" style={styles.input} />
                  <View style={{ marginBottom: 30 }}></View>
                  <View style={styles.headerContainer}>
                    <View style={styles.textDivide}>
                      <Ionicons
                        name="ios-receipt-outline"
                        color={mainColor}
                        style={styles.icon}
                      />
                      <Text style={styles.textDivideFont}>Summary</Text>
                    </View>
                  </View>
                  <>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>
                        {ordersummary?.total_meal_amount.label}
                      </Text>
                      <Text style={styles.summaryTextNumber}>
                        {ordersummary?.total_meal_amount.value}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>
                        {ordersummary?.glassware_amount.label}
                      </Text>
                      <Text style={styles.summaryTextNumber}>
                        {ordersummary?.glassware_amount.value}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>
                        {ordersummary?.existing_glassware_amount.label}
                      </Text>
                      <Text style={styles.summaryTextNumberColor}>
                        {ordersummary?.existing_glassware_amount.value}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>Bag Amount</Text>
                      <Text style={styles.summaryTextNumber}>$5.00</Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>
                        Existing Reusable Bag Amount (0)
                      </Text>
                      <Text style={styles.summaryTextNumberColor}>$0.00</Text>
                    </View>
                    <View style={styles.summaryContaienrColor}>
                      <Text style={styles.summaryText}>
                        {ordersummary?.sub_total.label}
                      </Text>
                      <Text style={styles.summaryTextNumber}>
                        {ordersummary?.sub_total.value}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>
                        {ordersummary?.tax.label}
                      </Text>
                      <Text style={styles.summaryTextNumber}>
                        {ordersummary?.tax.value}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>
                        {ordersummary?.delivery_charge.label}
                      </Text>
                      <Text style={styles.summaryTextNumber}>
                        {ordersummary?.delivery_charge.value}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>Reward Points Used</Text>
                      <Text style={styles.summaryTextNumberColor}>-$0.00</Text>
                    </View>
                    <View style={styles.summaryContaienrColorTotal}>
                      <Text style={styles.summaryTextTotal}>
                        {ordersummary?.grand_total.label}
                      </Text>
                      <Text style={styles.summaryTextNumberTotal}>
                        {ordersummary?.grand_total.value}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>
                        Total Reward Points earned for this order
                      </Text>
                      <View style={styles.totalReward}>
                        <Text style={styles.summaryTextNumberColor}>5</Text>
                      </View>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>Delivery Frequency</Text>
                      <Text style={styles.summaryTextNumber}>Weekly</Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>Delivery Status</Text>
                      <Text style={styles.summaryTextNumber}>Delivered</Text>
                    </View>
                    <View style={{ marginBottom: 20 }}></View>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.saveButtom}
                      onPress={handleCreateOrder}
                    >
                      <Text style={styles.saveButtomText}>
                        Proceed to checkout
                      </Text>
                    </TouchableOpacity>
                  </>
                </>
              ) : (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    height: Screenheight,
                  }}
                >
                  <Text>No items</Text>
                </View>
              )}

              {/* End scroll */}
            </View>
          </ScrollView>
        </View>
        {/* <ModalDate 
      selectedDate={selectedData} 
      SetselectedDate={setSelectedData}
      modalDate={modalData}
      setModalDate={setModalData}
  /> */}
      </View>
    </>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: secundaryColor,
  },
  wrapper: {
    // backgroundColor: '#000',
    // width: ScreenWidth-20,
    flexDirection: "column",
    alignItems: "center",
  },
  viewScroll: {
    // width: ScreenWidth-20,
    flexDirection: "column",
    alignItems: "center",
    // padding:1,
    marginBottom: "auto",
    marginBottom: 100,
    marginTop: 20,
  },
  icon: {
    fontSize: 24,
    marginRight: 20,
  },
  textDivideFont: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 15,
    letterSpacing: 0.15,
    color: thirdColor,
  },
  textDivide: {
    flexDirection: "row",
    // width: ScreenWidth-20,
    alignItems: "center",
  },
  headerButtomTextContainer: {
    backgroundColor: "rgba(242, 110, 33, 0.15)",
    borderRadius: 8,
    width: 111,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtomTextContainer: {
    backgroundColor: mainColor,
    borderRadius: 8,
    width: 111,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  buttomText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: secundaryColor,
  },
  headerContainer: {
    flexDirection: "row",
    width: ScreenWidth - 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerContainerRadio: {
    flexDirection: "row",
    // width: ScreenWidth-20,
    // justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 20,
    marginRight: 20,
  },
  radiobutom: {
    // backgroundColor: 'rgba(242, 110, 33, 0.15)',
    borderRadius: 30,
    width: "auto",
    height: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderColor: "rgba(0, 0, 0, 0.54)",
    borderWidth: 0.3,
  },
  radiobutomActive: {
    backgroundColor: "rgba(242, 110, 33, 0.15)",
    borderRadius: 30,
    width: "auto",
    height: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderColor: "rgba(242, 110, 33, 0.15)",
    borderWidth: 0.3,
  },
  radioText: {
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 15,
    letterSpacing: 0.15,
    color: thirdColor,
  },
  radioPriceText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    // color: '#FF6F00',
  },
  details: {
    // width: '100%',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // backgroundColor: 'black',
    width: ScreenWidth - 20,
    height: 100,
  },
  radioDetails: {
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: thirdColor,
    width: 162,
  },
  checkDetails: {
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: thirdColor,
    width: 300,
  },

  containerChekbox: {
    // marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    width: ScreenWidth - 20,
  },
  checkbox: {
    marginRight: 10,
  },
  containerRadio: {
    flexDirection: "row",
    width: ScreenWidth - 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  picker: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: ScreenWidth - 20,
    marginBottom: 20,
    alignItems: "center",
    padding: 20,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.12)",
  },
  textHeaderPicker: {
    color: "rgba(0, 0, 0, 0.62)",
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  input: {
    padding: 20,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.12)",
    width: ScreenWidth - 20,
  },
  summaryContaienr: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  summaryContaienrColor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: ScreenWidth - 20,
    marginTop: 20,
    backgroundColor: "rgba(255, 111, 0, 0.15)",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
  },
  summaryText: {
    color: thirdColor,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginLeft: 10,
  },
  summaryTextNumber: {
    color: thirdColor,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginRight: 10,
  },
  summaryTextNumberColor: {
    color: mainColor,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginRight: 10,
  },
  summaryContaienrColorTotal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: ScreenWidth - 20,
    marginTop: 20,
    backgroundColor: mainColor,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 8,
  },
  summaryTextTotal: {
    color: secundaryColor,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginLeft: 10,
  },
  summaryTextNumberTotal: {
    color: secundaryColor,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginRight: 10,
  },
  totalReward: {
    backgroundColor: "rgba(255, 111, 0, 0.15)",
    borderRadius: 8,
    // width: 45,
    height: 22,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    marginRight: 10,
  },
  saveButtom: {
    flexDirection: "row",
    justifyContent: "center",
    width: ScreenWidth - 20,
    marginBottom: 20,
    backgroundColor: mainColor,
    padding: 20,
    borderRadius: 8,
  },
  saveButtomText: {
    color: secundaryColor,
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 1.25,
    lineHeight: 16,
  },
  containerFlat: {
    flex: 1,
    backgroundColor: secundaryColor,
    // justifyContent:'center',
    alignItems: "center",
  },
});
