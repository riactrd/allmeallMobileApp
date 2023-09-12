import { StyleSheet, Text, TextInput, TouchableOpacity, View , KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import { mainColor, ScreenWidth, secundaryColor, thirdColor } from '../../componets/shared'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Refer = () => {
  return (
  
    <KeyboardAwareScrollView style={{flex:1, backgroundColor: secundaryColor}}>
    <View style={styles.container}>
        <View style={styles.wrapper}>
           <View style={styles.inputContainer}>
              <Text style={styles.headerTextInput}>My Promo Code</Text>
              <TextInput placeholder='Type Promo Code...' style={styles.input}/>
            </View>
            <TouchableOpacity activeOpacity={.7} style={styles.saveButtom}>
                <Text style={styles.saveButtomText}>Generate Promo Code</Text>
            </TouchableOpacity>
            <View style={styles.containerheaderText}>
                <Text style={styles.headerText}>Your promo code is:</Text>
                <Text style={styles.headerTextCode}>675ABPROMOAMP</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.headerTextInput}>Name<Text style={{color:mainColor}}>*</Text></Text>
              <TextInput placeholder='Type Name...' style={styles.input}/>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.headerTextInput}>Email Address<Text style={{color:mainColor}}>*</Text></Text>
              <TextInput placeholder='Type Email Address...' style={styles.input}/>
            </View>
            <TouchableOpacity activeOpacity={.7} style={styles.saveButtom}>
                <Text style={styles.saveButtomText}>Refer & Earn</Text>
            </TouchableOpacity>
        </View>
    </View>
    </KeyboardAwareScrollView >

  )
}

export default Refer

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: secundaryColor,
        
      },
      wrapper:{
        // backgroundColor: '#000',
        // width: ScreenWidth-20,
        flexDirection: 'column',
        alignItems: 'center'
      },
      inputContainer:{
        flexDirection: 'column',
        justifyContent: 'center',
        width: ScreenWidth-20,
        marginBottom:20,
        marginTop:20,
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
      },
      saveButtomText:{
        color:secundaryColor,
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 1.25,
        lineHeight: 16,
      },
      containerheaderText:{
        marginTop: 20,
        marginBottom: 20,
      },
      headerText:{
        width: 280,
        textAlign: 'center',
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 1.25,
        color: thirdColor,
      },
      headerTextCode:{
        width: 280,
        textAlign: 'center',
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 1.25,
        color: mainColor,
      }
})