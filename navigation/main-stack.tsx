import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen from "../screens/splash-screen/splash-screen";
import AuthScreen from "../screens/auth-screen/auth-screen";
import MainDrawer from "./main-drawer";

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
    </Stack.Navigator>
  );
};

export default MainStack;
