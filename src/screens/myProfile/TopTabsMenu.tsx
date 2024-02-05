import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  ScreenWidth,
  mainColor,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function TopTabsMenu({ selected, Setselected }) {
  const navigation = useNavigation();
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={{ width: ScreenWidth, marginBottom: 5 }}
    >
      <View style={styles.headerTop}>
        <TouchableOpacity
          onPress={() => Setselected("1")}
          style={styles.containerItem}
        >
          <View
            style={[
              selected === "1" ? styles.wrapperActive : styles.wrapperItem,
            ]}
          >
            <Text style={[selected === "1" ? styles.textActive : styles.text]}>
              Basic Details
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Setselected("2")}
          style={styles.containerItem}
        >
          <View
            style={[
              selected === "2" ? styles.wrapperActive : styles.wrapperItem,
            ]}
          >
            <View>
              <Text
                style={[selected === "2" ? styles.textActive : styles.text]}
              >
                How did you
              </Text>
              <Text
                style={[selected === "2" ? styles.textActive : styles.text]}
              >
                hear about us?
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Setselected("3");
            navigation.navigate("Adresses");
          }}
          style={styles.containerItem}
        >
          <View
            style={[
              selected === "3" ? styles.wrapperActive : styles.wrapperItem,
            ]}
          >
            <Text style={[selected === "3" ? styles.textActive : styles.text]}>
              Adresses
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Setselected("4");
            navigation.navigate("Allergic");
          }}
          style={styles.containerItem}
        >
          <View
            style={[
              selected === "4" ? styles.wrapperActive : styles.wrapperItem,
            ]}
          >
            <Text style={[selected === "4" ? styles.textActive : styles.text]}>
              Food Preferences
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Setselected("5");
            navigation.navigate("Password");
          }}
          style={styles.containerItem}
        >
          <View
            style={[
              selected === "5" ? styles.wrapperActive : styles.wrapperItem,
            ]}
          >
            <Text style={[selected === "5" ? styles.textActive : styles.text]}>
              Password
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
  },
  headerTop: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    // width: ScreenWidth,
  },
  wrapperItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { height: 3, width: 3 },
    // elevation: 1.4,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    width: "auto",
    height: 46,
    padding: 15,
  },

  wrapperActive: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { height: 3, width: 3 },
    elevation: 1.4,
    backgroundColor: "#FF6F00",
    width: "auto",
    height: 46,
    padding: 15,
  },

  text: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.15,
    color: "#000",
  },
  textActive: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.15,
    color: "#fff",
  },
  viewScroll: {
    marginTop: 20,
  },
  image: {
    // marginBottom:10,
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: ScreenWidth - 20,
    marginBottom: 20,
  },
  headerTextInput: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 0.15,
    color: thirdColor,
  },
  input: {
    padding: 20,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.12)",
  },
  textDivide: {
    flexDirection: "row",
    // width: ScreenWidth-20,
    marginBottom: 20,
    alignItems: "center",
  },
  icon: {
    fontSize: 15,
    marginRight: 10,
  },
  saveButtom: {
    flexDirection: "row",
    justifyContent: "center",
    width: 100,
    height: 40,
    marginBottom: 20,
    backgroundColor: mainColor,
    // padding:20,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtomText: {
    color: secundaryColor,
    fontWeight: "600",
    fontSize: 12,
    letterSpacing: 1.25,
    lineHeight: 16,
  },
  headerContainer: {
    flexDirection: "row",
    width: ScreenWidth - 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerContainerRadio: {
    flexDirection: "row",
    // width: ScreenWidth-20,
    // justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 20,
    marginRight: 20,
  },
  radiobutom: {
    // backgroundColor: 'rgba(242, 110, 33, 0.15)',
    borderRadius: 30,
    width: "auto",
    height: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderColor: "rgba(0, 0, 0, 0.54)",
    borderWidth: 0.3,
  },
  radiobutomActive: {
    backgroundColor: "rgba(242, 110, 33, 0.15)",
    borderRadius: 30,
    width: "auto",
    height: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderColor: "rgba(242, 110, 33, 0.15)",
    borderWidth: 0.3,
  },
  radioText: {
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 15,
    letterSpacing: 0.15,
    color: thirdColor,
  },
  radioPriceText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    // color: '#FF6F00',
  },
  buttomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: ScreenWidth - 20,
    paddingBottom: 20,
  },
});
