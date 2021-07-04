import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import {
  Text,
  View,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

import { Guilds } from "../Guilds";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";
import { InputSmall } from "../../components/InputSmall";
import { TextArea } from "../../components/TextArea";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ModalView } from "../../components/ModalView";
import { theme } from "../../global/styles/theme";
import { GuildProps } from "../../components/Guild";

export function EventCreate() {
  const [category, setCategory] = useState("");
  const [modal, setModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleGuild(guild: GuildProps) {
    setGuild(guild);
    setModal(false);
  }
  function closeModal() {
    setModal(false);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar Partida" />
          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 36, marginBottom: 18 },
            ]}
          >
            Categoria
          </Text>
          <CategorySelect
            hasCheckbox
            setCategory={setCategory}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={() => setModal(true)}>
              <View style={styles.select}>
                {guild.icon ? (
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                ) : (
                  <View style={styles.image} />
                )}
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : "Selecione um servidor"}
                  </Text>
                </View>
                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={styles.label}>Dia e mês</Text>
                <View style={styles.column}>
                  <InputSmall maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <InputSmall maxLength={2} />
                </View>
              </View>
              <View>
                <Text style={styles.label}>Horário</Text>
                <View style={styles.column}>
                  <InputSmall maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <InputSmall maxLength={2} />
                </View>
              </View>
            </View>
            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.textLimit}>Max 120 caracteres</Text>
            </View>
            <TextArea
              multiline
              maxLength={120}
              numberOfLines={5}
              autoCorrect={false}
            />
            <View style={styles.footer}>
              <ButtonIcon title="Agendar" />
            </View>
          </View>
        </ScrollView>
      </Background>
      <ModalView closeModal={closeModal} visible={modal}>
        <Guilds handleGuild={handleGuild} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
