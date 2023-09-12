import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useState} from 'react'
import FeaturedMealsItems from './FeaturedMealsItems';

const featuredMealsItems = [
    {
        id: 1,
        text: 'Blackened Grilled Chicken',
        img: '../../../assets/img/breakfast',
    },
    {
        id: 2,
        text: 'Blackened Shrimp and Seasonal Veggies',
        img: '../../../assets/img/thanksgiving.png',
    },
    {
        id: 3,
        text: 'Preselected Meals',
        img: '../../../assets/img/meal.png',
    },
    {
        id: 4,
        text: '$8 Meal Prep Menu',
        img: '../../../assets/img/plate.png',
    },
    {
        id: 5,
        text: 'Keto Meals',
        img: '../../../assets/img/breakfast.png',
    },
];

const FeaturedMeals = () => {
    const [selected, Setselected] = useState(0);

  return (
    <View style={styles.container}>
       <View style={styles.wrapper}>
         <Text style={styles.categoryText}>Featured Meals</Text>
         <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.categoryItems}>
                
                {
                        featuredMealsItems.map((item, index)=>(
                           <View style={styles.categoryItemsContainer}>
                                <FeaturedMealsItems 
                                item={item} 
                                key={index} 
                                selected={selected} 
                                Setselected={Setselected}
                                index={index}
                                />
                           </View>
                             
                        
                        ))
                    }
            </View>
         </ScrollView>
       </View>
       
    </View>
  )
}

export default FeaturedMeals

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'column', 
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: -40,
        
    },wrapper:{
        display:'flex',
        flexDirection: 'column', 
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 20,
        width: '100%',

    },categoryText:{
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 30,
        letterSpacing: 0.15,
        color: '#262626',
    },categoryItems:{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row'
        
    },
    categoryContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },categoryItemsContainer:{
        marginRight: 10,
        marginLeft: 10,
        height: 205,
    }
})