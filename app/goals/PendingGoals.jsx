import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PendingGoals() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pending Goals</Text>
      <Text style={styles.subtitle}>Approved goals will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
  },
});
