import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { FunctionComponent, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import TopMenu from "../../componets/topMenu/TopMenu";
import BottomMenu from "../../componets/bottomMenu/BottomMenu";
import Search from "../../componets/search/Search";
import Categories from "../../componets/categories/Categories";
import FeaturedMeals from "../../componets/featuredMeals/FeaturedMeals";
import { StackScreenProps } from "@react-navigation/stack";
import {
  ScreenWidth,
  Screenheight,
  secundaryColor,
  secundaryColor7,
} from "../../componets/shared";
import { useGetdashboardQuery } from "../../redux/api/dashboardApi";
import { FeaturedMeal } from "../../model/DashboardModel";
import { useToast } from "react-native-toast-notifications";
import { useDispatch } from "react-redux";
import { loginData } from "../../redux/loginSlice";
import { CommonActions } from "@react-navigation/native";
import { RootStackParamList } from "../../navigators/RootStack";
import DashInfo from "../../componets/dashInfo/DashInfo";
import SkeletonDashboard from "./SkeletonDashboard";
import Spinner from "react-native-loading-spinner-overlay";
import { useGetmyCartQuery } from "../../redux/api/myCartApi";
import { addItem } from "../../redux/cartQuantitySlice";
import { useLazySearchCategoriesQuery } from "../../redux/api/categoriesApi";
import { MaterialIcons } from "@expo/vector-icons";

type props = StackScreenProps<RootStackParamList, "Home">;

const wait = (timeout: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Dashboard: FunctionComponent<props> = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [dataSearchApi, setDataSearchApi] = useState(null);

  const { data, isError, error, isLoading, isSuccess, refetch } =
    useGetdashboardQuery("");

  const [
    trigger,
    { data: dataSearch, isLoading: isLoadingDataSearch, isFetching },
  ] = useLazySearchCategoriesQuery(search);
  useEffect(() => {
    if (dataSearch) {
      // console.log("response api:", dataSearch.data.menu);
      setDataSearchApi(dataSearch.data.menu);
    }
  }, [dataSearch]);

  useEffect(() => {
    if (search === "") {
      setDataSearchApi(null);
    }
  }, [search]);

  // useEffect(() => {
  //   if (dataSearch) SetfeaturedMeals(dataSearch);
  // }, [dataSearch]);

  const dispatch = useDispatch();
  const toast = useToast();
  const [dash, SetDash] = useState({
    digitalWalle: 0,
    existingOrders: 0,
    rewardPoints: 0,
  });

  const {
    data: cart,
    error: cartError,
    isLoading: cartIsLoading,
    refetch: cartRefetch,
    // isFetching,
  } = useGetmyCartQuery("bulbasaur", { refetchOnMountOrArgChange: true });

  const cartItemQuantity = cart?.data?.my_cart?.cart_items;
  // console.log(cartItemQuantity);

  useEffect(() => {
    if (cartItemQuantity && Array.isArray(cartItemQuantity)) {
      cartItemQuantity.map((item, index) => {
        const idItemCart = item.id;
        const id = item?.pictures[0]?.pictureable_id;
        const { quantity } = item;
        const cantidad = quantity;
        // console.log(`Ítem ${index + 1}: id=${id}, cantidad=${quantity}`);
        const itemsState = { id, cantidad, idItemCart };
        dispatch(addItem(itemsState));
        // console.log(itemsState);
      });
    } else {
      console.log(
        "Los elementos del carrito no están disponibles o no son un arreglo."
      );
    }
  }, [cart]);

  const handleLogout = () => {
    dispatch(
      loginData({
        userLogin: false,
        token: "",
        userData: {
          id: 0,
          email: "",
          first_name: "",
          last_name: "",
        },
      })
    );
    // navigation.navigate('Welcome')
    navigation.dispatch(
      CommonActions.reset({
        // index: 1,
        routes: [{ name: "Welcome" }],
      })
    );
  };

  const [featuredMeals, SetfeaturedMeals] = useState<FeaturedMeal[]>([]);
  // console.log(featuredMeals);

  useEffect(() => {
    wait(900000).then(
      () =>
        // refetch()
        // console.log('Prueba de tiempo'),
        handleLogout
    );

    if (data) {
      SetDash({
        digitalWalle: data.data.dashboard.digital_wallet,
        existingOrders: data.data.dashboard.existing_orders,
        rewardPoints: data.data.dashboard.reward_points,
      });
      SetfeaturedMeals(data.data.dashboard.featured_meals);
    } else if (isError) {
      console.log(error);
    }

    if (isError) {
      if (error) {
        if ("status" in error) {
          // you can access all properties of `FetchBaseQueryError` here

          // const myJSON:errorModel =error;
          const myJSON = error;
          // console.log(myJSON.data.message)

          // if(myJSON.data.message==='Unauthorized'){

          toast.show("Auto Log out", {
            type: "danger",
            placement: "bottom",
            duration: 8000,
            animationType: "slide-in",
          });
          dispatch(
            loginData({
              userLogin: false,
              token: "",
              userData: {
                id: 0,
                email: "",
                first_name: "",
                last_name: "",
              },
            })
          );

          navigation.navigate("SigninDrawer");
        }

        // }
      }
    }
  }, [data]);

  if (isLoading || featuredMeals.length < 1) {
    return (
      <>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(3, 0, 2, 0.30)",
            height: Screenheight,
            width: ScreenWidth,
            position: "absolute",
            zIndex: 99,
          }}
        >
          <View>
            <Spinner
              //visibility of Overlay Loading Spinner
              visible={isLoading}
              //Text with the Spinner
              // textContent={"Loading..."}
              //Text style of the Spinner Text
              // textStyle={styles.spinnerTextStyle}
            />
          </View>
        </View>
        <SkeletonDashboard />
      </>
    );
  } else {
    return (
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: secundaryColor7,
            flex: 1,
          }}
        >
          <DashInfo dash={dash} />
          <Search trigger={trigger} search={search} setSearch={setSearch} />
          <Categories navigation={navigation} />
          {!dataSearchApi ? (
            <FeaturedMeals
              featuredMeals={featuredMeals}
              navigation={navigation}
              cart={cart}
              isLoadingDataSearch={isLoadingDataSearch}
              isFetching={isFetching}
            />
          ) : dataSearchApi.length > 0 ? (
            <FeaturedMeals
              isLoadingDataSearch={isLoadingDataSearch}
              dataSearchApi={dataSearchApi}
              featuredMeals={dataSearchApi}
              navigation={navigation}
              isLoadingDataSearch={isLoadingDataSearch}
              isFetching={isFetching}
            />
          ) : (
            <>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: 16,
                  lineHeight: 30,
                  letterSpacing: 0.15,
                  color: "#262626",
                  paddingLeft: 20,
                }}
              >
                Search Result
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 40,
                }}
              >
                <Text
                  style={{
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: 16,
                    lineHeight: 30,
                    letterSpacing: 0.15,
                    color: "#262626ad",
                    // paddingLeft: 20,

                    alignSelf: "center",
                  }}
                >
                  No item found
                </Text>
                <MaterialIcons
                  name="search-off"
                  size={30}
                  color="#262626ad"
                  style={{ marginLeft: 5 }}
                />
              </View>
            </>
          )}
          <FeaturedMeals
            featuredMeals={featuredMeals}
            navigation={navigation}
          />
        </ScrollView>
      </>
    );
  }
};

export default Dashboard;
