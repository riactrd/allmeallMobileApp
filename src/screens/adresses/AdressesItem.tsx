import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { FunctionComponent, useEffect } from 'react'
import mailPhote from '../../../assets/img/mealPhote.png'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import receipt from '../../../assets/img/receipt.png'
import calendar from '../../../assets/img/calendar.png'
import { mainColor, ScreenWidth, secundaryColor, thirdColor } from '../../componets/shared';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Address } from '../../model/AddressModel';
import { useDeleteaddressesMutation } from '../../redux/api/addresses';
import { useToast } from 'react-native-toast-notifications';

type Props={
    item:Address,
    selected:string,
    SetdeleteStatus: React.Dispatch<React.SetStateAction<boolean>>,
    deleteStatus: boolean,
}

const AdressesItem = ({item, selected, SetdeleteStatus, deleteStatus}:Props) => {
    const navigation = useNavigation(); 
    const [deleteaddresses,{data, isError, error, isLoading, isSuccess}] = useDeleteaddressesMutation();
    // console.log(item.id)
    const toast = useToast();
    
    
    useEffect(() => {
    
        if(isSuccess ){
          SetdeleteStatus(!deleteStatus)
              toast.show('Address Delete', {
                type: "danger",
                placement: "bottom",
                duration: 8000,
                animationType: "slide-in",
                
              });
        }
      
        if(isError){
          if (error) {
            if ('status' in error) {
              // you can access all properties of `FetchBaseQueryError` here
                  toast.show(JSON.stringify(error.data.error.message), {
                    type: "error",
                    placement: "bottom",
                    duration: 8000,
                    animationType: "slide-in",
                    
                  });
            }
          }
         }
      
       
      },[data, isError])
  return (
    <>
    <View  style={{marginBottom:20}}></View>
    <View  style={styles.container} >
        <View style={styles.wrapper}>
                <View style={styles.sideLeft}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom:17}}>
                      <FontAwesome5 name="user-alt" color={mainColor} style={styles.icon}/>
                      <Text style={styles.userAdress}>{item.first_name + " " + item.last_name}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom:17}}>
                    <Ionicons name="location" color={mainColor} style={styles.icon}/>
                      <Text style={styles.userAdress}>{item.complete_address}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom:17}}>
                       <FontAwesome5 name="phone" color={mainColor} style={styles.icon}/>
                      <Text style={styles.userAdress}>{item.phone_number}</Text>
                    </View>
                </View>
                <View style={styles.sideLeft}>
                    <View style={styles.buttomTop}>
                        <TouchableOpacity style={styles.containerIconEdit}>
                          <MaterialIcons 
                          name="edit" 
                          color={secundaryColor} 
                          style={styles.iconAdres}
                          onPress={()=>{navigation.navigate('EditAddress', {addressDetails: item, selected: selected }
                          )}}
                          />
                        </TouchableOpacity>
                        <View style={{padding:5}}></View>
                        <TouchableOpacity style={styles.containerIconRemove} onPress={()=>deleteaddresses(item.id)}>
                          <MaterialCommunityIcons name="delete" color={secundaryColor} style={styles.iconAdres}/>
                        </TouchableOpacity>
                        <View style={{padding:5}}></View>
                    </View>
                </View>
            
        </View>
    </View>
</>
)
   
    
}

export default AdressesItem

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: -10,
        
    },
    wrapper: {
        display:'flex',
        flexDirection: 'row', 
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginLeft:5,
        marginRight:5,
        borderRadius:8,
        shadowOpacity: 0.3, 
        shadowRadius: 10, 
        shadowOffset: { height: 3, width: 3 },
        elevation: 1.4,
        backgroundColor: '#fff',
        width: ScreenWidth-20,
        height: 170,
        padding:15,
        marginBottom:25,
        
    },
    sideLeft:{
        position:'relative',
    },
    buttomTop:{
        position: 'absolute',
        left: -50,
        // backgroundColor: thirdColor,
        height:50,
        width:50,
        top:-30,
        flexDirection:'row', 
        alignContent: 'center',
        justifyContent: 'center',
    },
    containerIconEdit:{
        width: 32,
        height: 32,
        backgroundColor: mainColor,  
        flexDirection:'row', 
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        padding:4,
    },
    containerIconRemove:{
        width: 32,
        height: 32,
        backgroundColor: thirdColor,  
        flexDirection:'row', 
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        padding:4,
    },
    iconAdres:{
        fontSize:24,
    },
    icon:{
        fontSize:16,
    },
    userAdress:{
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 21,
        letterSpacing: 1.25,
        color: thirdColor,
        marginLeft:10,
        width: 300
    }
    
})