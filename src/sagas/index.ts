import { call, put } from "redux-saga/effects";
import { fetchSuccess, fetchFailure } from "../actions";

const apiFetchData = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  return response.json();
};

export function* sagaFetchDataRequest() {
  try {
    const response = yield call(apiFetchData);
    yield put(fetchSuccess(response));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}
