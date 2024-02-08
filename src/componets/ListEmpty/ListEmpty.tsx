import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function ListEmpty({ title }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 120,
      }}
    >
      <Text
        style={{
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: 16,
          lineHeight: 30,
          letterSpacing: 0.15,
          color: "#262626ad",

          alignSelf: "center",
        }}
      >
        {title}
      </Text>
      <MaterialIcons
        name="search-off"
        size={30}
        color="#262626ad"
        style={{ marginLeft: 5 }}
      />
    </View>
  );
}
