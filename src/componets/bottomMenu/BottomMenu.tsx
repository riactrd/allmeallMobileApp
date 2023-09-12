import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';


// style={[selected ? styles.menuContainerItem : '']}
const BottomMenu = () => {
    const [selected, setSeleted]= useState('My Profile');
    const navigation = useNavigation(); 

    
  return (
    <View style={styles.container}>
       <View style={styles.wrapper}>
            <TouchableOpacity activeOpacity={.7} onPress={()=>{
                setSeleted('Home')
                navigation.navigate('home');
            }} style={styles.menuContainerItem
            
            }>
                    <Ionicons name="home-outline" type="ionicon"  style={[selected==='Home' ? styles.iconLoginActive : styles.iconLogin]}/>
                    <Text style={[selected==='Home' ? styles.menuTextActive : styles.menuText]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7} onPress={()=>setSeleted('My Orders')} style={styles.menuContainerItem}>
                    <MaterialIcons name="list-alt" type="ionicon"  style={[selected==='My Orders' ? styles.iconLoginActive : styles.iconLogin]}/>
                    <Text style={[selected==='My Orders' ? styles.menuTextActive : styles.menuText]}>My Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={()=>setSeleted('')} style={styles.menuContainerItem}>
                <Image source={require('../../../assets/img/logoAMP.png')} style={styles.iconLogo}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7} onPress={()=>setSeleted('Wellness')} style={styles.menuContainerItem}>
                    <MaterialIcons name="list-alt" type="ionicon"  style={[selected==='Wellness' ? styles.iconLoginActive : styles.iconLogin]}/>
                    <Text style={[selected==='Wellness' ? styles.menuTextActive : styles.menuText]}>Wellness</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7} onPress={()=>setSeleted('My Profile')} style={styles.menuContainerItem}>
                    <FontAwesome5 name="user-circle" type="ionicon"  style={[selected==='My Profile' ? styles.iconLoginActive : styles.iconLogin]}/>
                    <Text style={[selected==='My Profile' ? styles.menuTextActive : styles.menuText]}>My Profile</Text>
            </TouchableOpacity>
       </View>
    </View>
  )
}

export default BottomMenu

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'column', 
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#262626',
        height:84,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

    },
    wrapper:{
        display:'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        width: '100%',
        position: 'relative',

    },
    menuContainerItem:{
        display:'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    menuText:{
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 30,
        letterSpacing: 0.15,
        color: '#FFFFFF',
    },
    iconLogin:{
        fontSize: 24,
        color: '#fff'
    },
    iconLogo:{
        width:77,
        height:77,
        position: 'absolute',
        bottom: -15,
    },
    menuTextActive:{
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 30,
        letterSpacing: 0.15,
        color: '#FF6F00',
    },
    iconLoginActive:{
        fontSize: 24,
        color: '#FF6F00'
    },

})