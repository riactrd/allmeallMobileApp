import React, { useState } from "react";
import { View, TextInput, ScrollView, Text, StyleSheet } from "react-native";
import { thirdColor } from "../../componets/shared";
// import Colors from "../../colors";

export default function CardDetails() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvc, setCVC] = useState("");

  const formatCardNumber = (value) => {
    // Remove all non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    // Limit to a maximum of 16 characters
    const truncatedValue = numericValue.slice(0, 16);

    // Split the numeric value into groups of 4 characters
    const groups = truncatedValue.match(/.{1,4}/g);

    // Join the groups with a space between them
    return groups ? groups.join(" ") : "";
  };

  const formatExpiration = (value) => {
    // Remove all non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    // Split the numeric value into MM and YY
    const month = numericValue.slice(0, 2);
    const year = numericValue.slice(2, 4);

    // Format as MM/YY
    return `${month}/${year}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Card Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={formatCardNumber(cardNumber)}
          onChangeText={setCardNumber}
          keyboardType="numeric"
          maxLength={19}
        />
        <View style={styles.row}>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text style={styles.label}>Expiration</Text>
            <TextInput
              style={[styles.input]}
              placeholder="MM/YY"
              value={expiration}
              onChangeText={(text) => {
                setExpiration(formatExpiration(text));
              }}
              keyboardType="numeric"
              maxLength={5}
            />
          </View>

          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text style={styles.label}>CVC</Text>
            <TextInput
              style={styles.input}
              placeholder="CVC"
              value={cvc}
              onChangeText={setCVC}
              keyboardType="numeric"
              maxLength={3}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.8,
    height: "35%",
    width: "100%",
    // alignSelf: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 2,
  },
  content: {
    paddingVertical: 10,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: `${thirdColor}30`,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
  },
  halfInput: {
    flex: 1,
    marginRight: 5,
  },
});
