import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../redux/store";
import "../../styles/sidebar.scss";

function Sidebar() {
  const { list } = useSelector((s: RootState) => s.categories);
  return (
    <section className="sidebar">
      <div className="categories">Categories</div>
      <nav className="">
        <ul className="menu">
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                to={`/categories/${id}`}
                className={({ isActive }) =>
                  `${"link"} ${isActive ? "active" : ""}`
                }
              >
                <div>{name}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer">
        <a href="/help" target="_blank" className="link">
          Help
        </a>
        <a
          href="/terms"
          target="_blank"
          className="link"
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
}

export default Sidebar;
