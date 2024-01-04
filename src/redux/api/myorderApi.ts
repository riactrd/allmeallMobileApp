import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MyorderModel } from "../../model/MyorderModel";
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


export const myorderApi = createApi({
  
  reducerPath: "myorderApi",
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
    getmyorder: builder.query<MyorderModel , string | boolean>({
      query: () => `orders?page=1`,
      
    }),
    getmyorderId: builder.query({
        query: (id) => `orders/${id}`,
    }),

    createOrder: builder.mutation({
      query: (body) => {
        console.log(body)
        return {
          url: "orders?page=1",
          method: "post",
           headers: {
               'Content-Type': 'application/json',
              // Authorization: `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`,
           },
          body,
        };
      },

    })
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
    useGetmyorderQuery,
    useGetmyorderIdQuery,
    useCreateOrderMutation    
    } = myorderApi;