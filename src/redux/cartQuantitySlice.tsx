import { createSlice } from "@reduxjs/toolkit";

const cartQuantity = createSlice({
  name: "cartQuantity",
  initialState: {
    items: [], // Un arreglo para almacenar los elementos del carrito
  },
  reducers: {
    addItem: (state, action) => {
      const { id, quantity, cantidad } = action.payload;

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

    deleteItem: (state, action) => {
      const { id } = action.payload;
      // console.log("slice", action.payload);
      // Busca el índice del elemento a eliminar en el arreglo items
      const index = state.items.findIndex((item) => item.idItemCart === id);

      if (index !== -1) {
        // Establece la cantidad del elemento a cero
        state.items[index].cantidad = 0;
        // Elimina el elemento del carrito
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addItem, deleteItem } = cartQuantity.actions;

export default cartQuantity.reducer;
