import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn, signOut, currentUser } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: null,
    name: "",
  },
  extraReducers: (builder) => {
    builder
      //signUp
      .addCase(signUp.pending, handlePending)
      .addCase(signUp.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.loading = false;
        state.name = action.payload.name;
      })
      .addCase(signUp.rejected, handleRejected)
      //signIn
      .addCase(signIn.pending, handlePending)
      .addCase(signIn.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.name = action.payload.name;
      })
      .addCase(signIn.rejected, handleRejected)
      //signOut
      .addCase(signOut.pending, handlePending)
      .addCase(signOut.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.token = null;
        state.isLoggedIn = false;
        state.name = "";
      })
      .addCase(signOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to log out";
      })
      //currentUser
      .addCase(currentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(currentUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
