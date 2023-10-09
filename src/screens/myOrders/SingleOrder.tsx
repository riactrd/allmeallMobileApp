import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  mainColor,
  Screenheight,
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import mealPhote from "../../../assets/img/mealPhote.png";
import plastic from "../../../assets/img/plastic.png";
import bag from "../../../assets/img/bag.png";
import Checkbox from "expo-checkbox";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useRoute } from "@react-navigation/native";
import { useGetmyorderIdQuery } from "../../redux/api/myorderApi";
import HTML from "react-native-render-html";
import Spinner from "react-native-loading-spinner-overlay";

const itemList = [1, 2, 3, 4];

const SingleOrder = () => {
  const [selected, Setselected] = useState("1");
  const [hideAddress, SetHideAddress] = useState(true);
  const [hideItems, SetHideItems] = useState(true);
  const [hideGlassware, SetHidehideGlassware] = useState(true);
  const [hideSummary, SetHidehideSummary] = useState(true);
  const [isSelectedglass, setSelectedglass] = useState(false);
  const [isSelectedBag, setSelectedBag] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [number, setNumber] = useState("");
  const [orderDate, setorderDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [shipTo, setShipTo] = useState("");
  const [billingTo, setBillingTo] = useState("");
  const route = useRoute();
  const [orderItems, setOrderItems] = useState([]);
  const [glassware, setGlassware] = useState({});
  const [bagDetails, setBagDetails] = useState({});
  const [orderSummary, setOrderSummary] = useState({});
  const [deliveryFrequency, setDeliveryFrequency] = useState("");
  const [usedRewardPoints, setUsedRewardPoints] = useState(0);
  const [usedBags, setUsedBags] = useState(0);

  const windowWidth = useWindowDimensions().width;

  const { id } = route.params;
  const { data, isLoading } = useGetmyorderIdQuery(orderId);
  useEffect(() => {
    if (id) {
      setOrderId(id);
    }
  }, [id]);

  useEffect(() => {
    if (data && data.data && data.data.order) {
      setNumber(data.data.order.number);
      setorderDate(data.data.order.order_date);
      setQuantity(data.data.order.quantity);
      setDeliveryStatus(data.data.order.delivery_status);
      setTotalPrice(data.data.order.total_price);
      setPaidBy(data.data.order.paid_by);
      // setShipTo(data.data.order.ship_to);
      if (data.data.order.ship_to === "") {
        setShipTo("Empty");
      } else {
        setShipTo(data.data.order.ship_to);
      }

      if (data.data.order.billing_to === "") {
        setBillingTo("Empty");
      } else {
        setBillingTo(data.data.order.billing_to);
      }

      // setBillingTo(data.data.order.billing_to);
      setOrderItems(data.data.order.order_items);
      setGlassware(data.data.order.glassware);
      setSelectedglass(data.data.order.use_existing_glassware);
      setSelectedBag(data.data.order.use_existing_bag);
      setBagDetails(data.data.order.bag_details);
      setOrderSummary(data.data.order.order_summary);
      setDeliveryFrequency(data.data.order.delivery_frequency);
      setDeliveryStatus(data.data.order.delivery_status);
      setUsedRewardPoints(data.data.order.used_reward_points);
      setUsedBags(data.data.order.used_bags);
    }
  }, [data]);

  // pictures[0].image.url

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
              textContent={"Loading..."}
              //Text style of the Spinner Text
              textStyle={styles.spinnerTextStyle}
            />
          </View>
        </View>
      )}
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() => Setselected("1")}
              activeOpacity={0.7}
              style={[
                selected === "1"
                  ? styles.headerButtomActive
                  : styles.headerButtom,
              ]}
            >
              <Text
                style={[
                  selected === "1"
                    ? styles.headertextActive
                    : styles.headertext,
                ]}
              >
                Order Details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Setselected("2")}
              activeOpacity={0.7}
              style={[
                selected === "2"
                  ? styles.headerButtomActive
                  : styles.headerButtom,
              ]}
            >
              <Text
                style={[
                  selected === "2"
                    ? styles.headertextActive
                    : styles.headertext,
                ]}
              >
                Renewal Orders
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: ScreenWidth, marginBottom: 5 }}
          >
            <View style={styles.viewScroll}>
              <View style={styles.orderDetails}>
                <View style={styles.orderDetailsItems}>
                  <View style={styles.detailsItems}>
                    <Ionicons
                      name="ios-receipt-outline"
                      color={mainColor}
                      style={styles.icon}
                    />
                    <View style={{ marginLeft: 7 }}>
                      <Text style={styles.headerItemsText}>Order Number</Text>
                      <Text style={styles.headerItemsTextsub}>{number}</Text>
                    </View>
                  </View>
                  <View style={styles.detailsItems}>
                    <MaterialCommunityIcons
                      name="calendar-blank"
                      color={mainColor}
                      style={styles.icon}
                    />
                    <View style={{ marginLeft: 7 }}>
                      <Text style={styles.headerItemsText}>Order Placed</Text>
                      <Text style={styles.headerItemsTextsub}>{orderDate}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.orderDetailsItems}>
                  <View style={styles.detailsItems}>
                    <MaterialCommunityIcons
                      name="shopping-outline"
                      color={mainColor}
                      style={styles.icon}
                    />
                    <View style={{ marginLeft: 7 }}>
                      <Text style={styles.headerItemsText}>Quantity</Text>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={styles.headerItemsTextsubSpace}>
                          {`Food: ${quantity.food}`}
                        </Text>
                        <Text
                          style={styles.headerItemsTextsub}
                        >{`Combo: ${quantity.combo}`}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.detailsItems}>
                    <View style={styles.iconDot}>
                      <Entypo
                        name="dots-three-horizontal"
                        color={mainColor}
                        style={styles.iconDotsub}
                      />
                    </View>

                    <View style={{ marginLeft: 7 }}>
                      <Text style={styles.headerItemsText}>Status</Text>
                      <Text style={styles.headerItemsTextsub}>
                        {deliveryStatus}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.orderDetailsTotal}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <EvilIcons
                      name="tag"
                      color={secundaryColor}
                      style={{ fontSize: 35 }}
                    />
                    <View>
                      <Text style={styles.totalText}>Total</Text>
                      <Text style={styles.totalText}>Amount</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={styles.totalTextNumber}>{totalPrice}</Text>
                  <Text style={styles.totalTextNumbersub}>{paidBy}</Text>
                </View>
              </View>
              {/* address */}
              <View style={styles.addressContainer}>
                <View style={styles.adressSub}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Octicons
                      name="location"
                      color={thirdColor}
                      style={styles.iconAdres}
                    />
                    <Text style={styles.addressText}>Adresses</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => SetHideAddress(!hideAddress)}
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <Text style={styles.hideText}>Hide</Text>
                    {hideAddress ? (
                      <AntDesign name="caretdown" color={thirdColor} />
                    ) : (
                      <AntDesign name="caretup" color={thirdColor} />
                    )}
                  </TouchableOpacity>
                </View>
                {hideAddress && (
                  <View style={styles.containerHide}>
                    <View style={styles.orderDetails}>
                      <View style={styles.addressShip}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 10,
                          }}
                        >
                          <MaterialIcons
                            name="delivery-dining"
                            color={mainColor}
                            style={{ marginRight: 9, fontSize: 24 }}
                          />
                          <Text style={styles.addressShipText}>Ship to</Text>
                        </View>

                        <HTML
                          source={{ html: shipTo }}
                          contentWidth={windowWidth}
                          ignoredDomTags={["font"]}
                          baseStyle={styles.addressShipTextSub}
                        />

                        {/* <Text style={styles.addressShipTextSub}>{shipTo}</Text> */}
                        {/* <Text style={styles.addressShipTextSub}>
                        833 West Haines Street, 60642 Chicago, IL, USA
                      </Text> */}
                        {/* <Text style={styles.addressShipTextSub}>
                        Phone:+1-312-555-0159
                      </Text> */}
                      </View>
                    </View>
                    <View style={styles.orderDetails}>
                      <View style={styles.addressShip}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 10,
                          }}
                        >
                          <MaterialIcons
                            name="delivery-dining"
                            color={mainColor}
                            style={{ marginRight: 9, fontSize: 24 }}
                          />
                          <Text style={styles.addressShipText}>
                            Billing Address
                          </Text>
                        </View>
                        <HTML
                          source={{ html: billingTo }}
                          contentWidth={windowWidth}
                          ignoredDomTags={["font"]}
                          baseStyle={styles.addressShipTextSub}
                        />
                        {/* <Text style={styles.addressShipTextSub}>
                        Michael Williams
                      </Text>
                      <Text style={styles.addressShipTextSub}>
                        833 West Haines Street, 60642 Chicago, IL, USA
                      </Text>
                      <Text style={styles.addressShipTextSub}>
                        Phone:+1-312-555-0159
                      </Text> */}
                      </View>
                    </View>
                  </View>
                )}
              </View>
              {/* items */}
              <View style={styles.addressContainer}>
                <View style={styles.adressSub}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FontAwesome
                      name="list-alt"
                      color={thirdColor}
                      style={styles.iconAdres}
                    />
                    <Text style={styles.addressText}>Items</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => SetHideItems(!hideItems)}
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <Text style={styles.hideText}>Hide</Text>
                    {hideItems ? (
                      <AntDesign name="caretdown" color={thirdColor} />
                    ) : (
                      <AntDesign name="caretup" color={thirdColor} />
                    )}
                  </TouchableOpacity>
                </View>
                {hideItems && (
                  <View style={styles.containerHide}>
                    {orderItems.map((item, index) => (
                      <View style={styles.itemsDetails} key={index}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            padding: 10,
                          }}
                        >
                          {/* Mapear la imagen de cada elemento */}
                          {item.pictures
                            .slice(0, 1)
                            .map((picture, picIndex) => (
                              <View style={{ maxWidth: 100 }} key={picIndex}>
                                <View
                                  style={{
                                    width: 100,
                                    height: 100,
                                    // backgroundColor: "red",
                                  }}
                                >
                                  <Image
                                    source={{
                                      uri: `https://allmealprep.com${picture.image.url}`,
                                    }}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      resizeMode: "cover",
                                      borderRadius: 5,
                                    }}
                                  />
                                </View>
                              </View>
                            ))}
                          <View style={{ marginLeft: 11 }}>
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 5,
                              }}
                            >
                              <Text
                                style={styles.itemtext}
                              >{`${item.quantity}x`}</Text>
                              <View style={styles.containerItemtextPrice}>
                                <Text style={styles.itemtextPrice}>
                                  ${item.price}
                                </Text>
                              </View>
                            </View>
                            <Text style={styles.itemtext}>{item.name}</Text>
                            <Text style={styles.itemtextTotal}>
                              Sub Total: ${item.sub_total}
                            </Text>
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>
                )}
              </View>
              {/* Glassware */}
              <View style={styles.addressContainer}>
                <View style={styles.adressSub}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons
                      name="food-takeout-box-outline"
                      color={thirdColor}
                      style={styles.iconAdres}
                    />
                    <Text style={styles.addressText}>Glassware & Bag</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => SetHidehideGlassware(!hideGlassware)}
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <Text style={styles.hideText}>Hide</Text>
                    {hideGlassware ? (
                      <AntDesign name="caretdown" color={thirdColor} />
                    ) : (
                      <AntDesign name="caretup" color={thirdColor} />
                    )}
                  </TouchableOpacity>
                </View>
                {hideGlassware && (
                  <>
                    <View style={styles.containerHide}>
                      <View style={styles.itemsDetails}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            padding: 10,
                          }}
                        >
                          <Image source={plastic} style={styles.img} />
                          <View style={{ marginLeft: 11 }}>
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 5,
                              }}
                            >
                              <Text
                                style={styles.itemtext}
                              >{`${glassware.quantity}x`}</Text>
                              <View style={styles.containerItemtextPrice}>
                                <Text style={styles.itemtextPrice}>
                                  {glassware.amount}
                                </Text>
                              </View>
                            </View>
                            <Text style={styles.itemtext}>
                              {glassware.name}
                            </Text>
                            <Text style={styles.itemtextTotal}>
                              {` Sub Total:  ${glassware.total_amount}`}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.containerChekbox}>
                        <Checkbox
                          value={isSelectedglass}
                          onValueChange={setSelectedglass}
                          style={styles.checkbox}
                          color={isSelectedglass ? mainColor : undefined}
                        />
                        <Text style={styles.itemtext}>
                          Used existing glasswares
                        </Text>
                      </View>
                    </View>
                    <View style={styles.containerHide}>
                      <View style={styles.itemsDetails}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            padding: 10,
                          }}
                        >
                          <Image source={bag} style={styles.img} />
                          <View style={{ marginLeft: 11 }}>
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 5,
                              }}
                            >
                              <Text
                                style={styles.itemtext}
                              >{`${bagDetails.quantity} x`}</Text>
                              <View style={styles.containerItemtextPrice}>
                                <Text style={styles.itemtextPrice}>
                                  {bagDetails.amount}
                                </Text>
                              </View>
                            </View>
                            <Text style={styles.itemtext}>Bag</Text>
                            <Text style={styles.itemtextTotal}>
                              {`Sub Total: ${bagDetails.total_amount}`}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.containerChekbox}>
                        <Checkbox
                          value={isSelectedBag}
                          onValueChange={setSelectedBag}
                          style={styles.checkbox}
                          color={isSelectedBag ? mainColor : undefined}
                        />
                        <Text style={styles.itemtext}>Used existing bag</Text>
                      </View>
                    </View>
                  </>
                )}
              </View>
              {/* Summary */}
              <View style={styles.addressContainer}>
                <View style={styles.adressSub}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons
                      name="food-takeout-box-outline"
                      color={thirdColor}
                      style={styles.iconAdres}
                    />
                    <Text style={styles.addressText}>Summary</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => SetHidehideSummary(!hideSummary)}
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <Text style={styles.hideText}>Hide</Text>
                    {hideSummary ? (
                      <AntDesign name="caretdown" color={thirdColor} />
                    ) : (
                      <AntDesign name="caretup" color={thirdColor} />
                    )}
                  </TouchableOpacity>
                </View>
                {hideSummary && (
                  <>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>Total Meal Amount</Text>
                      <Text style={styles.summaryTextNumber}>
                        {orderSummary.total_meal_amount}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>
                        Glassware / Plastic Container Amount
                      </Text>
                      <Text style={styles.summaryTextNumber}>
                        {orderSummary?.glassware_detail?.glassware_amount}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>
                        {`Existing Reusable Glassware Amount (${orderSummary?.glassware_detail?.used_glasswares})`}
                      </Text>
                      <Text style={styles.summaryTextNumberColor}>
                        {orderSummary?.glassware_detail?.used_glassware_amount}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>Bag Amount</Text>
                      <Text style={styles.summaryTextNumber}>
                        {bagDetails.total_amount}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>
                        Existing Reusable Bag Amount ({usedBags})
                      </Text>
                      <Text style={styles.summaryTextNumberColor}>
                        {bagDetails.total_amount}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienrColor}>
                      <Text style={styles.summaryText}>Sub Total Amount</Text>
                      <Text style={styles.summaryTextNumber}>
                        {orderSummary.sub_total_amount}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>Tax</Text>
                      <Text style={styles.summaryTextNumber}>
                        {orderSummary.tax}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>Delivery Charge</Text>
                      <Text style={styles.summaryTextNumber}>
                        {orderSummary.delivery_charge}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>Reward Points Used</Text>
                      <Text style={styles.summaryTextNumberColor}>
                        {usedRewardPoints}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienrColorTotal}>
                      <Text style={styles.summaryTextTotal}>Grand Total</Text>
                      <Text style={styles.summaryTextNumberTotal}>
                        {orderSummary.grand_total}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>
                        Total Reward Points earned for this order
                      </Text>
                      <View style={styles.totalReward}>
                        <Text style={styles.summaryTextNumberColor}>
                          {orderSummary.reward_amount_earned}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>Delivery Frequency</Text>
                      <Text style={styles.summaryTextNumber}>
                        {deliveryFrequency}
                      </Text>
                    </View>
                    <View style={styles.summaryContaienr}>
                      <Text style={styles.summaryText}>Delivery Status</Text>
                      <Text style={styles.summaryTextNumber}>
                        {deliveryStatus}
                      </Text>
                    </View>
                    <View style={{ marginBottom: 20 }}></View>
                  </>
                )}
              </View>
            </View>
          </ScrollView>

          {/* wrapper end */}
        </View>
      </View>
    </>
  );
};

export default SingleOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
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
    // marginBottom:320,
    marginBottom: "auto",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: ScreenWidth - 20,
    marginTop: 15,
    marginBottom: 15,
  },
  headerButtom: {
    width: 156,
    height: 36,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.3,
    shadowRadius: 20,
    shadowOffset: { height: 3, width: 3 },
    elevation: 1.4,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  headertext: {
    color: thirdColor,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.15,
  },
  headerButtomActive: {
    backgroundColor: mainColor,
    width: 156,
    height: 36,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  headertextActive: {
    color: secundaryColor,
  },
  orderDetails: {
    width: ScreenWidth - 20,
    height: 149,
    backgroundColor: secundaryColor,
    borderRadius: 8,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    shadowOpacity: 0.3,
    shadowRadius: 20,
    shadowOffset: { height: 3, width: 3 },
    elevation: 0.4,
    marginTop: 22,
  },
  orderDetailsItems: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'space-between',
    width: ScreenWidth - 20,
    padding: 20,
  },
  detailsItems: {
    flexDirection: "row",
    marginRight: 50,
  },
  headerItemsText: {
    color: thirdColor,
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
  },
  headerItemsTextsub: {
    color: thirdColor,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
  },
  headerItemsTextsubSpace: {
    color: thirdColor,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginRight: 15,
  },
  icon: {
    fontSize: 24,
  },
  iconDotsub: {
    fontSize: 15,
  },
  iconDot: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: mainColor,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    // padding:5
    width: 24,
    height: 24,
  },

  orderDetailsTotal: {
    width: ScreenWidth - 20,
    // height: 64,
    backgroundColor: mainColor,
    borderRadius: 8,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    shadowOpacity: 0.3,
    shadowRadius: 20,
    shadowOffset: { height: 3, width: 3 },
    elevation: 0.4,
    marginTop: 22,
    padding: 20,
    flexDirection: "row",
  },
  totalText: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.25,
    marginRight: 15,
    color: secundaryColor,
    marginLeft: 11,
  },
  totalTextNumber: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.15,
    marginRight: 15,
    color: secundaryColor,
    marginLeft: 11,
  },
  totalTextNumbersub: {
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.25,
    marginRight: 15,
    color: secundaryColor,
    marginLeft: 11,
  },
  addressContainer: {
    marginTop: 41,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: ScreenWidth - 20,
  },
  adressSub: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: ScreenWidth - 20,
  },
  iconAdres: {
    fontSize: 24,
    marginRight: 10,
  },
  addressText: {
    color: thirdColor,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 1.25,
    marginRight: 15,
  },
  hideText: {
    color: thirdColor,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.25,
    marginRight: 15,
  },
  containerHide: {
    // backgroundColor: '#000',
    width: ScreenWidth - 20,
    // height: 50,
    // marginTop: 13,
    marginBottom: 23,
  },
  addressShip: {
    padding: 20,
  },
  addressShipText: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.25,
    marginRight: 15,
    color: thirdColor,
    marginLeft: 11,
  },
  addressShipTextSub: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.25,
    marginRight: 15,
    color: thirdColor,
    marginBottom: 10,
  },
  itemsDetails: {
    width: ScreenWidth - 20,
    // height: 111,
    backgroundColor: secundaryColor,
    borderRadius: 8,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    shadowOpacity: 0.3,
    shadowRadius: 20,
    shadowOffset: { height: 3, width: 3 },
    elevation: 0.4,
    marginTop: 22,
  },
  itemtext: {
    color: thirdColor,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
  },
  itemtextTotal: {
    color: mainColor,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginTop: 10,
  },
  itemtextPrice: {
    color: mainColor,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
  },
  containerItemtextPrice: {
    backgroundColor: "rgba(242, 110, 33, 0.15)",
    width: 58,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 10,
  },
  containerChekbox: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 10,
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
    width: "100%",
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
    width: "100%",
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
  },
});
