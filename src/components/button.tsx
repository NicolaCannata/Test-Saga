import React from "react";
import { useDispatch } from "react-redux";
import { btnRequest } from "../actions";

export const Button = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(btnRequest());
  };

  return (
    <div>
      <button onClick={handleClick}>Click to test redux-saga!</button>
    </div>
  );
};
