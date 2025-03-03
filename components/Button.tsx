import React from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

export function Button({
  title,
  onPress,
}: {
  title: string;
  onPress: VoidFunction;
}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fcff52",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    width: Dimensions.get("screen").width * 0.5,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
