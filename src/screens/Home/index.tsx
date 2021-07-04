import React, { useState, useCallback } from "react";
import { View, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { styles } from "./styles";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Event, EventProps } from "../../components/Event";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { Loading } from "../../components/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_EVENTS } from "../../configs/database";

export const Home = () => {
  const navigation = useNavigation();

  const [category, setCategory] = useState("");
  const [events, setEvents] = useState<EventProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchEvents() {
    const storage = await AsyncStorage.getItem(COLLECTION_EVENTS);
    const storageEvents: EventProps[] = storage ? JSON.parse(storage) : [];
    if (category) {
      setEvents(storageEvents.filter((item) => item.category === category));
    } else {
      setEvents(storageEvents);
    }
    setLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      fetchEvents();
    }, [category])
  );

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

        {loading ? (
          <Loading />
        ) : (
          <>
            <ListHeader
              title="Partidas agendadas"
              subtitle={`Total ${events.length}`}
            />
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
          </>
        )}
      </View>
    </Background>
  );
};
