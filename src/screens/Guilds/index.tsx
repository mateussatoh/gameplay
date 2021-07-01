import React from "react";

import { View, FlatList } from "react-native";
import { GuildProps } from "../../components/Event";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { styles } from "./styles";

type Props = {
  handleGuild: (guild: GuildProps) => void;
};

export function Guilds({ handleGuild }: Props) {
  const guilds = [
    {
      id: "1",
      name: "Lolzinho nosso de cada sexta",
      icon: null,
      owner: true,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild onPress={() => handleGuild(item)} data={item} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />
    </View>
  );
}
