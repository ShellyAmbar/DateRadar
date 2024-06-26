import {createSlice} from "@reduxjs/toolkit";
import {UserState} from "./interfaces";

const initialState: UserState = {
  user: null,
  isLoading: false,
  errorMessage: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserFetch: (state) => {
      state.isLoading = true;
    },
    updateUserSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    updateUserFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    getUserFetch: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.errorMessage = "";
      console.log("user", action.payload);
    },
    getUserFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  updateUserFetch,
  updateUserSuccess,
  updateUserFailure,
  getUserFetch,
  getUserSuccess,
  getUserFailure,
} = userSlice.actions;
export default userSlice.reducer;
