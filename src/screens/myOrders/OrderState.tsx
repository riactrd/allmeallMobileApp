import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { myOrderDataProps } from './types';
interface Props{
    item:myOrderDataProps;
    selected: number;
    Setselected: React.Dispatch<React.SetStateAction<number>>;
    index: number,
}
const OrderState: React.FC<Props> = ({ selected, index, Setselected, item}) => {

  return (
    <TouchableOpacity onPress={()=>Setselected(index)} style={styles.container}>
        <View style={[selected === index ? styles.wrapperActive :  styles.wrapper]}>
            <Text style={[selected === index ? styles.textActive :  styles.text]}>{item.text}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default OrderState

const styles = StyleSheet.create({

    container: {
        display:'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -10,
    },
    wrapper: {
        display:'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:5,
        marginRight:5,
        borderRadius:8,
        shadowOpacity: 0.1, 
        shadowRadius: 20, 
        shadowOffset: { height: 3, width: 3 },
        // backgroundColor: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: 125,
        height: 46,
        padding:15,
        
    },

    wrapperActive: {
        display:'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:5,
        marginRight:5,
        borderRadius:8,
        shadowOpacity: 0.1, 
        shadowRadius: 20, 
        shadowOffset: { height: 3, width: 3 },
        backgroundColor: '#FF6F00',
        width: 125,
        height: 46,
        padding:15,
        
    },
    text:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 16,
        letterSpacing: 0.15,
        color: '#000',
    },
    textActive:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 16,
        letterSpacing: 0.15,
        color: '#fff',
    }
})