import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import Img from "../../assets/illustration.png";

export const Signin = () => {
  const navigation = useNavigation();

  function handleSignin() {
    navigation.navigate("Home");
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

          <ButtonIcon title="Entrar com Discord" onPress={handleSignin} />
        </View>
      </View>
    </Background>
  );
};
