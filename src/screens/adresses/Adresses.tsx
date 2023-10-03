import { ScrollView, StyleSheet, Text, TouchableOpacity, View, RefreshControl, FlatList } from 'react-native'
import React,{useEffect, useState} from 'react'
import { mainColor, Screenheight, ScreenWidth, secundaryColor, thirdColor } from '../../componets/shared';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AdressesItem from './AdressesItem';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useGetaddressesQuery } from '../../redux/api/addresses';
import { Address } from '../../model/AddressModel';
import { useDispatch } from 'react-redux';
import GoogleAddress from '../../componets/googleAddress';

const wait = (timeout: number | undefined) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Adresses = () => {

  const [addresses, SetAddresses] = useState('shipping');
  const {data, isError, error, isLoading, isSuccess, refetch} = useGetaddressesQuery(addresses, { refetchOnMountOrArgChange: true});
  
    const [selected, Setselected] = useState('1');
    const [deleteStatus, SetdeleteStatus] = useState(false);
    const navigation = useNavigation(); 

    function refreshdata() {
      refetch();
    } 

    // refress
    const handelerRefres =()=>{
      if(selected=== '1'){
        return 'shipping'
        
      }else{
        
        return 'billing'
      }
    }
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    SetAddresses(handelerRefres())
    refreshdata()
    wait(2000).then(() => setRefreshing(false));
  }, []);

// end
const isFocused = useIsFocused();

// console.log(isFocused)


    useEffect(() => {
      refetch();
      if(data){
        if(selected=== '1'){
          SetAddresses('shipping')
        }else if(selected=== '2'){
          SetAddresses('billing')
        }
       
      }
    
  },[data, selected, isFocused, deleteStatus])

  // console.log(data?.data)
  // const handlerFilter=()=>{
  //   if(selected=== '1'){
  //     SetAddress('shipping');

  //   }else if(selected=== '2'){
  //     SetAddress('billing');
  //   }
  // }
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <View style={styles.headerContainer} >
                <TouchableOpacity onPress={()=>Setselected('1')} activeOpacity={.7} style={[selected=== '1' ? styles.headerButtomActive : styles.headerButtom]}>
                    <Text style={[selected=== '1' ? styles.headertextActive : styles.headertext]}>Delivery Address</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Setselected('2')} activeOpacity={.7} style={[selected=== '2' ? styles.headerButtomActive : styles.headerButtom]}>
                    <Text style={[selected=== '2' ? styles.headertextActive : styles.headertext]}>Billing Adress </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>navigation.navigate('NewAddress', {addressType:selected })} activeOpacity={.7} style={styles.addButtomActive }>
                   <AntDesign name="plus" color={secundaryColor} style={styles.iconAdres}/>
                </TouchableOpacity>
               
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false} style={{width:ScreenWidth, marginBottom:5,}}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            >
                
            {isLoading && (
              <View style={{ 
                flex:1,
                justifyContent: 'center', 
                alignItems: 'center', 
                backgroundColor: 'rgba(3, 0, 2, 0.30)', 
                height: Screenheight, 
                width: ScreenWidth,
                position: 'absolute',
                zIndex: 99,

              }}
                >
                <Text style={styles.headertextLoandin}>Loading....</Text>
              </View>
              )}
                <View style={styles.adressesContainerItem}>
                    { 
                  
                  data?.data.addresses.map((item, index)=>(
                        <AdressesItem key={index} item={item} selected={selected} SetdeleteStatus={SetdeleteStatus} deleteStatus={deleteStatus}/>
                        ))
                    }
                    
                </View>
            </ScrollView>
          
        </View>
      
    </View>
  )
}

export default Adresses

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
      headerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: ScreenWidth-20,
        marginTop: 15,
        marginBottom:15,
        
        
      },
      headerButtom:{
        width: 125,
        height: 36,
        borderRadius: 8,
        alignItems:'center',
        justifyContent: 'center',
        shadowOpacity: 0.3, 
        shadowRadius: 10, 
        shadowOffset: { height: 3, width: 3 },
        elevation: 1.4,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        
      },
      headertext:{
        color: thirdColor,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 16,
        letterSpacing: 0.15,
      },
      headerButtomActive:{
        backgroundColor: mainColor,
        width: 125,
        height: 36,
        borderRadius: 8,
        alignItems:'center',
        justifyContent: 'center',
        shadowOpacity: 0.3, 
        shadowRadius: 5, 
        shadowOffset: { height: 3, width: 3 },
        elevation: 5.4,
        
      },
      addButtomActive:{
        backgroundColor: mainColor,
        width: 36,
        height: 36,
        borderRadius: 30,
        alignItems:'center',
        justifyContent: 'center',
        shadowOpacity: 0.3, 
        shadowRadius: 5, 
        shadowOffset: { height: 3, width: 3 },
        elevation: 5.4,
        
      },
      headertextActive:{
        color: secundaryColor
      },
      iconAdres:{
        fontSize: 30,
      },
      adressesContainerItem:{
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 'auto'
      },
      headertextLoandin:{
        color: thirdColor,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 24,
        letterSpacing: 0.15,
      },
      
})