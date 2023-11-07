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
  mainColor,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import { useGetListReferEarnQuery } from "../../redux/api/referEarnApi";
import { ScrollView } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";
import PickupItem from "../pickup/PickupItem";
import ReferItem from "./ReferItem";
import Ionicons from "react-native-vector-icons/EvilIcons";
import Ionicons2 from "react-native-vector-icons/MaterialCommunityIcons";

export default function ReferList() {
  const { data } = useGetListReferEarnQuery();
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

  const handleSubmit = () => {
    // if (search.trim() === "") {
    //   setSearch("");
    //   console.log("El string de búsqueda está vacío, no se hará nada.");
    // } else {
    //   // Hacer algo con search si no está vacío
    //   trigger(search);
    // console.log("El string de búsqueda está vacío, no se hará nada.");
  };

  const searchResults = referList.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  // useEffect(() => {
  //   if (searchResults.length > 0) {
  //     console.log("Resultados encontrados:");
  //     searchResults.forEach((result) => {
  //       console.log(result);
  //       setFound(result);
  //       console.log(result);
  //     });
  //   } else {
  //     console.log("No se encontraron resultados para la búsqueda: ", search);
  //   }
  // }, [search]);

  useEffect(() => {
    const searchResults = referList.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });

    setFound(searchResults); // Almacena todos los resultados en el arreglo 'found'
  }, [search]);

  return (
    <View style={styles.container}>
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
                value={search}
                onChange={onChangeSearch}
                onSubmitEditing={handleSubmit}
              />
            </View>
          </View>
          <View style={styles.viewScroll}>
            {found && found.length > 0
              ? found.map((item, index) => (
                  <View key={index}>
                    <ReferItem item={item} />
                  </View>
                ))
              : referList.map((item, index) => (
                  <View key={index}>
                    <ReferItem item={item} />
                  </View>
                ))}
          </View>
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
