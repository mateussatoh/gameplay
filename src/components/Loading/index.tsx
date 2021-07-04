import React from "react";

import { View, ActivityIndicator } from "react-native";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={64} color={theme.colors.primary} />
    </View>
  );
}
