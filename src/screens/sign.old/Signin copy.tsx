import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { FunctionComponent, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RootStackParamList } from '../../navigators/RootDrawer';
import { StackScreenProps } from '@react-navigation/stack';
import { Screenheight, ScreenWidth } from '../../componets/shared';
import { useLoginUserMutation } from '../../redux/api/authApi';

type props = StackScreenProps<RootStackParamList, 'SigninDrawer'>

const Signin: FunctionComponent<props>= ({navigation}) => {
  const [loginUser,{data, isError, error, isLoading}] = useLoginUserMutation();
  const [email, SetUserEmail] = useState<string>('');
  const [password, SetPassword] = useState<string>('');
  return (
    <View style={styles.container}>
    <ImageBackground source={
        require('../../../assets/img/Welcome.png')} 
        resizeMode="cover"
        style={styles.img}
        >
    <SafeAreaView>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="padding" style={styles.containerKey}>
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <Image 
                source={require('../../../assets/img/logoAMP.png')}
                />
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Meal Prep</Text>
                    <Text style={styles.title}>Chicago</Text>
                </View>
            </View>
            <View style={styles.containerBottom}>
                <View style={styles.wrapperButton}>
                    <Text style={styles.textLogin}>Log In</Text>
                </View>
                <View style={styles.containerInput}>
                    <TextInput 
                       style={styles.input}
                       placeholder="Username or Email"
                       
                    />
                    <TextInput 
                       style={styles.input}
                       placeholder="Password"
                       secureTextEntry={true} 
                    />
                </View>
                <TouchableOpacity activeOpacity={.7} 
                style={styles.buttomSignin}
                onPress={()=>navigation.navigate('Home')}
                >
                        <Icon name="user-check" type="ionicon" color="#fff" style={styles.iconLogin}/>
                        <Text style={styles.textButtomLogin}>Log In</Text>
                </TouchableOpacity>
                <View style={styles.containertextBottom}>
                    <Text style={styles.textAccount}>Don’t have an account?</Text>
                    <TouchableOpacity  onPress={()=>navigation.navigate('SignUp')}>
                        <Text style={styles.textRegister}>Register here</Text>
                    </TouchableOpacity>
                   
                </View>
          </View>
        </View>
        </KeyboardAvoidingView> 
        </TouchableWithoutFeedback>
    </SafeAreaView>
        
    </ImageBackground>
</View>
  )
}

export default Signin

const styles = StyleSheet.create({
  containerKey:{
    flex: 1,
  },
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
       
    },

    img:{
        width: ScreenWidth,
        height: 912,
    },
    wrapper:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop:30, 
        height:Screenheight +50
        
    },

    title:{
        color: '#FFFFFF',
        // fontFamily: 'Poppins',
        // fontsStyle: 'normal',
        fontWeight: '700',
        fontSize: 36,
        lineheight: 54,
    },
    containerTitle:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 30,
        alignItems: 'center',
        justifyContent:'center',
    },
    containerBottom:{
      
      width: ScreenWidth,
      height:487,
      backgroundColor: '#fff',
      borderTopEndRadius:25,
      borderTopLeftRadius:25,
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'flex-start',
      alignItems: 'center',

    },
    wrapperButton:{
      marginTop:30,
    },
    textLogin:{
      color: '#262626',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 22,
      lineHeight: 24,
      letterSpacing: 0.15,
    },
    containerInput:{
      marginTop:30,
    },
    input:{
      width: 328,
      height:56,
      borderWidth: 0.5,
      padding: 10,
      borderRadius: 5,
      borderColor: 'gray',
      marginBottom: 20,
      color: 'black'
      
    },
    buttomSignin:{
      display:'flex',
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#FF6F00',
      padding:20,
      borderRadius: 8,
      width:328,
      height:56,
      marginBottom:30,

  },
  textButtomLogin:{
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 18,
      lineHeight: 16,
      textAlign: 'center',
      letterSpacing: 1.25,
      textTransform: 'capitalize',
      color: '#FFFFFF',
      
      
  },
  iconLogin:{
      color: '#FFFFFF',
      fontSize: 18,
      marginRight: 40,
      marginLeft: -60,
  },
  containertextBottom:{
      display:'flex',
      flexDirection: 'column', 
      alignItems: 'center',
      justifyContent: 'center',
  },
  textAccount:{
    fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 16,
      textAlign: 'center',
      letterSpacing: 1.25,
      textTransform: 'capitalize',
  },
  textRegister:{
    fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 18,
      lineHeight: 16,
      textAlign: 'center',
      letterSpacing: 1.25,
      textTransform: 'capitalize',
      marginTop:20,
  },
  header:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50, 
    marginBottom:80,
  }
})