type Location = {
  latitude: string;
  longitude: string;
};
type Place = {
  id: string;
  name: string;
  rate: number;
  image: string;
  location: Location;
  address: string;
};
type PlacesState = {
  places: Place[];
  isLoading: boolean;
  errorMessage: string;
};

export {Location, Place, PlacesState};
