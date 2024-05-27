import {createSlice} from "@reduxjs/toolkit";
import {Place, PlacesState} from "./interfaces";

const initialState: PlacesState = {
  places: [],
  isLoading: false,
  errorMessage: "",
};

export const PlacesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    checkInUserToPlaceFetch: (state, action) => {
      state.isLoading = true;
      const placeIndex = state.places.findIndex(
        (place, index) => place.id === action.payload.id
      );
      state.places[placeIndex] = action.payload;
      state.isLoading = false;
    },
    checkInUserToPlaceSuccess: (state, action) => {
      state.isLoading = false;
      state.errorMessage = "";
      const placeIndex = state.places.findIndex(
        (place, index) => place.id === action.payload.id
      );
      state.places[placeIndex] = action.payload;
      state.isLoading = false;
    },
    checkInUserToPlaceError: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    getPlacesFetch: (state, action) => {
      state.isLoading = true;
    },
    getPlacesSuccess: (state, action) => {
      state.places = action.payload;
      state.errorMessage = "";
      state.isLoading = false;
    },
    getPlacesFailure: (state, action) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
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
} = userSlice.actions;
