import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function AccountScreen() {
  const router = useRouter();

  // Simulate user data (this would usually come from a local storage or API)
  const [user, setUser] = useState({
    username: "Joy Adams", // Default username
    email: "joyadams@piggybot.com", // Default email
  });
  const [username, setUsername] = useState(user.username); // Editable username
  const [email, setEmail] = useState(user.email); // Editable email
  const [loading, setLoading] = useState(false); // Loading state

  // Handle logout
  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Redirect to login screen
      router.push("/auth/signin");
    }, 1000);
  };

  // Handle profile update (for demonstration purposes)
  const handleUpdateProfile = () => {
    if (!username || !email) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    setUser({ username, email }); // Simulate updating user data
    Alert.alert("Success", "Profile updated successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Account</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleUpdateProfile}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Updating..." : "Update Profile"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={handleLogout}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Logging out..." : "Logout"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: "#FF4D4D",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
  },
});
