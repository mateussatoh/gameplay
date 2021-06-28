import React from "react";

import { Text, Image, View, TouchableOpacity } from "react-native";

import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

export const ButtonIcon = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={DiscordImg} />
      </View>
      <Text style={styles.title}>Entrar com Discord</Text>
    </TouchableOpacity>
  );
};
