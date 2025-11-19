import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { todosApiArgsType, todosType } from "../model/types";

export const todosApi = createApi(
    {
        reducerPath: 'todosApi',
        baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
        endpoints: (builder) => ({
            getTodos: builder.query<string, todosApiArgsType>({
                query: (args) => {
                    const { userId } = args
                    return '/users/'+userId+'/todos'
                },
                providesTags: ['Todos']
            }),
            addTodo: builder.mutation<todosType, Partial<todosType>>({
                query: (newTodo) => ({
                    url: '/todos',
                    method: 'POST',
                    body: JSON.stringify(newTodo),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }),
                invalidatesTags: ["Users"]
            })
        })
    }
)

export const { useGetTodosQuery, useAddTodoMutation } = todosApi