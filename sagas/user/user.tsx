import {call, put, takeEvery} from "redux-saga/effects";
import {getUserSuccess} from "@traveloffline/features/user/userSlice";
function* workGetUserFetch() {
  const user = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const formattedUser = yield user.json();
  const userData = formattedUser?.slice(0, 10);
  yield put(getUserSuccess(userData));
}
function* getUser() {
  yield takeEvery("user/getUserFetch", workGetUserFetch);
}

export {getUser};
