import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../../../entities/post/api/postsApi";
import { commentsApi } from "../../../entities/comments/api/commentsApi";
import { albumsApi } from "../../../entities/album/api/albumsApi";
import { todosApi } from "../../../entities/todo/api/todosApi";
import postReducer from '../../../entities/post/model/slice/postSlice'
import usersReducer from '../../../entities/user/model/slice/userSlice'

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
        post: postReducer,
        users: usersReducer
    },
    middleware: (getDefaultMiddlewere) => 
        getDefaultMiddlewere()
            .concat(postsApi.middleware)
            .concat(commentsApi.middleware)
            .concat(albumsApi.middleware)
            .concat(todosApi.middleware)
})