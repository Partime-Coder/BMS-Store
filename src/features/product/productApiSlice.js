import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { normalizeProduct } from "../../services/productServices/productService";

export const ProductApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),

    endpoints: (builder) => {
        return {
            getProducts: builder.query({
                query: ({ limit = 20, skip = 0 } = {}) => 
                    `/products?limit=${limit}&skip=${skip}`,
                transformResponse: (response) => ({
                    products: response.products.map(normalizeProduct),
                    total: response.total,
                }),
            }),
            getProductById: builder.query({
                query: (id) => `/products/${id}`,
                transformResponse: (response) => normalizeProduct(response),
            }),
            getSearchProducts: builder.query({
                query: ({ query, limit = 20, skip = 0 } = {}) => 
                    `/products/search?q=${query}&limit=${limit}&skip=${skip}`,
                transformResponse: (response) => ({
                    products: response.products.map(normalizeProduct),
                    total: response.total,
                }),
            }),
            getCategories: builder.query({
                query: () => `/products/categories`,
            }),
            getProductsByCategory: builder.query({
                query: ({ category, limit = 20, skip = 0 }) =>
                    `/products/category/${category}?limit=${limit}&skip=${skip}`,

                transformResponse: (res) => ({
                    products: res.products.map(normalizeProduct),
                    total: res.total,
                }),
            }),
        }
    },
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useGetSearchProductsQuery,
    useGetCategoriesQuery,
    useGetProductsByCategoryQuery,
} = ProductApi;