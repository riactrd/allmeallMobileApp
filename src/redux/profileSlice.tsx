import { createSlice } from "@reduxjs/toolkit";

const myProfileSlice = createSlice({
  name: "myProfile",
  initialState: {
    name: "Vacio",
    lastname: "",
    phone: "",
    dateofBirth: "",
    secondaryPhone: "",
    gender: "",
  },

  reducers: {
    setProfileData: (state, action) => {
      // Esta función se usará para actualizar los datos del perfil
      const { name, lastname, phone, dateofBirth, secondaryPhone, gender } =
        action.payload;
      state.name = name;
      state.lastname = lastname;
      state.phone = phone;
      state.dateofBirth = dateofBirth;
      state.secondaryPhone = secondaryPhone;
      state.gender = gender;
    },
  },
});

export const { setProfileData } = myProfileSlice.actions;
export default myProfileSlice.reducer;
