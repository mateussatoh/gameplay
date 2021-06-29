import React from "react";
import { View, Text } from "react-native";

import { Avatar } from "../Avatar";
import { styles } from "./styles";

export const Profile = () => {
  return (
    <View style={styles.container}>
      <Avatar imageUrl="https://github.com/mateussatoh.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>Mateus</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
};
