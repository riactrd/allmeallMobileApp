import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ForgotPassword, ForgotPasswordModel } from "../../model/ForgotPasswordModel";
import { URL_VAR } from "@env";
import { RootState } from "../store";

interface errorModel{
  data:{
      code: number,
      error:{
        message: string,
      },
      success:boolean,
  }
}


export const forgotpasswordApi = createApi({
  
  reducerPath: "forgotpasswordApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL_VAR}auth/`, 
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
    sentforgotpassword: builder.mutation<ForgotPasswordModel, ForgotPassword>({
      query: forgotpassword =>({
          url: 'forgot_password.json',
          method: 'POST',
          body: forgotpassword
      })
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useSentforgotpasswordMutation,
    } = forgotpasswordApi;