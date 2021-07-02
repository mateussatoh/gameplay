import React from "react";

import { ImageBackground, Text, View, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { styles } from "./styles";

import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { Header } from "../../components/Header";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

import { theme } from "../../global/styles/theme";
import BannerPng from "../../assets/banner.png";

export function EventDetails() {
  const members = [
    {
      id: "1",
      username: "matushae",
      avatar_url: "https://github.com/mateussatoh.png",
      status: "online",
    },
    {
      id: "2",
      username: "Mateus Satoh",
      avatar_url: "https://github.com/mateussatoh.png",
      status: "offline",
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerPng} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lolzinho nosso de cada sexta</Text>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis
            eaque soluta distinctio enim eligendi. Neque in repellendus autem
            sint.
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle="Total 3" />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={ListDivider}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon hasIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
