import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { productsAction } from "../../redux/productsSlice";
import { RootState, useAppDispatch } from "../../redux/store";
import Banner from "../Bunner/Bunner";
import Categories from "../Categories/Categories";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";

function Home() {
  const {
    products: { list, filtered },
    categories,
  } = useSelector((s: RootState) => s);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!list.length) return;
    dispatch(productsAction.filterByPrice(100));
  }, [list.length, dispatch]);
  return (
    <>
      <Poster />
      <Products title="trending" products={list} amount={5} />
      <Categories title="worth seeing" products={categories.list} amount={5} />
      <Banner />
      <Products title="Lost than 100$" products={filtered} amount={5} />
    </>
  );
}

export default Home;
