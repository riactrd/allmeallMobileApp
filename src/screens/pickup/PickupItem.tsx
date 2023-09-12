import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { FunctionComponent } from 'react'
import mailPhote from '../../../assets/img/container.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { mainColor, ScreenWidth, thirdColor } from '../../componets/shared';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';


const PickupItem: FunctionComponent = () => {
    const navigation = useNavigation(); 

  return (
    <TouchableOpacity  style={styles.container}

    //  onPress={()=>navigation.navigate('PickupItemPage')}
    >
        <View style={styles.wrapper}>
            <View style={styles.textDivide}>
                <MaterialCommunityIcons name="ticket-confirmation" color={mainColor} style={styles.icon}/>
                <Text style={styles.textDivideFont}>Request No: 23245</Text>
            </View>
            <View style={styles.textDivide}>
                <MaterialIcons name="date-range" color={mainColor} style={styles.icon}/>
                <Text style={styles.textDivideFontSub}>22/10/2021</Text>
            </View>
            <View style={styles.textDivide}>
                   <View style={styles.iconDot}>
                      <Entypo name="dots-three-horizontal" color={mainColor} style={styles.iconDotsub}/>
                    </View>
                <Text style={styles.textDivideFontSub}>Status: Picked Up</Text>
            </View>
            
        </View>
    </TouchableOpacity>
  )
}

export default PickupItem

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -10,
        width: '100%',
    },
    wrapper: {
        display:'flex',
        flexDirection: 'column', 
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft:5,
        marginRight:5,
        borderRadius:8,
        shadowOpacity: 0.1, 
        shadowRadius: 20, 
        shadowOffset: { height: 3, width: 3 },
        backgroundColor: '#fff',
        // backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: ScreenWidth-20,
        height: 126,
        padding:15,
        marginBottom:25,
        
    },
    headerButtomContainer:{
        // marginLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        width: 'auto',

    },
    headerButtomTextContainer:{
        backgroundColor: 'rgba(242, 110, 33, 0.15)',
        padding:5,
        borderRadius: 8,
        // width: 120,
    },
    headerButtomText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.15,
        color: '#FF6F00',
        
    },buttom:{
        display: 'flex',
        flexDirection: 'row',
        
    },
    buttomItem:{
        marginLeft:10,
        marginRight:10,
    },
    headerButtomIcon:{
        color: '#FF6F00',
        fontSize: 20,

    },
    number:{
        marginLeft: 10,
        marginRight:10,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.15,
        color: mainColor,
    },
    headerText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: 0.15,
        marginTop:5,

    },
    headerTextp:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 10,
        lineHeight: 15,
        letterSpacing: 0.15,
        marginTop:5,
    },
    ButtomContainer:{
        marginLeft: 10,
        width: 220,
    },
    textDivide:{
      flexDirection:'row',
      width: ScreenWidth-20,
      marginBottom:10,
      alignItems: 'center',
    },
    icon:{
      fontSize:24,
      marginRight: 20,
    },
    textDivideFont:{
      fontWeight: '600',
      fontSize: 14,
      lineHeight: 15,
      letterSpacing: 0.15,
      color: thirdColor,
    },
    textDivideFontSub:{
      fontWeight: '300',
      fontSize: 14,
      lineHeight: 21,
      letterSpacing: 1.25,
      color: thirdColor,
    },
    iconDotsub:{
    fontSize:15,
  },
  iconDot:{
    borderWidth: 2,
    borderRadius: 30,
    borderColor: mainColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    // padding:5
    width: 24,
    height: 24, 
    marginRight: 20,
  },
})