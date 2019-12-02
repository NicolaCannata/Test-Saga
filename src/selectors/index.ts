import { createSelector } from "reselect";
import { Store } from "../Store";

const getState = (Store: Store) => Store;

export const selectorData = createSelector(
  getState,
  (Store): any => Store.data
);

export const selectorCheckLoading = createSelector(
  getState,
  (Store): any => Store.isLoading
);
