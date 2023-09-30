import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { mainColor, ScreenWidth, thirdColor } from "../../componets/shared";
import { useNavigation } from "@react-navigation/native";
// import mindfull from "../../../assets/img/mindfull.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import HTML from "react-native-render-html";

const Post = ({ item }) => {
  const navigation = useNavigation();

  const urlImage = item.image.url;

  return (
    <TouchableOpacity
      style={styles.containerItem}
      activeOpacity={0.7}
      onPress={() => navigation.navigate("PostDetails")}
    >
      <View style={styles.container}>
        <View style={{ width: "100%", height: 215 }}>
          <Image
            source={{
              uri: `https://allmealprep.com${urlImage}`,
            }}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
        </View>

        {/* <Image source={{ uri: mindfull }} style={styles.img} /> */}

        <View style={styles.dates}>
          <View style={styles.datesItems}>
            <Ionicons
              name="md-calendar-sharp"
              color={mainColor}
              style={styles.icon}
            />
            <Text style={styles.datetext}>10/07/2020</Text>
          </View>
          <View style={styles.datesItems}>
            <Ionicons
              name="ios-time-outline"
              color={mainColor}
              style={styles.icon}
            />
            <Text style={styles.datetext}>10/07/2020</Text>
          </View>
        </View>
        <View style={styles.dates}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.dates}>
          {/* <HTML source={{ html: item.body }} /> */}
          <Text>{item.body}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Post;

const styles = StyleSheet.create({
  containerItem: {
    elevation: 11,
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { height: 3, width: 3 },
    backgroundColor: "#fff",
    // backgroundColor: "rgb(224, 224, 224)",
    // backgroundColor: "red",
    width: ScreenWidth - 20,
    height: "auto",
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
  img: {
    borderRadius: 8,
    width: "100%",
    // height:'100%',
    resizeMode: "cover",
    // marginTop: -32,
  },
  dates: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  datesItems: {
    flexDirection: "row",
    marginRight: 20,
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
  datetext: {
    color: thirdColor,
    // fontStyle: 'normal',
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 30,
    letterSpacing: 0.15,
  },
  title: {
    color: thirdColor,
    // fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 15,
    letterSpacing: 0.15,
  },
  titleP: {
    color: thirdColor,
    // fontStyle: 'normal',
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    width: 309,
    marginBottom: 10,
  },
});
