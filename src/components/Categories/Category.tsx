import React, { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductssQuery } from "../../utils/api/ApiSlice";
import Products from "../Products/Products";
import "../../styles/category.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CategoryListType } from "../../types/ProductTypes";
function Category() {
  const { id } = useParams();
  const { list } = useSelector((s: RootState) => s.categories);
  const DefaultValues = {
    title: "",
    price_min: 0,
    price_max: 0,
  };
  const DefaultProps = {
    categoryId: id,
    limit: 5,
    offset: 0,
    ...DefaultValues,
  };
  const [isEnd, setEnd] = useState(false);
  const [items, setItems] = useState<CategoryListType[]>([]);

  const [params, setParams] = useState(DefaultProps);
  const [cat, setCat] = useState("");
  
  const [values, setValues] = useState(DefaultValues);
  const { data = [], isLoading, isSuccess } = useGetProductssQuery({
    params
  });
  useEffect(() => {
    if (!id) return;
    setValues(DefaultValues);
     setItems([]);
    setEnd(false);
    setParams({ ...DefaultProps, categoryId: id });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  useEffect(() => {
    if (!id || !list.length) return;
    const category: any = list.find((l: any) => l.id === id);
    setCat(category);
  }, [list, id]);
  useEffect(() => {
     

    if (!data.length ) {return setEnd(true)};

  
    if (!data.length) {
      return;
    }
    setItems([...items, ...data]);
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading]);
  const handleChange = ({ target: { value, name } }: any) => {
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParams({ ...DefaultProps, ...values });
      setItems([]);
    setEnd(false);
  };

  const handleReset = () => {
    setValues(DefaultValues);
    setParams(DefaultProps);
    setEnd(false);
  };
  return (
    <section className="wrapper">
      <h2 className="title">{cat}</h2>
      <form className={"filters"} onSubmit={handleSubmit}>
        <div className={"filter"}>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Product name"
            value={values.title}
          />
        </div>
        <div className={"filter"}>
          <input
            type="number"
            name="price_min"
            onChange={handleChange}
            placeholder="0"
            value={values.price_min}
          />
          <span>Price from</span>
        </div>
        <div className={"filter"}>
          <input
            type="number"
            name="price_max"
            onChange={handleChange}
            placeholder="0"
            value={values.price_max}
          />
          <span>Price to</span>
        </div>

        <button type="submit">Submit</button>
      </form>
          {isLoading ? (
        <div className="preloader">Loading...</div>
      ) : !isSuccess || !items.length ? (
        <div className={"back"}>
          <span>No results</span>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <Products
          title=""
          products={items}
          // styles={{ padding: 0 }}
          amount={items.length}
        />
      )}

      {!isEnd && (
        <div className={"more"}>
          <button
            onClick={() =>
              setParams({ ...params, offset: params.offset + params.limit })
            }
          >
            See more
          </button>
        </div>
      )}
    </section>
  );
}

export default Category;
