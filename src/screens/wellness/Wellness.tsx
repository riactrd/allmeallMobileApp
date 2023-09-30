import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ScreenWidth, secundaryColor } from "../../componets/shared";
import Post from "./Post";
import { useGetWellnessQuery } from "../../redux/api/WellnessApi";

// const postList = [1, 2, 3, 4];

const Wellness = () => {
  const { data, isError, isLoading } = useGetWellnessQuery();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (data && data.data && data.data.wellness_posts) {
      setPosts(data.data.wellness_posts);
    }
  }, [data, posts]);

  // console.log(posts);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: ScreenWidth, marginBottom: 5 }}
        >
          <View style={styles.viewScroll}>
            {posts.map((item, index) => (
              <Post key={index} item={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Wellness;

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
