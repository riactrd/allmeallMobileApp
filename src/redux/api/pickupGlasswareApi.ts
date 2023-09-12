import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PickupGlasswareModel } from "../../model/pickupGlasswareModel";
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


export const pickupGlasswareApi = createApi({
  
  reducerPath: "pickupGlasswareApi",
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
    getpickupGlassware: builder.query<PickupGlasswareModel , string | boolean>({
      query: () =>({
              url: 'pickup-glassware-requests',
              method: 'GET',
              
          })
      
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
    createpickupGlassware: builder.mutation({
      query: () =>({
          url: `pickup-glassware-requests/create`,
          method: 'POST',
      })
    }),
    deletpickupGlassware: builder.mutation({
      query: (id) =>({
          url: `pickup-glassware-requests/${id}/cancel`,
          method: 'POST',
      })
     }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetpickupGlasswareQuery,
    useCreatepickupGlasswareMutation,
    // useUpdatpickupGlasswareMutation,
    useDeletpickupGlasswareMutation,
    } = pickupGlasswareApi;