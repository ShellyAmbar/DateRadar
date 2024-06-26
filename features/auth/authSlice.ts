import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
  isLoading: false,
  errorMessage: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
