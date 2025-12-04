import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBaseUser, IRegisterApi } from "../types/intefaces";
import { User, UserToken } from "../types/types";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com/'}),
    endpoints: (builder) =>({
        postUser: builder.mutation<IRegisterApi, IBaseUser>({
            query: (newUser) =>({
                url: 'users/add',
                headers:{'Content-Type': 'application/json' },
                method: 'POST',
                body: {
                    'username': newUser.name,
                    ...newUser
                }
            })
        }),
        getToken: builder.mutation<UserToken,User>({
            query:(user) =>({
                url: 'user/login',
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body:{
                    'username': user.username,
                    'password': user.password,
                    expiresInMins: 120,
                },
                credentials: 'omit'
            })
            
        }),
        getUsers: builder.query<User, string>({
           query: () => 'users',
        }),
        verifyUser: builder.query<string, string>({
            query: (token) => ({
                method: "GET",
                url: 'auth/me',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                credentials: 'omit'
            })
        })
    })
});

export const { usePostUserMutation, useGetTokenMutation, useGetUsersQuery, useVerifyUserQuery } = userApi;