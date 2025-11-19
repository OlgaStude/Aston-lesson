import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { postInitialState, postType } from "../types";

const initialState: postInitialState = {
    postId: '',
    post: [],
    status: ''
}

const postSlice = createSlice({
    name: 'post',
    initialState:  initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPost.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchPost.fulfilled, (state, action: PayloadAction<postType>) => {
            state.status = ''
            state.post = action.payload
        })
    }
})

export default postSlice.reducer;

export const fetchPost = createAsyncThunk<postType>('post/fetchPost', async (postId: number) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+postId)
    return res.json()
})