import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import AppHeader from "../../components/AppHeader"
import { Ionicons, MaterialIcons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

export default function HomeScreen({ navigation }) {
  const router = useRouter()

  // Button handler for Add a Goal
  const handleAddGoal = () => {
    // Navigate to the goal setting screen
    router.push("/goals/AddGoal") // assuming you have a screen named 'AddGoal'
  }

  // Button handler for Join Asher’s Money Lesson
  const handleJoinAsherLesson = () => {
    // Navigate to the lesson screen
    router.push("/learn/LearnHome") // assuming you have a screen named 'AsherLesson'
  }

  const handleLeftPress = () => {
    console.log("Left icon pressed")
    // Add navigation or any action for the left icon (e.g., go to profile)
  }

  const handleRightPress = () => {
    console.log("Right icon pressed")
    // Add action for right icon (e.g., open notifications)
  }

  return (
    <View style={styles.container}>
      <AppHeader
        iconLeft={require("../../assets/images/avatar-01.png")} // Example avatar image
        title="Hi, Joy"
        iconRight={<Ionicons name="notifications" size={30} color="#333" />}
        onLeftPress={handleLeftPress}
        onRightPress={handleRightPress}
      />

      <View style={styles.balanceCardContainer}>
        <View style={styles.balanceSection}>
          <Text style={styles.balanceTitle}>Current saving balance</Text>
          <Text style={styles.balanceSubtitle}>Tsh 10,000</Text>
        </View>
        <View style={styles.balanceIcon}>
          <Ionicons name="card" size={42} color="#ffaa00" />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {/* Add a Goal Button */}
        <Text style={styles.title}>Your saving goal</Text>
        <Text style={styles.subtitle}>Start saving for things you want!</Text>
        <TouchableOpacity style={styles.goalButton} onPress={handleAddGoal}>
          <Text style={styles.buttonText}>Add a Goal</Text>
        </TouchableOpacity>

        {/* Join Asher's Money Lesson Button */}
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.headerSubtitle}>Financial lessons</Text>
            <Text style={styles.headerTitle}>Join Asher's Money Lesson</Text>
          </View>
          <TouchableOpacity
            style={styles.lessonButton}
            onPress={handleJoinAsherLesson}
          >
            <MaterialIcons name="arrow-right-alt" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <Image
        source={require("../../assets/images/kid with piggy.png")}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "900",
    fontFamily: "Nunito",
    color: "#333",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
    fontFamily: "Nunito",
  },
  balanceCardContainer: {
    width: "100%",
    height: 150,
    backgroundColor: "#333",
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  balanceTitle: {
    fontSize: 14,
    fontWeight: "900",
    fontFamily: "Nunito",
    color: "#fff",
    textAlign: "left",
  },
  balanceSubtitle: {
    fontSize: 32,
    color: "#fff",
    textAlign: "left",
    fontWeight: "500",
    fontFamily: "Nunito",
    marginBottom: 10,
  },
  balanceSection: {
    flex: 2,
    margin: 10,
  },
  balanceIcon: {
    flex: 1,
    margin: 10,
    width: 40,
    height: 60,
    borderRadius: 5,
    backgroundColor: "#ffaa0022",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    fontFamily: "Nunito",
    color: "#333",
    textAlign: "left",
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    textAlign: "left",
    fontWeight: "900",
    fontFamily: "Nunito",
    marginBottom: 10,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "left",
    marginBottom: 30,
  },
  goalButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginBottom: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  lessonButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "900",
    fontFamily: "Nunito",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
})
