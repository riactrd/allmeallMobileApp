import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DigitalWalletModel } from "../../model/DigitalWalletModel";
import { RootState } from "../store";
import { URL_VAR } from "@env";

interface errorModel{
  data:{
      code: number,
      error:{
        message: string,
      },
      success:boolean,
  }
}


export const confirmPaymentApi = createApi({
  
  reducerPath: "confirmPaymentApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL_VAR}user/`, 
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).login.token

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
}) as BaseQueryFn <string | FetchArgs, unknown, errorModel, {}>,
 
  endpoints: (builder) => ({
    confirmPayment: builder.mutation<DigitalWalletModel , string | boolean>({      
      query: (body) => ({
        url: "payments/confirm-payment",
        method: "POST",
        body,
      }),
      
    }),
    

  }),
});


export const { 
   useConfirmPaymentMutation
    } = confirmPaymentApi;