import React from "react"
import { Tabs } from "expo-router"
import { Platform } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FFA500",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          },
          default: { backgroundColor: "white" },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="goals"
        options={{
          title: "Goals",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="flag" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="learn"
        options={{
          title: "Learn",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="school" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
