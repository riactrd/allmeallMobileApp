import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  mainColor,
  ScreenWidth,
  secundaryColor,
  secundaryColor7,
  thirdColor,
} from "../../componets/shared";
import AntDesign from "react-native-vector-icons/AntDesign";
import AdressesItem from "./AdressesItem";
import { useNavigation } from "@react-navigation/native";
import AddressesList from "./AddressesList";

// const adress = [1, 2, 3, 4];

const Adresses = () => {
  const [selected, Setselected] = useState("1");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.headerContainer}>
          <View style={{ flexDirection: "row", gap: 20, marginLeft: 10 }}>
            <TouchableOpacity
              onPress={() => Setselected("1")}
              activeOpacity={0.7}
              style={[
                selected === "1"
                  ? styles.headerButtomActive
                  : styles.headerButtom,
              ]}
            >
              <Text
                style={[
                  selected === "1"
                    ? styles.headertextActive
                    : styles.headertext,
                ]}
              >
                Billing Adress
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Setselected("2")}
              activeOpacity={0.7}
              style={[
                selected === "2"
                  ? styles.headerButtomActive
                  : styles.headerButtom,
              ]}
            >
              <Text
                style={[
                  selected === "2"
                    ? styles.headertextActive
                    : styles.headertext,
                ]}
              >
                Delivery Address
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("NewAddressStack")}
            activeOpacity={0.7}
            style={styles.addButtomActive}
          >
            <AntDesign
              name="plus"
              color={secundaryColor}
              style={styles.iconAdres}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: ScreenWidth, marginBottom: 5 }}
        >
          {/* <View style={styles.adressesContainerItem}>
            {adress.map((item, index) => (
              <AdressesItem />
            ))}
          </View> */}

          <AddressesList />
        </ScrollView>
      </View>
    </View>
  );
};

export default Adresses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: secundaryColor7,
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
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: ScreenWidth - 20,
    marginTop: 15,
    marginBottom: 15,
  },
  headerButtom: {
    width: 125,
    height: 36,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { height: 3, width: 3 },
    elevation: 1.4,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  headertext: {
    color: thirdColor,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.15,
  },
  headerButtomActive: {
    backgroundColor: mainColor,
    width: 125,
    height: 36,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { height: 3, width: 3 },
    elevation: 5.4,
  },
  addButtomActive: {
    backgroundColor: mainColor,
    width: 36,
    height: 36,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { height: 3, width: 3 },
    elevation: 5.4,
  },
  headertextActive: {
    color: secundaryColor,
  },
  iconAdres: {
    fontSize: 30,
  },
  adressesContainerItem: {
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "auto",
  },
});
