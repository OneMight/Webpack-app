import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBaseUser, IRegisterApi } from "../types/intefaces";

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
        })
    })
});

export const { usePostUserMutation } = userApi;