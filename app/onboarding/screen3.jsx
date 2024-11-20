import React from "react"
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from "react-native"
import { useRouter } from "expo-router"
import pinkpiggy from "../../assets/images/pink-piggy.png"
import styles from "./onboardingStyles"


export default function OnboardingScreen3() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#ffffff79", borderRadius: 99 }}>
        <Image source={pinkpiggy} style={styles.image} />
      </View>
      <Text style={styles.title}>Ready to Begin?</Text>
      <Text style={styles.subtitle}>You're all set to explore the app!</Text>
      <TouchableOpacity
        onPress={() => router.replace("/(tabs)")}
        style={styles.btnPrimary}
      >
        <Text style={styles.btnText}>Parent Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("/(tabs)")}
        style={styles.btnPrimary}
      >
        <Text style={styles.btnText}>Child Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("/auth/guardianaccount")}
        style={styles.btnPrimary}
      >
        <Text style={styles.btnText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}

