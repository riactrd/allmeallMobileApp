import {
  StyleSheet,
  Text,
  TextInput,
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSentcontactMutation } from "../../redux/api/ContactApi";

const ContactUs = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [send, { isloading, isSuccess }] = useSentcontactMutation();
  console.log(isSuccess);

  const handlerSend = async () => {
    try {
      const response = await send({ subject, message }).unwrap();
      console.log("Respuesta del servidor:", response);

      // Limpiar los campos después de que la llamada sea exitosa
      setSubject("");
      setMessage("");

      // Realiza cualquier otra lógica que necesites con la respuesta del servidor
    } catch (error) {
      console.error("Error en la solicitud:", error);
      // Maneja el error de la solicitud, si es necesario
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: secundaryColor }}
    >
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.containerheaderText}>
            <Text style={styles.headerText}>
              If you want to Contact All Meal Prep fill the details below and
              we’ll get back to you shortly.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Your Subject"
              style={styles.input}
              onChangeText={(text) => setSubject(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Your Message"
              style={styles.inputMult}
              multiline={true}
              onChangeText={(text) => setMessage(text)}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.saveButtom}
            onPress={handlerSend}
          >
            <Text style={styles.saveButtomText}>Submit Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: secundaryColor,
  },
  wrapper: {
    // backgroundColor: '#000',
    width: ScreenWidth - 20,
    flexDirection: "column",
    alignItems: "center",
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
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: ScreenWidth - 20,
    marginBottom: 20,
  },
  input: {
    padding: 20,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.12)",
  },
  inputMult: {
    height: 162,
    padding: 20,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.12)",
  },

  saveButtom: {
    flexDirection: "row",
    justifyContent: "center",
    width: ScreenWidth - 20,
    marginBottom: 20,
    backgroundColor: mainColor,
    padding: 20,
    borderRadius: 8,
  },
  saveButtomText: {
    color: secundaryColor,
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 1.25,
    lineHeight: 16,
  },
});
