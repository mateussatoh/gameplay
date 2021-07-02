import React from "react";

import { View } from "react-native";

import { styles } from "./styles";

type Props = {
  moreVerticalPadding?: boolean;
};

export function ListDivider({ moreVerticalPadding = false }: Props) {
  return (
    <View
      style={[
        styles.container,
        moreVerticalPadding ? { marginVertical: 16 } : { marginVertical: 12 },
      ]}
    />
  );
}
