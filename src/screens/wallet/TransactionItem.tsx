import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenWidth } from "react-native-elements/dist/helpers";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { mainColor, thirdColor } from "../../componets/shared";

// import  from "react-native-vector-icons/MaterialIcons";

export default function TransactionItem({ item }) {
  return (
    <View style={styles.Container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 6,
          height: 35,

          // backgroundColor: "red",
        }}
      >
        {item.trans_type === 1 ? (
          <MaterialCommunityIcons
            name="plus-circle"
            style={styles.icon}
            color={mainColor}
          />
        ) : (
          <MaterialCommunityIcons
            name="minus-circle"
            style={styles.icon}
            color={mainColor}
          />
        )}
        <Text style={{ fontWeight: 600 }}>{item.description}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={styles.left}>
          <View style={styles.item}>
            <FontAwesome
              name="calendar-o"
              color={mainColor}
              style={styles.icon}
            />

            <View>
              <Text style={styles.headerTextSub}>{item.trans_date}</Text>
            </View>
          </View>

          <View style={styles.item}>
            <Ionicons
              name="receipt-outline"
              style={styles.icon}
              color={mainColor}
            />

            <View>
              <Text style={styles.headerTextSub}>{item.number}</Text>
            </View>
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.item}>
            <MaterialIcons
              name="local-offer"
              color={mainColor}
              style={styles.icon}
            />

            <View>
              <Text style={styles.headerTextSub}>
                {item.transaction_type} ${item.amount_paid}
              </Text>
            </View>
          </View>
          <View style={styles.item}>
            <MaterialIcons
              name="pending"
              color={mainColor}
              style={styles.icon}
            />

            <View>
              <Text style={styles.headerTextSub}>Balance: ${item.balance}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    borderRadius: 8,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { height: 3, width: 3 },
    elevation: 10,
    backgroundColor: "#fff",
    width: ScreenWidth - 40,
    // height: 129,
    padding: 15,
    // marginBottom:25,
    marginTop: 25,
    flexWrap: "wrap",
  },

  icon: {
    fontSize: 24,
    marginRight: 10,
  },
  headerText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    color: thirdColor,
  },
  headerTextSub: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    color: thirdColor,
  },
  item: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
  },
  left: {},
  right: {},
});
