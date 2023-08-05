import React, {useEffect, useState} from "react";
import MapView from "../../components/map-view/map-view";
import {Box} from "../../components/controllers/box/box";
import Styles from "./home-screen.styles";
import PlacesListsView from "@traveloffline/components/places-lists-view/places-lists-view";

const HomeScreen = () => {
  return (
    <Box style={Styles.container}>
      <MapView />
      <PlacesListsView />
    </Box>
  );
};

export default HomeScreen;
