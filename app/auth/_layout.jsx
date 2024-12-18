import React from "react"
import { Stack } from "expo-router"

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="guardianaccount" />
      <Stack.Screen name="profilesetup" />
      <Stack.Screen name="signin" />

    </Stack>
  )
}
