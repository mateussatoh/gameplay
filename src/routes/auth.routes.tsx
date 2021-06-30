import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/styles/theme";

import { Home } from "../screens/Home";
import { Signin } from "../screens/Signin";
import { EventDetails } from "../screens/EventDetails";

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name="Signin" component={Signin} />
      <Screen name="Home" component={Home} />
      <Screen name="EventDetails" component={EventDetails} />
    </Navigator>
  );
};
