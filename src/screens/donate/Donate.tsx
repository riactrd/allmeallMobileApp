import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { mainColor, ScreenWidth, secundaryColor, thirdColor } from '../../componets/shared'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import DonateItem from './DonateItem';

const listGift=[1,2,3]

const GiftCards = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false} style={{width:ScreenWidth, marginBottom:5,}}>
            <View style={styles.viewScroll}>
                {
                    listGift.map((item, index)=>(
                        <DonateItem/>
                    ))
                }
                {/* <TouchableOpacity tyle={styles.containerButtom} onPress={() => navigation.navigate('NewGift')}>
                    <View style={styles.buttom}>
                        <Ionicons name="add-circle" color={secundaryColor} style={styles.icon}/>
                        <Text style={styles.text}>New Gift Card</Text>
                    </View>
                </TouchableOpacity> */}
               
            </View>
        </ScrollView>
             
        </View>
    </View>
  )
}

export default GiftCards

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
      viewScroll:{
        // width: ScreenWidth-20,
        flexDirection: 'column',
        alignItems: 'center',
        // padding:1,
        // marginBottom:320,
        marginBottom: 'auto'
        
      },
    item:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius:8,
        shadowOpacity: 0.3, 
        shadowRadius: 10, 
        shadowOffset: { height: 3, width: 3 },
        elevation: 1.4,
        backgroundColor: '#fff',
        width: ScreenWidth-20,
        height: 88,
        padding:15,
        // marginBottom:25,
        marginTop:25,
    },
    icon:{
        fontSize:24,
        marginRight: 10,
      },
      buttom:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 169,
        height: 40,
        backgroundColor: mainColor,
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 20,
      },
      text:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: secundaryColor,
      },
      containerButtom:{
        width: ScreenWidth-20,
      }
})