import { View, Text, FlatList } from "react-native";
import React from "react";

import MealPrepCard from "./MealPrepCard";

export default function MealPrepList({ navigation, meal }) {
  return (
    <View>
      {meal &&
        meal.length > 0 &&
        meal.map((item, index) => (
          <View
            key={item.id}
            style={
              {
                // marginVertical: 20, // Aplicamos el margen superior a cada elemento
                // paddingHorizontal: 20, // Estilo para el pie de cada elemento
              }
            }
          >
            <MealPrepCard item={item} navigation={navigation} />
          </View>
        ))}
      <View style={{ marginBottom: 60 }}></View>
    </View>
  );
}
