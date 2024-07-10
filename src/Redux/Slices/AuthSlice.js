import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstansce from "../../Helpers/axiosinstance";
import toast from "react-hot-toast";

const initialState = {
    isLoggedIn : localStorage.getItem('isLoggedIn') === 'true' || 'false',
    role : localStorage.getItem('role') || '',
    data : JSON.parse(localStorage.getItem('data') ) || {},
    
};

export const createAccount = createAsyncThunk('/auth/createAccount', async (data) =>{
    console.log("Incoming data to the thank", data);
    try {
        const response = axiosInstansce.post('/user', data);

        // if(response.data.success){
        //     toast.success(response.data.message);   // this is the first way to message gone to users
        // } else {
        //     toast.error(response.data.message);
        // }

        toast.promise(response, {
            success: (resolvedPromise) =>{
                return resolvedPromise?.data?.message;
            },
            loading: 'Hold back tight, we are registring your id....',
            error: 'Ohh No!.. Something went wrong... Please try again'
        })
        const apiResponse = await response;
        return apiResponse;
    } catch (error) {
        console.log(error);
        console.log("this is the AuthSlic error createAccount");
        
    }
})

export const login = createAsyncThunk('/auth/login', async (data) =>{
    console.log("Incoming data to the thank", data);
    try {
        const response = axiosInstansce.post('/auth/login', data);

        // if(response.data.success){
        //     toast.success(response.data.message);   // this is the first way to message gone to users
        // } else {
        //     toast.error(response.data.message);
        // }

        toast.promise(response, {
            success: (resolvedPromise) =>{
                return resolvedPromise?.data?.message;
            },
            loading: 'Hold back tight, we are registring your id....',
            error: 'Ohh No!.. Something went wrong... Please try again'
        })
        const apiResponse = await response;
        return apiResponse;
    } catch (error) {
        console.log(error);
        console.log("this is the AuthSlic error logInAccount");
        
    }
})

const AuthSlice = createSlice({
    name : 'auth',
    initialState,
    // extraReducers: {}
});

export default AuthSlice.reducer;