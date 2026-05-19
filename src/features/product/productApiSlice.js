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
  async queryFn(
    { query, categories = [], limit = 20, skip = 0 },
    _api,
    _extraOptions,
    fetchWithBQ
  ) {

    const searchRes = await fetchWithBQ(
      `/products/search?q=${query}&limit=${limit}&skip=${skip}`
    );

    if (searchRes.error)
      return { error: searchRes.error };

    let products =
      searchRes.data.products.map(normalizeProduct);

    const matchedCategory =
      categories.find(cat =>
        cat.slug
          ?.toLowerCase()
          .includes(query.toLowerCase())
      );

    if (matchedCategory) {

      const categoryRes =
        await fetchWithBQ(
          `/products/category/${matchedCategory.slug}?limit=${limit}&skip=${skip}`
        );

      if (categoryRes.data) {
        products = [
          ...products,
          ...categoryRes.data.products.map(
            normalizeProduct
          )
        ];
      }
    }

    const uniqueProducts =
      [...new Map(
        products.map(
          p => [p.id,p]
        )
      ).values()];

    return {
      data:{
        products:uniqueProducts,

        total:
          Math.max(
            searchRes.data.total,
            matchedCategory
            ? uniqueProducts.length
            : searchRes.data.total
          )
      }
    };

  }
}),
            getCategories: builder.query({
                query: () => `/products/categories`,
            }),
            getProductsByCategory: builder.query({
                query: ({ category, limit = 10, skip = 0 }) =>
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