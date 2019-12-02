import { BTN_RQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../constants/actions";

export const btnRequest = () => ({
  type: BTN_RQUEST
});

export const fetchSuccess = (datas: any) => ({
  type: FETCH_SUCCESS,
  payload: datas
});

export const fetchFailure = (Error: any) => ({
  type: FETCH_FAILURE,
  payload: Error
});
