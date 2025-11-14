import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'post',
    initialState: { 
        postId: null,
        post: {},
        status: ''
    },
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPost.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchPost.fulfilled, (state, action) => {
            state.status = ''
            state.post = action.payload
        })
    }
})

export default postSlice.reducer;

export const fetchPost = createAsyncThunk('post/fetchPost', async (postId) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+postId)
    return res.json()
})