import React, {useState} from "react";
import Map, {PROVIDER_GOOGLE} from "react-native-maps";
import styles from "./map-view.styles";

const MapView = () => {
  const [region, setRegion] = useState({
    latitude: 32.091833,
    longitude: 34.813824,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0421,
  });
  return (
    <Map
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      showsUserLocation={true}
      region={region}
    />
  );
};

export default MapView;
