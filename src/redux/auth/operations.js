import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://vocab-builder-backend.p.goit.global/api/";

export const signUp = createAsyncThunk(
  "users/signup",
  async (credentials, thunkAPI) => {
    try {
      const registerResp = await axios.post("users/signup", credentials);
      return registerResp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "users/signin",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("users/signin", credentials);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk(
  "users/signout",
  async (_, thunkAPI) => {
    try {
      const res = await axios.post("users/signout");
      console.log(res);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "users/current",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (persistedToken === null) {
        return thunkAPI.rejectWithValue("Unable to fetch user");
      }

      const res = await axios.get("users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
