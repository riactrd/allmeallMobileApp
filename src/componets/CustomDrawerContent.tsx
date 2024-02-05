import * as React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Divider } from "react-native-elements/dist/divider/Divider";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import {
  MaterialIcons,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

// import user from 'https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg'
import { selectimgAvatar, selectUserData } from "../redux/store";

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const navigation = useNavigation();
  const imgAvatar = useSelector(selectimgAvatar);
  const userData = useSelector(selectUserData);

  const { email, first_name, last_name } = userData;

  return (
    <View style={{ flex: 1, marginTop: -20 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.topSection}>
            <AntDesign
              name="close"
              type="ionicon"
              color="#000"
              onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
              style={styles.iconClose}
            />
          </View>
          {/* <View style={styles.userInfoSection}>
            <Image
              source={{ uri: imgAvatar }}
              style={{
                width: 56,
                height: 56,
                borderRadius: 30,
              }}
            />
            <View style={styles.userInfoDetails}>
              <Text style={styles.textName}>
                {first_name + " " + last_name}
              </Text>
              <Text style={styles.textEmail}>{email}</Text>
            </View>
          </View> */}
          <View
            style={{
              flexDirection: "row",
              // padding: 15,
            }}
          >
            <View>
              <Image
                source={require("../../assets/img/user.png")}
                style={styles.userImg}
              />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={{ fontSize: 16 }}>
                {first_name} {last_name}
              </Text>
              <Text style={{ fontSize: 10 }}>{email}</Text>
            </View>
          </View>

          <Divider
            width={1}
            style={{
              marginTop: 20,
              borderBottomWidth: 0.1,
              borderBottomColor: "#f2f2f2",
            }}
          />

          <View style={styles.items}>
            {/* <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name="user" color={color} size={size} />
              )}
              label="My Profile"
              onPress={() => {
                props.navigation.navigate("MyProfile");
              }}
            /> */}

            <DrawerItem
              icon={({ color, size, focused }) => (
                <Material
                  name="clipboard-list-outline"
                  color="black"
                  size={size}
                />
              )}
              // labelStyle={{ color: focused ? "#fff" : "black" }}
              label="My Orders"
              onPress={() => {
                props.navigation.navigate("MyOrdersTab");
              }}
            />

            {/* Addresses */}

            <DrawerItem
              icon={({ color, size }) => (
                <Octicons name="id-badge" color={color} size={size} />
              )}
              label="Addresses"
              onPress={() => {
                props.navigation.navigate("AdressesTab");
              }}
            />

            {/* Book Catering */}

            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="food-takeout-box-outline"
                  size={24}
                  // color={focused ? "#fff" : "black"}
                />
              )}
              label="Book Catering"
              onPress={() => {
                props.navigation.navigate("BookCateringTab");
              }}
            />

            {/* Containers */}

            {/* <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons
                  name="all-inbox"
                  size={24}
                  // color={focused ? "#fff" : "black"}
                />
              )}
              label="Containers"
              onPress={() => {
                props.navigation.navigate("ContainersTab");
              }}
            /> */}

            {/* Donate */}

            {/* <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons
                  name="volunteer-activism"
                  size={24}
                  // color={focused ? "#fff" : "black"}
                />
              )}
              label="Donate"
              onPress={() => {
                props.navigation.navigate("DonateTab");
              }}
            /> */}

            {/* DIGITAL WALLET */}

            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name="wallet" color={color} size={size} />
              )}
              label="Digital Wallet"
              onPress={() => {
                props.navigation.navigate("WalletTab");
              }}
            />

            {/* FAQ */}

            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="comment-question-outline"
                  size={24}
                  // color={focused ? "#fff" : "black"}
                />
              )}
              label="FAQ"
              onPress={() => {
                props.navigation.navigate("FaqTab");
              }}
            />

            {/* GIFT CARD */}

            <DrawerItem
              icon={({ color, size }) => (
                <Material name="wallet-giftcard" color={color} size={size} />
              )}
              label="Gift Card"
              onPress={() => {
                props.navigation.navigate("GiftCardsTab");
              }}
            />

            {/* NUTRICION */}
            <DrawerItem
              icon={({ color, size }) => (
                <Material name="spa-outline" color={color} size={size} />
              )}
              label="Nutrition Packages"
              onPress={() => {
                props.navigation.navigate("NutritionPackagesTab");
              }}
            />

            {/* Pickup Glasssware  */}
            {/* <DrawerItem
              icon={({ color, size }) => (
                <Material name="truck-outline" color={color} size={size} />
              )}
              label="Pickup Glasssware"
              onPress={() => {
                props.navigation.navigate("PickupTab");
              }}
            /> */}

            {/* REFER EARN */}

            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="attach-money" size={size} color={color} />
                // <FontAwesome name="dollar" color={color} size={size} />
              )}
              label="Refer & Earn"
              onPress={() => {
                props.navigation.navigate("ReferTab");
              }}
            />

            {/* PASSWORD  */}
            {/* <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="form-textbox-password"
                  size={24}
                  c
                  // color={focused ? "#fff" : "black"}
                />
              )}
              label="Password"
              onPress={() => {
                props.navigation.navigate("PasswordTab");
              }}
            /> */}
            {/* <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="storefront" color={color} size={size} />
              )}
              label="AMP Store"
              onPress={() => {
                props.navigation.navigate("AmpStore");
              }}
            /> */}

            {/* <DrawerItem
          icon={(
            {color, size}
          ) => (
            <Material 
                name="badge-account-horizontal-outline" 
                color={color}
                size={size} />
               )}

            label="Adresses"
            onPress={() =>{props.navigation.navigate('Adresses')}}
            /> */}
            {/* <DrawerItem
          icon={(
            {color, size}
          ) => (
            <Material 
                name="food-takeout-box-outline" 
                color={color}
                size={size} />
               )}

            label="Book Catering"
            onPress={() =>{props.navigation.navigate('BookCatering')}}
            /> */}

            {/* <DrawerItem
          icon={(
            {color, size}
          ) => (
            <Material 
                name="hand-heart-outline" 
                color={color}
                size={size} />
               )}

            label="Donate"
            onPress={() =>{props.navigation.navigate('Donate')}}
            /> */}

            {/* <DrawerItem
          icon={(
            {color, size}
          ) => (
            <Material 
                name="dots-horizontal" 
                color={color}
                size={size} />
               )}

            label="Password"
            onPress={() =>{props.navigation.navigate('Password')}}
            /> */}
          </View>
          <Divider
            width={1}
            style={{
              borderBottomWidth: 0.1,
              borderBottomColor: "#f2f2f2",
            }}
          />
          <View style={styles.items}>
            <DrawerItem
              icon={({ color, size }) => (
                <Material name="email-outline" color={color} size={size} />
              )}
              label="Contact Us"
              onPress={() => {
                props.navigation.navigate("ContactUsTab");
              }}
            />
          </View>
          <Divider
            width={1}
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: "#f2f2f2",
            }}
          />
          <View style={styles.bottomLink}>
            <Text>www.allmealprep.com</Text>
            <View style={styles.bottomSocial}>
              <Material name="instagram" style={styles.social} />
              <Material name="facebook" style={styles.social} />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 20,
  },
  topSection: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  iconClose: {
    fontSize: 24,
  },

  userInfoSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfoDetails: {
    marginLeft: 8,
  },

  userImg: {
    width: 56,
    height: 61,
    borderRadius: 10,
    // position: "absolute",
    // left: width / 2 - 130,
    // bottom: -110 / 2,
    borderWidth: 4,
    borderColor: "#fff",
  },
  textName: {
    // fontFamily: 'Poppins',
    color: "#262626",
    // fontStyle: 'normal',
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  textEmail: {
    // fontFamily: 'Poppins',
    color: "#262626",
    // fontStyle: 'normal',
    fontWeight: "300",
    fontSize: 10,
    lineHeight: 30,
    letterSpacing: 0.15,
  },
  items: {
    marginLeft: -15,
  },
  bottomLink: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomSocial: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  social: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 21,
  },
});
