import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    isAuthenticated: false
};

export const authSlice = createSlice({
    name: "authUser",
    initialState,
    reducers: {
        login: (state, action) => {
            state.currentUser = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
        }
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;