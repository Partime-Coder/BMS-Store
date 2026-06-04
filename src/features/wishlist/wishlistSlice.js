import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    products: [],
    createdAt: null,
    updatedAt: null,
};

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {

        setWishlistState: (state, action) => {
            return action.payload;
        },

        removeProduct: (state, action) => {
            state.products = state.products.filter(
                p => p.productId !== action.payload
            );
        },

    },
});

export const { setWishlistState,  removeProduct } = wishlistSlice.actions;
export default wishlistSlice.reducer;