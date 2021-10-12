import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthScreens from './AuthNavigation';

const Main = createStackNavigator();

const MainStackScreens = ({ navigation }) => (
  <Main.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Main.Screen name="AuthScreens" component={AuthScreens} />
  </Main.Navigator>
);

export default MainStackScreens;
