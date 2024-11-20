import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import AppHeader from "../../components/AppHeader"
import { Ionicons } from "@expo/vector-icons" 

export default function HomeScreen({ navigation }) {
  // Button handler for Add a Goal
  const handleAddGoal = () => {
    // Navigate to the goal setting screen
    navigation.navigate("AddGoal") // assuming you have a screen named 'AddGoal'
  }

  // Button handler for Join Asher’s Money Lesson
  const handleJoinAsherLesson = () => {
    // Navigate to the lesson screen
    navigation.navigate("AsherLesson") // assuming you have a screen named 'AsherLesson'
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
        title="Hi, Lovey"
        iconRight={<Ionicons name="notifications" size={30} color="#333" />}
        onLeftPress={handleLeftPress}
        onRightPress={handleRightPress}
      />

      <View style={styles.balanceCardContainer}>
        <View>
          <Text style={styles.balanceTitle}>Current saving balance</Text>
          <Text style={styles.balanceSubtitle}>Tsh 10,000</Text>
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
        <Text style={styles.title}>Join Asher's Money Lesson</Text>
        <TouchableOpacity
          style={styles.lessonButton}
          onPress={handleJoinAsherLesson}
        >
          <Text style={styles.buttonText}>Join Asher's Money Lesson</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require("../../assets/images/yellow piggy.png")}
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
  balanceCardContainer: {
    width: "100%",
    height: 150,
    backgroundColor: "#333",
    marginVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "left",
    borderRadius: 10,
  },
  balanceTitle: {
    fontSize: 14,
    fontWeight: "900",
    fontFamily: "Nunito",
    color: "#fff",
    textAlign: "left",
  },
  balanceSubtitle: {
    fontSize: 12,
    color: "#fff",
    textAlign: "left",
    fontWeight: "500",
    fontFamily: "Nunito",
    marginBottom: 10,
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
    backgroundColor: "#ff56ff", // Bright green for positive action
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  lessonButton: {
    backgroundColor: "#FF5733", // Bright red-orange for excitement
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: "100%",
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
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
})
