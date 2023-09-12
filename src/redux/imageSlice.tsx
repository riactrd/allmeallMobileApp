import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartModel } from "../model/CartModel";
import userPick from '../../assets/img/userPick.png'

export type imageType={
    image: string
  }


  const initialState:imageType = {
    image:'https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg'
  };

  const imageSlice = createSlice({
    name: "avatar",
  initialState,
  reducers:{
    changeImageAvatar(state, action: PayloadAction<imageType>){
        state.image = action.payload.image
       
    }
  }
  })

  export const { changeImageAvatar }= imageSlice.actions
  export default imageSlice.reducer;