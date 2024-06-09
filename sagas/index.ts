import {all} from "redux-saga/effects";
import {getUser} from "./user/user";

export default function* rootSaga() {
  yield all([getUser()]);
}
