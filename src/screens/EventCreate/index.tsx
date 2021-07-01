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

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";
import { InputSmall } from "../../components/InputSmall";
import { TextArea } from "../../components/TextArea";
import { ButtonIcon } from "../../components/ButtonIcon";
import { theme } from "../../global/styles/theme";

export function EventCreate() {
  const [category, setCategory] = useState("");

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <Background>
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
            <RectButton>
              <View style={styles.select}>
                {
                  // <View style={styles.image} />
                  <GuildIcon />
                }
                <View style={styles.selectBody}>
                  <Text style={styles.label}>Selecione um servidor</Text>
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
        </Background>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
