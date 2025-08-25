import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const wordsCategories = createAsyncThunk(
  "words/categories",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("words/categories");
      console.log("wordsCategories", data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createWord = createAsyncThunk(
  "words/create",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("words/create", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWord = createAsyncThunk("words/add", async (id, thunkAPI) => {
  try {
    const { data } = await axios.post(`words/add/${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editWord = createAsyncThunk("words/edit", async (id, thunkAPI) => {
  try {
    const { data } = await axios.patch(`words/edit/${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchAllWords = createAsyncThunk(
  "words/all",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("words/all");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOwnWords = createAsyncThunk(
  "words/own",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("words/own");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWord = createAsyncThunk(
  "words/delete",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`words/delete/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const wordsStatistics = createAsyncThunk(
  "words/statistics",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("words/statistics");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const wordsTasks = createAsyncThunk(
  "words/tasks",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("words/tasks");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const wordsAnswers = createAsyncThunk(
  "words/answers",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("words/answers", credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
