import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../app/features/user/userSlice";

import createSagaMiddleware from "redux-saga";
const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [saga],
});
