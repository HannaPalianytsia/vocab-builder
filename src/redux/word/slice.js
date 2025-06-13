import { createSlice } from "@reduxjs/toolkit";
import {
  wordsCategories,
  createWord,
  addWord,
  editWord,
  fetchAllWords,
  fetchOwnWords,
  deleteWord,
  wordsStatistics,
  wordsTasks,
  wordsAnswers,
} from "./operations";
import { signOut } from "../auth/operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const wordsSlice = createSlice({
  name: "words",
  initialState: {
    items: [],
    totalCount: 0,
    totalPages: null,
    page: null,
    categories: [],
    tasks: [],
    answers: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      //wordsCategories
      .addCase(wordsCategories.pending, handlePending)
      .addCase(wordsCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.loading = false;
      })
      .addCase(wordsCategories.rejected, handleRejected)
      //createWord
      .addCase(createWord.pending, handlePending)
      .addCase(createWord.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.loading = false;
      })
      .addCase(createWord.rejected, handleRejected)
      //addWord
      .addCase(addWord.pending, handlePending)
      .addCase(addWord.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.loading = false;
      })
      .addCase(addWord.rejected, handleRejected)
      //editWord
      .addCase(editWord.pending, handlePending)
      .addCase(editWord.fulfilled, (state, { payload }) => {
        state.items.filter((item) => item.id !== payload.id);
        state.items.push(payload);
        state.loading = false;
      })
      .addCase(editWord.rejected, handleRejected)
      //fetchAllWords
      .addCase(fetchAllWords.pending, handlePending)
      .addCase(fetchAllWords.fulfilled, (state, { payload }) => {
        state.items = payload.results;
        state.page = payload.page;
        state.totalPages = payload.totalPages;
        state.loading = false;
      })
      .addCase(fetchAllWords.rejected, handleRejected)
      //fetchOwnWords
      .addCase(fetchOwnWords.pending, handlePending)
      .addCase(fetchOwnWords.fulfilled, (state, { payload }) => {
        state.items = payload.results;
        state.page = payload.page;
        state.totalPages = payload.totalPages;
        state.loading = false;
      })
      .addCase(fetchOwnWords.rejected, handleRejected)
      //deleteWord
      .addCase(deleteWord.pending, handlePending)
      .addCase(deleteWord.fulfilled, (state, { payload }) => {
        state.items.filter((item) => item.id !== payload.id);
        state.loading = false;
      })
      .addCase(deleteWord.rejected, handleRejected)
      //wordsStatistics
      .addCase(wordsStatistics.pending, handlePending)
      .addCase(wordsStatistics.fulfilled, (state, { payload }) => {
        state.totalCount = payload.totalCount;
        state.loading = false;
      })
      .addCase(wordsStatistics.rejected, handleRejected)
      //wordsTasks
      .addCase(wordsTasks.pending, handlePending)
      .addCase(wordsTasks.fulfilled, (state, { payload }) => {
        state.tasks = payload.tasks;
        state.loading = false;
      })
      .addCase(wordsTasks.rejected, handleRejected)
      //wordsAnswers
      .addCase(wordsAnswers.pending, handlePending)
      .addCase(wordsAnswers.fulfilled, (state, { payload }) => {
        state.answers = payload;
        state.loading = false;
      })
      .addCase(wordsAnswers.rejected, handleRejected)
      //signOut
      .addCase(signOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.loading = false;
      });
  },
});

export const wordsReducer = wordsSlice.reducer;
