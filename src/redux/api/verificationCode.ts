import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VerifyCodeModel, VerifyCodeModelDataModel } from "../../model/VerifyCodeModel";
import { URL_VAR } from "@env";

interface errorModel{
    data:{
        code: number,
        error:{
          message: string,
        },
        success:boolean,
    },
    status: number,
  }

// Define a service using a base URL and expected endpoints
export const verificationCodeApi = createApi({
  reducerPath: "verificationCodeApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL_VAR}auth/` }) as BaseQueryFn<string | FetchArgs, unknown, errorModel, {}>,
  endpoints: (builder) => ({
    verificationCodeSend: builder.mutation<VerifyCodeModelDataModel, VerifyCodeModel >({
        query: (verify_user) =>{
        
            return{
                url: 'verify_user.json',
                method: 'post',
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
                body: verify_user,
                };
        },
    }),


  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
     useVerificationCodeSendMutation, 
    } = verificationCodeApi;