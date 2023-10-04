import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  mainColor,
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";

import { useGetDigitalWalletQuery } from "../../redux/api/digitalwalletApi";
import TransactionItem from "./TransactionItem";

export default function Transactions() {
  const { data, isLoading, error } = useGetDigitalWalletQuery();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (data) {
      setTransactions(data.data.transactions);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: ScreenWidth, marginBottom: 5 }}
        >
          <View style={styles.viewScroll}>
            {transactions.map((item, index) => (
              <TransactionItem key={index} item={item} />
            ))}
            {/* <TouchableOpacity tyle={styles.containerButtom} onPress={() => navigation.navigate('NewGift')}>
                <View style={styles.buttom}>
                    <Ionicons name="add-circle" color={secundaryColor} style={styles.icon}/>
                    <Text style={styles.text}>New Gift Card</Text>
                </View>
            </TouchableOpacity> */}
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
  viewScroll: {
    // width: ScreenWidth-20,
    flexDirection: "column",
    alignItems: "center",
    // padding:1,
    // marginBottom:320,
    marginBottom: "auto",
  },
  item: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 8,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { height: 3, width: 3 },
    elevation: 1.4,
    backgroundColor: "#fff",
    width: ScreenWidth - 20,
    height: 88,
    padding: 15,
    // marginBottom:25,
    marginTop: 25,
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
  buttom: {
    flexDirection: "row",
    alignItems: "center",
    width: 169,
    height: 40,
    backgroundColor: mainColor,
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: secundaryColor,
  },
  containerButtom: {
    width: ScreenWidth - 20,
  },
});
