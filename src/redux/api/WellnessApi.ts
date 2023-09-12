import { URL_VAR } from "@env";
import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WellnessModel, WellnessPostsModel } from "../../model/WellnessModel";
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


export const WellnessApi = createApi({
  
  reducerPath: "WellnessApi",
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
    getWellness: builder.query<WellnessModel[] , number | boolean>({
      query: () => `user/wellness-posts`,
      
    }),
    getWellnessId: builder.query<WellnessModel , number | boolean>({
        query: (id) => `user/wellness-posts/${id}`,
    }),
    // addmyorder: builder.mutation<AddressModel, NewAddressModel>({
    //   query: address =>({
    //       url: 'addresses',
    //       method: 'POST',
    //       body: address
    //   })
    // }),
    // updatemyorder: builder.mutation<AddressModel, EditAddressModel >({
    //   query: ({id, ...address}) =>({
    //       url: `addresses/${id}`,
    //       method: 'PUT',
    //       body: address
    //   })
    // }),
  //   deletemyorder: builder.mutation({
  //     query: (id) =>({
  //         url: `addresses/${id}`,
  //         method: 'DELETE',
  //     })
  // }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetWellnessQuery,
    useGetWellnessIdQuery,
    // useAddWellnessMutation,
    // useUpdateWellnessMutation,
    // useDeleteWellnessMutation,
    } = WellnessApi;