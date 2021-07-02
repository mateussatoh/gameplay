import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Event } from "../../components/Event";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";

export const Home = () => {
  const navigation = useNavigation();

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
    {
      id: "3",
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
      id: "4",
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
      id: "5",
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
      id: "6",
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
      id: "7",
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
      id: "8",
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
      id: "9",
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
      id: "10",
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

  function handleEventDetails() {
    navigation.navigate("EventDetails");
  }

  function handleEventCreate() {
    navigation.navigate("EventCreate");
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleEventCreate} />
        </View>

        <CategorySelect
          setCategory={handleCategorySelect}
          categorySelected={category}
        />

        <ListHeader title="Partidas agendadas" subtitle="Total 6" />
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Event onPress={handleEventDetails} data={item} />
          )}
          ItemSeparatorComponent={() => <ListDivider moreVerticalPadding />}
          contentContainerStyle={{ paddingBottom: 69, paddingTop: 24 }}
          style={styles.event}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  );
};
