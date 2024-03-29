import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
  imageUrl: string;
};

export const Avatar = ({ imageUrl }: Props) => {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image source={{ uri: imageUrl }} style={styles.avatar} />
    </LinearGradient>
  );
};
