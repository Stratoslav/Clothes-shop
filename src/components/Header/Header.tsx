import React, {
  useEffect,
  useState,
} from "react";
import {  useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../redux/store";
import { usersAction } from "../../redux/userSlice";
import "../../styles/header.scss";
import {
 
  useGetProductssQuery,
} from "../../utils/api/ApiSlice";
function Header() {
  const { currentUser, cart, favorite } = useSelector((s: RootState) => s.user);

  const [values, setValues] = useState({ name: "", avatar: "" });
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data, isLoading } = useGetProductssQuery({ title: searchValue });

  const handleClick = () => {
    if (!currentUser) {
      dispatch(usersAction.toogleForm(true));
    } else {
      navigate("/profile");
    }
  };
  useEffect(() => {
    if (currentUser) return setValues(currentUser);
  }, [currentUser]);

  const handleChange = (e:any) => {

      setSearchValue(e.target.value);

  };
  return (
    <div className="header-header">
      <div className="logo-header">
        <Link to="/">
          <img
            alt="stuff"
            src="https://raw.githubusercontent.com/tamkovich-yana/stuff/2afc0e21d8f155454113405912fe0653d6f9628d/src/images/logo.svg"
          />
        </Link>
      </div>
      <div className="info-header">
        <div className="user-header" onClick={handleClick}>
          <div
            className="avatar-header"
            style={{
              backgroundImage: `url(https://github.com/tamkovich-yana/stuff/blob/master/src/images/avatar.jpg?raw=true)`,
            }}
          ></div>
          <div className="username-header">{values.name}</div>
        </div>
        <form className={"form-header"}>
          <div className={"icon-header"}>
            <svg className="icon-header">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className={"input-header"}>
            <input
              type="search"
              name="search"
              placeholder="Search for anyting..."
              autoComplete="off"
              onChange={handleChange}
              value={searchValue}
            />
          </div>

          {searchValue && (
            <div className={"box-header"}>
              {isLoading
                ? "Loading"
                : !data.length
                ? "No results"
                : data.map(({ title, images, id }: any) => {
                    return (
                      <Link
                        key={id}
                        onClick={() => setSearchValue("")}
                        className={"item-header"}
                        to={`/products/${id}`}
                      >
                        <div
                          className={"image-header"}
                          style={{
                            backgroundImage: `url(${images[0]})`,
                            width: "50px",
                          }}
                        />
                        <div className={"title-header"}>{title}</div>
                      </Link>
                    );
                  })}
            </div>
          )}
        </form>
        <div className="account-header">
          <Link to="/favorite" className="favourites-header">
            <svg className="icon-fav-header">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
           
            </svg>
                      <span className="count-header-fav">{favorite.length}</span>
                  </Link>
          <Link to="/cart" className="cart-header">
            <svg className="icon-cart-header">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            <span className="count-header">{cart.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
