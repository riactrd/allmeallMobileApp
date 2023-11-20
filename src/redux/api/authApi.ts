import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";
import {
  SignInModel,
  UserDataModel,
  SignupModel,
  NewUserDataModel,
} from "../../model/UserModel";
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

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.allmealprep.com/api/v1/",
  }) as BaseQueryFn<string | FetchArgs, unknown, errorModel, {}>,
  endpoints: (builder) => ({
    loginUser: builder.mutation<UserDataModel, SignInModel>({
      query: (body) => {
        return {
          url: "auth/sign_in.json",
          method: "post",
          //   headers: {
          //     'Content-Type': 'application/json',
          //     Authorization: `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`,
          // },
          body,
        };
      },
    }),

    registerUser: builder.mutation<NewUserDataModel, SignupModel>({
      query: (body) => {
        return {
          url: "auth/sign_up.json",
          method: "post",
          body,
        };
      },
    }),

    changePassword: builder.mutation({
      query: (body) => {
        return {
          url: "auth/update_password.json",
          method: "post",
          body,
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useChangePasswordMutation,
} = authApi;
