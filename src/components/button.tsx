import React from "react";
import { useDispatch } from "react-redux";
import { btnRequest } from "../actions";
import styled from "styled-components";

export const Button = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(btnRequest());
  };

  const Button = styled.button`
    text-align: center;
    margin: auto;
    width: 50%;
    border: 2px solid red;
    border-radius: 25px;
    color: red;
    background-color: white;
    padding: 10px;
    font-family: "Open Sans", sans-serif;
  `;

  const AlignText = styled.div`
    text-align: center;
  `;

  return (
    <AlignText>
      <Button onClick={handleClick}>Click to test redux-saga!</Button>
    </AlignText>
  );
};
