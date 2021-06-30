import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export const GuildIcon = () => {
  const uri =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-128%2Fdiscord-3-569463.png&f=1&nofb=1";
  return <Image style={styles.image} source={{ uri }} resizeMode="cover" />;
};
