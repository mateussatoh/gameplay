import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";

import { styles } from "./styles";
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import Img from "../../assets/illustration.png";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/styles/theme";

export const Signin = () => {
  const { loading, signIn } = useAuth();

  async function handleSignin() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }

    // navigation.navigate("Home");
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image source={Img} style={styles.image} resizeMode="stretch" />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"}e organize suas {"\n"}
            jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {"\n"}
            favoritos com seus amigos
          </Text>
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} size={64} />
          ) : (
            <ButtonIcon
              hasIcon
              title="Entrar com Discord"
              onPress={handleSignin}
            />
          )}
        </View>
      </View>
    </Background>
  );
};
