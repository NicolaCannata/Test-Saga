import React from "react";
import { useSelector } from "react-redux";
import { selectorData, selectorCheckLoading } from "../selectors";
import { Store } from "../Store";

export const Data = (Store: Store) => {
  const data = useSelector(selectorData) || [];
  const checkLoading = useSelector(selectorCheckLoading) || null;

  return (
    <div>
      <h4>test</h4>
      {checkLoading === true ? (
        <div>LOADING</div>
      ) : (
        data.map((data: any) => <div>{data.title}</div>)
      )}
      {/* {data.map((data: any) => (
        <div>{data.title}</div>
      ))} */}
    </div>
  );
};
