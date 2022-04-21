import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Button(props) {
  const { title = "View", width, color } = props;
  return (
    <View
      style={[styles.button, { width: width, backgroundColor: color }]}
      data-testid={"button"}
    >
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    elevation: 3,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
