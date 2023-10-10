import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MenuModel } from "../../model/MenuModel";
import { URL_VAR } from "@env";
import { RootState } from "../store";

// export const token = useSelector(selectloginToken);

// Define a service using a base URL and expected endpoints
export const categoriesApi = createApi({
  
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL_VAR}user/menu/`, 
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).login.token

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
}),
  endpoints: (builder) => ({
    getcategories: builder.query<MenuModel , string>({
      query: (category) => `${category}?search=&category_ids=&is_diabetic_friendly=&page=1`
      
      
    }),


  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetcategoriesQuery,
    } = categoriesApi;