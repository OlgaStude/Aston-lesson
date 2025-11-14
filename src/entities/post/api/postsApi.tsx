import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi(
    {
        reducerPath: 'postsApi',
        baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
        endpoints: (builder) => ({
            getPosts: builder.query({
                query: () => {
                    return '/posts'
                },
                providesTags: ['Posts']
            })
        })
    }
)

export const { useGetPostsQuery } = postsApi