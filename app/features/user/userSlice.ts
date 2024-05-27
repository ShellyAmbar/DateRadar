import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    getUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {addUser} = userSlice.actions;
