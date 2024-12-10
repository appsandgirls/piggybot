import React from "react"
import { View, FlatList, StyleSheet, Text} from "react-native"
import { useRouter } from "expo-router"
import LessonCard from "../../components/LessonCard"

export default function LearnHome() {
  const router = useRouter()

  const lessons = [
    {
      id: "1",
      title: "Learn Financial Basics",
      description:
        "In this video, you will learn the basics of managing personal finances and budgeting.",
      thumbnail: "https://example.com/thumbnail1.jpg",
    },
    {
      id: "2",
      title: "Investing 101",
      description:
        "Discover the fundamentals of investing, including stocks, bonds, and mutual funds.",
      thumbnail: "https://example.com/thumbnail2.jpg",
    },
    // Add more lessons here
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Learn</Text>
      <FlatList
        data={lessons}
        renderItem={({ item }) => <LessonCard lesson={item} />}
        keyExtractor={(item) => item.id}
      />
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#FFA500", // Or any color you prefer
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "900",
    fontFamily: "Nunito",
    color: "#fff",
    marginBottom: 50,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
    fontFamily: "Nunito",
  },
})
