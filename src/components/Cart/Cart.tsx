import {  useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { usersAction } from "../../redux/userSlice";
import { sumBy } from "../../utils/common";
import "../../styles/cart.scss";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart } = useSelector((s: RootState) => s.user);

  const changeQuantity = (item: any, quantity: number) => {
    console.log(quantity)
    dispatch(usersAction.addItemToCart({ ...item  , quantity }));
  };

  const removeItem = (id: number) => {
    dispatch(usersAction.removeItemToCart(id));

  };

  return (
    <section className={"cart"}>
      <h2 className={"title"}>Your cart</h2>

      {!cart.length ? (
        <div className={"empty"}>Here is empty</div>
      ) : (
        <>
          <div className={"list-cart"}>
            {cart.map((item) => {
              const { title, category, images, price, id, quantity } = item;

              return (
                <div className={"item"} key={id}>
                  <div
                    className={"image"}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={"info"}>
                    <h3 className={"name"}>{title}</h3>
                    <div className={"category"}>{category.name}</div>
                  </div>

                  <div className={"price"}>{price}$</div>

                  <div className={"quantity"}>
                    <div
                      className={"minus"}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity - 1))
                      }
                    >
                      <svg className="icon">
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#minus`}
                        />
                      </svg>
                    </div>

                    <span>{quantity}</span>

                    <div
                      className={"plus"}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity + 1))
                      }
                    >
                      <svg className="icon">
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#plus`}
                        />
                      </svg>
                    </div>
                  </div>

                  <div className={"total"}>{price * quantity}$</div>

                  <div
                    className={"close-cart"}
                    onClick={() => removeItem(item.id)}
                  >
                    <svg className="icon">
                      <use
                        xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={"actions"}>
            <div className={"total"}>
              TOTAL PRICE:{" "}
              <span>
                {sumBy(cart.map(({ quantity, price }) => quantity * price))}$
              </span>
            </div>

            <button className={"proceed"}>Proceed to checkout</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
