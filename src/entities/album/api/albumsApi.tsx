import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { albumApiArgsType } from "../model/types";

export const albumsApi = createApi(
    {
        reducerPath: 'albumsApi',
        baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
        endpoints: (builder) => ({
            getAlbums: builder.query<string, albumApiArgsType>({
                query: (args) => {
                    const { userId } = args
                    return '/users/'+userId+'/albums'
                },
                providesTags: ['Albums']
            })
        })
    }
)

export const { useGetAlbumsQuery } = albumsApi