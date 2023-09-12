import { ImageBackground, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import mindfull from '../../../assets/img/mindfull.png'
import { mainColor, ScreenWidth, thirdColor } from '../../componets/shared';
import Ionicons from 'react-native-vector-icons/Ionicons';

const itemsProps=[1,2,3,4,5,6]

const PostDetails = () => {
  return (
    
    <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <ImageBackground source={mindfull}
        resizeMode="cover"
        style={styles.img}
        >
        </ImageBackground>
        <View style={styles.wrapper}>
            <View style={styles.container}>
            <View style={styles.containerMeal}>
                <View style={styles.dates}>
              <View style={styles.datesItems}>
                <Ionicons name="md-calendar-sharp" color={mainColor} style={styles.icon}/>
                <Text style={styles.datetext}>10/07/2020</Text>
              </View>
              <View style={styles.datesItems}>
                <Ionicons name="ios-time-outline" color={mainColor} style={styles.icon}/>
                <Text style={styles.datetext}>10/07/2020</Text>
              </View>
           </View>
           <View style={styles.dates}>
            <Text style={styles.title}>Mindfullness</Text>
           </View>
           <View style={styles.dates}>
                <Text style={styles.titleP}>
                Welcome to the first Wellness Wednesday email series - For the next four emails, we will be highlightning: Mindfullness!.
                </Text>
           </View>
                </View>
                
            </View>
            <View style={styles.bottomContainer}>
                    <Text style={styles.textBottom}>
                    We're starting off with the theme of Mindfulness, as this practice is so crucial for maintaining our overall well-being, especially now, amidst a global pandemic.
                    </Text>
                    <Text style={styles.textBottom}>
                    We're starting off with the theme of Mindfulness, as this practice is so crucial for maintaining our overall well-being, especially now, amidst a global pandemic.
                    </Text>
                    <Text style={styles.textBottom}>
                    We're starting off with the theme of Mindfulness, as this practice is so crucial for maintaining our overall well-being, especially now, amidst a global pandemic.
                    </Text>
                    <Text style={styles.textBottom}>
                    We're starting off with the theme of Mindfulness, as this practice is so crucial for maintaining our overall well-being, especially now, amidst a global pandemic.
                    </Text>
                    <Text style={styles.textBottomTitle}>What is Mindfulness?</Text>
                    <Text style={styles.textBottom}>
                    We're starting off with the theme of Mindfulness, as this practice is so crucial for maintaining our overall well-being, especially now, amidst a global pandemic.
                    </Text>
                    
             </View>
            
        </View>
        
    </View>
  )
}

export default PostDetails

const styles = StyleSheet.create({

    
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper:{
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    img:{
        height: 228,
    },
    containerMeal:{
      backgroundColor:'#fff',
      position: 'absolute',
      width: ScreenWidth-20,
      height: "auto",
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 2,
      padding:20,
    },
    dates:{
        flexDirection: 'row',
        marginTop:10,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    datesItems:{
        flexDirection: 'row',
        marginRight:20,
        alignItems: 'center',
    },
    icon:{
        fontSize: 24,
        marginRight:10,
    },
    datetext:{
        color: thirdColor,
        // fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 30,
        letterSpacing: 0.15,
      },
      title:{
        color: thirdColor,
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 15,
        letterSpacing: 0.15,
      },
      titleP:{
        color: thirdColor,
        // fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: 0.15,
        width: 309,
        marginBottom:10,
      },
      bottomContainer:{
        // backgroundColor: 'black',
      
        marginTop:100,
        
      },
      textBottom:{
        color: thirdColor,
        // fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: 0.15,
        width: ScreenWidth-20,
        marginBottom:10,
      },
      textBottomTitle:{
        color: thirdColor,
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 30,
        letterSpacing: 0.15,
        width: ScreenWidth-20,
        marginBottom:10,
      }
})