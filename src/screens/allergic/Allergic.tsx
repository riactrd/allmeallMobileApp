import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  mainColor,
  Screenheight,
  ScreenWidth,
  secundaryColor,
  thirdColor,
} from "../../componets/shared";
import Checkbox from "expo-checkbox";
import { useUpdateallergicMutation } from "../../redux/api/allergicApi";
import { useToast } from "react-native-toast-notifications";
import { useGetprofileApiQuery } from "../../redux/api/profileApi";

const elements = [
  { id: 1, label: "Blackberries" },
  { id: 2, label: "Raspberries" },
  { id: 3, label: "Blackberries" },
  { id: 4, label: "Raspberries" },
  { id: 5, label: "Squash (oz)" },
  { id: 6, label: "6 oz Blackened Salmon" },
  { id: 7, label: "Grapes" },
  { id: 8, label: "Cheeseburger Casserole GB" },
  { id: 9, label: "Hard Boiled Egg(s)" },
  { id: 10, label: "Mangos" },
  { id: 11, label: "Grapes" },
  { id: 12, label: "Cheeseburger Casserole GB" },
  { id: 13, label: "Hard Boiled Egg(s)" },
  { id: 14, label: "Sliced Carrots (oz)" },
  { id: 15, label: "Vegan Meatballs" },
  { id: 16, label: "Sliced Carrots (oz)" },
  { id: 17, label: "Sliced Carrots (oz)" },
  { id: 18, label: "Vegan Meatballs" },
  { id: 19, label: "Slicced Carrots" },
  { id: 20, label: "Sliced Carrots (oz)" },
  { id: 21, label: "Blueberries" },
  { id: 22, label: "Zuchinni (oz)" },
  { id: 23, label: "Squash (oz)" },
  { id: 24, label: "Dates" },
  { id: 25, label: "6 oz Chicken Adobo" },
];

const Allergic = () => {
  const [deselectedIds, setDeselectedIds] = useState([]);
  const [selectedElements, setSelectedElements] = useState(
    elements.map((element) => ({
      ...element,
      isSelected: !deselectedIds.includes(element.id),
    }))
  );

  const { data } = useGetprofileApiQuery();
  const [send, { error, isLoading }] = useUpdateallergicMutation();
  const toast = useToast();

  useEffect(() => {
    if (data && data.data && data.data.allergic_ingredients) {
      const deselectedIds = data.data.allergic_ingredients;
      const initialSelectedElements = elements.map((element) => ({
        ...element,
        isSelected: !deselectedIds.includes(element.id),
      }));
      setSelectedElements(initialSelectedElements);
    }
  }, [data]);

  console.log(deselectedIds);

  // const toggleElementSelection = (elementId) => {
  //   // En lugar de usar prevSelectedElements, vamos a clonar selectedElements actual
  //   const updatedSelectedElements = [...selectedElements];
  //   const elementIndex = updatedSelectedElements.findIndex(
  //     (element) => element.id === elementId
  //   );

  //   if (elementIndex !== -1) {
  //     // Cambiar el estado de selección del elemento
  //     updatedSelectedElements[elementIndex] = {
  //       ...updatedSelectedElements[elementIndex],
  //       isSelected: !updatedSelectedElements[elementIndex].isSelected,
  //     };

  //     // Actualizar el estado
  //     setSelectedElements(updatedSelectedElements);

  //     // Verificar si el elemento se ha deseleccionado
  //     if (!updatedSelectedElements[elementIndex].isSelected) {
  //       console.log("Deseleccionado el elemento con ID:", elementId);
  //     }
  //   }
  // };

  const toggleElementSelection = (elementId) => {
    // Clona el estado de selectedElements actual
    const updatedSelectedElements = [...selectedElements];
    const elementIndex = updatedSelectedElements.findIndex(
      (element) => element.id === elementId
    );

    if (elementIndex !== -1) {
      // Cambiar el estado de selección del elemento
      updatedSelectedElements[elementIndex] = {
        ...updatedSelectedElements[elementIndex],
        isSelected: !updatedSelectedElements[elementIndex].isSelected,
      };

      // Actualizar el estado de selectedElements
      setSelectedElements(updatedSelectedElements);

      // Verificar si el elemento se ha deseleccionado
      if (!updatedSelectedElements[elementIndex].isSelected) {
        // Agregar el ID a la lista de deseleccionados
        setDeselectedIds((prevDeselectedIds) => [
          ...prevDeselectedIds,
          elementId,
        ]);
      } else {
        // Si se vuelve a seleccionar, elimina el ID de la lista de deseleccionados
        setDeselectedIds((prevDeselectedIds) =>
          prevDeselectedIds.filter((id) => id !== elementId)
        );
      }
    }
  };

  // console.log(deselectedIds);

  const handlerSend = async () => {
    try {
      const response = await send({
        deselectedIds,
      }).unwrap();
      toast.show(JSON.stringify(response.data.message), {
        type: "success",
        placement: "center",
        duration: 8000,
        animationType: "slide-in",
      });
      console.log(response.data.message);
    } catch (error) {
      console.error("Error :", error);
      toast.show(JSON.stringify(error), {
        type: "danger",
        placement: "center",
        duration: 8000,
        animationType: "slide-in",
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.containerheaderText}>
          <Text style={styles.headerText}>
            Ingredients that you don't Like or Allergic to:
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.saveButtom}
            onPress={handlerSend}
          >
            <Text style={styles.saveButtomText}>Save</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20 }}
        >
          <View style={styles.columnsContainer}>
            <View style={styles.column}>
              {selectedElements
                .slice(0, selectedElements.length / 2)
                .map((element) => (
                  <View key={element.id} style={styles.checkInputContainer}>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                        value={element.isSelected}
                        onValueChange={() => toggleElementSelection(element.id)}
                        style={styles.checkbox}
                        color={element.isSelected ? mainColor : undefined}
                      />
                      <Text style={styles.itemtext}>{element.label}</Text>
                    </View>
                  </View>
                ))}
            </View>
            <View style={styles.column}>
              {selectedElements
                .slice(selectedElements.length / 2)
                .map((element) => (
                  <View key={element.id} style={styles.checkInputContainer}>
                    <View style={styles.containerChekbox}>
                      <Checkbox
                        value={element.isSelected}
                        onValueChange={() => toggleElementSelection(element.id)}
                        style={styles.checkbox}
                        color={element.isSelected ? mainColor : undefined}
                      />
                      <Text style={styles.itemtext}>{element.label}</Text>
                    </View>
                  </View>
                ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Allergic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: secundaryColor,
  },
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
  },
  containerheaderText: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: ScreenWidth - 20,
    alignItems: "center",
  },
  headerText: {
    width: 227,
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: thirdColor,
  },
  saveButtomText: {
    color: secundaryColor,
    fontWeight: "600",
    fontSize: 10,
    letterSpacing: 1.25,
    lineHeight: 16,
  },
  saveButtom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 92,
    height: 32,
    backgroundColor: mainColor,
    borderRadius: 8,
  },
  columnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: ScreenWidth - 20,
  },
  column: {
    width: "48%",
  },
  checkInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerChekbox: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 10,
  },
  itemtext: {
    color: thirdColor,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 15,
    letterSpacing: 0.15,
  },
});
