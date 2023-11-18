import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { PickupGlasswareModel } from "../../model/pickupGlasswareModel";
import { RootState } from "../store";
import { URL_VAR } from "@env";

interface errorModel {
  data: {
    code: number;
    error: {
      message: string;
    };
    success: boolean;
  };
}

export const referEarnApi = createApi({
  reducerPath: "referEarnApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL_VAR}user/`,

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).login.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, errorModel, {}>,
  tagTypes: ["ReferList", "UserCode"],

  endpoints: (builder) => ({
    getListReferEarn: builder.query<PickupGlasswareModel, string | boolean>({
      query: () => ({
        url: "referrals",
        method: "GET",
      }),
      providesTags: ["ReferList"],
    }),

    createReferEarn: builder.mutation({
      query: (body) => ({
        url: "referrals",
        method: "POST",
        body,
      }),
      invalidatesTags: ["ReferList"],
    }),

    generatePromoCode: builder.mutation({
      query: (promoCode) => ({
        url: `referrals/generate-promo-code`,
        method: "POST",
        body: {
          promo_code: promoCode,
        },
      }),
      invalidatesTags: ["UserCode"],
    }),

    userPromoCode: builder.query({
      query: () => ({
        url: `referrals/show-user-promo-code`,
        method: "GET",
      }),
      providesTags: ["UserCode"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetListReferEarnQuery,
  useCreateReferEarnMutation,
  useGeneratePromoCodeMutation,
  useUserPromoCodeQuery,
} = referEarnApi;
