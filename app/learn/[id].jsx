import React from "react"
import { View, Text, StyleSheet, Image, Button, ScrollView } from "react-native"
import { Video } from "expo-av"
import { useRouter, useGlobalSearchParams } from "expo-router"
import { TouchableOpacity } from "react-native"

export default function LessonDetail() {
  const { id } = useGlobalSearchParams() 
  const router = useRouter()

  // Lesson data
  const lessons = [
    {
      id: "1",
      title: "Learn Financial Basics",
      description:
        "In this video, you will learn the basics of managing personal finances and budgeting.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with actual video URL
      thumbnail:
        "https://via.placeholder.com/350x200.png?text=Financial+Basics", // Example URL
    },
    {
      id: "2",
      title: "Investing 101",
      description:
        "Discover the fundamentals of investing, including stocks, bonds, and mutual funds.",
      videoUrl: "https://www.w3schools.com/html/movie.mp4", // Replace with actual video URL
      thumbnail: "https://via.placeholder.com/350x200.png?text=Investing+101", // Example URL
    },
  ]

  // Find the lesson by its ID
  const lesson = lessons.find((lesson) => lesson.id === id)

  // If the lesson is not found
  if (!lesson) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lesson not found</Text>
        <Button title="Back to Lessons" onPress={() => router.push("/learn")} />
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: lesson.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.description}>{lesson.description}</Text>

      <View style={styles.videoContainer}>
       
        <Video
          source={{ uri: lesson.videoUrl }}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
          shouldPlay={false} // Auto-play disabled
        />
      </View>

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => router.push("/learn")}
      >
        <Text style={styles.buttonText}>Back to Lessons</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "start"
  },
  thumbnail: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  videoContainer: {
    marginBottom: 20,
  },
  videoText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  video: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  createButton: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
})
