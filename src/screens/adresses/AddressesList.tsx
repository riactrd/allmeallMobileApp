import { View, Text, FlatList } from "react-native";

import React from "react";
import CardAddress from "./CardAddress";

const items = [
  {
    id: "1",
    name: "Michael williams",
    address: "833 West Haines Street,  Chicago, Ilinois, United States",
    phone: "312-634-6118",
  },
  {
    id: "2",
    name: "Jhon Doe",
    address: "833 West Haines Street, Chicago, Ilinois, United States",
    phone: "312-634-6118",
  },
  {
    id: "3",
    name: "Carl Jhonson",
    address: "833 West Haines Street, Chicago, Ilinois, United States",
    phone: "312-634-6118",
  },
];

export default function AddressesList({}) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={items}
      renderItem={({ item }) => <CardAddress item={item} />}
      ListFooterComponent={() => <View style={{ paddingBottom: 20 }} />}
    />
  );
}
