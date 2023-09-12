import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { FunctionComponent } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigators/RootStack';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import { Screenheight } from '../../componets/shared';

type props = StackScreenProps<RootStackParamList, 'Welcome'>


const Welcome: FunctionComponent<props>= ({navigation}) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={
            require('../../../assets/img/Welcome.png')} 
            resizeMode="cover"
            style={styles.img}
            >
        <SafeAreaView>
            <View style={styles.wrapper}>
                <Image style={{
                    marginTop: 70,
                    width: 100,
                    height:100
                }}
                source={require('../../../assets/img/logoAMP.png')}
                />
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Meal Prep</Text>
                    <Text style={styles.title}>Chicago</Text>
                </View>
                <View style={styles.containerbuttom}>
                    <TouchableOpacity activeOpacity={.7} 
                     onPress={()=>navigation.navigate('Signin')}
                     style={styles.buttomSignin}>
                        <Icon name="user-check" type="ionicon" color="#fff" style={styles.iconLogin}/>
                        <Text style={styles.textButtomLogin}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('SignUp')}
                    activeOpacity={.7} style={styles.buttomSignup}>
                        <Icon name="user-check" type="ionicon" color="#fff" style={styles.iconLogup}/>
                        <Text style={styles.textButtomLogup}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleBottom}>
                    <Text style={styles.textBottom}>FAQ</Text>
                    <Text style={styles.textBottom}>Privacy Policy</Text>
                </View>
            </View> 
        </SafeAreaView>
            
        </ImageBackground>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
       
    },
    img:{
        width: ScreenWidth,
        height: Screenheight + 40,
    },
    wrapper:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop:30, 
       
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
        marginTop: 150,
        alignItems: 'center',
        justifyContent:'center',
    },
    containerbuttom:{
        marginTop:50,
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
    buttomSignup:{
        display:'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#262626',
        padding:20,
        borderRadius: 8,
        width:328,
        height:56,

    },
    textButtomLogup:{
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 16,
        textAlign: 'center',
        letterSpacing: 1.25,
        textTransform: 'capitalize',
        color: '#FFFFFF',
        
        
    },
    iconLogup:{
        color: '#FFFFFF',
        fontSize: 18,
        marginRight: 40,
        marginLeft: -40,
    },
    titleBottom:{
        display:'flex',
        flexDirection:'column', 
        alignItems: 'center',
        justifyContent: 'center',
        margin: 40,
    },
    textBottom:{
        color: '#FFFFFF',
        fontsStyle: 'normal',
        fontWeight: '700',
        fontSize: 26,
        lineheight: 54,
        marginBottom: 20,
    }
})