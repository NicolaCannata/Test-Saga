import React from "react";
import { Button } from "./components/button";
import { Data } from "./components/data";
import styled from "styled-components";

const App: React.FC = () => {
  const WrapperDiv = styled.div`
    margin: auto;
    width: 50%;
    padding: 10px;
    font-family: "Open Sans", sans-serif;
    text-align: center;
  `;

  return (
    <WrapperDiv>
      <h2>Testing Redux-saga:</h2>
      <Button />
      <Data />
    </WrapperDiv>
  );
};

export default App;
