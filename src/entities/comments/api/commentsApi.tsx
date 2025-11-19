import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { commentsApiArgsType } from "../model/types";

export const commentsApi = createApi(
    {
        reducerPath: 'commentsApi',
        baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
        endpoints: (builder) => ({
            getComments: builder.query<string, commentsApiArgsType>({
                query: (arg) => {
                    const { postId } = arg
                    return '/posts/'+postId+'/comments'
                },
                providesTags: ['Comments']
            })
        })
    }
)

export const { useGetCommentsQuery, useLazyGetCommentsQuery } = commentsApi