import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { DashModel } from "../../model/DashModel";

import { ScreenWidth } from "../shared";
const itemWidth = ScreenWidth / 3 - 20;

type Props = {
  dash: DashModel;
};
const DashInfo = ({ dash }: Props) => {
  const [selected, Setselected] = useState("3");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={() => {
            Setselected("1");
            navigation.navigate("MyOrdersTab");
          }}
          activeOpacity={0.7}
          style={[selected === "1" ? styles.ItemInfoActive : styles.ItemInfo]}
        >
          <View style={styles.infoItem}>
            <Material
              name="clipboard-list-outline"
              type="ionicon"
              style={[
                selected === "1" ? styles.infoIconActive : styles.infoIcon,
              ]}
            />
            <Text
              style={[
                selected === "1" ? styles.infoTextActive : styles.infoText,
              ]}
            >
              {dash.existingOrders}
            </Text>
          </View>
          <Text
            style={[
              selected === "1" ? styles.infoText2Active : styles.infoText2,
            ]}
          >
            Existing Orders
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Setselected("2")}
          activeOpacity={0.7}
          style={[selected === "2" ? styles.ItemInfoActive : styles.ItemInfo]}
        >
          <View style={styles.infoItem}>
            <SimpleLineIcons
              name="badge"
              type="ionicon"
              style={[
                selected === "2" ? styles.infoIconActive : styles.infoIcon,
              ]}
            />
            <Text
              style={[
                selected === "2" ? styles.infoTextActive : styles.infoText,
              ]}
            >
              {dash.rewardPoints}
            </Text>
          </View>
          <Text
            style={[
              selected === "2" ? styles.infoText2Active : styles.infoText2,
            ]}
          >
            Reward Points
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Setselected("3");
            navigation.navigate("WalletTab");
          }}
          activeOpacity={0.7}
          style={[selected === "3" ? styles.ItemInfoActive : styles.ItemInfo]}
        >
          <View style={styles.infoItem}>
            <Ionicons
              name="wallet-outline"
              type="ionicon"
              style={[
                selected === "3" ? styles.infoIcon2Active2 : styles.infoIcon22,
              ]}
            />
            <Text
              style={[
                selected === "3" ? styles.infoText2Active : styles.infoText2,
              ]}
            >
              Wallet Balance
            </Text>
          </View>
          <Text
            style={[
              selected === "3"
                ? styles.infoTextActiveWallet
                : styles.infoTextWallet,
            ]}
          >
            ${dash.digitalWalle}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashInfo;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    width: "100%",
  },
  ItemInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { height: 3, width: 3 },
    backgroundColor: "#fff",
    // width: 106,
    height: 85,
    width: itemWidth,
  },
  ItemInfoActive: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { height: 3, width: 3 },
    backgroundColor: "#FF6F00",
    // width: 106,
    width: itemWidth,
    height: 85,
  },
  infoItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  infoIcon: {
    fontSize: 27,
    marginRight: 10,
  },
  infoIconActive: {
    fontSize: 27,
    marginRight: 10,
    color: "#fff",
  },
  infoIcon2: {
    fontSize: 16,
    marginRight: 10,
    color: "#fff",
  },
  infoIcon2Active: {
    fontSize: 16,
    marginRight: 10,
  },
  infoIcon22: {
    fontSize: 17,
    marginRight: 5,
  },
  infoIcon2Active2: {
    fontSize: 17,
    marginRight: 5,
    color: "#fff",
  },
  infoText: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: "#262626",
  },

  infoTextWallet: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: "#262626",
    alignSelf: "flex-start",
    marginLeft: 15,
  },
  infoTextActive: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: "#fff",
    textAlign: "left",
  },
  infoTextActiveWallet: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: "#fff",
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: 15,
  },
  infoText2: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: "#262626",
  },
  infoText2Active: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: "#fff",
  },
});
