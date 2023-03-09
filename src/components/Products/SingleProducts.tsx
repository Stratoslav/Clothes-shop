import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { productsAction } from "../../redux/productsSlice";
import { RootState, useAppDispatch } from "../../redux/store";
import { useGetProductsQuery } from "../../utils/api/ApiSlice";
import Product from "./Product";
import Products from "./Products";

function SingleProducts() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isFetching, isSuccess } = useGetProductsQuery({
    id,
  });
  const dispatch = useAppDispatch();
  const { related, list } = useSelector((s: RootState) => s.products);
  useEffect(() => {
    if (!data || !list.length) return;
    // if (!isFetching && !isLoading && !isSuccess) {
    //     navigate('/')
    // }
  }, [isFetching, isLoading, isSuccess, data, list.length]);
  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(productsAction.getRelatedProducts(data.category.id));
    }
  }, [dispatch, data]);
  return (
      <div style={{
          maxWidth: "950px"}}>
      {data ? (
        <>
          <Product {...data} />
        </>
      ) : (
        "Loading..."
      )}
      <Products products={related} amount={5} title="Related products" />
    </div>
  );
}

export default SingleProducts;
