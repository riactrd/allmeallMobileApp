import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Picker} from "@react-native-picker/picker"
import { Screenheight, ScreenWidth, thirdColor } from '../shared'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type props ={
   selectedSecondside: string
    modalSecondSide: boolean;
    SetselectedSecondside: React.Dispatch<React.SetStateAction<string>>
    setModalSecondSide: React.Dispatch<React.SetStateAction<boolean>>
   
}

const ModalSecondSide = ({selectedSecondside,modalSecondSide, SetselectedSecondside, setModalSecondSide}: props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSecondSide}
       
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
                onPress={()=>setModalSecondSide(false)}
                >
                    <MaterialIcons name="close" color={thirdColor} style={styles.icon}/>
                </TouchableOpacity>
            
            </View>
             <Picker
                    selectedValue={selectedSecondside}
                    onValueChange={(itemValue, itemIndex) =>
                        SetselectedSecondside(itemValue)
                    }
                    >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="React" value="react" />
                    <Picker.Item label="phatom" value="phatom" />
             </Picker>
         </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalSecondSide

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