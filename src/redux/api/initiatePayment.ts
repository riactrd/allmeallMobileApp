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


export const initiatePaymentApi = createApi({
  
  reducerPath: "initiatePaymentApi",
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
    createInitiatePayment: builder.mutation<DigitalWalletModel , string | boolean>({      
      query: (body) => ({
        url: "payments/initiate-payment",
        method: "POST",
        body,
      }),
      
    }),
    

  }),
});


export const { 
   useCreateInitiatePaymentMutation
    } = initiatePaymentApi;