import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { userInitialState, userType } from "../types";

const initialState: userInitialState = {
    users: [],
    status: ''
}

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<userType>) => {
            state.status = ''
            state.users = action.payload
        })
    }
})

export default usersSlice.reducer;

export const fetchUsers = createAsyncThunk<userType>('users/fetchUsers', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    return res.json()
})