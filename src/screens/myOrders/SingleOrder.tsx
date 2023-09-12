import { StyleSheet, Text, View, TouchableOpacity,Image, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { mainColor, Screenheight, ScreenWidth, secundaryColor, thirdColor } from '../../componets/shared'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import mealPhote from '../../../assets/img/mealPhote.png';
import plastic from '../../../assets/img/plastic.png';
import bag from '../../../assets/img/bag.png';
import Checkbox from 'expo-checkbox';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const itemList =[1,2,3,4]

const SingleOrder = () => {
  const [selected, Setselected] = useState('1');
  const [hideAddress, SetHideAddress] = useState(true);
  const [hideItems, SetHideItems] = useState(true);
  const [hideGlassware, SetHidehideGlassware] = useState(true);
  const [hideSummary, SetHidehideSummary] = useState(true);
  const [isSelectedglass, setSelectedglass] = useState(true);
  const [isSelectedBag, setSelectedBag] = useState(true);
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.headerContainer} >
             <TouchableOpacity onPress={()=>Setselected('1')} activeOpacity={.7} style={[selected=== '1' ? styles.headerButtomActive : styles.headerButtom]}>
                <Text style={[selected=== '1' ? styles.headertextActive : styles.headertext]}>Order Details</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>Setselected('2')} activeOpacity={.7} style={[selected=== '2' ? styles.headerButtomActive : styles.headerButtom]}>
                <Text style={[selected=== '2' ? styles.headertextActive : styles.headertext]}>Renewal Orders</Text>
             </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={{width:ScreenWidth, marginBottom:5,}}>
            <View style={styles.viewScroll} >
              <View style={styles.orderDetails}>
                <View style={styles.orderDetailsItems}>
                  <View style={styles.detailsItems}>
                  <Ionicons name="ios-receipt-outline" color={mainColor} style={styles.icon}/>
                    <View style={{marginLeft: 7}}>
                        <Text style={styles.headerItemsText}>Order Number</Text>
                        <Text style={styles.headerItemsTextsub}>4100F5</Text>
                    </View>
                  </View>
                  <View style={styles.detailsItems}>
                  <MaterialCommunityIcons name="calendar-blank" color={mainColor} style={styles.icon}/>
                    <View style={{marginLeft: 7}}>
                        <Text style={styles.headerItemsText}>Order Placed</Text>
                        <Text style={styles.headerItemsTextsub}>07-Aug-2021</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.orderDetailsItems}>
                  <View style={styles.detailsItems}>
                  <MaterialCommunityIcons name="shopping-outline" color={mainColor} style={styles.icon}/>
                    <View style={{marginLeft: 7}}>
                        <Text style={styles.headerItemsText}>Quantity</Text>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.headerItemsTextsubSpace}>Food: 6</Text>
                          <Text style={styles.headerItemsTextsub}>Combo: 6</Text>
                        </View>
                    </View>
                  </View>
                  <View style={styles.detailsItems}>
                    <View style={styles.iconDot}>
                      <Entypo name="dots-three-horizontal" color={mainColor} style={styles.iconDotsub}/>
                    </View>
                    
                    <View style={{marginLeft: 7}}>
                        <Text style={styles.headerItemsText}>Status</Text>
                        <Text style={styles.headerItemsTextsub}>Delivered</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.orderDetailsTotal}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <EvilIcons name="tag" color={secundaryColor} style={{fontSize:35}}/>
                        <View>
                          <Text style={styles.totalText}>Total</Text>
                          <Text style={styles.totalText}>Amount</Text>
                        </View>
                      </View>
                  </View>
                  <View>
                    <Text style={styles.totalTextNumber}>$126.33</Text>
                    <Text style={styles.totalTextNumbersub}>Paid by Manually</Text>
                  </View>
              </View>
              {/* address */}
              <View style={styles.addressContainer}>
                <View style={styles.adressSub}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Octicons name="location" color={thirdColor} style={styles.iconAdres}/>
                      <Text style={styles.addressText}>Adresses</Text>
                    </View>
                    <TouchableOpacity onPress={()=>SetHideAddress(!hideAddress)}style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.hideText}>Hide</Text>
                        {
                          hideAddress ? ( <AntDesign name="caretdown" color={thirdColor} />) : ( <AntDesign name="caretup" color={thirdColor} />)
                        }
                        
                    </TouchableOpacity>
                </View>
                {
                  hideAddress && (
                          <View style={styles.containerHide}>
                              <View style={styles.orderDetails} >
                                <View style={styles.addressShip}>
                                  <View style={{flexDirection: 'row', alignItems: 'center', marginBottom:10,}}>
                                  <MaterialIcons name="delivery-dining" color={mainColor} style={{marginRight:9, fontSize:24,}}/>
                                  <Text style={styles.addressShipText}>Ship to</Text>
                                  </View>
                                  <Text style={styles.addressShipTextSub}>Michael Williams</Text>
                                  <Text style={styles.addressShipTextSub}>833 West Haines Street, 60642 Chicago, IL, USA</Text>
                                  <Text style={styles.addressShipTextSub}>Phone:+1-312-555-0159</Text>
                                </View>
                                
                              </View>
                              <View style={styles.orderDetails} >
                                <View style={styles.addressShip}>
                                  <View style={{flexDirection: 'row', alignItems: 'center', marginBottom:10,}}>
                                  <MaterialIcons name="delivery-dining" color={mainColor} style={{marginRight:9, fontSize:24,}}/>
                                  <Text style={styles.addressShipText}>Billing Address</Text>
                                  </View>
                                  <Text style={styles.addressShipTextSub}>Michael Williams</Text>
                                  <Text style={styles.addressShipTextSub}>833 West Haines Street, 60642 Chicago, IL, USA</Text>
                                  <Text style={styles.addressShipTextSub}>Phone:+1-312-555-0159</Text>
                                </View>
                                
                              </View>
                          </View>
                  )
                }
                
              </View>
              {/* items */}
              <View style={styles.addressContainer}>
                <View style={styles.adressSub}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome name="list-alt" color={thirdColor} style={styles.iconAdres}/>
                      <Text style={styles.addressText}>Items</Text>
                    </View>
                    <TouchableOpacity onPress={()=>SetHideItems(!hideItems)}style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.hideText}>Hide</Text>
                        {
                          hideItems ? ( <AntDesign name="caretdown" color={thirdColor} />) : ( <AntDesign name="caretup" color={thirdColor} />)
                        }
                        
                    </TouchableOpacity>
                </View>
                {
                  hideItems && (
                          <View style={styles.containerHide}>
                          
                          {
                            itemList.map((item, index)=>(
                              <View style={styles.itemsDetails} >
                              <View style={{flexDirection: 'row', alignItems: 'center', padding:10}}>
                                  <Image source={mealPhote} style={styles.img}/>
                                  <View style={{marginLeft:11}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                                      <Text style={styles.itemtext}>1x</Text>
                                      <View style={styles.containerItemtextPrice}>
                                          <Text style={styles.itemtextPrice}>$10.99</Text>
                                      </View>
                                      
                                    </View>
                                    <Text style={styles.itemtext}>Blackened Grilled Chicken</Text>
                                    <Text style={styles.itemtextTotal}>Sub Total: $10.99</Text>
                                  </View> 
                              </View>
                          </View>
                            ))
                          }
                             

                          </View>
                  )
                }
                
              </View>
              {/* Glassware */}
              <View style={styles.addressContainer}>
                <View style={styles.adressSub}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialCommunityIcons name="food-takeout-box-outline" color={thirdColor} style={styles.iconAdres}/>
                      <Text style={styles.addressText}>Glassware & Bag</Text>
                    </View>
                    <TouchableOpacity onPress={()=>SetHidehideGlassware(!hideGlassware)}style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.hideText}>Hide</Text>
                        {
                          hideGlassware ? ( <AntDesign name="caretdown" color={thirdColor} />) : ( <AntDesign name="caretup" color={thirdColor} />)
                        }
                        
                    </TouchableOpacity>
                </View>
                {
                  hideGlassware && (
                    <>
                    <View style={styles.containerHide}>
                         
                         <View style={styles.itemsDetails} >
                         <View style={{flexDirection: 'row', alignItems: 'center', padding:10}}>
                             <Image source={plastic} style={styles.img}/>
                             <View style={{marginLeft:11}}>
                               <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                                 <Text style={styles.itemtext}>3 x</Text>
                                 <View style={styles.containerItemtextPrice}>
                                     <Text style={styles.itemtextPrice}>$7.99</Text>
                                 </View>
                                 
                               </View>
                               <Text style={styles.itemtext}>Plastic</Text>
                               <Text style={styles.itemtextTotal}>Sub Total: $10.99</Text>
                             </View> 
                         </View>
                     </View>
                     <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isSelectedglass}
                         onValueChange={setSelectedglass}
                         style={styles.checkbox}
                         color={isSelectedglass ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Used existing glasswares</Text>
                     </View>
                     </View>
                     <View style={styles.containerHide}>
                         
                         <View style={styles.itemsDetails} >
                         <View style={{flexDirection: 'row', alignItems: 'center', padding:10}}>
                             <Image source={bag} style={styles.img}/>
                             <View style={{marginLeft:11}}>
                               <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                                 <Text style={styles.itemtext}>1 x</Text>
                                 <View style={styles.containerItemtextPrice}>
                                     <Text style={styles.itemtextPrice}>$5.00</Text>
                                 </View>
                                 
                               </View>
                               <Text style={styles.itemtext}>Bag</Text>
                               <Text style={styles.itemtextTotal}>Sub Total: $10.99</Text>
                             </View> 
                         </View>
                     </View>
                     <View style={styles.containerChekbox}>
                      <Checkbox
                         value={isSelectedBag}
                         onValueChange={setSelectedBag}
                         style={styles.checkbox}
                         color={isSelectedBag ? mainColor : undefined}
                       />
                        <Text style={styles.itemtext}>Used existing bag</Text>
                     </View>
                     </View>
                    </>
                         
                          
                  )
                }
                
              </View>
              {/* Summary */}
              <View style={styles.addressContainer}>
                <View style={styles.adressSub}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialCommunityIcons name="food-takeout-box-outline" color={thirdColor} style={styles.iconAdres}/>
                      <Text style={styles.addressText}>Summary</Text>
                    </View>
                    <TouchableOpacity onPress={()=>SetHidehideSummary(!hideSummary)}style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.hideText}>Hide</Text>
                        {
                          hideSummary ? ( <AntDesign name="caretdown" color={thirdColor} />) : ( <AntDesign name="caretup" color={thirdColor} />)
                        }
                        
                    </TouchableOpacity>
                </View>
                {
                  hideSummary && (
                   <>
                   <View style={styles.summaryContaienr}>
                     <Text style={styles.summaryText}>Total Meal Amount</Text>
                     <Text style={styles.summaryTextNumber}>$32.97</Text>
                   </View>
                   <View style={styles.summaryContaienr}>
                     <Text style={styles.summaryText}>Glassware / Plastic Container Amount</Text>
                     <Text style={styles.summaryTextNumber}>$7.00</Text>
                   </View>
                   <View style={styles.summaryContaienr}>
                     <Text style={styles.summaryText}>Existing Reusable Glassware Amount (0)</Text>
                     <Text style={styles.summaryTextNumberColor}>$0.00</Text>
                   </View>
                   <View style={styles.summaryContaienr}>
                     <Text style={styles.summaryText}>Bag Amount</Text>
                     <Text style={styles.summaryTextNumber}>$5.00</Text>
                   </View>
                   <View style={styles.summaryContaienr}>
                     <Text style={styles.summaryText}>Existing Reusable Bag Amount (0)</Text>
                     <Text style={styles.summaryTextNumberColor}>$0.00</Text>
                   </View>
                   <View style={styles.summaryContaienrColor}>
                     <Text style={styles.summaryText}>Sub Total Amount</Text>
                     <Text style={styles.summaryTextNumber}>$44.97</Text>
                   </View>
                   <View style={styles.summaryContaienr}>
                     <Text style={styles.summaryText}>Tax</Text>
                     <Text style={styles.summaryTextNumber}>$2.40</Text>
                   </View>
                   <View style={styles.summaryContaienr}>
                     <Text style={styles.summaryText}>Delivery Charge</Text>
                     <Text style={styles.summaryTextNumber}>$9.99</Text>
                   </View>
                   <View style={styles.summaryContaienr}>
                     <Text style={styles.summaryText}>Reward Points Used</Text>
                     <Text style={styles.summaryTextNumberColor}>-$0.00</Text>
                   </View>
                   <View style={styles.summaryContaienrColorTotal}>
                     <Text style={styles.summaryTextTotal}>Grand Total</Text>
                     <Text style={styles.summaryTextNumberTotal}>$57.36</Text>
                   </View>
                   <View style={styles.summaryContaienr}>
                     <Text style={styles.summaryText}>Total Reward Points earned for this order</Text>
                     <View style={styles.totalReward}>
                         <Text style={styles.summaryTextNumberColor}>5</Text>
                     </View>
                     
                    
                   </View>
                   <View style={styles.summaryContaienr}>
                     <Text style={styles.summaryText}>Delivery Frequency</Text>
                     <Text style={styles.summaryTextNumber}>Weekly</Text>
                   </View>
                   <View style={styles.summaryContaienr}>
                     <Text style={styles.summaryText}>Delivery Status</Text>
                     <Text style={styles.summaryTextNumber}>Delivered</Text>
                   </View>
                   <View style={{marginBottom:20}}></View>
                   </>      
                  )
                }
                
              </View>
            </View>
          </ScrollView>
          
          {/* wrapper end */}
        </View>
    </View>
  )
}

export default SingleOrder

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
  headerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: ScreenWidth-20,
    marginTop: 15,
    marginBottom:15,
    
    
  },
  headerButtom:{
    width: 156,
    height: 36,
    borderRadius: 8,
    alignItems:'center',
    justifyContent: 'center',
    shadowOpacity: 0.3, 
    shadowRadius: 20, 
    shadowOffset: { height: 3, width: 3 },
    elevation: 1.4,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    
  },
  headertext:{
    color: thirdColor,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.15,
  },
  headerButtomActive:{
    backgroundColor: mainColor,
    width: 156,
    height: 36,
    borderRadius: 8,
    alignItems:'center',
    justifyContent: 'center',
    
  },
  headertextActive:{
    color: secundaryColor
  },
  orderDetails:{
    width: ScreenWidth-20,
    height: 149,
    backgroundColor: secundaryColor,
    borderRadius: 8,
    alignItems:'flex-start',
    justifyContent: 'flex-start',
    shadowOpacity: 0.3, 
    shadowRadius: 20, 
    shadowOffset: { height: 3, width: 3 },
    elevation: 0.4,
    marginTop: 22,
  },
  orderDetailsItems:{
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    width: ScreenWidth-20,
    padding:20,
  
  },
  detailsItems:{
    flexDirection: 'row',
    marginRight:50,

  },
  headerItemsText:{
    color: thirdColor,
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
  },
  headerItemsTextsub:{
    color: thirdColor,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
  },
  headerItemsTextsubSpace:{
    color: thirdColor,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginRight:15,
  },
  icon:{
    fontSize:24,
  },
  iconDotsub:{
    fontSize:15,
  },
  iconDot:{
    borderWidth: 2,
    borderRadius: 30,
    borderColor: mainColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    // padding:5
    width: 24,
    height: 24, 
  },
  
  orderDetailsTotal:{
    width: ScreenWidth-20,
    // height: 64,
    backgroundColor: mainColor,
    borderRadius: 8,
    alignItems:'flex-start',
    justifyContent: 'flex-start',
    shadowOpacity: 0.3, 
    shadowRadius: 20, 
    shadowOffset: { height: 3, width: 3 },
    elevation: 0.4,
    marginTop: 22,
    padding: 20,
    flexDirection: 'row',
  },
  totalText:{
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.25,
    marginRight:15,
    color: secundaryColor,
    marginLeft: 11,
  },
  totalTextNumber:{
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.15,
    marginRight:15,
    color: secundaryColor,
    marginLeft: 11,
  },
  totalTextNumbersub:{
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.25,
    marginRight:15,
    color: secundaryColor,
    marginLeft: 11,
  },
  addressContainer:{
    marginTop: 41,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: ScreenWidth-20,
    
  },
  adressSub:{
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    width: ScreenWidth-20,
  },
  iconAdres:{
    fontSize:24,
    marginRight:10,
  },
  addressText:{
    color: thirdColor,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 1.25,
    marginRight:15,
  },
  hideText:{
    color: thirdColor,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.25,
    marginRight:15,
  },
  containerHide:{
    // backgroundColor: '#000',
    width: ScreenWidth-20,
    // height: 50,
    // marginTop: 13,
    marginBottom: 23,
    
    
  },
  addressShip:{
    padding:20,
  },
  addressShipText:{
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.25,
    marginRight:15,
    color: thirdColor,
    marginLeft: 11,
  },
  addressShipTextSub:{
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.25,
    marginRight:15,
    color: thirdColor,
    marginBottom:10,
    
  },
  itemsDetails:{
    width: ScreenWidth-20,
    // height: 111,
    backgroundColor: secundaryColor,
    borderRadius: 8,
    alignItems:'flex-start',
    justifyContent: 'flex-start',
    shadowOpacity: 0.3, 
    shadowRadius: 20, 
    shadowOffset: { height: 3, width: 3 },
    elevation: 0.4,
    marginTop: 22,
  },
  itemtext:{
    color: thirdColor,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
  },
  itemtextTotal:{
    color: mainColor,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginTop:10
  },
  itemtextPrice:{
    color: mainColor,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
  },
  containerItemtextPrice:{
    backgroundColor: 'rgba(242, 110, 33, 0.15)',
    width: 58,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:8,
    marginLeft: 10,
  },
  containerChekbox:{
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  checkbox:{
    marginRight: 10,
  },
  summaryContaienr:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop:20,

  },
  summaryContaienrColor:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop:20,
    backgroundColor: 'rgba(255, 111, 0, 0.15)',
    paddingTop:10,
    paddingBottom:10,
    borderRadius: 8,
  },
  summaryText:{
    color: thirdColor,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginLeft:10,
  },
  summaryTextNumber:{
    color: thirdColor,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginRight:10,
  },
  summaryTextNumberColor:{
    color:mainColor,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginRight:10,
   
  },
  summaryContaienrColorTotal:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop:20,
    backgroundColor: mainColor,
    paddingTop:20,
    paddingBottom:20,
    borderRadius: 8,
    
  },
  summaryTextTotal:{
    color: secundaryColor,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginLeft:10,
  },
  summaryTextNumberTotal:{
    color: secundaryColor,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.15,
    marginRight:10,
   
  },
  totalReward:{
    backgroundColor: 'rgba(255, 111, 0, 0.15)',
    borderRadius: 8,
    // width: 45,
    height: 22,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    paddingLeft: 10, 
  }
})