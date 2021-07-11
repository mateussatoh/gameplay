import React from "react";

import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

type Props = TextInputProps & {
  inline?: boolean;
};
export function TextArea({ inline, ...rest }: Props) {
  return (
    <TextInput
      style={[styles.container, inline ? { height: 50 } : { height: 95 }]}
      {...rest}
    ></TextInput>
  );
}
