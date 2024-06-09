import {StyleSheet, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import MainStack from "./navigation/main-stack";
import {StatusBar} from "expo-status-bar";
import {Box} from "./components/controllers/box/box";
import {GlobalColors} from "./styles/global-colors";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {useEffect, useState} from "react";
import * as Location from "expo-location";
import {Provider} from "react-redux";
import {store} from "./store";
export default function App() {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    (async () => {
      console.log("location");
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("status !== granted");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Box style={styles.container}>
          <StatusBar backgroundColor={GlobalColors.Brand.primary} />
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </Box>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalColors.Brand.primary,

    width: "100%",
    height: "100%",
    flex: 1,
  },
});
