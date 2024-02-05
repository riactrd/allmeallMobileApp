import { View, Text } from "react-native";
import React from "react";
import { ScreenWidth, Screenheight } from "../componets/shared";
import Spinner from "react-native-loading-spinner-overlay";

export default function Loader({ isLoading }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(3, 0, 2, 0.30)",
        height: Screenheight,
        width: ScreenWidth,
        position: "absolute",
        zIndex: 99,
      }}
    >
      <View>
        <Spinner visible={isLoading} textContent={"Loading..."} />
      </View>
    </View>
  );
}
