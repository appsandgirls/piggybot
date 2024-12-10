import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";

import { useRouter } from "expo-router";

export default function AddGoal() {
  const router = useRouter();
  const [goalTitle, setGoalTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [customDays, setCustomDays] = useState("");
  const [selectedDays, setSelectedDays] = useState(null);
  const [milestones, setMilestones] = useState([]);

  const predefinedMilestones = [7, 14, 30, 60, 90, 120];

  const createGoal = () => {
    if (!goalTitle || !amount || (!selectedDays && !customDays)) {
      Alert.alert("Error", "Please complete all fields to create your goal.");
      return;
    }

    const goalData = {
      title: goalTitle,
      amount,
      days: selectedDays || customDays,
    };

    Alert.alert(
      "Goal Created!",
      `Your goal "${goalTitle}" to save ${amount} TZS in ${
        selectedDays || customDays
      } days has been created successfully!`
    );

    // Navigate to the Fund Goal screen with goal data
    router.push({
      pathname: "/goals/FundGoal",
      params: { goal: JSON.stringify(goalData) },
    });

    // Reset the form
    setGoalTitle("");
    setAmount("");
    setCustomDays("");
    setSelectedDays(null);
    setMilestones([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a Goal</Text>

      <TextInput
        style={styles.input}
        placeholder="What are you saving up for?"
        value={goalTitle}
        onChangeText={setGoalTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Amount to Save"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.subtitle}>
        How often do you want to save (in days)?
      </Text>
      <FlatList
        data={predefinedMilestones}
        numColumns={3}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => {
          const dailyAmount = amount ? Math.ceil(amount / item) : "0";
          return (
            <TouchableOpacity
              style={[
                styles.milestoneOption,
                selectedDays === item && styles.selectedOption,
              ]}
              onPress={() => {
                setSelectedDays(item);
                setCustomDays("");
              }}
            >
              <Text style={styles.milestoneText}>{item} Days</Text>
              <Text style={styles.dailyAmount}>{dailyAmount} TZS daily</Text>
            </TouchableOpacity>
          );
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Or enter custom days"
        keyboardType="numeric"
        value={customDays}
        onChangeText={(text) => {
          setCustomDays(text);
          setSelectedDays(null);
        }}
      />

      <TouchableOpacity style={styles.createButton} onPress={createGoal}>
        <Text style={styles.buttonText}>Create Goal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FFA500"
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  milestoneOption: {
    padding: 10,
    backgroundColor: "#EEE",
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
    alignItems: "center",
    width: "30%",
  },
  selectedOption: {
    backgroundColor: "#FFA500",
    borderColor: "#333",
    borderWidth: 2,
    width: "30%",
  },
  milestoneText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  dailyAmount: {
    fontSize: 12,
    color: "#333",
  },
  createButton: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
