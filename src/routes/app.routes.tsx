import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/styles/theme";

import { Home } from "../screens/Home";
import { EventDetails } from "../screens/EventDetails";
import { EventCreate } from "../screens/EventCreate";

const { Navigator, Screen } = createStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="EventDetails" component={EventDetails} />
      <Screen name="EventCreate" component={EventCreate} />
    </Navigator>
  );
};
