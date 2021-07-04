import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";

const { CDN_IMAGE } = process.env;

import DiscordSvg from "../../assets/discord.svg";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  guildId: string;
  iconId: string | null;
};

export const GuildIcon = ({ guildId, iconId }: Props) => {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.guildIconContainer}
      colors={[secondary50, secondary70]}
    >
      {iconId ? (
        <Image style={styles.image} source={{ uri }} resizeMode="cover" />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </LinearGradient>
  );
};
