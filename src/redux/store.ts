import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { apiSlice } from "../utils/api/ApiSlice";
import { categoriesReducer } from "./categoriesSlice";
import { productsReducer } from "./productsSlice";
import { usersReducer } from "./userSlice";
// ...
const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: usersReducer,
  },
  devTools: true,
  // middleware: [thunkMiddleware],
  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
