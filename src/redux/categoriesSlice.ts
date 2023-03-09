import { CategoryType } from './../types/Category';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (store, thunkAPI) => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [] as CategoryType[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
        state.list = action.payload;
        console.log(state.list)
    });
  },
});

export const { reducer: categoriesReducer, actions: categoriesAction } =
  categoriesSlice;
