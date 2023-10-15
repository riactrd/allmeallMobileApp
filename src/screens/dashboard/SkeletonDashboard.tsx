import React, { useState } from "react";
import { Skeleton } from "moti/skeleton";
import { MotiView } from "moti";
import { ScreenWidth, Screenheight, mainColor } from "../../componets/shared";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

const itemWidth = ScreenWidth / 3 - 20;
export default function SkeletonDashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Skeleton
          width={itemWidth}
          colorMode="light"
          height={85}
          backgroundColor="#ff6f001a"
          duration={500}
        />
        <Skeleton
          width={itemWidth}
          colorMode="light"
          height={85}
          backgroundColor="#ff6f001a"
          duration={500}
        />
        <Skeleton
          width={itemWidth}
          colorMode="light"
          height={85}
          backgroundColor="#ff6f001a"
          duration={500}
        />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Skeleton
          width={"100%"}
          colorMode="light"
          height={40}
          backgroundColor="#ff6f001a"
        />
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Skeleton
          width={"100%"}
          colorMode="light"
          height={150}
          backgroundColor="#ff6f001a"
        />
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Skeleton
          width={"100%"}
          colorMode="light"
          height={Screenheight * 0.35}
          backgroundColor="#ff6f001a"
        />
      </View>
    </View>
  );
}

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
