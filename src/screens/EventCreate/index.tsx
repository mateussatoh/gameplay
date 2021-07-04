import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import uuid from "react-native-uuid";
import {
  Text,
  View,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_EVENTS } from "../../configs/database";

export function EventCreate() {
  const [category, setCategory] = useState("1");
  const [modal, setModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();

  async function handleEventCreation() {
    const newEvent = {
      id: uuid.v4(),
      guild,
      category,
      description,
      date: `${day}/${month} às ${hour}:${minute}h`,
    };

    //FALTA VALIDACAO!

    const storage = await AsyncStorage.getItem(COLLECTION_EVENTS);
    const events = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_EVENTS,
      JSON.stringify([...events, newEvent])
    );

    navigation.navigate("Home");
  }

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
                  <InputSmall maxLength={2} onChangeText={setDay} />
                  <Text style={styles.divider}>/</Text>
                  <InputSmall maxLength={2} onChangeText={setMonth} />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Horário</Text>
                <View style={styles.column}>
                  <InputSmall maxLength={2} onChangeText={setHour} />
                  <Text style={styles.divider}>:</Text>
                  <InputSmall maxLength={2} onChangeText={setMinute} />
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
              onChangeText={setDescription}
            />
            <View style={styles.footer}>
              <ButtonIcon title="Agendar" onPress={handleEventCreation} />
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
