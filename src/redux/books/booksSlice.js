import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DNpq4IMIW4F6EUfdrjxE/books/';

const initialState = {
  bookItems: [],
  isLoading: true,
  error: false,
};

export const fetchApi = createAsyncThunk('books/fetchApi', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
});

export const addBookToApi = createAsyncThunk('books/addBookToApi', async (bookInfo) => {
  try {
    const response = await axios.post(url, bookInfo);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add book');
  }
});

export const removeBookFromApi = createAsyncThunk('books/removeBookFromApi', async (bookId) => {
  try {
    await axios.delete(url + bookId);
    return bookId;
  } catch (error) {
    throw new Error('Failed to remove book');
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      state.bookItems.push(action.payload);
    },
    removeBookFromApi: (state, action) => {
      state.bookItems = state.bookItems.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApi.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.bookItems = Object.entries(payload)
          .flatMap(([key, value]) => value.map((book) => ({ ...book, item_id: key })));
      })
      .addCase(fetchApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addBookToApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeBookFromApi.fulfilled, (state, action) => {
        state.isLoading = true;
        state.bookItems = state.bookItems.filter((book) => book.item_id !== action.payload);
      })
      .addCase(removeBookFromApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const { add } = bookSlice.actions;
export default bookSlice.reducer;
