import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import SingleCategory from "./components/Categories/SingleCategory";
import Favorite from "./components/Favorite/Favorite";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SingleProducts from "./components/Products/SingleProducts";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import UserForm from "./components/User/UserForm";
import { categoriesAction, getCategories } from "./redux/categoriesSlice";
import { getProducts } from "./redux/productsSlice";
import { AppDispatch, useAppDispatch } from "./redux/store";
import { RootState } from "./redux/store";
// import "./styles/global.css";
// import "./styles/variables.css";

function App() {
  const dispatch = useAppDispatch();
  const { showForm } = useSelector((s: RootState) => s.user);
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      {showForm === true ? <UserForm /> : null}

      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
                   <Route path="/favorite" element={<Favorite />} />
          <Route path="products/:id" element={<SingleProducts />} />
          <Route path="profile" element={<Profile />} />
          <Route path="categories/:id" element={<SingleCategory />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
