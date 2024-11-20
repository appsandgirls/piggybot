import React from "react"
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from "react-native"
import { useRouter } from "expo-router"
import asher from "../../assets/images/avatar-01.png"
import styles from "./onboardingStyles"


export default function OnboardingScreen2() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#ffffff79", borderRadius: 99 }}>
        <Image source={asher} style={styles.image} />
      </View>
      <Text style={styles.title}>Meet Asher!</Text>
      <Text style={styles.subtitle}>
        Asher will guide you through fun money lessons and challenges.
      </Text>
      <TouchableOpacity
        onPress={() => router.push("/onboarding/screen3")}
        style={styles.btnPrimary}
      >
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

