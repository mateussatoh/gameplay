import React from "react";

import { View, Text } from "react-native";

import { styles } from "./styles";

import { Avatar } from "../Avatar";
import { theme } from "../../global/styles/theme";

type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

type Props = {
  data: MemberProps;
};

export function Member({ data }: Props) {
  const { on, primary } = theme.colors;
  const isOnline = data.status === "online";
  return (
    <View style={styles.container}>
      <Avatar imageUrl={data.avatar_url} />

      <View>
        <Text style={styles.title}>{data.username}</Text>
        <View style={styles.status}>
          <View
            style={[
              styles.statusBullet,
              { backgroundColor: isOnline ? on : primary },
            ]}
          />
          <Text style={styles.statusName}>
            {isOnline ? "Disponível" : "Ocupado"}
          </Text>
        </View>
      </View>
    </View>
  );
}
