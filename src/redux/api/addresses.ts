import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { NewAddressModel, AddressModel, EditAddressModel } from "../../model/AddressModel";
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


export const addressesApi = createApi({
  
  reducerPath: "addressesApi",
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
    getaddresses: builder.query<AddressModel , string | boolean>({
      query: (addresses) => `addresses/${addresses}`,
      
    }),
    getaddressesId: builder.query({
        query: (id) => `addresses/${id}`,
    }),
    addaddresses: builder.mutation<AddressModel, NewAddressModel>({
      query: address =>({
          url: 'addresses',
          method: 'POST',
          body: address
      })
    }),
    updateaddresses: builder.mutation<AddressModel, EditAddressModel >({
      query: ({id, ...address}) =>({
          url: `addresses/${id}`,
          method: 'PUT',
          body: address
      })
    }),
    deleteaddresses: builder.mutation({
      query: (id) =>({
          url: `addresses/${id}`,
          method: 'DELETE',
      })
  }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetaddressesQuery,
    useAddaddressesMutation,
    useUpdateaddressesMutation,
    useDeleteaddressesMutation,
    } = addressesApi;