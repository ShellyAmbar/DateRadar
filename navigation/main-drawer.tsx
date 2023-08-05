import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "../screens/home-screen/home-screen";
import ProfileScreen from "../screens/profile-screen/profile-screen";
import SettingsScreen from "../screens/settings-screen/settings-screen";
import {GlobalColors} from "../styles/global-colors";

const MainDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        overlayColor: GlobalColors.BgColors.Bg4,
        drawerActiveBackgroundColor: GlobalColors.BgColors.Bg4,
        drawerStyle: {
          backgroundColor: GlobalColors.BgColors.Bg2,
          width: 240,
        },
        headerStyle: {
          backgroundColor: GlobalColors.Brand.primary,
        },
        headerTintColor: GlobalColors.TextColors.white,
        drawerStatusBarAnimation: "slide",
        drawerContentStyle: {},
        drawerItemStyle: {},
        drawerLabelStyle: {
          color: GlobalColors.TextColors.white,
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        options={{headerTitle: ""}}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="Profile"
        options={{headerTitle: ""}}
        component={ProfileScreen}
      />
      <Drawer.Screen
        name="Settings"
        options={{headerTitle: ""}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
