import React from "react";
import { Link } from "react-router-dom";
import {CategoryType} from '../../types/Category'
import "../../styles/categories.scss";
type Props = {
  title: string;
  products: CategoryType[];
  amount: number;
};
const Categories = ({ title, products = [], amount }: Props) => {
  console.log(products)
  const list = products.filter((_, i) => i < amount);

  return (
    <section className={"section"}>
      <h2>{title}</h2>

      <div className={"list-categories"}>
        {list.map(({ id, name, image }) => (
          <Link to={`/categories/${id}`} key={id} className={"item-categories"}>
            <div
              className={"image-categories"}
              style={{ backgroundImage: `url(${image})` }}
            />
            <h3 className={"title-categories"}>{name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
