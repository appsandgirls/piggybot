import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView
} from "react-native";
import { useRouter } from "expo-router";

export default function GuardianAccount() {
  const router = useRouter();

  const [guardianFormData, setGuardianFormData] = useState({
    name: "",
    email: "",
    phone: "",
    relation: "",
    guardianPassword: "",
  });

  const [childFormData, setChildFormData] = useState({
    childName: "",
    childPassword: "",
    childAge: "",
  });

  const handleInputChange = (form, field, value) => {
    if (form === "guardian") {
      setGuardianFormData({ ...guardianFormData, [field]: value });
    } else if (form === "child") {
      setChildFormData({ ...childFormData, [field]: value });
    }
  };

  const handleSubmit = () => {
    const requiredGuardianFields = ["name", "email", "phone", "relation", "guardianPassword"];
    const requiredChildFields = ["childName", "childPassword", "childAge"];

    // Check Guardian Form
    for (const field of requiredGuardianFields) {
      if (!guardianFormData[field]) {
        Alert.alert("Validation Error", `Please fill the ${field} field in Guardian form.`);
        return;
      }
    }

    // Check Child Form
    for (const field of requiredChildFields) {
      if (!childFormData[field]) {
        Alert.alert("Validation Error", `Please fill the ${field} field in Child form.`);
        return;
      }
    }

    console.log("Guardian Form Data Submitted:", guardianFormData);
    console.log("Child Form Data Submitted:", childFormData);
    router.replace("/auth/profilesetup");
  };

  return (
    <ScrollView style={styles.container}>
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
          { label: "Password for Guardian", field: "guardianPassword", secure: true },
        ].map(({ label, field, secure }) => (
          <TextInput
            key={field}
            style={styles.input}
            placeholder={label}
            secureTextEntry={secure}
            onChangeText={(value) => handleInputChange("guardian", field, value)}
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
            keyboardType={field === "childAge" ? "numeric" : "default"}
            onChangeText={(value) => handleInputChange("child", field, value)}
            value={childFormData[field]}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/auth/signin")} // Adjust route as needed
        style={styles.signupLink}
      >
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.link}>Sign In</Text>
        </Text>
      </TouchableOpacity>

      <View style={{paddingBottom: 100}}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    padding: 10,
  },
  button: {
    backgroundColor: "#fff",
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
  },signupLink: {
    marginTop: 20,
    alignItems: "center",
  },
  signupText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Nunito",
  },
  link: {
    fontWeight: "900",
    textDecorationLine: "underline",
  },
});
