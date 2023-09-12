import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { mainColor, Screenheight, ScreenWidth, thirdColor } from '../shared'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type props ={
   selectedDate: Date
    modalDate: boolean;
    SetselectedDate: React.Dispatch<React.SetStateAction<Date>>
    setModalDate: React.Dispatch<React.SetStateAction<boolean>>
   
}

const ModalDate = ({selectedDate,modalDate, SetselectedDate, setModalDate}: props) => {
  
  const onChange = (
    event: any, 
    date: any) => {
    const currentDate = selectedDate;
    SetselectedDate(currentDate);
  };
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalDate}
       
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
                onPress={()=>setModalDate(false)}
                >
                    <MaterialIcons name="close" color={thirdColor} style={styles.icon}/>
                </TouchableOpacity>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={selectedDate}
                    mode='date'
                    display="spinner" 
                    is24Hour={true}
                    onChange={onChange}
                    style={{flex: 1}}
                    maximumDate={new Date(2025, 10, 20)}
                    minimumDate={new Date()}
                  />
            
            </View>
            
         </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalDate

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