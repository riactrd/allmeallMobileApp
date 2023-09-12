import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  mainColor,
  Screenheight,
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import MyItem from "./MyItem";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { RadioButton } from "react-native-paper";
import Checkbox from "expo-checkbox";
import ModalDate from "../../componets/modal/ModalDate";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MyAdresses from "./MyAdresses";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {
  selectcartItems,
  selectcartTotalQuantity,
  selectTotalAmount,
} from "../../redux/store";

const item = [1, 2, 3, 4, 5];

const MyCart = () => {
  const navigation = useNavigation();
  const [checked, Setchecked] = useState("glassware");
  const [bag, Setbag] = useState("bag");
  const [isMembership, setMembership] = useState(true);
  const [delivery, SetDelivery] = useState("delivery");
  // date side
  const [selectedData, setSelectedData] = useState(new Date());
  const [modalData, setModalData] = useState(false);
  const itemMeals = useSelector(selectcartItems);
  const totalQuantity = useSelector(selectcartTotalQuantity);
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: ScreenWidth, marginBottom: 5 }}
        >
          <View style={styles.viewScroll}>
            {/* scroll */}

            {itemMeals.map((item, index) => (
              <MyItem item={item} key={index} />
            ))}

            {totalQuantity ? (
              <>
                <View style={styles.headerContainer}>
                  <View style={styles.textDivide}>
                    <MaterialIcons
                      name="takeout-dining"
                      color={mainColor}
                      style={styles.icon}
                    />
                    <Text style={styles.textDivideFont}>
                      Choice of container
                    </Text>
                  </View>
                  <View style={styles.headerButtomTextContainer}>
                    <Text style={styles.headerButtomText}>$40.00</Text>
                  </View>
                </View>
                <View style={styles.headerContainer}>
                  <View style={styles.textDivide}>
                    <View
                      style={[
                        checked === "glassware"
                          ? styles.radiobutomActive
                          : styles.radiobutom,
                      ]}
                    >
                      <RadioButton
                        value="glassware"
                        // label="Carto Base MAp"
                        status={
                          checked === "glassware" ? "checked" : "unchecked"
                        }
                        onPress={() => Setchecked("glassware")}
                        color={mainColor}
                      />
                    </View>

                    <Text style={styles.radioText}>Use reusable glassware</Text>
                  </View>
                  <Text style={styles.radioPriceText}>8 x $5.00</Text>
                </View>
                <View style={styles.headerContainer}>
                  <View style={styles.textDivide}>
                    <View
                      style={[
                        checked === "Plastic"
                          ? styles.radiobutomActive
                          : styles.radiobutom,
                      ]}
                    >
                      <RadioButton
                        value="Plastic"
                        // label="Carto Base MAp"
                        status={checked === "Plastic" ? "checked" : "unchecked"}
                        onPress={() => Setchecked("Plastic")}
                        color={mainColor}
                      />
                    </View>

                    <Text style={styles.radioText}>Use Plastic</Text>
                  </View>
                </View>
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
                    <Text style={styles.headerButtomText}>$5.00</Text>
                  </View>
                </View>

                <View style={styles.details}>
                  <Text style={styles.radioDetails}>
                    No. of foods Per bag: 10 Bag Price: $5.00 Total Foods Count:
                    8
                  </Text>
                </View>
                <View style={styles.headerContainer}>
                  <View style={styles.textDivide}>
                    <View
                      style={[
                        bag === "bag"
                          ? styles.radiobutomActive
                          : styles.radiobutom,
                      ]}
                    >
                      <RadioButton
                        value="bag"
                        // label="Carto Base MAp"
                        status={bag === "bag" ? "checked" : "unchecked"}
                        onPress={() => Setbag("bag")}
                        color={mainColor}
                      />
                    </View>

                    <Text style={styles.radioText}>Use existing Bag</Text>
                  </View>
                  <Text style={styles.radioPriceText}>1 x $5.00</Text>
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
                      Prime Membership ($119.00)
                    </Text>
                  </View>
                </View>
                <View style={styles.containerChekbox}>
                  <Checkbox
                    value={isMembership}
                    onValueChange={setMembership}
                    style={styles.checkbox}
                    color={isMembership ? mainColor : undefined}
                  />
                  <Text style={styles.checkDetails}>
                    Activate Prime Membership (free delivery for 1 Year)
                  </Text>
                </View>
                <View style={{ marginBottom: 30 }}></View>
                <MyAdresses />
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
                </View> */}
                <View style={{ marginBottom: 30 }}></View>
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
                    {selectedData.toLocaleDateString()}
                  </Text>
                  <TouchableOpacity onPress={() => setModalData(true)}>
                    <MaterialIcons
                      name="arrow-drop-down"
                      color={thirdColor}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.headerContainer}>
                  <View style={styles.textDivide}>
                    <Text style={styles.textDivideFont}>Delivery Date</Text>
                  </View>
                  <View style={styles.headerButtomTextContainer}>
                    <Text style={styles.headerButtomText}>
                      {selectedData.toLocaleDateString()}
                    </Text>
                  </View>
                </View>
                <View style={styles.containerChekbox}>
                  <Checkbox
                    value={isMembership}
                    onValueChange={setMembership}
                    style={styles.checkbox}
                    color={isMembership ? mainColor : undefined}
                  />
                  <Text style={styles.checkDetails}>No Contact Delivery</Text>
                </View>
                <View style={styles.containerChekbox}>
                  <Checkbox
                    value={isMembership}
                    onValueChange={setMembership}
                    style={styles.checkbox}
                    color={isMembership ? mainColor : undefined}
                  />
                  <Text style={styles.checkDetails}>
                    Use Digital Wallet (Wallet Balance: $100003.80)
                  </Text>
                </View>
                <View style={styles.containerChekbox}>
                  <Checkbox
                    value={isMembership}
                    onValueChange={setMembership}
                    style={styles.checkbox}
                    color={isMembership ? mainColor : undefined}
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
                    <Text style={styles.summaryText}>Total Meal Amount</Text>
                    <Text style={styles.summaryTextNumber}>$32.97</Text>
                  </View>
                  <View style={styles.summaryContaienr}>
                    <Text style={styles.summaryText}>
                      Glassware / Plastic Container Amount
                    </Text>
                    <Text style={styles.summaryTextNumber}>$7.00</Text>
                  </View>
                  <View style={styles.summaryContaienr}>
                    <Text style={styles.summaryText}>
                      Existing Reusable Glassware Amount (0)
                    </Text>
                    <Text style={styles.summaryTextNumberColor}>$0.00</Text>
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
                    <Text style={styles.summaryText}>Sub Total Amount</Text>
                    <Text style={styles.summaryTextNumber}>$44.97</Text>
                  </View>
                  <View style={styles.summaryContaienr}>
                    <Text style={styles.summaryText}>Tax</Text>
                    <Text style={styles.summaryTextNumber}>$2.40</Text>
                  </View>
                  <View style={styles.summaryContaienr}>
                    <Text style={styles.summaryText}>Delivery Charge</Text>
                    <Text style={styles.summaryTextNumber}>$9.99</Text>
                  </View>
                  <View style={styles.summaryContaienr}>
                    <Text style={styles.summaryText}>Reward Points Used</Text>
                    <Text style={styles.summaryTextNumberColor}>-$0.00</Text>
                  </View>
                  <View style={styles.summaryContaienrColorTotal}>
                    <Text style={styles.summaryTextTotal}>Grand Total</Text>
                    <Text style={styles.summaryTextNumberTotal}>$57.36</Text>
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
                    onPress={() => navigation.navigate("Checkout")}
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
      <ModalDate
        selectedDate={selectedData}
        SetselectedDate={setSelectedData}
        modalDate={modalData}
        setModalDate={setModalData}
      />
    </View>
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
    // marginBottom:320,
    marginBottom: "auto",
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
});
