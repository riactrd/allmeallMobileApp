import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { FunctionComponent } from 'react'
import mailPhote from '../../../assets/img/mealPhote.png'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import receipt from '../../../assets/img/receipt.png'
import calendar from '../../../assets/img/calendar.png'


const MyOrderItem: FunctionComponent = () => {
    const navigation = useNavigation(); 

  return (
    <TouchableOpacity  style={styles.container}

     onPress={()=>navigation.navigate('SingleOrder')}
    >
        <View style={styles.wrapper}>
            <Image source={mailPhote} />
           <View style={styles.ButtomContainer}>
                 <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <View style={styles.headerButtomTextContainer}>
                       <Text style={styles.headerButtomText}>$120.33</Text>
                    </View>
                    <Text style={styles.headerDeliveryText}>Delivered</Text>
                 </View>
                 <View style={{flexDirection:'row', alignItems: 'center', marginTop: 15,}}>
                    <View style={{flexDirection:'row', alignItems: 'center', marginRight: 20,}}>
                       <Image source={calendar} style={styles.icon}/>
                       <Text >07-Aug-2021</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                       <Image source={receipt} style={styles.icon}/>
                       <Text >4100F5</Text>
                    </View>
                 </View>
                 <View style={{flexDirection:'row', alignItems: 'center', marginTop: 6,}}>
                    <View style={styles.headerButtomTextContainer}>
                       <Text style={styles.bottomText}>Paid by Manually</Text>
                    </View>
                    <Text style={styles.headerDeliveryText}>Delivered</Text>
                 </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default MyOrderItem

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
        width: 343,
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
        width: 210,

    },
    headerButtomTextContainer:{
        backgroundColor: 'rgba(242, 110, 33, 0.15)',
        padding:5,
        borderRadius: 8,
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',

        marginRight:10,

    },
    headerButtomText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: 0.15,
        color: '#FF6F00',
        
    },
    headerDeliveryText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: 0.15,
        color: '#000',
        
    }
    
    ,buttom:{
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
    icon:{
        width: 16,
      height: 16,
      marginRight:5,
    },
    bottomText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: '#000',
        
    },
})