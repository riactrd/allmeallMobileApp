import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store"
import { allergicEdict, AllergicModel } from "../../model/AllergicModel";
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


export const allergicApi = createApi({
  
  reducerPath: "allergicApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL_VAR}user/profile/`, 
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
    getallergic: builder.query<AllergicModel , string | boolean>({
      query: () => "update-allergic-ingredients.json",
      
    }),
    // getaddressesId: builder.query({
    //     query: (id) => `addresses/${id}`,
    // }),
    // createAddCart: builder.mutation<CartModelApi, NewCartModelApi>({
    //   query: cart =>({
    //       url: 'create',
    //       method: 'POST',
    //       body: cart
    //   })
    // }),
    updateallergic: builder.mutation<AllergicModel, allergicEdict >({
      query: (allergic) =>({
          url: 'update-allergic-ingredients.json',
          method: 'POST',
          body: allergic
      })
    }),
    // deleteaddresses: builder.mutation({
    //   query: (id) =>({
    //       url: `addresses/${id}`,
    //       method: 'DELETE',
    //   })
    //  }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetallergicQuery,
    // useCreateAddCartMutation,
    useUpdateallergicMutation,
    // useDeleteaddressesMutation,
    } = allergicApi;