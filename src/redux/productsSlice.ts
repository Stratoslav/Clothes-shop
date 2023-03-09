import { ListType } from './../types/ProductTypes';
import { shuffle } from "./../utils/common";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (store, thunkAPI) => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      console.log(res.data);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const productsSlice = createSlice({
  name: "categories",
  initialState: {
    list: [] as ListType[],
    related: [] as ListType[],
    filtered: [] as ListType[],
  },
  reducers: {
    filterByPrice: (state, action) => {
      state.filtered = state.list.filter(({ price }) => price < action.payload);
    },
    getRelatedProducts: (state, action) => {
      const list = state.list.filter(
        ({ category: { id } }: any) => id === action.payload
      );
        state.related = shuffle(list);
       
       
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
        state.list = action.payload;
        
    });
  },
});

export const { reducer: productsReducer, actions: productsAction } =
  productsSlice;
