import React from "react";
import { View, Text } from "react-native";
import { useAuth } from "../../hooks/auth";

import { Avatar } from "../Avatar";
import { styles } from "./styles";

export const Profile = () => {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Avatar imageUrl={user.avatar} />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>
        <Text style={styles.message}>GGWP!</Text>
      </View>
    </View>
  );
};
