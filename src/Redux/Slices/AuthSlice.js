import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstansce from "../../Helpers/axiosinstance";

const initialState = {
    isLoggedIn : localStorage.getItem('isLoggedIn') === 'true' || 'false',
    role : localStorage.getItem('role') || '',
    data : JSON.parse(localStorage.getItem('data') ) || {},
    
};

export const createAccount = createAsyncThunk('/auth/createAccount', async (data) =>{
    console.log("Incoming data to the thank", data);
    try {
        await axiosInstansce.post('/user', data)
        console.log(response);
    } catch (error) {
        console.log(error);
        console.log("this is the AuthSlic error createAccount");
        
    }
})

const AuthSlice = createSlice({
    name : 'auth',
    initialState,
    // extraReducers: {}
});

export default AuthSlice.reducer;