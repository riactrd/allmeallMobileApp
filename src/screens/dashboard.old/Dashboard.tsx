import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, {FunctionComponent} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TopMenu from '../../componets/topMenu/TopMenu';
import BottomMenu from '../../componets/bottomMenu/BottomMenu';
import DashInfo from '../../componets/dashInfo/DashInfo';
import Search from '../../componets/search/Search';
import Categories from '../../componets/categories/Categories';
import FeaturedMeals from '../../componets/featuredMeals/FeaturedMeals';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigators/RootDrawer';
import { secundaryColor } from '../../componets/shared';

type props = StackScreenProps<RootStackParamList, 'Home'>

const Dashboard : FunctionComponent<props>= ({navigation}) => {
  return (
    <>
    <View style={{
      backgroundColor: secundaryColor,
      flex: 1,
    }}>
      <DashInfo/>
      <Search/>
      <Categories navigation={navigation}/>
      <FeaturedMeals/>
      </View>
    </>
   
  )
}

export default Dashboard

