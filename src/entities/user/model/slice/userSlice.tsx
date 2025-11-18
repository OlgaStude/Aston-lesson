import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: { 
        users: [],
        status: ''
    },
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = ''
            state.users = action.payload
        })
    }
})

export default usersSlice.reducer;

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    return res.json()
})