import { takeLatest } from "redux-saga/effects";
import { BTN_RQUEST } from "./constants/actions";
import { sagaFetchDataRequest } from "./sagas";

export function* rootSagas() {
  yield takeLatest(BTN_RQUEST, sagaFetchDataRequest);
}
