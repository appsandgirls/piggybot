import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import { useRouter } from "expo-router"


export default function GuardianAccount() {
      const router = useRouter()

  const [guardianFormData, setGuardianFormData] = useState({
    name: "",
    email: "",
    phone: "",
    relation: "",
    guardianPassword: "",
    childName: "",
    childPassword: "",
    childAge: "",
  })


  const [childFormData, setChildFormData] = useState({
    childName: "",
    childPassword: "",
    childAge: "",
  })
  const handleInputChange = (field, value) => {
    setChildFormData({ ...childFormData, [field]: value })
    setGuardianFormData({ ...guardianFormData, [field]: value })
  }

  const handleSubmit = () => {
    const requiredFields = [
      "name",
      /* "email",
      "phone",
      "relation",
      "guardianPassword",
      "childName",
      "childPassword",
      "childAge", */
    ]

    for (const field of requiredFields) {
      if (!guardianFormData[field]) {
        alert(`Please fill the ${field} field.`)
        return
      }
    }

    console.log("Child Form Data Submitted:", childFormData)
    console.log("Guardian Form Data Submitted:", guardianFormData)
    router.replace("/auth/profilesetup")
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guardian Account</Text>
      <Text style={styles.subtitle}>
        For monitoring child activities and progress
      </Text>

      <View style={styles.form}>
        {[
          { label: "Your Name", field: "name" },
          { label: "Email", field: "email" },
          { label: "Phone", field: "phone" },
          { label: "Relation to Child", field: "relation" },
          {
            label: "Password for Guardian",
            field: "guardianPassword",
            secure: true,
          },
        ].map(({ label, field, secure }) => (
          <TextInput
            key={field}
            style={styles.input}
            placeholder={label}
            secureTextEntry={secure}
            onChangeText={(value) => handleInputChange(field, value)}
            value={guardianFormData[field]}
          />
        ))}
      </View>
      <Text style={styles.title}>Child Account</Text>
      <Text style={styles.subtitle}>
        For monitoring child's activity and saving progress.
      </Text>
      <View style={styles.form}>
        {[
          { label: "Child's Name", field: "childName" },
          { label: "Child's Password", field: "childPassword", secure: true },
          { label: "Child's Age", field: "childAge" },
        ].map(({ label, field, secure }) => (
          <TextInput
            key={field}
            style={styles.input}
            placeholder={label}
            secureTextEntry={secure}
            onChangeText={(value) => handleInputChange(field, value)}
            value={guardianFormData[field]}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#FFA500",
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    fontFamily: "Nunito",
    color: "#fff",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Nunito",
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFA500",
    marginBottom: 15,
    fontSize: 16,
    fontFamily: "Nunito",
    padding: 5,
  },
  inputError: {
    borderBottomColor: "red",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 99,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFA500",
    fontWeight: "900",
    fontFamily: "Nunito",
    fontSize: 16,
  },
})

