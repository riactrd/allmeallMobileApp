import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { editProfile, ProfileModel } from "../../model/ProfileModel";
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

export const profileApi = createApi({
  reducerPath: "profileApi",
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

  endpoints: (builder) => ({
    getprofileApi: builder.query<ProfileModel, string | boolean>({
      query: () => "profile.json",
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
    updateprofile: builder.mutation<ProfileModel, editProfile>({
      query: (profile) => {
        // console.log(profile);
        return {
          url: "profile.json",
          method: "POST",
          // body: {
          //   profile_json: {
          //     first_name: profile.name,
          //     last_name: profile.lastname,
          //     phone_number: profile.phone,
          //     date_of_birth: profile.dateofBirth,
          //     sec_phone_number: profile.secondaryPhone,
          //   },
          body: {
            profile: {
              first_name: profile.name,
              last_name: profile.lastname,
              phone_number: profile.phone,
              sec_phone_number: profile.secondaryPhone,
              // referrer_id: 1,
              referral_email: profile.referralEmail,
              // height_feet: null,
              // height_inches: null,
              // weight: null,
              // health_conditions: null,
              // level_of_activity: 1,
              gender: profile.gender,
              // weight_goal: null,
              // goal_timing: "",
              date_of_birth: profile.dateofBirth,
              // is_profile_completed: true,
            },
          },
        };
      },
    }),
    //   "profile": {
    //
    //     "health_conditions": null,
    //     "level_of_activity": 1,
    //     "gender": 1,
    //     "weight_goal": null,
    //     "goal_timing": "",
    //     "date_of_birth": "1990-01-18",
    //     "is_profile_completed": true
    // }
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
  useGetprofileApiQuery,
  // useCreateAddCartMutation,
  useUpdateprofileMutation,
  // useDeleteaddressesMutation,
} = profileApi;
