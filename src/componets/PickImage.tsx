import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import userPick from '../../assets/img/userPick.png'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { changeImageAvatar } from '../redux/imageSlice';
import { useSelector} from 'react-redux'
import { selectimgAvatar } from '../redux/store';

export default function ImagePickerExample() {
//   const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const imgAvatar = useSelector(selectimgAvatar);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
    //   setImage(result.uri);
      dispatch(changeImageAvatar({image:result.uri}))
    }
    
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        {/* {!image && 
            <TouchableOpacity onPress={pickImage} >
                <Image source={userPick} style={{ width: 100, height: 100 }}/>
                <MaterialIcons 
                name="add-a-photo" 
                rcolor={secundaryColor} 
                style={styles.icon}/>
             </TouchableOpacity>
        } */}
        
      {/* {image &&  */}
      <TouchableOpacity onPress={pickImage} style={styles.containerbottom}>
        <Image source={{ uri: imgAvatar }} style={{ width: 100, height: 100, borderRadius: 50 }} />
        <MaterialIcons 
                name="add-a-photo" 
                // rcolor={secundaryColor} 
                style={styles.bottom}/>
      </TouchableOpacity>
      
      
      {/* } */}
    </View>
  );
}

const styles = StyleSheet.create({
    icon:{
        fontSize:80,
    },
    bottom:{
        position: 'absolute',
        fontSize:50,
        color: 'rgba(238,238,228,0.7)te'
    },
    containerbottom:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})