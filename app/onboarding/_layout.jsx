import React from "react"
import { Stack } from "expo-router"

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, 
      }}
    >
      <Stack.Screen name="screen1" />
      <Stack.Screen name="screen2" />
    </Stack>
  )
}
