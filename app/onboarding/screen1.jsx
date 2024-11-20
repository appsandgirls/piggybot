import React from "react"
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from "react-native"
import { useRouter } from "expo-router"
import pinkpiggy from "../../assets/images/pink-piggy.png"
import styles from "./onboardingStyles"


export default function OnboardingScreen1() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#ffffff79", borderRadius: 99,}}>
        <Image source={pinkpiggy} style={styles.image} />
      </View>
      <Text style={styles.title}>PiggySave</Text>
      <Text style={styles.subtitle}>Your saving friend!</Text>

      <TouchableOpacity
        onPress={() => router.push("/onboarding/screen2")}
        style={styles.btnPrimary}
      >
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

