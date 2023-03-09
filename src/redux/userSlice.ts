import { UserTypeCart } from './../types/UserTypes';
import {
  createSlice,
  createAsyncThunk,

} from "@reduxjs/toolkit";
import axios from "axios";


export const createUser = createAsyncThunk(
  "user/getUser",
  async (payload, thunkAPI) => {
    try {
      const res: any = await axios.post(
        "https://api.escuelajs.co/api/v1/users",
        payload
      );
      
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (payload, thunkAPI) => {
    try {
      const res: any = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        payload
      );
      const login: any = await axios(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${res.data.access_token}`,
          },
        }
      );

     
        return login.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (payload: any, thunkAPI) => {
    try {
      const res: any = await axios.put(
        `https://api.escuelajs.co/api/v1/users/${payload.id}`,
        payload
      );

     
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
const userSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: null,
      cart: [] as UserTypeCart[],
      favorite: [] as UserTypeCart[],
    isLoading: false,
    formType: "signup" as string,
    showForm: false,
  },
  reducers: {
    removeItemToCart: (state, action) => {
      state.cart = state.cart.filter((s) => s.id !== action.payload);
 
      },
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id);
 
      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else newCart.push({ ...payload, quantity: 1 });

        state.cart = newCart;
     
       
      },
     removeItemToFavorite: (state, action) => {
      state.favorite = state.favorite.filter((s) => s.id !== action.payload);
    },
    addItemToFavorite: (state, { payload }) => {
      let newCart = [...state.favorite];
      const found = state.favorite.find(({ id }) => id === payload.id);

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else newCart.push({ ...payload, quantity: 1 });

      state.favorite = newCart;
    },
    toogleForm: (state, action) => {
      state.showForm = action.payload;
    },
    toogleFormType: (state, action) => {
      state.formType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});

export const { reducer: usersReducer, actions: usersAction } = userSlice;
