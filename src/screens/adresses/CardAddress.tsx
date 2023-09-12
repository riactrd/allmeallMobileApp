import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
// import Colors from "../../colors";
import {
  mainColor,
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CardAddress({ item }) {
  const navigation = useNavigation();
  return (
    <View style={styles.Card}>
      <View
        style={{
          height: "80%",
          justifyContent: "space-evenly",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="person"
            size={24}
            color={mainColor}
            style={{ marginRight: 15 }}
          />

          <Text style={{ fontSize: 14, fontWeight: "800" }}>{item.name}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="ios-location-sharp"
            size={24}
            color={mainColor}
            style={{ marginRight: 15 }}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              marginRight: 120,
              // backgroundColor: "red",
            }}
          >
            {item.address}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons
            name="local-phone"
            size={24}
            color={mainColor}
            style={{ marginRight: 15 }}
          />
          <Text style={{ fontSize: 14, fontWeight: 400 }}>{item.phone}</Text>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          top: -10,
          right: 10,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("EditAddress")}
          style={{
            backgroundColor: mainColor,
            padding: 5,
            borderRadius: 10,
            marginRight: 10,
          }}
        >
          <MaterialIcons name="edit" size={24} color={secundaryColor} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: thirdColor,
            padding: 5,
            borderRadius: 10,
          }}
        >
          <MaterialIcons name="delete" size={24} color={secundaryColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Card: {
    height: 170,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 15,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    backgroundColor: secundaryColor,
    // justifyContent: "space-between",
  },
});
