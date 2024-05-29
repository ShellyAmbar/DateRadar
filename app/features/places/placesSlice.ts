import { createSlice } from "@reduxjs/toolkit";
import { PlacesState } from "./interfaces";

const initialState: PlacesState = {
  places: [],
  isLoading: false,
  errorMessage: "",
};

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    checkInUserToPlaceFetch: (state, action) => {
      state.isLoading = true;
    },
    checkInUserToPlaceSuccess: (state, action) => {
      state.isLoading = false;
      state.errorMessage = "";
      const placeIndex = state.places.findIndex(
        (place, index) => place.id === action.payload.id
      );
      state.places[placeIndex] = action.payload;
    },
    checkInUserToPlaceError: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    getPlacesFetch: (state, action) => {
      state.isLoading = true;
    },
    getPlacesSuccess: (state, action) => {
      state.isLoading = false;
      state.places = action.payload;
      state.errorMessage = "";
    },
    getPlacesFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  checkInUserToPlaceError,
  checkInUserToPlaceFetch,
  checkInUserToPlaceSuccess,
  getPlacesFetch,
  getPlacesSuccess,
  getPlacesFailure,
} = placesSlice.actions;
export default placesSlice.reducer;
