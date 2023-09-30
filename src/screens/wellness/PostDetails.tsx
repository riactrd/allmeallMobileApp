import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import mindfull from "../../../assets/img/mindfull.png";
import { mainColor, ScreenWidth, thirdColor } from "../../componets/shared";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";
import HTML from "react-native-render-html";
import { useWindowDimensions } from "react-native";
import moment from "moment";

const itemsProps = [1, 2, 3, 4, 5, 6];

const PostDetails = () => {
  const windowWidth = useWindowDimensions().width;
  const route = useRoute();

  // Formatear la fecha y la hora usando moment.js
  // const formattedDate = 10;
  // const formattedTime = 20;
  const { details } = route.params;
  const formattedDate = moment(details.published_on).format("DD/MM/YY");
  const formattedTime = moment(details.published_on).format("HH:mm");
  const urlImage = details.image.url;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={{
          uri: `https://allmealprep.com${urlImage}`,
        }}
        resizeMode="cover"
        style={styles.img}
      ></ImageBackground>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.containerMeal}>
            <View style={styles.dates}>
              <View style={styles.datesItems}>
                <Ionicons
                  name="md-calendar-sharp"
                  color={mainColor}
                  style={styles.icon}
                />
                <Text style={styles.datetext}>{formattedDate}</Text>
              </View>
              <View style={styles.datesItems}>
                <Ionicons
                  name="ios-time-outline"
                  color={mainColor}
                  style={styles.icon}
                />
                <Text style={styles.datetext}>{formattedTime}</Text>
              </View>
            </View>
            <View style={styles.dates}>
              <Text style={styles.title}>{details.title}</Text>
            </View>
            {/* <View style={styles.dates}>
              <Text style={styles.titleP}>
                Welcome to the first Wellness Wednesday email series - For the
                next four emails, we will be highlightning: Mindfullness!.
              </Text>
            </View> */}
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <HTML
            source={{ html: details.body }}
            contentWidth={windowWidth}
            ignoredDomTags={["font"]}
            baseStyle={styles.textBottom}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  img: {
    height: 228,
  },
  containerMeal: {
    backgroundColor: "#fff",
    position: "absolute",
    width: ScreenWidth - 20,
    height: "auto",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,
    padding: 20,
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
  bottomContainer: {
    // backgroundColor: 'black',

    marginTop: 60,
    // backgroundColor: "red",
  },
  textBottom: {
    color: thirdColor,
    // fontStyle: 'normal',
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    width: ScreenWidth - 20,
    marginBottom: 10,
  },
  textBottomTitle: {
    color: thirdColor,
    // fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 30,
    letterSpacing: 0.15,
    width: ScreenWidth - 20,
    marginBottom: 10,
  },
});
