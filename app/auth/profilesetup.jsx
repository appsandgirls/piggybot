import React, { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

const avatars = [
  require("../../assets/images/avatar-01.png"),
  require("../../assets/images/avatar-02.png"),
  require("../../assets/images/avatar-03.png"),
  require("../../assets/images/avatar-04.png"),
  require("../../assets/images/avatar-05.png"),
  require("../../assets/images/avatar-06.png"),
]

export default function ProfileSetup() {
          const router = useRouter()

  const [selectedAvatar, setSelectedAvatar] = useState(null)
  const [passcode, setPasscode] = useState([])

  const handleAvatarSelect = (index) => {
    setSelectedAvatar(index)
  }

  const addPasscodeDigit = (digit, color) => {
    setPasscode((prevPasscode) => {
      if (prevPasscode.length < 4) {
        return [...prevPasscode, { digit, color }]
      }
      return prevPasscode
    })
  }

  const removeLastPasscodeDigit = () => {
    setPasscode((prevPasscode) => prevPasscode.slice(0, -1))
  }

  const saveProfile = () => {
    // Handle save functionality here, such as sending the data to a backend
    console.log(
      "Profile saved with avatar:",
      selectedAvatar,
      "and passcode:",
      passcode
    )

    router.replace("(tabs)")
  }

  const colors = [
    "#FF5733", // 0
    "#33FF57", // 1
    "#3357FF", // 2
    "#F3FF33", // 3
    "#FF33F0", // 4
    "#33FFF0", // 5
    "#F033FF", // 6
     "#33FF57", // 7
    "#A533FF", // 8
    "#33FFA5", // 9
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Setup</Text>
      <Text style={styles.subtitle}>
        Personalize your experience by selecting an avatar or uploading your
        preferred image.
      </Text>

      <View style={styles.avatarContainer}>
        {avatars.map((avatar, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleAvatarSelect(index)}
          >
            <Image
              source={avatar}
              style={[
                styles.avatar,
                selectedAvatar === index && styles.selectedAvatar,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.subtitle}>
        Create a unique passcode with a combination of colors.
      </Text>

      <View style={styles.passcodeContainer}>
        {passcode.map(({ digit, color }, index) => (
          <View
            key={index}
            style={[styles.passcodeDot, { backgroundColor: color }]}
          >
            <Text style={styles.passcodeText}>{digit}</Text>
          </View>
        ))}
      </View>

      <View style={styles.colorButtons}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.colorButton, { backgroundColor: color }]}
            onPress={() => addPasscodeDigit(index, color)}
          >
            <Text style={styles.colorButtonText}>{index}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={removeLastPasscodeDigit}
        >
          <Ionicons name="close-circle" size={50} color="#FF5733" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={saveProfile}>
          <Text style={styles.saveButtonText}>Save Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA500",
    paddingHorizontal: 40,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    fontFamily: "Nunito",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
    fontFamily: "Nunito",
    textAlign: "center",
    marginBottom: 20,
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedAvatar: {
    borderColor: "#fff",
  },
  passcodeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  passcodeDot: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  passcodeText: {
    color: "#333",
    fontWeight: "900",
    fontFamily: "Nunito",
    fontSize: 16,
  },
  colorButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  colorButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  colorButtonText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "900",
    fontFamily: "Nunito",
  },
  actionButtonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  deleteButton: {
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  saveButtonText: {
    fontSize: 18,
    color: "#FFA533",
    fontWeight: "900",
    fontFamily: "Nunito",
  },
})
