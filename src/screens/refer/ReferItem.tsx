import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  ScreenWidth,
  mainColor,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Entypo from "react-native-vector-icons/Entypo";

export default function ReferItem({ item }) {
  return (
    <View
      style={styles.container}

      //  onPress={()=>navigation.navigate('PickupItemPage')}
    >
      <View style={styles.wrapper}>
        <View style={styles.textDivide}>
          <MaterialCommunityIcons
            name="ticket-confirmation"
            color={mainColor}
            style={styles.icon}
          />
          <Text
            style={styles.textDivideFont}
          >{`Referral Number: ${item.id}`}</Text>
        </View>
        <View style={styles.textDivide}>
          <MaterialIcons
            name="person-outline"
            size={24}
            color={mainColor}
            style={styles.icon}
          />
          <Text style={styles.textDivideFontSub}>{item.name}</Text>
        </View>
        <View style={styles.textDivide}>
          <MaterialIcons
            name="mail-outline"
            size={24}
            color={mainColor}
            style={styles.icon}
          />
          <Text style={styles.textDivideFontSub}>{item.email}</Text>
        </View>
        <View style={styles.textDivide}>
          <MaterialIcons
            name="today"
            size={24}
            color={mainColor}
            style={styles.icon}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.textDivideFontSub}>Reffered date:</Text>
            <Text style={styles.textDivideFont}> {item.referred_date}</Text>
          </View>
        </View>
        <View style={styles.textDivide}>
          <MaterialIcons
            name="attach-money"
            size={24}
            color={mainColor}
            style={styles.icon}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.textDivideFontSub}>
              Refferal Reward Points:
            </Text>
            <Text style={styles.textDivideFont}>
              {item.referrer_reward_points}
            </Text>
          </View>
        </View>

        <View style={styles.textDivide}>
          <View style={styles.iconDot}>
            <Entypo
              name="dots-three-horizontal"
              color={mainColor}
              style={styles.iconDotsub}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.textDivideFontSub}>Reward Points Status:</Text>
            <Text style={styles.textDivideFont}> Pending</Text>
          </View>
        </View>
        <View style={styles.textDivide}>
          <MaterialCommunityIcons
            name="star-circle-outline"
            color={mainColor}
            style={{ fontSize: 29, marginRight: 20, left: -3 }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.textDivideFontSub}>Reward Points Earned: </Text>
            <Text style={styles.textDivideFont}>
              {item.referred_to_reward_points}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: -10,
    marginBottom: 30,
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { height: 3, width: 3 },
    backgroundColor: "#fff",

    width: ScreenWidth - 25,
    // height: 126,
    padding: 20,
    // marginBottom: 25,
    elevation: 10,
  },
  headerButtomContainer: {
    // marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "auto",
  },
  headerButtomTextContainer: {
    backgroundColor: "rgba(242, 110, 33, 0.15)",
    padding: 5,
    borderRadius: 8,
    // width: 120,
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
  number: {
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: mainColor,
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
  textDivide: {
    flexDirection: "row",
    width: ScreenWidth - 20,
    marginBottom: 10,
    alignItems: "center",
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
  textDivideFontSub: {
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 1.25,
    color: thirdColor,
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
    marginRight: 20,
  },
});
