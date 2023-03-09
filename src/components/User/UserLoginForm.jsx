import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { createUser, loginUser, usersAction } from "../../redux/userSlice";
// import { createUser } from "../../features/user/userSlice";

import "../../styles/user.scss";

const UserLoginForm = ({ toogleCurrentFormType }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  //   const { currentUser } = useSelector((s) => s.user);
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).some((el) => el);
    if (!isNotEmpty) {
      return;
    }
    dispatch(loginUser(values));
    closeForm();
  };
  const closeForm = () => {
    dispatch(usersAction.toogleForm(false));
  };
  return (
    <div className={"wrapper-form"}>
      <div className={"close"}>
        <svg className="icon" onClick={closeForm}>
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>

      <div className={"title"}>Sign Up</div>

      <form className={"form"} onSubmit={handleForm}>
        <div className={"group"}>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        styles
        <div className={"group"}>
          <input
            type="password"
            placeholder="Your password"
            name="password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={"link"} onClick={() => toogleCurrentFormType("signup")}>
          I already have an account
        </div>
        <button type="submit" className={"submit"}>
          Create an account
        </button>
      </form>
    </div>
  );
};

export default UserLoginForm;
