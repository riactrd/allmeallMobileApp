import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { ScreenWidth } from "./shared";
import { useResentCodeMutation } from "../redux/api/resentCode";
import { useToast } from "react-native-toast-notifications";

type Props = {
  id: string;
};

const ResentCode = ({ id }: Props) => {
  const [resentCode, { data, isError, error, isSuccess }] =
    useResentCodeMutation();
  const toast = useToast();

  useEffect(() => {
    if (isSuccess) {
      toast.show(JSON.stringify(data?.message), {
        type: "success",
        placement: "bottom",
        duration: 8000,
        animationType: "slide-in",
      });
    }

    if (isError) {
      if (error) {
        if ("status" in error) {
          // you can access all properties of `FetchBaseQueryError` here
          toast.show(JSON.stringify(error.data.error), {
            type: "error",
            placement: "bottom",
            duration: 8000,
            animationType: "slide-in",
          });
        }
      }
    }
  }, [data, isError]);

  return (
    <TouchableOpacity
      onPress={() => resentCode(id)}
      style={styles.saveButtomSecond}
    >
      <Text style={styles.saveButtomTextSecond}>Resend Verification Code</Text>
    </TouchableOpacity>
  );
};

export default ResentCode;

const styles = StyleSheet.create({
  saveButtomSecond: {
    flexDirection: "row",
    justifyContent: "center",
    width: ScreenWidth - 20,
    marginBottom: 20,
    // backgroundColor: mainColor,
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtomTextSecond: {
    // color:secundaryColor,
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 1.25,
    // lineHeight: 16,
  },
});
