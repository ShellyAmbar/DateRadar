import {StyleSheet, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import MainStack from "./navigation/main-stack";
import {StatusBar} from "expo-status-bar";
import {Box} from "./components/controllers/box/box";
import {GlobalColors} from "./styles/global-colors";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Box style={styles.container}>
        <StatusBar backgroundColor={GlobalColors.Brand.primary} />
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </Box>
    </GestureHandlerRootView>
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
