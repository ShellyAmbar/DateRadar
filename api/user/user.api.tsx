import {call, put, takeEvery} from "redux-saga/effects";
import {getUserSuccess} from "../../app/features/user/userSlice";
function* workGetUserFetch() {
  const user = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const formattedUser = yield user.json().slice(0, 10);
  yield put(getUserSuccess(formattedUser));
}
function* getUser() {
  yield takeEvery("user/getUserFetch", workGetUserFetch);
}

export {getUser};
