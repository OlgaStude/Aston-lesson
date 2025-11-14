import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const commentsApi = createApi(
    {
        reducerPath: 'commentsApi',
        baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
        endpoints: (builder) => ({
            getComments: builder.query({
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