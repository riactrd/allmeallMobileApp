import { ImageBackground, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToCart, decreaseCart, getTotals, increaseCart } from '../../../redux/cartSlice';
import { CartModel } from '../../../model/CartModel';
import { mainColor, secundaryColor, thirdColor } from '../../../componets/shared';
import { useToast } from 'react-native-toast-notifications';
import { useCreateAddCartMutation } from '../../../redux/api/addCartOld';

// const itemsProps=[1,2,3,4,5,6]



const MealItemPage = ({route}) => {
    const [createAddCart,{data, isError, error, isLoading, isSuccess}] = useCreateAddCartMutation();
    const toast = useToast();
    const { meal} = route.params;
    const {
        name, 
        price, 
        description, 
        id, 
        ingredients, 
        calories, 
        proteins,
        fat,
        carbohydrates,
        fiber,
        sodium,
      }=meal;
   
    const navigation = useNavigation(); 
    const [quantity, SetQuantity] = useState<number>(1);
    const dispatch = useDispatch();

    const total = price * quantity;
    
    useEffect(() => {
    
        if(isSuccess ){
          
              toast.show('Item Added to cart', {
                type: "success",
                placement: "bottom",
                duration: 8000,
                animationType: "slide-in",
                
              });

              SetQuantity(1)
              navigation.navigate("Category");
              
          // navigation.navigate('VerifyUser', 
          // {
          //   screen: 'VerifyUser',
          //   params: {userId: data.data.user.id, message: data.message}
          // }
          // )
        }
      
        if(isError){
          if (error) {
            if ('status' in error) {
              // you can access all properties of `FetchBaseQueryError` here
                  toast.show(JSON.stringify('Internal error'), {
                    type: "error",
                    placement: "bottom",
                    duration: 8000,
                    animationType: "slide-in",
                    
                  });
            }
          }
         }
      
       
      },[data, isError])

   

    
    const cart = {
        "food_id": id,
        "quantity": quantity,
        "food_combo_id": null
    }
    //   console.log(cart)

    const handleControl = (direction: string) =>{

        if(direction === 'increase'){
            if(quantity <= 99){
                SetQuantity((currentQuantity) => currentQuantity + 1);
                
            }
            
        }
        else if(direction === 'decrease'){
            if(quantity >= 1){
                SetQuantity((currentQuantity) => currentQuantity - 1);
               
            }
        }
    }


    const selectedItems = () => {
  
        if(quantity){
          dispatch(addToCart({...singleFood} ))
          dispatch(getTotals())
          SetQuantity(0);
        } else{
        //   toast.error(`Please add quantity on ${singleFood.name}`, {
        //     position: "bottom-left",
        //   });
        }
        
      }

      const handlerAddCart = async () =>{
        if(!quantity){
          
            toast.show("No quantity added", {
              type: "danger",
              placement: "bottom",
              duration: 4000,
              animationType: "slide-in",
              
            });
        } else if(!id){
            
            toast.show("No id added", {
              type: "danger",
              placement: "bottom",
              duration: 4000,
              animationType: "slide-in",
              
            });
  
        }else{
            await createAddCart({cart}) 
          }
      }

    const nutricion= {
        calories, 
        proteins,
        fat,
        carbohydrates,
        fiber,
        sodium,
    }
    const singleFood =
  {
    id: id,
    cartQuantity:quantity,
    quantity:quantity,
    name: name,
    price: price,
    desc: description,
    nutricion: nutricion,
    ingredients: ingredients

  };

  

  return (
    
    <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <ImageBackground source={
        require('../../../../assets/img/meailMenu.png')} 
        resizeMode="cover"
        style={styles.img}
        >
        </ImageBackground>
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.containerMeal}>
                    <View style={styles.ButtomContainer}>
                        <View style={styles.headerButtomContainer}>
                            <View style={styles.headerButtomTextContainer}>
                            <Text style={styles.headerButtomText}>${price.toFixed(2)} / Meal</Text>
                            </View>
                            <View style={styles.buttom}>
                                <TouchableOpacity
                                onPress={()=>
                                    handleControl('decrease')
                                   
                                }
                                >
                                    <AntDesign name="minuscircle" type="ionicon" style={styles.headerButtomIcon}/>
                                </TouchableOpacity>
                                <Text style={styles.number}>{quantity}</Text>
                                <TouchableOpacity
                                onPress={()=>
                                    handleControl('increase')
                                }
                                >
                                    <AntDesign name="pluscircle" type="ionicon" style={styles.headerButtomIcon}/>
                                </TouchableOpacity>
                            
                            </View>
                        </View>
                        <Text style={styles.headerText}>{name}</Text>
                        <Text style={styles.headerTextp}>{description}</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // backgroundColor: 'black',
                            justifyContent: 'space-between'
            
                        }}>
                            <Image style={{marginTop: 10}} source={require('../../../../assets/img/minilogo.png')} />
                            {
                                quantity ? (
                                    <TouchableOpacity style={{
                                        backgroundColor: mainColor,
                                        padding:10,
                                        borderRadius: 8,
                                    }}
                                    onPress={()=>
                                        {
                                            // selectedItems()
                                            handlerAddCart()
                                        }
                                    }
                                    >
                                      <Text style={styles.addButtomText}>Add {quantity} to order - $ {total.toFixed(2)}</Text>
                                   </TouchableOpacity>
                                ):(<></>)
                            }
                           
                        </View>
                       
                    </View>
                    <View style={styles.containerDetails}>
                        <View style={styles.headerDetails}>
                            <Image source={require('../../../../assets/img/fork.png')} style={{marginRight:10}}/>
                            <Text style={styles.bottomText}>Nutrition Facts</Text>
                        </View>

                        <View style={styles.containersubItems}>
                                {/* { */}
                                    {/* nutricion.map((item, index)=>( */}
                                        <View style={styles.subItems}>
                                            <Text style={styles.subItemsText}>{calories} g</Text>
                                            <Text style={styles.subItemsTextSecond}>Calories</Text>
                                        </View>
                                        <View style={styles.subItems}>
                                            <Text style={styles.subItemsText}>{proteins} g</Text>
                                            <Text style={styles.subItemsTextSecond}>Proteins</Text>
                                        </View>
                                        <View style={styles.subItems}>
                                            <Text style={styles.subItemsText}>{fat} g</Text>
                                            <Text style={styles.subItemsTextSecond}>Fat</Text>
                                        </View>
                                        <View style={styles.subItems}>
                                            <Text style={styles.subItemsText}>{fiber} g</Text>
                                            <Text style={styles.subItemsTextSecond}>fiber</Text>
                                        </View>
                                        <View style={styles.subItems}>
                                            <Text style={styles.subItemsText}>{carbohydrates} g</Text>
                                            <Text style={styles.subItemsTextSecond}>Carbs</Text>
                                        </View>
                                        <View style={styles.subItems}>
                                            <Text style={styles.subItemsText}>{sodium} g</Text>
                                            <Text style={styles.subItemsTextSecond}>Sodium</Text>
                                        </View>
                                    {/* )) */}
                                {/* } */}
                            </View>
                    </View>
                    <View style={styles.containerDetails}>
                        <View style={styles.headerDetails}>
                            <Image source={require('../../../../assets/img/huevo.png')} style={{marginRight:10}}/>
                            <Text style={styles.bottomText}>Ingrediends</Text>
                        </View>

                        <View style={styles.containersubItems}>
                                {
                                    ingredients?.map((item, index)=>(
                                        <View style={styles.subItems} key={index}>
                                            <Text style={styles.subItemsTextSecond}>{item.name}</Text>
                                        </View>
                                    ))
                                }
                            </View>
                    </View>
                    
                </View>
            </View>
            
        </View>
    </View>
  )
}

export default MealItemPage

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
      width: 342,
      height: 179,
      borderRadius: 8,

      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 2,
    }
    ,
    headerButtomContainer:{
        // marginLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        width: 300,
        

    },
    headerButtomTextContainer:{
        backgroundColor: 'rgba(242, 110, 33, 0.15)',
        padding:5,
        borderRadius: 8,
        width: 128,
        alignItems: 'center'
    },
    
    headerButtomText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: '#FF6F00',
        
    },
    addButtomText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: secundaryColor,
        
    },
    bottomText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: '#000',
        
    }
    ,
    buttom:{
        display: 'flex',
        flexDirection: 'row',
        
    },
    buttomItem:{
        marginLeft:10,
        marginRight:10,
    },
    headerButtomIcon:{
        color: '#FF6F00',
        fontSize: 20,

    },
    number:{
        marginLeft: 10,
        marginRight:10,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.15,
    },
    headerText:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: 0.15,
        marginTop:5,

    },
    headerTextp:{
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 10,
        lineHeight: 15,
        letterSpacing: 0.15,
        marginTop:5,
    },
    ButtomContainer:{
       padding: 20,
        width: 350,
    },
    containerDetails:{
        marginTop:20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    headerDetails:{
    //   marginTop:8,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    containersubItems:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop:10,
        justifyContent: 'flex-start',
    },
    subItems:{
        backgroundColor: 'rgba(242, 110, 33, 0.15)',
        padding:5,
        borderRadius: 8,
        alignItems: 'center',
        margin:5, 
        flexDirection: 'row', 
        justifyContent: 'center',
        width: 'auto',
        height: 32,
        
    },
    subItemsText:{
        fontWeight: '600',
        fontSize: 11,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: '#F26E21',
        marginRight: 5,
    },
    subItemsTextSecond:{
        fontWeight: '600',
        fontSize: 11,
        lineHeight: 15,
        letterSpacing: 0.15,
        color: '#000',
    }

})