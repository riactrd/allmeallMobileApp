import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Alert
} from "react-native";
import React, { useState } from "react";
import {
  mainColor,
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import CardDetails from "./CardDetails";
import { CardField, useConfirmPayment, createPaymentMethod, cus, } from "@stripe/stripe-react-native";


const Checkout = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();

  const handlePayPress = async () => {
     // 1. Gather the customer's billing information (e.g., email)
    if (!cardDetails?.complete || !email) {
      Alert.alert("Please enter complete card details and email");
      return;
    }

    const billingDetails = {
      email: email,
    };

    

   
    createPaymentMethod({
      paymentMethodType: "Card",      
      card: cardDetails,
      billing_details: {
        name: 'Jenny Rosen',
      },
    })
    .then(function(result) {
      // Handle result.error or result.paymentMethod
      if (result.error) {
        console.log("Error al crear el PaymentMethod:", result.error);
      } else {
        console.log("Resultado de createPaymentMethod:", result);
        // Aquí puedes manejar result.paymentMethod si es necesario
  
        // Agrega la lógica adicional aquí según tus requisitos
      }
    });
    

     // 2. Create a customer in Stripe
     const customer = await createCustomer({
      email: email,
      //payment_method: cardDetails?.paymentMethodId,
    });

    if (customer.error) {
      console.log("Error al crear el cliente en Stripe:", customer.error);
      return;
    }

   
   

    
  };
  return (
    <>
    <View style={styles.container2}>
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChangeText={(value) => setEmail(value)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails);
        }}
      />
      <Button  title="Pay" onPress={handlePayPress} />
    </View>
     
    </>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: secundaryColor,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },

  input: {
    backgroundColor: "#efefefef",
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  wrapper: {
    // backgroundColor: '#000',
    // width: ScreenWidth-20,
    flexDirection: "column",
    alignItems: "center",
  },
  textDivide: {
    flexDirection: "row",
    width: ScreenWidth - 20,
    marginBottom: 20,
    alignItems: "center",
    marginTop: 30,
  },
  inputContainer: {
    // flexDirection: "column",
    // justifyContent: "center",
    // width: ScreenWidth - 20,
    // marginBottom: 20,
  },
  headerTextInput: {
    // fontWeight: "600",
    // fontSize: 12,
    // lineHeight: 21,
    // letterSpacing: 0.15,
    // color: thirdColor,
  },
  input: {
    // padding: 20,
    // marginTop: 10,
    // borderWidth: 0.5,
    // borderRadius: 5,
    // borderColor: "rgba(0, 0, 0, 0.12)",
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
  instructionsText: {
    // fontWeight: "600",
    // fontSize: 12,
    // lineHeight: 15,
    // letterSpacing: 0.15,
    // color: thirdColor,
    // width: 286,
    // height: "auto",
  },
  instructionsTextsub: {
    // fontWeight: "400",
    // fontSize: 10,
    // lineHeight: 15,
    // letterSpacing: 0.15,
    // color: thirdColor,
    // width: 286,
    // height: "auto",
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
  inputContainerHeader: {
    flexDirection: "row",
    justifyContent: "center",
    width: ScreenWidth - 20,
    marginBottom: 20,
    alignItems: "center",
  },
  textHeader: {
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: thirdColor,
    width: 250,
    textAlign: "center",
  },
  picker: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: ScreenWidth - 20,
    marginBottom: 20,
    alignItems: "center",
    padding: 20,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.12)",
  },
  textHeaderPicker: {
    color: "rgba(0, 0, 0, 0.62)",
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  addButtom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    marginBottom: 20,
    backgroundColor: mainColor,
    padding: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  containerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: ScreenWidth - 20,
  },
  inputCard: {
    padding: 20,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.12)",
    width: 100,
  },
  inputContainerCard: {
    flexDirection: "column",
    justifyContent: "center",
    width: 169,
    marginBottom: 20,
    // marginRight: 10,
  },
  bottomTextTotal: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: thirdColor,
  },
  bottomText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1.25,
    color: thirdColor,
    textAlign: "center",
    width: 300,
  },
  card: {
    backgroundColor: "white",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },

  input: {
    backgroundColor: "white",
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
});
