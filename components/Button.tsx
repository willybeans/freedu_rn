import React from "react";
import { StyleSheet, Pressable, View, StyleProp } from "react-native";
import { ThemeProps, useThemeColor, Text } from "./Themed";
import Colors from "../constants/Colors";

type Button = {
  onPress?: () => void;
  title?: string;
  style?: StyleProp<any>;
  lightColor?: string;
  darkColor?: string;
};

export type ButtonProps = ThemeProps & Button;

export function Button({
  darkColor = Colors.dark.buttonDefault,
  lightColor = Colors.light.buttonDefault,
  title = "Submit",
  onPress,
  style,
}: ButtonProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  return (
    <View style={[{ backgroundColor }, styles.button, style]}>
      <Pressable
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 35,
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
});
