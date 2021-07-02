import React from "react";

import { View, FlatList } from "react-native";
import { Guild, GuildProps } from "../../components/Guild";
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
    {
      id: "2",
      name: "Valocrime",
      icon: null,
      owner: true,
    },
    {
      id: "3",
      name: "Valocrime",
      icon: null,
      owner: true,
    },
    {
      id: "4",
      name: "Valocrime",
      icon: null,
      owner: true,
    },
    {
      id: "5",
      name: "Valocrime",
      icon: null,
      owner: true,
    },
    {
      id: "6",
      name: "Valocrime",
      icon: null,
      owner: true,
    },
    {
      id: "7",
      name: "Valocrime",
      icon: null,
      owner: true,
    },
    {
      id: "8",
      name: "Valocrime",
      icon: null,
      owner: true,
    },
    {
      id: "9",
      name: "Valocrime",
      icon: null,
      owner: true,
    },
    {
      id: "10",
      name: "Valocrime",
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
        contentContainerStyle={{ paddingBottom: 69, paddingTop: 24 }}
      />
    </View>
  );
}
