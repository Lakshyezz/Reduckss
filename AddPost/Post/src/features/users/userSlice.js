import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';


const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {
    try {
        const response = axios.get(USERS_URL);
    return [...(await response).data];

    } catch (error) {
        return error.message;
    }
})
const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers: {
        // actions
    },
    extraReducers(builder){
        builder.addCase(fetchUsers.fulfilled, (state,action)=> {
            return action.payload;
        })
    }
})

export const selectAllUsers = (state) => state.users

export default userSlice.reducer