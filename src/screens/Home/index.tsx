import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { styles } from "./styles";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Event } from "../../components/Event";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";

export const Home = () => {
  const [category, setCategory] = useState("");
  const events = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lolzinho nosso de cada sexta",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "05/07 ás 20:00",
      description: "Random picks obrigatórios",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lolzinho nosso de cada sexta",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "05/07 ás 20:00",
      description: "Random picks obrigatórios",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>

        <CategorySelect
          setCategory={handleCategorySelect}
          categorySelected={category}
        />

        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />
          <FlatList
            data={events}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Event data={item} />}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.event}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Background>
  );
};
