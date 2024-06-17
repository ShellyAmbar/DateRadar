import {combineReducers} from "redux";
import appSlice from "./app/appSlice";
import authSlice from "./auth/authSlice";
import placesSlice from "./places/placesSlice";
import userSlice from "./user/userSlice";
const rootReducer = combineReducers({
  app: appSlice,
  auth: authSlice,
  places: placesSlice,
  user: userSlice,
});

export default rootReducer;
