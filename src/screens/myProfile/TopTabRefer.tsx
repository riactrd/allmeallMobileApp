import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { ScreenWidth, mainColor, thirdColor } from "../../componets/shared";

export default function TopTabRefer({
  referrer,
  onChangeReferrer,
  referralEmail,
  onChangeReferralEmail,
}) {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "auto",
      }}
    >
      <View style={styles.inputContainer}>
        <Text style={styles.headerTextInput}>
          Referrer<Text style={{ color: mainColor }}>*</Text>
        </Text>
        <TextInput
          placeholder="Type Referrer..."
          style={styles.input}
          onChange={onChangeReferrer}
          value={referrer}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.headerTextInput}>
          Referral Email
          <Text style={{ color: mainColor }}>*</Text>
        </Text>
        <TextInput
          placeholder="Type Referral Email*..."
          style={styles.input}
          onChange={onChangeReferralEmail}
          value={referralEmail}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.15,
    color: "#000",
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

  headerContainer: {
    flexDirection: "row",
    width: ScreenWidth - 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
});
