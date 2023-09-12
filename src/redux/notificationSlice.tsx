import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notificationList } from "../data/notification";
import { NotificationModel } from "../model/NotificationModel";

export type notificationsType={
  notificationsTotal: number,
  notificationsItems: NotificationModel[],
  }


  const initialState:notificationsType = {
    notificationsTotal: 0,
    notificationsItems:notificationList,
  };

  const notificationSlice = createSlice({
    name: "notifications",
  initialState,
  reducers:{
    getNotifications(state){
        state.notificationsTotal = state.notificationsItems.length
       
    }
  }
  })

  export const { getNotifications }= notificationSlice.actions
  export default notificationSlice.reducer;