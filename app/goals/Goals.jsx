import React, { useState } from "react"
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { useRouter } from "expo-router"

const mockGoals = [
  {
    id: "1",
    title: "Save for a car",
    amount: 5000000,
    days: 365,
    status: "Ongoing",
  },
  {
    id: "2",
    title: "Vacation in Zanzibar",
    amount: 2000000,
    days: 180,
    status: "Pending",
  },
  {
    id: "3",
    title: "Emergency Fund",
    amount: 1000000,
    days: 90,
    status: "Completed",
  },
  {
    id: "4",
    title: "Home Renovation",
    amount: 3000000,
    days: 270,
    status: "Ongoing",
  },
  {
    id: "5",
    title: "Education Savings",
    amount: 1500000,
    days: 120,
    status: "Pending",
  },
]

export default function GoalsScreen() {
  const router = useRouter()
  const [goals, setGoals] = useState(mockGoals)

  const filterGoals = (status) => {
    return goals.filter((goal) => goal.status === status)
  }

  // Function to render a goal item
  const renderGoalItem = ({ item }) => (
    <View
      style={{
        ...styles.goalCard,
        backgroundColor:
          item.status === "Completed"
            ? "#4CAF5050" // Green for Completed
            : item.status === "Pending"
            ? "#FFC10750" // Amber for Pending
            : "#2196F350", // Blue for Ongoing

        borderColor:
          item.status === "Completed"
            ? "#4CAF50" // Green for Completed
            : item.status === "Pending"
            ? "#FFC107" // Amber for Pending
            : "#2196F3", // Blue for Ongoing
      }}
    >
      <Text style={styles.goalTitle}>{item.title}</Text>
      <Text style={styles.goalDetails}>
        Amount: {item.amount} TZS | Days: {item.days} | Status: {item.status}
      </Text>
    </View>
  )

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>My Goals</Text>

      {/* Ongoing Goals */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ongoing Goals</Text>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => router.push("/goals/AddGoal")}
        >
          <Text style={styles.buttonText}>Create A New Goal</Text>
        </TouchableOpacity>

        <FlatList
          data={filterGoals("Ongoing")}
          renderItem={renderGoalItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* Pending Goals */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pending Goals</Text>
        <FlatList
          data={filterGoals("Pending")}
          renderItem={renderGoalItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* Completed Goals */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Completed Goals</Text>
        <FlatList
          data={filterGoals("Completed")}
          renderItem={renderGoalItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#555",
  },
  goalCard: {
    padding: 16,
    marginBottom: 8,
    borderWidth: 2,
    borderRadius: 5,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  goalDetails: {
    fontSize: 14,
    color: "#666",
  },
  createButton: {
    marginBottom: 12,
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignItems: "left",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})
