import React, { useRef } from "react";
import { addMembers, handleLogin } from "../Redux/AuthSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Regester = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useRef("");
  const password = useRef("");
  const email = useRef("");
  const clearInputs = () => {
    userName.current.value = "";
    password.current.value = "";
    email.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userName.current.value !== "" &&
      password.current.value !== "" &&
      email.current.value !== ""
    ) {
      dispatch(
        addMembers({
          name: userName.current.value,
          email: email.current.value,
          password: password.current.value,
        })
      );
      clearInputs();
      dispatch(handleLogin(true));
      navigate("/");
    }
  };
  return (
    <div className="bg-theme h-screen flex justify-center items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white p-4 rounded-lg  flex flex-col justify-center w-[800px]"
      >
        <input
          ref={userName}
          type="text"
          placeholder="enter your name"
          required
          className="block h-[50px] rounded-lg p-2 focus:outline-none mb-4 w-full"
        />
        <input
          ref={email}
          type="email"
          placeholder="enter your email"
          required
          className="block h-[50px] rounded-lg p-2 focus:outline-none mb-4 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="enter your password"
          required
          minLength={8}
          maxLength={20}
          className="block h-[50px] rounded-lg p-2 focus:outline-none mb-4 w-full"
        />

        <button className="bg-orange-600 cursor-pointer text-white p-2 w-full rounded-lg focus:outline-none">
          login
        </button>
      </form>
    </div>
  );
};

export default Regester;
