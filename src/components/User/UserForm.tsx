import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { usersAction } from "../../redux/userSlice";
import UserLoginForm from "./UserLoginForm";
import UserSignupForm from "./UserSignupForm";

function UserForm() {
  const dispatch = useAppDispatch();
  const { showForm, formType } = useSelector((s: RootState) => s.user);
  const toogleCurrentFormType = (value: string) =>
    dispatch(usersAction.toogleFormType(value));
  console.log(formType);
  return showForm ? (
    <>
      {formType === "signup" ? (
        <div className="overlay">
          <UserSignupForm toogleCurrentFormType={toogleCurrentFormType} />
        </div>
      ) : (
        <UserLoginForm toogleCurrentFormType={toogleCurrentFormType} />
      )}
    </>
  ) : (
    <> </>
  );
}

export default UserForm;
