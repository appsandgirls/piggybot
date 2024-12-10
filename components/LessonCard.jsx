import React from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import { useRouter } from "expo-router"

export default function LessonCard({ lesson }) {
  const router = useRouter()

  const handlePress = () => {
    // Navigate to the lesson details page
    router.push(`/learn/${lesson.id}`)
  }

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: lesson.thumbnail }} style={styles.thumbnail} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{lesson.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {lesson.description}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Play Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  thumbnail: {
    width: 120,
    height: 90,
    borderRadius: 10,
  },
  detailsContainer: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#FFA500",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
})
