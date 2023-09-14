import React, { FunctionComponent, useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome5';
import { StackScreenProps } from '@react-navigation/stack';
import { Screenheight, ScreenWidth, thirdColor } from '../../componets/shared';
import { useLoginUserMutation } from '../../redux/api/authApi';
import { useToast } from "react-native-toast-notifications";
import { useDispatch } from 'react-redux';
import { loginData } from '../../redux/loginSlice';
import Toast from 'react-native-toast-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RootStackParamList } from '../../navigators/RootStack';

type props = StackScreenProps<RootStackParamList, 'SigninDrawer'>

const Login: FunctionComponent<props>= ({navigation}) => {
  const [loginUser,{data, isError, error, isLoading}] = useLoginUserMutation();
  const [email, SetUserEmail] = useState<string>('');
  const [password, SetPassword] = useState<string>('');
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {

    if(data && data.data.access_token){
     
      SetUserEmail('');
      SetPassword('');
      // SetIsLogin(true)
      // console.log(data)
      dispatch(loginData({
        userLogin: true,
        token: data.data.access_token,
        userData: data.data.user
      }))
      
      navigation.navigate('HomeDrawer')
    }
   if(isError){
   
        if (error) {
          if ('status' in error) {
            // you can access all properties of `FetchBaseQueryError` here
            
            toast.show(JSON.stringify(error.data.error.message), {
              type: "danger",
              placement: "bottom",
              duration: 4000,
              animationType: "slide-in",
              
            });

              
            SetUserEmail('');
            SetPassword('');
          }
      }
  
   }
  
   
},[data, isError])

  const sign_in= {
    "login": email,
  "password": password
  }
  const HandlerLogin = async () =>{
  
   if(email=='' || password==''){
    toast.show('Email or password are required', {
      type: "danger",
      placement: "bottom",
      duration: 4000,
      animationType: "slide-in",
      
    });

    
   }
   else{
    await loginUser({sign_in})
   
   }
   
   }


const onChangeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
  const value = e.nativeEvent.text;
  SetUserEmail(value);
}
const onChangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
  const value = e.nativeEvent.text;
  SetPassword(value);
}

  return (
    <>
     <KeyboardAwareScrollView showsVerticalScrollIndicator={false} >
     {isLoading && (
          <View style={{ 
            flex:1,
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'rgba(3, 0, 2, 0.30)', 
            height: Screenheight, 
            width: ScreenWidth,
            position: 'absolute',
            zIndex: 99,

          }}
            >
            <Text style={styles.headertext}>Loading....</Text>
          </View>
          )}
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          value={email}
          onChange={onChangeEmail}
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
          value={password}
          onChange={onChangePassword}
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
          onPress={HandlerLogin}
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
      </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </>
  );
}

export default Login

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
  headertext:{
    color: thirdColor,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
});
