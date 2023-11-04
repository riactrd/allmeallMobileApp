import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import {
  ScreenWidth,
  mainColor,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import { useGetListReferEarnQuery } from "../../redux/api/referEarnApi";

export default function ReferList() {
  const { data } = useGetListReferEarnQuery();
  const [referList, setReferList] = useState([]);

  useEffect(() => {
    if (data) {
      setReferList(data.data);
    }
  }, [data]);

  console.log(referList);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.saveButtom}
          // onPress={handleaddPickup}
        >
          <Text style={styles.saveButtomText}>Pickup Glassware Request</Text>
        </TouchableOpacity>
        <View style={styles.textDivide}>
          <Entypo name="back-in-time" color={mainColor} style={styles.icon} />
          <Text style={styles.textDivideFont}>Old Requests</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: ScreenWidth, marginBottom: 5 }}
        >
          <View style={styles.viewScroll}>
            {pickupRequests.map((item, index) => (
              <View key={index}>
                <PickupItem item={item} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

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
  },
  saveButtom: {
    flexDirection: "row",
    justifyContent: "center",
    width: ScreenWidth - 20,
    marginBottom: 20,
    backgroundColor: mainColor,
    padding: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  saveButtomText: {
    color: secundaryColor,
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 1.25,
    lineHeight: 16,
  },
  textDivide: {
    flexDirection: "row",
    width: ScreenWidth - 20,
    marginBottom: 20,
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    marginRight: 20,
  },
  textDivideFont: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 15,
    letterSpacing: 0.15,
    color: thirdColor,
  },
  viewScroll: {
    // width: ScreenWidth-20,
    flexDirection: "column",
    alignItems: "center",
    // padding:1,
    // marginBottom:320,
    marginBottom: "auto",
    marginTop: 20,
  },
});
