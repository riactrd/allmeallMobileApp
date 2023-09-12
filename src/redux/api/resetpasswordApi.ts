import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResetPassword, ResetPasswordModel } from "../../model/ResetPasswordModel";
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


export const resetpasswordApi = createApi({
  
  reducerPath: "resetpasswordApi",
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
    sentresetpassword: builder.mutation<ResetPasswordModel, ResetPassword>({
      query: resetpassword =>({
          url: 'reset_password.json',
          method: 'POST',
          body: resetpassword
      })
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useSentresetpasswordMutation,
    } = resetpasswordApi;