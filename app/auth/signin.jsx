import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native"
import { useRouter } from "expo-router"

export default function SignIn() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSignIn = () => {
    const { email, password } = formData

    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.")
      return
    }

    // Simulate sign-in logic
    if (email === "user@piggybot.co.tz" && password === "123456") {
      Alert.alert("Success", "Signed in successfully!")
      router.replace("/(tabs)") // Navigate to the home screen
    } else {
      Alert.alert("Error", "Invalid email or password.")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>
        Welcome back! Please sign in to continue.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(value) => handleInputChange("email", value)}
          value={formData.email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(value) => handleInputChange("password", value)}
          value={formData.password}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/auth/guardianaccount")} // Adjust route as needed
        style={styles.signupLink}
      >
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.link}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#FFA500",
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    fontFamily: "Nunito",
    color: "#fff",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Nunito",
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFA500",
    marginBottom: 15,
    fontSize: 16,
    fontFamily: "Nunito",
    padding: 10,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 99,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFA500",
    fontWeight: "900",
    fontFamily: "Nunito",
    fontSize: 16,
  },
  signupLink: {
    marginTop: 20,
    alignItems: "center",
  },
  signupText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Nunito",
  },
  link: {
    fontWeight: "900",
    textDecorationLine: "underline",
  },
})
