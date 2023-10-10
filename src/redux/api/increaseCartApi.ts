import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store"
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


export const increasemyCartApi = createApi({
  
  reducerPath: "increasemyCartApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL_VAR}user/carts/`, 
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
   
    increaseCart: builder.mutation<MycartModel, number | boolean>({
      query: id =>({
          url: `change-quantity/${id}/+`,
          method: 'POST',
          
      })
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useIncreaseCartMutation,
    // useCreateAddCartMutation,
    // useUpdateallergicMutation,
    // useDeleteaddressesMutation,
    } = increasemyCartApi;