import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstansce from "../../Helpers/axiosinstance";
import toast from "react-hot-toast";
import { json } from "react-router-dom";

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

export const logout = createAsyncThunk('/auth/logout', async () =>{
    console.log("Incoming data to the thank");
    try {
        const response = axiosInstansce.post('/auth/logout');

        toast.promise(response, {
            success: (resolvedPromise) =>{
                return resolvedPromise?.data?.message;
            },
            loading: 'Logging out..',
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
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(login.fulfilled, (state, action)=>{
            state.isLoggedIn = true,
            state.role = action?.payload?.data?.data?.userRole,
            state.data = action?.payload?.data?.data?.userData

            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('role', action?.payload?.data?.data?.userRole);
            localStorage.setItem('data', JSON.stringify(action?.payload?.data?.data?.userData));

        })
        .addCase(logout.fulfilled, (state)=>{
            localStorage.setItem('isLoggedIn', false);
            localStorage.setItem('role', '');
            localStorage.setItem('data', JSON.stringify({}));
            state.isLoggedIn = false;
            state.role = '';
            state.data = '';
            
        })
    }
});

export default AuthSlice.reducer;