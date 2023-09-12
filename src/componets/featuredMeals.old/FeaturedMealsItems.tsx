import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import { Categories } from '../../model/categories';

interface Props{
    item:Categories;
    selected: number;
    Setselected: React.Dispatch<React.SetStateAction<string>>;
    index: number,
}

const FeaturedMealsItems: React.FC<Props> = ({item, selected, index, Setselected}) => {
    

  return (
        <TouchableOpacity activeOpacity={.7} style={styles.buttom}>
                <View >
                   <Image source={require('../../../assets/img/MaskGroup.png')} style={styles.imgContainer}/>
                </View> 
                <Text style={styles.textCategory}>{item.text}</Text>
       </TouchableOpacity>
  )
}

export default FeaturedMealsItems

const styles = StyleSheet.create({
    iconItem:{
        display:'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:8,
        shadowOpacity: 0.1, 
        shadowRadius: 20, 
        shadowOffset: { height: 3, width: 3 },
        backgroundColor: '#fff',
        width: 150,
        height: 85,
    },
    iconItemActive:{
        
    },textCategory:{
        marginTop: 10,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 11,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: '#262626',
        width: 118,
        height: 60,
        textAlign: 'center',
    },buttom:{
        display:'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:8,
        shadowOpacity: 0.1, 
        shadowRadius: 20, 
        shadowOffset: { height: 3, width: 3 },
        backgroundColor: '#fff',
        width: 126,
        height: 165,

    },imgContainer:{
        width: 118,
        height: 90,
        marginTop: 5,
        borderRadius:8,
    }
})