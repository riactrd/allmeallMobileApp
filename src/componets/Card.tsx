import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input-plus";

type Props = {
  cardNumber: number;
  expiry: number;
  cvc: number;
};

const Card = ({ cardNumber, expiry, cvc }: Props) => {
  return (
    <View style={styles.card}>
      {/* <LiteCreditCardInput
        // onChange={'this._onChange'}
        // focused={this.state.focused}
        number={cardNumber}
        expiry={expiry}
        cvc={cvc}
        style={styles.card}
        /> */}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.12)",
    width: "100%",
    padding: 10,
  },
});
