import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { mainColor, Screenheight, ScreenWidth, secundaryColor, thirdColor } from '../../componets/shared'
import Checkbox from 'expo-checkbox'

const Allergic = () => {
    const [isBlackberries, setBlackberries] = useState(true);
    
  return (
    <View style={styles.container}>
       <View style={styles.wrapper}>
            <View style={styles.containerheaderText}>
                <Text style={styles.headerText}>Ingredients that you don't Like or Allergic to:</Text>
                <TouchableOpacity activeOpacity={.7} style={styles.saveButtom}>
                    <Text style={styles.saveButtomText}>Save</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom:20}}>
            <View style={styles.checkInputContainer}>
                <View style={styles.left}>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Blackberries</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Raspberries</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Blackberries</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Raspberries</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Squash (oz)</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>6 oz Blackened
                        Salmon</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Grapes</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Cheeseburger Casserole GB</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Hard Boiled Egg(s)</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Mangos</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Grapes</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Cheeseburger Casserole GB</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Hard Boiled Egg(s)</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Sliced Carrots (oz)</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Vegan Meatballs</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Sliced Carrots (oz)</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Sliced Carrots (oz)</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Vegan Meatballs</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}> Slicced Carrots</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Sliced Carrots (oz)</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}> Blueberries</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Zuchinni (oz)</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}> Squash (oz)</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Dates</Text>
                    </View>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isBlackberries}
                         onValueChange={setBlackberries}
                         style={styles.checkbox}
                         color={isBlackberries ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}> 6 oz Chicken Adobo</Text>
                    </View>
                </View>
            </View>

            </ScrollView>
           
            
       </View>
    </View>
  )
}

export default Allergic

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
      containerheaderText:{
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: ScreenWidth-20,
        alignItems: 'center',
      },
      headerText:{
        width: 227,
        // textAlign: 'center',
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: thirdColor,
      },
      saveButtomText:{
        color:secundaryColor,
        fontWeight: '600',
        fontSize: 10,
        letterSpacing: 1.25,
        lineHeight: 16,
      },
      saveButtom:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 92,
        height:32,
        backgroundColor: mainColor,
        borderRadius:8,
      },
      checkInputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: ScreenWidth-20,
        alignItems: 'center',
      },
      containerChekbox:{
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      checkbox:{
        marginRight: 10,
      },
      itemtext:{
        color: thirdColor,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 15,
        letterSpacing: 0.15,
        width: 120,
      },

})