import {createSlice} from "@reduxjs/toolkit";

const initialState: AppState = {
  isLoading: false,
  errorMessage: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export const {} = appSlice.actions;
