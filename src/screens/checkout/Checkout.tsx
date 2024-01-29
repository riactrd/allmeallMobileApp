import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Alert,
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
import {
  CardField,
  useConfirmPayment,
  createPaymentMethod,
} from "@stripe/stripe-react-native";
import { useCreateInitiatePaymentMutation } from "../../redux/api/initiatePayment";
import { useSelector } from "react-redux";
import { useConfirmPaymentMutation } from "../../redux/api/confirmPayment";
import Spinner from "react-native-loading-spinner-overlay";

const Checkout = ({ route }) => {
  const userState = useSelector((state) => state.login);
  //console.log(userState.userData.email)

  const { createOrderId } = route.params || {};
  //console.log("Desde checkouts",createOrderId)

  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();

  const [initPayment, { data, isLoading }] = useCreateInitiatePaymentMutation();
  const [
    confirmPayment,
    { data: confirmPaymentData, isLoading: confirmPaymentIsLoading },
  ] = useConfirmPaymentMutation();

  useConfirmPaymentMutation;

  const handlePayPress = async () => {
    // 1. Gather the customer's billing information (e.g., email)
    if (!cardDetails?.complete || !email) {
      Alert.alert("Please enter complete card details and email");
      return;
    }
    const billingDetails = {
      email: email,
    };

    // 2 Create Payment Method

    const result = await createPaymentMethod({
      paymentMethodType: "Card",
      card: cardDetails,
      billing_details: {
        name: "Jenny Rosen",
      },
    });

    if (result.error) {
      console.log("Error al crear el PaymentMethod:", result.error);
      return; // Handle the error as needed
    }
    console.log("Resultado de createPaymentMethod:", result.paymentMethod.id);
    // initiate paymentet

    let initiatePaymentRes;

    try {
      initiatePaymentRes = await initPayment({
        order_id: createOrderId,
        user_id: userState.userData.id,
        paid_by: "1",
        email: userState.userData.email,
        user_name: userState.userData.first_name,
        payment_method: result.paymentMethod.id,
      });

      if (initiatePaymentRes) {
        console.log(
          "res de init es :",
          initiatePaymentRes.data.data.payment.payment.id
        );
      }
    } catch (error) {
      console.error(
        "La respuesta de createOrder es falsa o indefinida.",
        error
      );
      return;
    }

    // Confirm Payment

    try {
      const confirmRes = await confirmPayment({
        payment_intent_id: initiatePaymentRes.data.data.payment.payment.id,
        order_id: createOrderId,
        subscriptionId: initiatePaymentRes.data.data.payment.payment.id,
        voucher_id: null,
        nutrition_order_id: null,
        vegandale_order_id: null,
        product_order_id: null,
        donation_id: null,
        from_donation: false,
        from_wallet: false,
        from_tip: false,
        is_from_catering: false,
        is_from_thanks_giving: false,
        payment_type: 7,
      });

      if (confirmRes) {
        navigation.navigate("CheckoutInfoDrawer");
      } else {
        console.error("Error");
      }
    } catch (error) {
      console.log("error en confirm", error);
    }
  };
  return (
    <>
      <View>
        <Spinner
          //visibility of Overlay Loading Spinner
          visible={confirmPaymentIsLoading || isLoading}
          //Text with the Spinner
          // textContent={"Loading..."}
          //Text style of the Spinner Text
          // textStyle={styles.spinnerTextStyle}
        />
      </View>
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
        <Button title="Pay" onPress={handlePayPress} />
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
