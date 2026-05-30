import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  products: [],
  status: null,
  createdAt: null,
  updatedAt: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      return action.payload;
    },
     removeFromCart: (state, action) => {
      state.products = state.products.filter(
        product => product.productId !== action.payload
      );
    },
     updateProductQuantity: (state, action) => {
      const product = state.products.find(
        p => p.productId === action.payload.productId
      );
      if (product) product.quantity = action.payload.quantity;
    },
  },
});

export const { setCart, removeFromCart, updateProductQuantity } = cartSlice.actions;
export default cartSlice.reducer;