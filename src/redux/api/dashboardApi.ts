import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Dashboard } from "../../model/DashboardModel";
import { useSelector } from "react-redux";
import { selectloginToken } from "../store";
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { URL_VAR } from "@env";

// export const token = useSelector(selectloginToken);

// Define a service using a base URL and expected endpoints
export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL_VAR}/user/`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).login.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      } else {
        console.log("token dosent exist");
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getdashboard: builder.query<Dashboard, string>({
      query: () => "dashboard",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetdashboardQuery } = dashboardApi;
