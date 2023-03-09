
import { Link } from "react-router-dom";
import "../../styles/products.scss";
type Props = {
  title: string;
  products: any[];
  amount: number;
};
function Products({ title, products = [], amount }: Props) {
 console.log(products)
  const list = products.filter((_, i) => i < amount);
  return (
    <section className={"products-products"}>
      {title && <h2>{title}</h2>}

      <div className={"list-products"}>
        {list.map(({ id, images, title, category:  { name: cat }, price }) => (
          <Link to={`/products/${id}`} key={id} className={"product-products"}>
            <div
              className={"image-products"}
              style={{ backgroundImage: `url(${images[0]})` }}
            />

            <div className={"wrapper-products"}>
              <h3 className={"title-products"}>{title}</h3>
              <div className={"cat-products"}>{cat}</div>
              <div className={"info-products"}>
                <div className={"prices-products"}>
                  <div className={"price-products"}>{price}$</div>
                  <div className={"oldPrice-products"}>{Math.floor(price * 0.8)}$</div>
                </div>

                <div className={"purchases-products"}>
                  {Math.floor(Math.random() * 20 + 1)} purchased
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Products;
