import React from "react";

import { Text, Image, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

type Props = RectButtonProps & {
  title: string;
};

export const ButtonIcon = ({ title, ...rest }: Props) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={DiscordImg} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};
