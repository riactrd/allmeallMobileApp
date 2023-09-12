import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store"
import { MycartModel, UpdateMyCart } from "../../model/MyCartModel";
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


export const myCartApi = createApi({
  
  reducerPath: "myCartApi",
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
    getmyCart: builder.query<MycartModel , string | boolean>({
      query: () => "my-cart",
      
    }),
    
    // getaddressesId: builder.query({
    //     query: (id) => `addresses/${id}`,
    // }),
    increaseCart: builder.query<MycartModel, string | boolean>({
      query: id =>({
          url: `change-quantity/${id}/+`,
          method: 'GET',
          
      })
    }),
    decreaseCart: builder.query<MycartModel, string | boolean>({
      query: id =>({
          url: `change-quantity/${id}/-`,
          method: 'GET',
          
      })
    }),
    updatecart: builder.query<MycartModel, UpdateMyCart | boolean >({
      query: (cart) =>({
          url: 'my-cart',
          method: 'GET',
          body: cart
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
    useGetmyCartQuery,
    // useCreateAddCartMutation,
    useUpdatecartQuery,
    // useDeleteaddressesMutation,
    } = myCartApi;