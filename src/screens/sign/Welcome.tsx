import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { FunctionComponent } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigators/RootStack";
import { ScreenWidth } from "react-native-elements/dist/helpers";
import { Screenheight } from "../../componets/shared";
import { FontAwesome5 } from "@expo/vector-icons";

type props = StackScreenProps<RootStackParamList, "WelcomeDrawer">;

const Welcome: FunctionComponent<props> = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../../assets/img/Welcome.png")}
      style={{ flex: 1 }}
    >
      <View
        style={{
          position: "absolute",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          top: "8%",
        }}
      >
        <Image
          source={require("../../../assets/img/logoAMP.png")}
          style={{ width: 70, height: 70 }}
        />
      </View>
      <View
        style={{
          position: "absolute",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          top: "55%",
        }}
      >
        <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>
          Meal Prep
        </Text>
        <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>
          Chicago
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          justifyContent: "flex-end",
          paddingHorizontal: 6,
        }}
      >
        <View
          style={{
            marginBottom: "5%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("SigninDrawer")}
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
          <TouchableOpacity
            onPress={() => navigation.navigate("SignupDrawer")}
            activeOpacity={0.7}
            style={styles.buttomSignup}
          >
            <Icon
              name="user-check"
              type="ionicon"
              color="#fff"
              style={styles.iconLogup}
            />
            <Text style={styles.textButtomLogup}>Register</Text>
          </TouchableOpacity>
          <View style={{ marginBottom: "2%" }}>
            <TouchableOpacity onPress={() => navigation.navigate("FaqTab")}>
              <Text
                style={{
                  marginBottom: 1,
                  color: "white",
                  alignSelf: "center",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                FAQ
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Privacy Policy
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: ScreenWidth,
    height: Screenheight + 40,
  },
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
    width: "90%",
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
