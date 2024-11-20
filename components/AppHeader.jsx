import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons" // Assuming you are using Ionicons for the notification icon

export default function AppHeader({
  iconLeft, // Left icon component (e.g. user avatar)
  title, // Title to display in the center
  iconRight, // Right icon component (e.g. notification icon)
  onLeftPress, // Optional: handler when left icon is pressed
  onRightPress, // Optional: handler when right icon is pressed
}) {
  return (
    <View style={styles.headerContainer}>
      {/* Left icon (e.g. user avatar) */}
      <TouchableOpacity onPress={onLeftPress}>
        <View style={styles.iconContainer}>
          {iconLeft ? (
            <Image source={iconLeft} style={styles.avatar} />
          ) : (
            <Ionicons name="person-circle" size={30} color="#fff" />
          )}
        </View>
      </TouchableOpacity>

      {/* Title in the center */}
      <Text style={styles.title}>{title}</Text>

      {/* Right icon (e.g. notification icon) */}
      <TouchableOpacity onPress={onRightPress}>
        <View style={styles.iconContainer}>
          {iconRight ? (
            iconRight
          ) : (
            <Ionicons name="notifications" size={30} color="#333" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    
  },
  title: {
    fontSize: 20,
    color: "#333",
    fontWeight: "bold",
    textAlign: "left",
    flex: 1,
    marginLeft: 10
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    borderWidth: 2,
    borderRadius: 99,
    padding: 5
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 99,
  },
})
