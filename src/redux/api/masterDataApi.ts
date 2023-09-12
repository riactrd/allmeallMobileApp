import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { MycartModel } from "../../model/MyCartModel";
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


export const masterDataApi = createApi({
  
  reducerPath: "masterDataApi",
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
    getmaster: builder.query<MycartModel , string | boolean>({
      query: () => "master_data.json",
      
    }),
    

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetmasterQuery,
    } = masterDataApi;