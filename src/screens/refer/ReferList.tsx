import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  ScreenWidth,
  Screenheight,
  mainColor,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import { useGetListReferEarnQuery } from "../../redux/api/referEarnApi";
import { ScrollView } from "react-native-gesture-handler";
import ReferItem from "./ReferItem";
import Spinner from "react-native-loading-spinner-overlay";
import { MaterialIcons } from "@expo/vector-icons";

export default function ReferList() {
  const { data, isLoading, isSuccess } = useGetListReferEarnQuery();
  const [referList, setReferList] = useState([]);
  const [search, setSearch] = useState("");
  const [found, setFound] = useState([]);

  useEffect(() => {
    if (data) {
      setReferList(data.data.referrals);
    }
  }, [data]);

  const onChangeSearch = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setSearch(value);
  };

  useEffect(() => {
    const searchResults = referList.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });

    setFound(searchResults); // Almacena todos los resultados en el arreglo 'found'
  }, [search]);

  return (
    <View style={styles.container}>
      {isLoading && (
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
            <Spinner
              //visibility of Overlay Loading Spinner
              visible={isLoading}
              //Text with the Spinner
              // textContent={"Loading..."}
              //Text style of the Spinner Text
              // textStyle={styles.spinnerTextStyle}
            />
          </View>
        </View>
      )}
      <View style={styles.wrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: ScreenWidth, marginBottom: 5 }}
        >
          <View style={{}}>
            <View style={styles.inputContainer}>
              {/* <Ionicons name="search" type="ionicon" style={styles.icon} /> */}

              <TextInput
                style={styles.input}
                placeholder="Search User"
                placeholderTextColor="grey"
                value={search}
                onChange={onChangeSearch}
              />
            </View>
          </View>
          {referList && referList.length > 0 ? (
            <View style={styles.viewScroll}>
              {search.trim() === "" ? (
                referList.map((item, index) => (
                  <View key={index}>
                    <ReferItem item={item} />
                  </View>
                ))
              ) : found && found.length > 0 ? (
                found.map((item, index) => (
                  <View key={index}>
                    <ReferItem item={item} />
                  </View>
                ))
              ) : (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginVertical: 40,
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
                    User not found
                  </Text>
                  <MaterialIcons
                    name="search-off"
                    size={30}
                    color="#262626ad"
                    style={{ marginLeft: 5 }}
                  />
                </View>
              )}
              {/* {found && found.length > 0
              ? found.map((item, index) => (
                  <View key={index}>
                    <ReferItem item={item} />
                  </View>
                ))
              : referList.map((item, index) => (
                  <View key={index}>
                    <ReferItem item={item} />
                  </View>
                ))} */}
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 40,
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
                No list to show
              </Text>
              <MaterialIcons
                name="search-off"
                size={30}
                color="#262626ad"
                style={{ marginLeft: 5 }}
              />
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: secundaryColor,
    marginBottom: "12%",
  },
  wrapper: {
    // backgroundColor: '#000',
    // width: ScreenWidth-20,
    flexDirection: "column",
    alignItems: "center",
  },
  saveButtom: {
    flexDirection: "row",
    justifyContent: "center",
    width: ScreenWidth - 20,
    marginBottom: 20,
    backgroundColor: mainColor,
    padding: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  saveButtomText: {
    color: secundaryColor,
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 1.25,
    lineHeight: 16,
  },
  textDivide: {
    flexDirection: "row",
    width: ScreenWidth - 20,
    marginBottom: 20,
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    marginRight: 20,
  },
  textDivideFont: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 15,
    letterSpacing: 0.15,
    color: thirdColor,
  },
  viewScroll: { marginTop: 20 },

  inputContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    // paddingBottom: 10,
    // position: "relative",
  },

  input: {
    width: "100%",
    height: 56,
    borderColor: "#DADADA",
    borderWidth: 1.5,
    padding: 10,
    paddingLeft: 25,
    borderRadius: 5,
    backgroundColor: "white",
  },
});
