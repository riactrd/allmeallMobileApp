import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/EvilIcons";
import Ionicons2 from "react-native-vector-icons/MaterialCommunityIcons";
import {
  useLazySearchCategoriesQuery,
  useSearchCategoriesQuery,
} from "../../redux/api/categoriesApi";

const Search = ({ search, setSearch, trigger }) => {
  // const [search, setSearch] = useState("");
  // const [trigger, { data }] = useLazySearchCategoriesQuery(search);

  const onChangeSearch = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setSearch(value);
    console.log(value);
  };

  const handleSubmit = () => {
    console.log("Submitted");
    // console.log(search);
    trigger(search);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="search" type="ionicon" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search for meals"
          value={search}
          onChange={onChangeSearch}
          onSubmitEditing={handleSubmit}
        />
        <View style={styles.backIcom}>
          <Ionicons2 name="tune" type="ionicon" style={styles.icon2} />
        </View>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // marginBottom:5,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
  },
  input: {
    width: "90%",
    height: 56,
    borderColor: "#DADADA",
    borderWidth: 1.5,
    padding: 10,
    paddingLeft: 50,
    borderRadius: 5,
    backgroundColor: "white",
    zIndex: -1,
  },
  icon: {
    position: "absolute",
    fontSize: 25,
    color: "#262626",
    bottom: 20,
    left: 15,
  },
  backIcom: {
    backgroundColor: "#FF6F00",
    position: "absolute",
    width: 56,
    height: 56,
    right: 0,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon2: {
    position: "absolute",
    fontSize: 25,
    color: "#fff",
    bottom: 20,
    left: 15,
    top: 15,
  },
});
