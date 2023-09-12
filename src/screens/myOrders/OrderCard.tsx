import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { mainColor, secundaryColor } from "../../componets/shared";

export default function OrderCard({ item, navigation }) {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate("SingleOrder")}
        style={styles.orderCard}
      >
        <Image
          source={item.image}
          style={{ height: 110, width: 110, resizeMode: "contain" }}
        />
        <View style={styles.textContainer}>
          <View style={styles.textRow}>
            <View
              style={{
                backgroundColor: `${mainColor}50`,
                borderRadius: 8,
                padding: 5,
                marginRight: 10,
              }}
            >
              <Text style={{ fontWeight: 800, color: mainColor }}>$120.33</Text>
            </View>
            <Text style={{ fontWeight: 600 }}>Delivered</Text>
          </View>
          <View style={styles.textRow}>
            <View style={styles.textRow}>
              <Entypo name="calendar" size={16} color={mainColor} />
              <Text style={{ marginHorizontal: 5, fontWeight: 600 }}>
                07-Aug-2021
              </Text>
            </View>

            <View style={styles.textRow}>
              <Ionicons name="receipt-outline" size={16} color={mainColor} />
              <Text style={{ marginHorizontal: 5, fontWeight: 600 }}>
                4100F5
              </Text>
            </View>
          </View>
          <View style={styles.paidByText}>
            <View
              style={{
                backgroundColor: `${mainColor}50`,
                borderRadius: 8,
                padding: 5,
                marginRight: 10,
              }}
            >
              <Text>Paid by Manually</Text>
            </View>
            <MaterialIcons name="replay" size={24} color={mainColor} />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  orderCard: {
    elevation: 5,
    borderRadius: 10,
    backgroundColor: secundaryColor,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    // backgroundColor: "blue",
    paddingHorizontal: 10, // Agregado para un mejor espacio
  },
  textRow: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
    paddingVertical: 4,
  },
  paidByText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "green",

    paddingVertical: 4,
  },
});
