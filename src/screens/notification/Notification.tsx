import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { mainColor } from "../../componets/shared";
import { Divider } from "react-native-elements/dist/divider/Divider";

export default function Notification() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Notificación 1" },
    { id: 2, message: "Notificación 2" },
    // Agregar más notificaciones según sea necesario
  ]);

  const handleNotificationClose = (notificationId) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== notificationId
    );
    setNotifications(updatedNotifications);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white", // Establecer el fondo blanco
        paddingHorizontal: 10,
      }}
    >
      {notifications.length === 0 ? (
        <View style={{ marginTop: 40 }}>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 20,
              fontWeight: 600,
              color: "#a1a1a1",
            }}
          >
            Empty notifications
          </Text>
        </View>
      ) : (
        notifications.map((notification, index) => (
          <View key={index}>
            <View key={notification.id} style={styles.notification}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 30 }}
              >
                <View
                  style={{
                    backgroundColor: "#f3844c37",
                    width: 50,
                    height: 50,
                    borderRadius: 15,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="bell"
                    size={24}
                    color={mainColor}
                  />
                </View>
                <Text>{notification.message}</Text>
              </View>

              <TouchableOpacity
                onPress={() => handleNotificationClose(notification.id)}
              >
                <Ionicons name="ios-close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Divider
              width={1}
              style={{
                // marginBottom: 5,
                borderBottomWidth: 0.1,
                borderBottomColor: "#d6d4d475",
              }}
            />
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  notification: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    // backgroundColor: "#f3801b0",
    // marginBottom: 10,
  },
  closeButton: {
    fontSize: 20,
    color: "red",
  },
});
