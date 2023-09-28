import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenWidth, secundaryColor } from "../../componets/shared";
import Post from "./Post";

const postList = [1, 2, 3, 4];

const Wellness = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: ScreenWidth, marginBottom: 5 }}
        >
          <View style={styles.viewScroll}>
            {postList.map((item, index) => (
              <Post key={index} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Wellness;

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
    // marginBottom:320,
    marginBottom: "auto",
    marginTop: 20,
  },
});
