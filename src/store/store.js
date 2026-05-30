import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/authSlice";
import cartReducer from "../features/cart/cartSlice"
import { ProductApi } from "../features/product/productApiSlice";
export const store = configureStore({
    reducer:{
        auth:authReducer,
        cart:cartReducer,
        [ProductApi.reducerPath]: ProductApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(ProductApi.middleware);
    },
});