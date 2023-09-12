import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CartModelApi, NewCartModelApi } from "../../model/CartModel";
import { URL_VAR } from "@env" 
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


export const addCartApi = createApi({
  
  reducerPath: "addCartApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_VAR, 
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
    // getAddCart: builder.query<AddressModel , string | boolean>({
    //   query: (addresses) => `addresses/${addresses}`,
      
    // }),
    // getaddressesId: builder.query({
    //     query: (id) => `addresses/${id}`,
    // }),
    createAddCart: builder.mutation<CartModelApi, NewCartModelApi>({
      query: cart =>({
          url: 'user/carts/create',
          method: 'POST',
          body: cart
      })
    }),
    // updateaddresses: builder.mutation<AddressModel, EditAddressModel >({
    //   query: ({id, ...address}) =>({
    //       url: `addresses/${id}`,
    //       method: 'PUT',
    //       body: address
    //   })
    // }),
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
    // useGetaddressesQuery,
    useCreateAddCartMutation,
    // useUpdateaddressesMutation,
    // useDeleteaddressesMutation,
    } = addCartApi;