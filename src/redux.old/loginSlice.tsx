import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../model/UserModel";


export type loginType={
     userLogin: boolean;
     token: string;
     userData: User;
  }


  const initialState:loginType = {
     userLogin: false,
     token: '',
     userData: {
      id: 0,
      email: '',
      first_name: '',
      last_name: '',        
      date_of_birth: '',
      username: '',
      phone_number: '',
      verification_code: '',
      verification_code_expiry:'',
      is_verified: false,
      created_at: '',
      updated_at: '',
     },

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