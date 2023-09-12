import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Picker} from "@react-native-picker/picker"
import { Screenheight, ScreenWidth, thirdColor } from '../shared'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

type props ={
   selectedTime: Date
    modalTime: boolean;
    SetselectedTime: React.Dispatch<React.SetStateAction<Date>>
    setModalTime: React.Dispatch<React.SetStateAction<boolean>>
    SetFormatTime:React.Dispatch<React.SetStateAction<string>>
   
}

const ModalTime = ({selectedTime,modalTime, SetselectedTime, setModalTime, SetFormatTime}: props) => {
  const onChange = (
    event: any, 
    selectedDate: any) => {
    const currentDate = selectedDate;
    SetselectedTime(currentDate);
    SetFormatTime((selectedDate.getHours() +": "+ selectedDate.getMinutes()).toString())
  };
  
  // console.log(selectedTime.getHours() +": "+ selectedTime.getMinutes());

  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTime}
       
      ><View style={{
        backgroundColor:  "rgba(0,0,0,0.5)",
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
         <View style={styles.modalView}>
            <View style={styles.close}>
                <TouchableOpacity 
                // style={{position: 'absolute'}} 
                onPress={()=>setModalTime(false)}
                >
                    <MaterialIcons name="close" color={thirdColor} style={styles.icon}/>
                </TouchableOpacity>
            
            </View>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={selectedTime}
                    mode='time'
                    display="spinner" 
                    is24Hour={false}
                    onChange={onChange}
                    // style={{flex: 1}}
                   
                  />
         </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalTime

const styles = StyleSheet.create({
    centeredView: {
        backgroundColor:  "rgba(0,0,0,0.5)",
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'flex-end'
     
     
    },
    modalView: {
    //   margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width:ScreenWidth,
    },
    
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    icon:{
        fontSize:30
    },
    close:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
       
    }
  });