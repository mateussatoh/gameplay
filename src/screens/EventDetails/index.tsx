import React, { useState, useEffect } from "react";

import {
  ImageBackground,
  Text,
  View,
  FlatList,
  Alert,
  Share,
  Platform,
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { styles } from "./styles";

import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Member, MemberProps } from "../../components/Member";
import { Header } from "../../components/Header";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Loading } from "../../components/Loading";

import { theme } from "../../global/styles/theme";
import BannerPng from "../../assets/banner.png";

import { EventProps } from "../../components/Event";
import { api } from "../../services/api";

type Params = {
  guildSelected: EventProps;
};

type Widget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
};

export function EventDetails() {
  const navigator = useNavigation();
  const route = useRoute();

  const [widget, setWidget] = useState<Widget>({} as Widget);
  const [loading, setLoading] = useState(true);

  const { guildSelected } = route.params as Params;

  async function fetchGuildInfo() {
    try {
      const response = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );
      setWidget(response.data);
      setLoading(false);
    } catch (error) {
      Alert.alert("Widget do servidor não ativado.");
    }
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  }

  useEffect(() => {
    fetchGuildInfo();
  }, []);

  function handleInvite() {
    if (widget.instant_invite) {
      const message =
        Platform.OS === "ios"
          ? `Junte-se a ${guildSelected.guild.name} em ${widget.instant_invite}`
          : widget.instant_invite;

      Share.share({
        message,
        url: widget.instant_invite,
      });
    } else {
      Alert.alert("Link de convite não disponibilizado pelo Widget.");
    }
  }

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton onPress={handleInvite}>
            {widget.instant_invite ? (
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            ) : (
              <Fontisto name="share" size={24} color={theme.colors.highlight} />
            )}
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerPng} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>

      {loading ? (
        <Loading />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget.members.length}`}
          />
          <FlatList
            data={widget.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={ListDivider}
            style={styles.members}
          />
        </>
      )}
      <View style={styles.footer}>
        <ButtonIcon
          onPress={handleOpenGuild}
          hasIcon
          title="Entrar na partida"
        />
      </View>
    </Background>
  );
}
