import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome5";

import { mainColor } from "../../componets/shared";

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Aquí puedes realizar acciones con los datos, como enviarlos a un servidor
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white", position: "relative" }}>
        <ImageBackground
          source={require("../../../assets/img/Welcome.png")}
          style={{ flex: 1, resizeMode: "cover" }}
        >
          <View
            style={{
              position: "absolute",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              top: "15%",
            }}
          >
            <Image
              source={require("../../../assets/img/logoAMP.png")}
              style={{ width: 80, height: 80 }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              top: "60%",
            }}
          >
            <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>
              Meal Prep
            </Text>
            <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>
              Chicago
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 24,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginVertical: 24,
          }}
        >
          Log In
        </Text>
        <TextInput
          style={{
            width: "100%",
            height: 56,
            borderRadius: 10,
            borderColor: "gray",
            borderWidth: 1,
            paddingLeft: 16,
            marginBottom: 16,
          }}
          placeholder="Username or Email"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={{
            width: "100%",
            height: 56,
            borderRadius: 10,
            borderColor: "gray",
            borderWidth: 1,
            paddingLeft: 16,
            marginBottom: 16,
          }}
          placeholder="Password"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("HomeDrawer")}
          style={{
            marginBottom: 16,
            borderRadius: 10,
            padding: 16,
            backgroundColor: mainColor,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ position: "absolute", left: 16 }}>
            <FontAwesome5
              name="user-check"
              size={18}
              style={{ color: "white" }}
            />
          </View>
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Log In
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("HomeDrawer")}
          style={styles.buttomSignin}
        >
          <Icon
            name="user-check"
            type="ionicon"
            color="#fff"
            style={styles.iconLogin}
          />
          <Text style={styles.textButtomLogin}>Log In</Text>
        </TouchableOpacity>
        <Text
          style={{
            marginBottom: 8,
            alignSelf: "center",
            fontSize: 14,
            fontStyle: "italic",
          }}
        >
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignupDrawer")}>
          <Text
            style={{ alignSelf: "center", fontSize: 16, fontWeight: "bold" }}
          >
            Register here
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  // img: {
  //   width: ScreenWidth,
  //   height: Screenheight + 40,
  // },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop:30,
  },

  title: {
    color: "#FFFFFF",
    // fontFamily: 'Poppins',
    // fontsStyle: 'normal',
    fontWeight: "700",
    fontSize: 36,
    lineheight: 54,
  },
  containerTitle: {
    display: "flex",
    flexDirection: "column",
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  containerbuttom: {
    marginTop: 50,
  },
  buttomSignin: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6F00",
    padding: 20,
    borderRadius: 8,
    width: "100%",
    height: 56,
    marginBottom: 10,
  },
  textButtomLogin: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 16,
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "capitalize",
    color: "#FFFFFF",
  },
  iconLogin: {
    color: "#FFFFFF",
    fontSize: 18,
    marginRight: 40,
    marginLeft: -60,
  },
  buttomSignup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#262626",
    padding: 20,
    borderRadius: 8,
    width: "90%",
    height: 56,
    marginBottom: 15,
  },
  textButtomLogup: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 16,
    textAlign: "center",
    letterSpacing: 1.25,
    textTransform: "capitalize",
    color: "#FFFFFF",
    paddingTop: 1,
    height: 18,
  },
  iconLogup: {
    color: "#FFFFFF",
    fontSize: 18,
    marginRight: 40,
    marginLeft: -40,
  },
  titleBottom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 40,
  },
  textBottom: {
    color: "#FFFFFF",
    fontsStyle: "normal",
    fontWeight: "700",
    fontSize: 26,
    lineheight: 54,
    marginBottom: 20,
  },
});
