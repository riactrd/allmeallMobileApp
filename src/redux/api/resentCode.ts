import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResentCodeModel } from "../../model/ResentCodeModel";
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
export const resentCodeApi = createApi({
  reducerPath: "resentCodeApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL_VAR}auth/resend_verification_code/` }) as BaseQueryFn<string | FetchArgs, unknown, errorModel, {}>,
  endpoints: (builder) => ({
    resentCode: builder.mutation<ResentCodeModel, string >({
        query: (id) =>{
        
            return{
                url: `${id}.json`,
                method: 'get',
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
               
                };
        },
    }),


  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
     useResentCodeMutation, 
    } = resentCodeApi;