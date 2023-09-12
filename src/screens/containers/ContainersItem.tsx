import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { FunctionComponent } from 'react'
import mailPhote from '../../../assets/img/container.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigators/RootDrawer';
import { useNavigation } from '@react-navigation/native';
import { mainColor } from '../../componets/shared';


const MealItem: FunctionComponent = () => {
    const navigation = useNavigation(); 

  return (
    <TouchableOpacity  style={styles.container}

    //  onPress={()=>navigation.navigate('MealItemPage')}
    >
        <View style={styles.wrapper}>
            <Image source={mailPhote} />
           <View style={styles.ButtomContainer}>
                 <View style={styles.headerButtomContainer}>
                    <View style={styles.headerButtomTextContainer}>
                    <Text style={styles.headerButtomText}>$24.99</Text>
                    </View>
                    <TouchableOpacity style={styles.buttom}>
                        <FontAwesome name="shopping-cart" type="ionicon" style={styles.headerButtomIcon}/>
                        <Text style={styles.number}>Order Now</Text>
                    
                    </TouchableOpacity>
                </View>
                <Text style={styles.headerText}>5 Glass Meal Prep Containers</Text>
                <Text style={styles.headerTextp}>5 glass meal prep containers both
                  oven and mocrowave safe</Text>
               
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default MealItem

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
        width: '100%',
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
    }
})