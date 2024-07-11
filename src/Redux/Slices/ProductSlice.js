import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstansce from "../../Helpers/axiosinstance";
import toast from "react-hot-toast";

const initialState = {
    productsData: [], // array of products
}

export const getAllProducts = createAsyncThunk('/products/getAll', async()=>{
    try {
        const products = axiosInstansce.get('/products');
        toast.promise(products, {
            loading : "loading all the products",
            error : "Something went wrong",
            success : "All the products are loaded"
        });
        const apiResponse = await products;
        return apiResponse;
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
    }
})

export const getProductsDetails = createAsyncThunk('/products/getDetails', async(id)=>{
    try {
        const product = axiosInstansce.get(`/products/${id}`);
        toast.promise(product, {
            loading : "loading the product Details",
            error : "Something went wrong",
            success : "Product Details are loaded"
        });
        const apiResponse = await product;
        return apiResponse;
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
    }
})

const productSlice = createSlice({
    name : 'Product',
    initialState,
    redicers: {},
    extraReducers: (builder)=>{
        builder.addCase(getAllProducts.fulfilled, (state, action)=>{
            console.log(action.payload);
            state.productsData = action?.payload?.data?.data; // array of products


        })
    }
});

export default productSlice.reducer;