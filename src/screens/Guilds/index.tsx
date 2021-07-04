import React, { useState, useEffect } from "react";

import { View, FlatList } from "react-native";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { Loading } from "../../components/Loading";
import { api } from "../../services/api";
import { styles } from "./styles";

type Props = {
  handleGuild: (guild: GuildProps) => void;
};

export function Guilds({ handleGuild }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get("/users/@me/guilds");
    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </View>
  );
}
