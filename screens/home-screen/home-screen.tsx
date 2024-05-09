import React from "react";
import MapView from "../../components/map-view/map-view";
import {Box} from "../../components/controllers/box/box";
import Styles from "./home-screen.styles";
import PlacesListsView from "@traveloffline/components/places-lists-view/places-lists-view";
import {LinearGradient} from "expo-linear-gradient";
import Search from "@traveloffline/assets/images/search.svg";
import useHomeScreen from "./hooks/useHomeScreen";
import SearchBar from "rn-autocomplete-search-bar";
const HomeScreen = () => {
  const {isShowPlaces, setIsShowPlaces} = useHomeScreen();
  return (
    <Box style={Styles.container}>
      <MapView />

      <LinearGradient
        colors={[
          "rgba(0,0,0,0.7)",
          "rgba(0,0,0,0.5)",
          "rgba(0,0,0,0.4)",
          "rgba(0,0,0,0)",
        ]}
        style={Styles.searchBarContainer}
      >
        <SearchBar
          isCanclable={false}
          isAutoCompleteSearch={false}
          onSelectResult={(resultItem) => {
            console.log(resultItem);
            setIsShowPlaces(true);
          }}
          onClickSearch={(search) => {
            console.log(search);

            setIsShowPlaces(true);
          }}
          onPressDelete={() => {}}
          textInputStyle={{color: "#FFFF"}}
          onFocus={() => {
            setIsShowPlaces(false);
          }}
          onSubmitEditing={() => {
            setIsShowPlaces(true);
          }}
          searchbarContainerStyle={{
            backgroundColor: "rgba(255,255,255,0.3)",
          }}
          icon={() => <Search width={20} height={20} />}
          data={[
            {id: "0", name: "bara 1"},
            {id: "1", name: "barb 2"},
            {id: "2", name: "barab 3"},
            {id: "3", name: "barabc 4"},
            {id: "4", name: "barrca 5"},
            {id: "5", name: "barar 6"},
          ]}
        />
      </LinearGradient>

      {isShowPlaces && <PlacesListsView />}
    </Box>
  );
};

export default HomeScreen;
