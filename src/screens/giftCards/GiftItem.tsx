import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenWidth } from "react-native-elements/dist/helpers";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { mainColor, thirdColor } from "../../componets/shared";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const GiftItem = ({ item }) => {
  return (
    <View style={styles.Container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={styles.item}>
          <FontAwesome name="user-o" color={mainColor} style={styles.icon} />
          <View>
            <Text style={styles.headerText}>Name</Text>
            <Text style={styles.headerTextSub}>{`${item.name} `}</Text>
          </View>
        </View>
        <View style={styles.item}>
          <MaterialIcons
            name="local-offer"
            color={mainColor}
            style={styles.icon}
          />
          <View>
            <Text style={styles.headerText}> Gifted Amount</Text>
            <Text
              style={styles.headerTextSub}
            >{`$${item.voucher_amount}`}</Text>
          </View>
        </View>
      </View>

      <View style={{}}>
        <View style={styles.item}>
          <MaterialCommunityIcons
            name="email-outline"
            color={mainColor}
            style={styles.icon}
          />
          <View>
            <Text style={styles.headerText}>Email Address</Text>
            <Text style={styles.headerTextSub}>{item.email}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GiftItem;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    // alignItems: "center",
    borderRadius: 8,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { height: 3, width: 3 },
    elevation: 1.4,
    backgroundColor: "#fff",
    width: ScreenWidth - 20,
    height: 150,
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
    alignItems: "flex-start",
    marginBottom: 10,
  },
});
