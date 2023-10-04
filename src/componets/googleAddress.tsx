import React, { useCallback, useEffect, useRef } from 'react';
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete';
import {  StyleSheet, Text,  View } from 'react-native'
import { ScreenWidth } from './shared';

type Props ={
  SetNewAddressState: React.Dispatch<React.SetStateAction<{
    firstName: string;
    lastName: string;
    address: string;
    apartmentSuite: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    mobileNumber: string;
    deliveryInstructions: string;
    securityCode: string;
    id?: number;
}>>;
newAddressState: {
  firstName: string;
  lastName: string;
  address: string;
  apartmentSuite: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  mobileNumber: string;
  deliveryInstructions: string;
  securityCode: string;
  id?: number;
}
onChange: (text: string) => void
}


const GoogleAddress = ({SetNewAddressState, newAddressState, onChange}:Props) => {
  const ref = useRef<GooglePlacesAutocompleteRef | null>(null);



  useEffect(() => {
   
    ref.current?.setAddressText(newAddressState.address);
    
    
  }, []);

 


  return (
    
    
    <View style={{
      padding:5,
      marginTop:10,
      borderWidth: 0.5,
      borderRadius:5,
      borderColor:'rgba(0, 0, 0, 0.12)',
    }}>
      

    
    <GooglePlacesAutocomplete
      
      ref={ref}
      placeholder='Type Address...'
     
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        // console.log(data.description);
        // console.log(data.structured_formatting);
       
        const street = details.structured_formatting.main_text 
        const city = details.structured_formatting.secondary_text.split(',')[0];
        const state = details.structured_formatting.secondary_text.split(',')[1];
        const address = data.description
        // console.log(city)
        // console.log(state)
       

        if(details.structured_formatting.main_text ){
          SetNewAddressState(prev =>({...prev, street: street}));
        }
        if(data.terms[1].value ){
          SetNewAddressState(prev =>({...prev, city: city }));
        }
        if(data.terms[2].value){
          SetNewAddressState(prev =>({...prev, state: state }));
        }

        if(data.terms[2].value){
          SetNewAddressState(prev =>({...prev, address: address }));
        }
        // else{
        //   SetNewAddressState(prev =>({...prev, address: "Prueba" }));
        // }
        
      }}
      // textInputProps={{
      //   onChangeText: (text) => { 
      //     console.warn(text)
      //     // SetoptionalAddress(prev =>({...prev, address: "Prueba" }));
          
      //    }
      // }}
      textInputProps={{
        onChangeText: onChange
      }}
      
      query={{
        key: 'AIzaSyASIV8ZKgEklpa4FuZeI-272rXiffmBIEg',
        language: 'en',
        // types: '(cities)'
      }}
      isRowScrollable={true}
      // listViewDisplayed='auto'
    />
    </View>
  );
};

export default GoogleAddress;

const styles = StyleSheet.create({
  inputContainer:{
    flexDirection: 'column',
    justifyContent: 'center',
    width: ScreenWidth-20,
    marginBottom:20,
  },

  input:{
    padding:20,
    marginTop:10,
    borderWidth: 0.5,
    borderRadius:5,
    borderColor:'rgba(0, 0, 0, 0.12)'
  },
})