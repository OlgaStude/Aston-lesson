import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi(
    {
        reducerPath: 'todosApi',
        baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
        endpoints: (builder) => ({
            getTodos: builder.query({
                query: (args) => {
                    const { userId } = args
                    return '/users/'+userId+'/todos'
                },
                providesTags: ['Todos']
            }),
            addTodo: builder.mutation({
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