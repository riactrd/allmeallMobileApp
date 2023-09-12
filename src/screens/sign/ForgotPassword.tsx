import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, NativeSyntheticEvent, TextInputChangeEventData, ActivityIndicator } from 'react-native'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { mainColor, Screenheight, ScreenWidth, secundaryColor, thirdColor } from '../../componets/shared'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useToast } from "react-native-toast-notifications";
import { useSentforgotpasswordMutation } from '../../redux/api/ForgotPassword';




const ForgotPassword: FunctionComponent = () => {

    const toast = useToast();
    const navigation = useNavigation(); 
    const [email, SetEmail] = useState('')
   
    
  const [sentforgotpassword,{data, isError, error, isLoading, }] = useSentforgotpasswordMutation();

  
  useEffect(() => {

    if(data ){
      SetEmail('')

      toast.show(data?.message, {
        type: "success",
        placement: "bottom",
        duration: 8000,
        animationType: "slide-in",
        
      });
      
      navigation.navigate('ResetPassword', {
        screen: 'ResetPassword',
        params: {userId: data.data.user.id, message: data.message}
      });
      
    }

    if(isError){
      
      if (error) {
        if ('status' in error) {
          // you can access all properties of `FetchBaseQueryError` here
              toast.show(JSON.stringify('Please fill out a valid Email'), {
                type: "danger",
                placement: "bottom",
                duration: 8000,
                animationType: "slide-in",
                
              });
        }
      }

     }
  
   
},[data, isError])
  


const onChangeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
  const value = e.nativeEvent.text;
  SetEmail(value);
}



const forgot_password = {
  
  "email": email
}

function isValiEmail(val: string) {
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(val)) {
    return true;
  }
}

  const handlerVerification = async () =>{
    const emailCheck = isValiEmail(email)
      if(emailCheck){
          
          toast.show("Please fill out a valid Email", {
            type: "danger",
            placement: "bottom",
            duration: 4000,
            animationType: "slide-in",
            
          });
      } else if(!email){
          
        toast.show("Please fill out the Email field", {
          type: "danger",
          placement: "bottom",
          duration: 4000,
          animationType: "slide-in",
          
        });
    } 
      else{
        await sentforgotpassword({forgot_password}) 
       
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
                        <Text style={styles.headertext}>Forgot Password</Text>
                    </View>
                    <View style={{marginTop: 30}}></View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.headerTextInput}>Email<Text style={{color:mainColor}}>*</Text></Text>
                        <TextInput 
                            placeholder='Enter email...' 
                            value={email}
                            onChange={onChangeEmail}
                            style={styles.input}/>
                    </View>
                    
                    <TouchableOpacity 
                    onPress={handlerVerification}
                    activeOpacity={.7} style={styles.saveButtom}>
                        <FontAwesome5 name="user-check" color={secundaryColor} style={styles.icon}/>
                         <Text style={styles.saveButtomText}>Sent Verification Code</Text>
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

export default ForgotPassword

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