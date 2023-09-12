import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, NativeSyntheticEvent, TextInputChangeEventData, ActivityIndicator } from 'react-native'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { mainColor, Screenheight, ScreenWidth, secundaryColor, thirdColor } from '../../componets/shared'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useToast } from "react-native-toast-notifications";
import { useSentresetpasswordMutation } from '../../redux/api/resetpasswordApi';

type Props={
  route: RouteProp<{ params: { userId: number, message: string }}, 'params'>
 }


const ResetPassword: FunctionComponent<Props> = ({route}) => {
  const [sentresetpassword,{data, isError, error, isLoading, isSuccess}] = useSentresetpasswordMutation();
  const { userId, message} = route.params;

    const toast = useToast();
    const navigation = useNavigation(); 
    const [reset, SetReset] = useState({
      verificationCode:"",
      password: "",
      passwordConfirmation: ""
    })
  
  useEffect(() => {

    if(isSuccess ){
      SetReset({
        verificationCode:"",
        password: "",
        passwordConfirmation: ""
      })

      toast.show('The password was changed', {
        type: "success",
        placement: "bottom",
        duration: 8000,
        animationType: "slide-in",
        
      });
      navigation.navigate('Signin')
    }

    if(isError){
      // console.log(error)
      if (error) {
        if ('status' in error) {
          // you can access all properties of `FetchBaseQueryError` here
              toast.show(JSON.stringify(error?.data?.error.message), {
                type: "danger",
                placement: "bottom",
                duration: 8000,
                animationType: "slide-in",
                
              });
        }
      }

     }
  
   
},[data, isError])
  


const onChangeVerificationCode = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
  const value = e.nativeEvent.text;
  SetReset(prev =>({...prev, verificationCode: value }));
}

const onChangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
  const value = e.nativeEvent.text;
  SetReset(prev =>({...prev, password: value }));
}
const onChangePasswordConfirmation = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
  const value = e.nativeEvent.text;
  SetReset(prev =>({...prev, passwordConfirmation: value }));
}
const reset_password = {
  
    "id": userId,
    "verification_code": reset.verificationCode,
    "password": reset.password,
    "password_confirmation": reset.passwordConfirmation
}




  const handlerVerification = async () =>{
    if(!reset.verificationCode){
          
        toast.show("Please fill out the verificationCode field", {
          type: "danger",
          placement: "bottom",
          duration: 4000,
          animationType: "slide-in",
          
        });
    } else if(!reset.password){
          
      toast.show("Please fill out the password field", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
        
      });
     } 
     else if(!reset.passwordConfirmation){
          
      toast.show("Please fill out the Password Confirmation field", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
        
      });
  }  else if(reset.password !== reset.passwordConfirmation){
          
    toast.show("Password and Confirm Password doesn't match", {
      type: "danger",
      placement: "bottom",
      duration: 4000,
      animationType: "slide-in",
      
    });
}else if(reset.password.length <= 5){
  
  toast.show("Password is too short (minimum is 6 characters", {
    type: "danger",
    placement: "bottom",
    duration: 4000,
    animationType: "slide-in",
    
  });
}
      else{
        await sentresetpassword({reset_password}) 
       
      }
  } 
  return (
    
    <SafeAreaView style={{backgroundColor: secundaryColor}}>
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="padding" style={styles.containerKey}>
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
                  {/* <View style={styles.container}> */}
                      <SafeAreaView>
                      
                      <View style={styles.wrapper}>
                    <Image 
                     source={require('../../../assets/img/logoAMP.png')}
                     style={styles.img}
                    />
                    <View style={{marginTop: 20}}>
                        <Text style={styles.headertext}>Reset Password</Text>
                    </View>
                    <View style={{marginTop: 30}}></View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.headerTextInput}>verification Code<Text style={{color:mainColor}}>*</Text></Text>
                        <TextInput 
                            placeholder='Enter Code...' 
                            value={reset.verificationCode}
                            onChange={onChangeVerificationCode}
                            style={styles.input}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.headerTextInput}>Password<Text style={{color:mainColor}}>*</Text></Text>
                        <TextInput 
                            secureTextEntry={true}
                            placeholder='Enter Password...' 
                            value={reset.password}
                            onChange={onChangePassword}
                            style={styles.input}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.headerTextInput}>password Confirmation<Text style={{color:mainColor}}>*</Text></Text>
                        <TextInput 
                            secureTextEntry={true}
                            placeholder='Enter password Confirmation...' 
                            value={reset.passwordConfirmation}
                            onChange={onChangePasswordConfirmation}
                            style={styles.input}/>
                    </View>
                    
                    <TouchableOpacity 
                    onPress={handlerVerification}
                    activeOpacity={.7} style={styles.saveButtom}>
                        <FontAwesome5 name="user-check" color={secundaryColor} style={styles.icon}/>
                         <Text style={styles.saveButtomText}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
                        
                      </SafeAreaView>
                  {/* </View> */}
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
    </SafeAreaView>
    
  )
}

export default ResetPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: secundaryColor,
    },
    containerKey:{
      flex:1,
      alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: secundaryColor,
      height: Screenheight
    },
    wrapper:{
        // backgroundColor: '#000',
        // width: ScreenWidth-20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        
      },
      img:{
        width: 69,
        height: 69,
        marginTop: 20
      },
      headertext:{
        color: thirdColor,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 24,
        letterSpacing: 0.15,
      },
      inputContainer:{
        flexDirection: 'column',
        justifyContent: 'center',
        width: ScreenWidth-20,
        marginBottom:20,
      },
      headerTextInput:{
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 21,
        letterSpacing: 0.15,
        color: thirdColor,
      },
      input:{
        padding:20,
        marginTop:10,
        borderWidth: 0.5,
        borderRadius:5,
        borderColor:'rgba(0, 0, 0, 0.12)'
      },
      saveButtom:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: ScreenWidth-20,
        marginBottom:20,
        backgroundColor: mainColor,
        padding:20,
        borderRadius:8,
        alignItems: 'center',
      },
      saveButtomText:{
        color:secundaryColor,
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 1.25,
        // lineHeight: 16,
       
      },
      saveButtomSecond:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: ScreenWidth-20,
        marginBottom:20,
        // backgroundColor: mainColor,
        padding:20,
        borderRadius:8,
        alignItems: 'center',
      },
      saveButtomTextSecond:{
        // color:secundaryColor,
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 1.25,
        // lineHeight: 16,
       
      },
      icon:{
        fontSize:24,
        marginRight: 20,
      }

})