import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function OngoingGoals() {
  const handleTakeCash = () => {
    Alert.alert(
      "Take Cash",
      "Are you sure you want to withdraw? Consider sticking to your goal!"
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ongoing Goals</Text>

      <TouchableOpacity style={styles.button} onPress={handleTakeCash}>
        <Text style={styles.buttonText}>Take Cash</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
