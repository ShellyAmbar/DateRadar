import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../app/features/user/userSlice";
import placesReducer from "../app/features/places/placesSlice";
import appReducer from "../app/features/app/appSlice";
import createSagaMiddleware from "redux-saga";
const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    user: userReducer,
    places: placesReducer,
    app: appReducer,
  },
  middleware: [saga],
});
