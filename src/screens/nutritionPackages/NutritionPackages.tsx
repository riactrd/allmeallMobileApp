import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { mainColor, ScreenWidth, secundaryColor, thirdColor } from '../../componets/shared'
import Ionicons from 'react-native-vector-icons/Ionicons';



const NutritionPackages = () => {
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false} style={{width:ScreenWidth, marginBottom:5,}}>
            <View style={styles.viewScroll}>

            
            <View style={styles.item}>
                <View>
                <Image 
                    source={require('../../../assets/img/3package.png')}
                    style={styles.img}
                    />
                </View>
                <View>
                    <View style={styles.headerText}>
                        <View style={styles.headerTextContainer}>
                             <Text style={styles.headertopText}>$250</Text>
                        </View>
                        <Text style={styles.headertopTextLine}>$499</Text>
                        <Text style={styles.headertopText}>-50% off</Text>
                        <TouchableOpacity>
                            <Ionicons name="add-circle" color={mainColor} style={styles.icon}/>
                        </TouchableOpacity>
                        
                    </View>
                    <Text style={styles.bottomText}>3 session package</Text>
                </View>
             </View>
             <View style={styles.item}>
                <View>
                <Image 
                    source={require('../../../assets/img/5package.png')}
                    style={styles.img}
                    />
                </View>
                <View>
                    <View style={styles.headerText}>
                        <View style={styles.headerTextContainer}>
                             <Text style={styles.headertopText}>$250</Text>
                        </View>
                        <Text style={styles.headertopTextLine}>$499</Text>
                        <Text style={styles.headertopText}>-50% off</Text>
                        <TouchableOpacity>
                            <Ionicons name="add-circle" color={mainColor} style={styles.icon}/>
                        </TouchableOpacity>
                        
                    </View>
                    <Text style={styles.bottomText}>5 session package</Text>
                </View>
             </View>
             <View style={styles.item}>
                <View>
                <Image 
                    source={require('../../../assets/img/7package.png')}
                    style={styles.img}
                    />
                </View>
                <View>
                    <View style={styles.headerText}>
                        <View style={styles.headerTextContainer}>
                             <Text style={styles.headertopText}>$250</Text>
                        </View>
                        <Text style={styles.headertopTextLine}>$499</Text>
                        <Text style={styles.headertopText}>-50% off</Text>
                        <TouchableOpacity>
                            <Ionicons name="add-circle" color={mainColor} style={styles.icon}/>
                        </TouchableOpacity>
                        
                    </View>
                    <Text style={styles.bottomText}>7 session package</Text>
                </View>
             </View>
             <View style={styles.containerheaderTextButtom}>
                <Text style={styles.headerTextButtom}>Nutrition</Text>
             </View>
             <View style={styles.containerheaderTextButtom}>
                <Text style={styles.textButtom}>Need help in meeting your health and wellness goals? We invite you to work with our Registered Dietitian Nutritionist to discuss personalized goals, create a meal plan, and achieve a new perspective on healthy eating.
                Free consultation with the purchase of a package. Multi-session packages allow for ongoing nutrition education and promote accountability.
                With the purchase of a package, you will have access to a Registered Dietitian Nutritionist for all your nutrition needs.
                </Text>
                <Text style={styles.textButtom}>
                Free consultation with the purchase of a package. Multi-session packages allow for ongoing nutrition education and promote accountability.
                </Text>
                <Text style={styles.textButtom}>
                With the purchase of a package, you will have access to a Registered Dietitian Nutritionist for all your nutrition needs.
                </Text>
             </View>
             </View>
             </ScrollView>
        </View>
    </View>
  )
}

export default NutritionPackages

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
    item:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius:8,
        shadowOpacity: 0.3, 
        shadowRadius: 10, 
        shadowOffset: { height: 3, width: 3 },
        elevation: 1.4,
        backgroundColor: '#fff',
        width: ScreenWidth-20,
        height: 88,
        padding:15,
        // marginBottom:25,
        marginTop:25,
    },
    bottomText:{
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: thirdColor,
        marginLeft:10,
        // width: 300
        
    },
    headerText:{
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
        
    },
    headerTextContainer:{
        backgroundColor: 'rgba(242, 110, 33, 0.15)',
        borderRadius: 8,
        width: 62,
        height: 22,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headertopText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.15,
        color: '#FF6F00',
    },
    headertopTextLine:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.15,
        color: '#FF6F00',
        textDecorationLine: 'line-through',
    },
    img:{
        marginRight:20,
    },
    icon:{
        fontSize:24,
        marginRight: 20,
      },
      containerheaderTextButtom:{
        marginTop: 30,
        // width: ScreenWidth -20,
        justifyContent: 'center',

      },
      headerTextButtom:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 30,
        letterSpacing: 0.15,
        color: thirdColor,
    },
    textButtom:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: 0.15,
        color: thirdColor,
        marginBottom: 20,
        width: ScreenWidth -20,
    }
})