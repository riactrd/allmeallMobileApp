import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  mainColor,
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Card from "../../componets/Card";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { useGetdashboardQuery } from "../../redux/api/dashboardApi";

const Wallet = () => {
  const [cardNumber, SetCardNumber] = useState();
  const [expiry, SetExpiry] = useState();
  const [cvc, Setvc] = useState();
  const [balance, setBalance] = useState("");

  const navigation = useNavigation();

  const { data, isLoading, error } = useGetdashboardQuery();

  useEffect(() => {
    if (data && data.data.dashboard) {
      setBalance(data.data.dashboard.digital_wallet);
    }
  }, [data]);

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: ScreenWidth, marginBottom: "14%" }}
          >
            <View style={styles.viewScroll}>
              <View style={styles.headerTop}>
                <MaterialCommunityIcons
                  name="wallet-outline"
                  color={secundaryColor}
                  style={styles.icon}
                />

                <View style={{ width: "85%" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.textTop}>Digital Wallet</Text>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => navigation.navigate("Transactions")}
                    >
                      <View
                        style={{
                          backgroundColor: secundaryColor,
                          paddingVertical: 5,
                          paddingHorizontal: 10,
                          flexDirection: "row",
                          alignItems: "center",
                          borderRadius: 5,
                        }}
                      >
                        <MaterialIcons
                          name="history"
                          size={24}
                          color={mainColor}
                        />
                        <Text style={{ color: mainColor }}> See History</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.textTopPrice}>{balance}</Text>
                  <Text style={styles.textTopPriceP}>
                    $Wallet ID: 4B1290F09427D1EF3C9D0C258F33E0
                  </Text>
                </View>
              </View>
              <View style={styles.bodyContainer}>
                <View style={styles.textBodyContainer}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialIcons
                      name="monetization-on"
                      color={thirdColor}
                      style={styles.icon}
                    />
                    <Text style={styles.textTopBody}>
                      Add AMP Bucks to Wallet
                    </Text>
                  </View>

                  <Text style={styles.textTopBodyAmount}>
                    Enter Amount of dollars you want to convert ($)
                    <Text style={{ color: mainColor }}>*</Text>
                  </Text>
                </View>
                <TextInput placeholder="Type amount..." style={styles.input} />

                <Card cardNumber={cardNumber} expiry={expiry} cvc={cvc} />

                <TouchableOpacity activeOpacity={0.7} style={styles.buttom}>
                  <Text style={styles.textButtom}>Add AMP Bucks</Text>
                </TouchableOpacity>
              </View>
              {/* second card */}
              <View style={styles.bodyContainer}>
                <View style={styles.textBodyContainer}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons
                      name="send-outline"
                      color={thirdColor}
                      style={styles.icon}
                    />
                    <Text style={styles.textTopBody}>
                      Send AMP Bucks to User
                    </Text>
                  </View>

                  <Text style={styles.textTopBodyAmount}>
                    Receiver Wallet ID
                    <Text style={{ color: mainColor }}>*</Text>
                  </Text>
                </View>
                <TextInput placeholder="Type amount..." style={styles.input} />

                <View style={styles.textBodyContainer}>
                  <Text style={styles.textTopBodyAmount}>
                    Enter Amount of dollars you want to convert ($)
                    <Text style={{ color: mainColor }}>*</Text>
                  </Text>
                  <TextInput
                    placeholder="Type amount..."
                    style={styles.input}
                  />
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.buttom}>
                  <Text style={styles.textButtom}>Send</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Wallet;

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
    marginTop: 20,
    marginBottom: "14%",
  },
  headerTop: {
    width: ScreenWidth - 20,
    height: 100,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: mainColor,
    padding: 20,
  },
  icon: {
    fontSize: 36,
    marginRight: 10,
  },
  textTop: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: secundaryColor,
  },
  textTopPrice: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 28,
    letterSpacing: 0.15,
    color: secundaryColor,
  },
  textTopPriceP: {
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: secundaryColor,
  },
  bodyContainer: {
    width: ScreenWidth - 20,
    height: "auto",
    borderRadius: 8,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { height: 3, width: 3 },
    elevation: 1.4,
    backgroundColor: secundaryColor,
    padding: 20,
    marginTop: 20,
  },
  textTopBody: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 28,
    letterSpacing: 0.15,
    color: thirdColor,
  },
  textBodyContainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  textTopBodyAmount: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 28,
    letterSpacing: 0.15,
    color: thirdColor,
    marginTop: 10,
  },
  input: {
    padding: 20,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.12)",
    width: "100%",
  },
  iconCard: {
    fontSize: 25,
  },
  inputContainer: {
    padding: 20,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.12)",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  inputNumber: {
    marginLeft: 10,
    width: 150,
  },
  inputDate: {
    marginLeft: 10,
    width: 50,
  },
  inputCode: {
    marginLeft: 10,
    width: 30,
  },
  card: {
    marginTop: 20,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.12)",
    width: "100%",
    padding: 10,
  },
  buttom: {
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: mainColor,
    width: "100%",
    height: 56,
    marginTop: 20,
  },
  textButtom: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 1.25,
    color: secundaryColor,
  },
});
