import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { mainColor, ScreenWidth, secundaryColor, thirdColor } from '../../componets/shared'

const NewGift = () => {
    
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
             <View style={styles.viewScroll}>
                <View style={styles.inputContainer}>
                    <Text style={styles.headerTextInput}>Recipient First Name<Text style={{color:mainColor}}>*</Text></Text>
                    <TextInput placeholder='Type first Name...' style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.headerTextInput}>Recipient Last Name<Text style={{color:mainColor}}>*</Text></Text>
                    <TextInput placeholder='Type last Name*...' style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.headerTextInput}>Email Address Receiving Gift Card<Text style={{color:mainColor}}>*</Text></Text>
                    <TextInput placeholder='Type email...' style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.headerTextInput}>Digital Gift Card Amount(Min. $50.0)<Text style={{color:mainColor}}>*</Text></Text>
                    <TextInput placeholder='Type amount...' style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.headerTextInput}>Message to Recipient</Text>
                    <TextInput placeholder='Type message...' style={styles.input}/>
                </View>
                <TouchableOpacity activeOpacity={.7} style={styles.saveButtom}>
                     <Text style={styles.saveButtomText}>Submit Gift Card</Text>
                </TouchableOpacity>
             </View>
        </View>
    </View>
  )
}

export default NewGift

const styles = StyleSheet.create({
    container: {
        flex:1,
        // display:'flex',
        flexDirection: 'row', 
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: secundaryColor,
    },
    wrapper:{
        // backgroundColor: '#000',
        // width: ScreenWidth-20,
        flexDirection: 'column',
        alignItems: 'center'
      },
      viewScroll:{
        // width: ScreenWidth-20,
        flexDirection: 'column',
        alignItems: 'center',
        // padding:1,
        // marginBottom:320,
        marginBottom: 'auto',
        marginTop:30,
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
      textDivide:{
        flexDirection:'row',
        width: ScreenWidth-20,
        marginBottom:20,
        alignItems: 'center',


      },
      icon:{
        fontSize:24,
        marginRight: 20,
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