import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState, useAppDispatch } from "../../redux/store";
import { usersAction } from "../../redux/userSlice";
import "../../styles/product.scss";

const SIZES = [4, 4.5, 5];
type Props = {
  title: string;
  price: number;
  images: string[];
  description: string;
};
const Product = (item: Props) => {
  const { title, price, images, description } = item;
  const [currentImage, setCurrentImage] = useState<string>("");
  const [currentSize, setCurrentSize] = useState<number>();
  const dispatch = useAppDispatch();
  const { cart } = useSelector((s: RootState) => s.user);
  console.log(cart);
  useEffect(() => {
    setCurrentImage(images[0]);
  }, [images]);
  const addItem = () => {
    dispatch(usersAction.addItemToCart(item));
  };
    const addItemInFavorite = () => {
    dispatch(usersAction.addItemToFavorite(item));
  };
  return (
    <section className={"product-product"}>
      <div className={"images-product"}>
        <div
          className={"current-product"}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={"images-list"}>
          {images.map((image: any, i: any) => (
            <div
              key={i}
              className={"image-product"}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>
      <div className={"info-product"}>
        <h1 className={"title-product"}>{title}</h1>
        <div className={"price-product"}>{price}$</div>
        <div className={"color-product"}>
          <span>Color:</span> Green
        </div>
        <div className={"sizes-product"}>
          <span>Sizes:</span>

          <div className={"list-product"}>
            {SIZES.map((size) => (
              <div
                onClick={() => setCurrentSize(size)}
                className={`size-product ${
                  currentSize === size ? "active" : ""
                }`}
                key={size}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <p className={"description-product"}>{description}</p>

        <div className={"actions-product"}>
          <button
            onClick={addItem}
            disabled={!currentSize}
            className={"add-product"}
          >
            Add to cart
          </button>
          <button onClick={addItemInFavorite}   disabled={!currentSize} className={"favourite-product"}>Add to favourites</button>
        </div>

        <div className={"bottom-product"}>
          <div className={"purchase-product"}>19 people purchased</div>

          <Link to={"/"}>Return to store</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
