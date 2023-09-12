import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../model/SigninModel";


export type loginType={
     userLogin: boolean;
     token: string;
     userData: User;
  }


  const initialState:loginType = {
     token: '',
     userData: {
        id: 0,
        email: '',
        first_name: '',
        last_name: '',
     },
     userLogin: false
  };

  const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
    loginData(state, action: PayloadAction<loginType>){
        state.userLogin = action.payload.userLogin
        state.token = action.payload.token
        state.userData = action.payload.userData
       
    }
  }
  })

  export const { loginData }= loginSlice.actions
  export default loginSlice.reducer;