import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";import { ContactModel, ResponseContactModel } from "../../model/ContactModel";
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


export const contactApi = createApi({
  
  reducerPath: "contactApi",
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
   
    sentcontact: builder.mutation<ResponseContactModel, ContactModel>({
      query: contact =>({
          url: 'contact-us',
          method: 'POST',
          body: contact
      })
    }),
    

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useSentcontactMutation,
    } = contactApi;