import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Entypo } from "@expo/vector-icons";
// import Colors from "../../colors";
import { AntDesign } from "@expo/vector-icons";
import { mainColor, thirdColor } from "../../../componets/shared";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const formattedDate = selectedDate
    ? `${daysOfWeek[selectedDate.getDay()]}  (${
        monthsOfYear[selectedDate.getMonth()]
      } ${selectedDate.getDate()}) Available`
    : "Select a date";

  return (
    <View style={{ paddingHorizontal: 10, marginVertical: 10 }}>
      <TouchableOpacity
        className="bg-slate-100"
        style={{
          borderRadius: 5,
          padding: 0,
          marginBottom: 10,
          borderWidth: 1, // Añadir borde al TouchableOpacity
          borderColor: "#c7c8ca",
        }}
        onPress={showDatePicker}
      >
        <View
          style={{
            borderWidth: 0,
            // borderColor: "black",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginStart: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Entypo name="calendar" size={24} color={`${thirdColor}50`} />
            <Text style={{ fontSize: 16, marginStart: 10 }}>
              {formattedDate}
            </Text>
          </View>

          <AntDesign name="caretdown" size={12} color={`${thirdColor}80`} />
        </View>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}
