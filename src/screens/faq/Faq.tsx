import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  mainColor,
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import FaqItem from "./FaqItem";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Faq = () => {
  const [whatis, Setwhatis] = useState(true);
  const [why, Setwhy] = useState(true);
  const [container, Setcontainer] = useState(true);
  const [howfresh, Sethowfresh] = useState(true);
  const [freshis, Setfreshis] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.containerheaderText}>
          <Text style={styles.headerText}>
            All Meal Prep Fequently Asked Questions
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: ScreenWidth, marginBottom: 5 }}
        >
          <View style={styles.adressesContainerItem}>
            <View style={styles.containerItem}>
              <View style={styles.headerTextButtom}>
                <Text style={styles.headerTextItem}>
                  What is All Meal Prep?
                </Text>
                <TouchableOpacity onPress={() => Setwhatis(!whatis)}>
                  {whatis ? (
                    <MaterialIcons
                      name="remove"
                      color={thirdColor}
                      style={styles.icon}
                    />
                  ) : (
                    <MaterialIcons
                      name="add"
                      color={thirdColor}
                      style={styles.icon}
                    />
                  )}
                </TouchableOpacity>
              </View>
              {whatis && (
                <View style={styles.hideContent}>
                  <View style={styles.textDetailsContainer}>
                    <Text style={styles.textDetails}>
                      All Meal Prep offers you delicious gourmet healthy food
                      options for you to eat healthy during the week.
                    </Text>
                  </View>
                  <View style={styles.textDetailsContainer}>
                    <Text style={styles.textDetails}>- Delicious Food</Text>
                    <Text style={styles.textDetails}>- Healthy Choice</Text>
                    <Text style={styles.textDetails}>- Chef Prepared Food</Text>
                    <Text style={styles.textDetails}>- Free Delivery</Text>
                  </View>
                </View>
              )}
            </View>
            <View style={styles.containerItem}>
              <View style={styles.headerTextButtom}>
                <Text style={styles.headerTextItem}>Why All Meal Prep?</Text>
                <TouchableOpacity onPress={() => Setwhy(!why)}>
                  {why ? (
                    <MaterialIcons
                      name="remove"
                      color={thirdColor}
                      style={styles.icon}
                    />
                  ) : (
                    <MaterialIcons
                      name="add"
                      color={thirdColor}
                      style={styles.icon}
                    />
                  )}
                </TouchableOpacity>
              </View>
              {why && (
                <View style={styles.hideContent}>
                  <View style={styles.textDetailsContainer}>
                    <Text style={styles.textDetails}>
                      All Meal Prep offers you delicious gourmet healthy food
                      options for you to eat healthy during the week.
                    </Text>
                  </View>
                  <View style={styles.textDetailsContainer}>
                    <Text style={styles.textDetails}>- Delicious Food</Text>
                    <Text style={styles.textDetails}>- Healthy Choice</Text>
                    <Text style={styles.textDetails}>- Chef Prepared Food</Text>
                    <Text style={styles.textDetails}>- Free Delivery</Text>
                  </View>
                </View>
              )}
            </View>
            {/* <View style={styles.containerItem}>
                        <View style={styles.headerTextButtom}>
                            <Text style={styles.headerTextItem}>Meal Prep Containers</Text>
                            <TouchableOpacity onPress={()=>Setcontainer(!container)}>
                                    {
                                       container ? (
                                        <MaterialIcons name="remove" color={thirdColor} style={styles.icon}/>
                                       ) : (
                                        <MaterialIcons name="add" color={thirdColor} style={styles.icon}/>
                                       )  
                                    }
                                   
                            </TouchableOpacity>
                        </View>
                        {
                            container && (
                                <View style={styles.hideContent}>
                                    <View style={styles.textDetailsContainer}>
                                        <Text style={styles.textDetails}>All Meal Prep offers you delicious gourmet healthy food options for you to eat healthy during the week.</Text>
                                    </View>
                                    <View style={styles.textDetailsContainer}>
                                        <Text style={styles.textDetails}>- Delicious Food</Text>
                                        <Text style={styles.textDetails}>- Healthy Choice</Text>
                                        <Text style={styles.textDetails}>- Chef Prepared Food</Text>
                                        <Text style={styles.textDetails}>- Free Delivery</Text>
                                     </View>
                                 </View>
                            )
                        }
                    </View> */}
            <View style={styles.containerItem}>
              <View style={styles.headerTextButtom}>
                <Text style={styles.headerTextItem}>
                  How fresh is All Meal Prep
                </Text>
                <TouchableOpacity onPress={() => Sethowfresh(!howfresh)}>
                  {howfresh ? (
                    <MaterialIcons
                      name="remove"
                      color={thirdColor}
                      style={styles.icon}
                    />
                  ) : (
                    <MaterialIcons
                      name="add"
                      color={thirdColor}
                      style={styles.icon}
                    />
                  )}
                </TouchableOpacity>
              </View>
              {howfresh && (
                <View style={styles.hideContent}>
                  <View style={styles.textDetailsContainer}>
                    <Text style={styles.textDetails}>
                      All Meal Prep offers you delicious gourmet healthy food
                      options for you to eat healthy during the week.
                    </Text>
                  </View>
                  <View style={styles.textDetailsContainer}>
                    <Text style={styles.textDetails}>- Delicious Food</Text>
                    <Text style={styles.textDetails}>- Healthy Choice</Text>
                    <Text style={styles.textDetails}>- Chef Prepared Food</Text>
                    <Text style={styles.textDetails}>- Free Delivery</Text>
                  </View>
                </View>
              )}
            </View>
            <View style={styles.containerItem}>
              <View style={styles.headerTextButtom}>
                <Text style={styles.headerTextItem}>
                  How fresh is All Meal Prep
                </Text>
                <TouchableOpacity onPress={() => Setfreshis(!freshis)}>
                  {freshis ? (
                    <MaterialIcons
                      name="remove"
                      color={thirdColor}
                      style={styles.icon}
                    />
                  ) : (
                    <MaterialIcons
                      name="add"
                      color={thirdColor}
                      style={styles.icon}
                    />
                  )}
                </TouchableOpacity>
              </View>
              {freshis && (
                <View style={styles.hideContent}>
                  <View style={styles.textDetailsContainer}>
                    <Text style={styles.textDetails}>
                      All Meal Prep offers you delicious gourmet healthy food
                      options for you to eat healthy during the week.
                    </Text>
                  </View>
                  <View style={styles.textDetailsContainer}>
                    <Text style={styles.textDetails}>- Delicious Food</Text>
                    <Text style={styles.textDetails}>- Healthy Choice</Text>
                    <Text style={styles.textDetails}>- Chef Prepared Food</Text>
                    <Text style={styles.textDetails}>- Free Delivery</Text>
                  </View>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: secundaryColor,
  },
  wrapper: {
    // backgroundColor: '#000',
    // width: ScreenWidth-20,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "14%",
  },
  viewScroll: {
    // width: ScreenWidth-20,
    flexDirection: "column",
    alignItems: "center",
    // padding:1,
    // marginBottom:320,
  },
  containerheaderText: {
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    width: 280,
    textAlign: "center",
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: thirdColor,
  },
  adressesContainerItem: {
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "auto",
  },
  containerItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { height: 3, width: 3 },
    elevation: 1.4,
    backgroundColor: "#fff",
    width: ScreenWidth - 20,
    height: "auto",
    padding: 15,
    marginBottom: 25,
  },
  icon: {
    fontSize: 24,
    marginRight: 20,
  },
  headerTextItem: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: thirdColor,
    width: 286,
    height: "auto",
  },
  headerTextButtom: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "auto",
    marginBottom: "auto",
  },
  textDetails: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.15,
    color: thirdColor,
  },
  textDetailsContainer: {
    marginBottom: 10,
  },
  hideContent: {
    marginTop: 10,
  },
});
