import { createSlice } from "@reduxjs/toolkit";

const cartQuantity = createSlice({
  name: "cartQuantity",
  initialState: {
    items: [], // Un arreglo para almacenar los elementos del carrito
  },
  reducers: {
    addItem: (state, action) => {
      const { id, quantity, cantidad } = action.payload;
      console.log(cantidad);
      console.log("cartquantitySlice:", action.payload);

      // Buscar si ya existe un elemento con el mismo id en el carrito
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // Si el elemento ya existe, actualiza su cantidad
        existingItem.cantidad = cantidad;
      } else {
        // Si el elemento no existe, agrégalo al carrito
        state.items.push(action.payload);
      }
    },
  },
  // reducers: {
  //   addItem: (state, action) => {
  //     console.log("cartQuantitySlice", action.payload);
  //     const { id, cantidad } = action.payload;

  //     // Buscar si ya existe un elemento con el mismo id en el carrito
  //     const existingItemIndex = state.items.findIndex((item) => item.id === id);

  //     if (existingItemIndex !== -1) {
  //       // Si el elemento ya existe, actualiza su cantidad de manera inmutable
  //       state.items = state.items.map((item, index) => {
  //         if (index === existingItemIndex) {
  //           return {
  //             ...item,
  //             cantidad: item.cantidad + 1,
  //           };
  //         }
  //         return item;
  //       });
  //     } else {
  //       // Si el elemento no existe, agrégalo al carrito
  //       state.items.push(action.payload);
  //     }
  //   },
  // },
});

export const { addItem } = cartQuantity.actions;

export default cartQuantity.reducer;
