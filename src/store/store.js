import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/authSlice";
import { ProductApi } from "../features/product/productApiSlice";
export const store = configureStore({
    reducer:{
        auth:authReducer,
        [ProductApi.reducerPath]: ProductApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(ProductApi.middleware);
    },
});