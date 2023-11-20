import { createSlice } from "@reduxjs/toolkit";

const changePasswordSlice = createSlice({
  name: "changePassword",
  initialState: {
    id: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    isLoading: false,
  },
  reducers: {
    setOldPassword: (state, action) => {
      state.oldPassword = action.payload;
    },

    setNewPassword: (state, action) => {
      state.newPassword = action.payload;
    },

    setConfirmNewPassword: (state, action) => {
      state.confirmNewPassword = action.payload;
    },

    setIsLoding: (state, action) => {
      state.isLoading = action.payload;
    },
    reset: (state, action) => {
      state.oldPassword = "";
      state.newPassword = "";
      state.confirmNewPassword = "";
    },
  },
});

export const {
  setConfirmNewPassword,
  setOldPassword,
  setNewPassword,
  setIsLoding,
  reset,
} = changePasswordSlice.actions;
export default changePasswordSlice.reducer;
