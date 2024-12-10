import { useGlobalSearchParams, useRouter } from "expo-router"
import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native"

export default function FundGoal() {
  const router = useRouter()
  const { goal } = useGlobalSearchParams()

  const [parsedGoal, setParsedGoal] = useState({})
  const [fundingSource, setFundingSource] = useState("")
  const [note, setNote] = useState("")

  // Handling goal parsing and error
  useEffect(() => {
    if (goal) {
      try {
        const parsed = JSON.parse(goal)
        if (parsed.title && parsed.amount && parsed.days) {
          setParsedGoal(parsed)
        } else {
          showError("Invalid goal data received.")
        }
      } catch (error) {
        showError("Error parsing goal data.")
      }
    } else {
      showError("Goal data is missing.")
    }
  }, [goal])

  const showError = (message) => {
    Alert.alert("Error", message)
    router.push("/goals/Goals") // Navigate back to goals if there's an error
  }

  if (!parsedGoal.title || !parsedGoal.amount || !parsedGoal.days) {
    return null // Wait until the goal is parsed or handle error
  }

  const { title, amount, days } = parsedGoal

  const handleFundGoal = () => {
    if (!fundingSource) {
      Alert.alert("Error", "Please select a funding source.")
      return
    }

    Alert.alert(
      "Success",
      `Goal funded via ${fundingSource}. Note: "${note || "No note provided"}"`
    )

    // Navigate back to the goals page
    router.push({
      pathname: "/goals/Goals",
      params: { goal: JSON.stringify(parsedGoal)},
   } )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fund Goal</Text>

      <View style={styles.goalDetails}>
        <Text style={styles.text}>Goal Title: {title}</Text>
        <Text style={styles.text}>Amount: {amount} TZS</Text>
        <Text style={styles.text}>Days: {days}</Text>
      </View>

      {/* Funding source selection */}
      <TouchableOpacity
        style={[
          styles.option,
          fundingSource === "Piggy Wallet" && styles.selectedOption,
        ]}
        onPress={() => setFundingSource("Piggy Wallet")}
      >
        <Text>Use Piggy Wallet</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          fundingSource === "Guardian/Funders" && styles.selectedOption,
        ]}
        onPress={() => setFundingSource("Guardian/Funders")}
      >
        <Text>Ask Guardian/Funders</Text>
      </TouchableOpacity>

      {/* Note input */}
      <TextInput
        style={styles.input}
        placeholder="Leave a note (optional)"
        value={note}
        onChangeText={setNote}
      />

      {/* Fund goal button */}
      <TouchableOpacity
        style={[styles.button, !fundingSource && styles.disabledButton]}
        disabled={!fundingSource}
        onPress={handleFundGoal}
      >
        <Text style={styles.buttonText}>Fund My Goal</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFA500",
  },
  goalDetails: {
    backgroundColor: "#FFA500",
    padding: 20,
    marginBottom: 30,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  option: {
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#CCC",
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: "#FFA50050",
    borderWidth: 1,
    borderColor: "#FFA500",
  },
  button: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#CCC",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
})
