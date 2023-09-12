import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { mainColor, ScreenWidth, secundaryColor, thirdColor } from '../../componets/shared'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const ContactUs = () => {
  return (
    <KeyboardAwareScrollView style={{flex:1, backgroundColor: secundaryColor}}>
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <View style={styles.containerheaderText}>
                <Text style={styles.headerText}>If you want to Contact All Meal Prep fill the details below and we’ll get back to you shortly.</Text>
            </View>
            <View style={styles.inputContainer}>
               <TextInput placeholder='Your Subject' style={styles.input}/>
            </View>
            <View style={styles.inputContainer}>
               <TextInput 
               placeholder='Your Message' 
               style={styles.inputMult}
               multiline={true}
               />
            </View>
            <TouchableOpacity activeOpacity={.7} style={styles.saveButtom}>
                <Text style={styles.saveButtomText}>Submit Message</Text>
            </TouchableOpacity>
        </View>
    </View>
    </KeyboardAwareScrollView>
  )
}

export default ContactUs

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: secundaryColor,
        
      },
      wrapper:{
        // backgroundColor: '#000',
        width: ScreenWidth-20,
        flexDirection: 'column',
        alignItems: 'center'
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
        letterSpacing: 0.15,
        color: thirdColor,
      },
      inputContainer:{
        flexDirection: 'column',
        justifyContent: 'center',
        width: ScreenWidth-20,
        marginBottom:20,
      },
      input:{
        padding:20,
        marginTop:10,
        borderWidth: 0.5,
        borderRadius:5,
        borderColor:'rgba(0, 0, 0, 0.12)'
      },
      inputMult:{
        height:162,
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
      }
})