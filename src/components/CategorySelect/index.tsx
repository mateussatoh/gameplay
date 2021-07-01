import React from "react";
import { ScrollView } from "react-native";

import { Category } from "../Category";

import { styles } from "./styles";
import { categories } from "../../utils/categories";

type Props = {
  categorySelected: string;
  setCategory: (category: string) => void;
  hasCheckbox?: boolean;
};

export const CategorySelect = ({
  categorySelected,
  setCategory,
  hasCheckbox = false,
}: Props) => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          hasCheckBox={hasCheckbox}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
};
