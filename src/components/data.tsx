import React from "react";
import { useSelector } from "react-redux";
import { selectorData, selectorCheckLoading } from "../selectors";
import { Store } from "../Store";
import styled from "styled-components";

export const Data = (Store: Store) => {
  const data = useSelector(selectorData) || [];
  const checkLoading = useSelector(selectorCheckLoading) || null;

  const AlignText = styled.div`
    text-align: center;
  `;

  return (
    <div>
      <AlignText>
        <h4>Lista di cose inutili</h4>
      </AlignText>
      {checkLoading === true ? (
        <AlignText>LOADING</AlignText>
      ) : (
        data.map((data: any) => (
          <AlignText>
            <li>{data.title}</li>
          </AlignText>
        ))
      )}
      {/* {data.map((data: any) => (
        <div>{data.title}</div>
      ))} */}
    </div>
  );
};
