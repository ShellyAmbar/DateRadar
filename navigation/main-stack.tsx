import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen from "../screens/splash-screen/splash-screen";
import AuthScreen from "../screens/auth-screen/auth-screen";
import MainDrawer from "./main-drawer";
import SwipeCardsScreen from "@traveloffline/screens/swipe-cards-screen/swipe-cards-screen";
import PlaceScreen from "@traveloffline/screens/place-screen/place-screen";

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={MainDrawer}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="SwipeCards"
        component={SwipeCardsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PlaceScreen"
        options={{
          headerShown: false,
        }}
        component={PlaceScreen}
      /> */}
    </Stack.Navigator>
  );
};

export default MainStack;
