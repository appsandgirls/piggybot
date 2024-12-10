// /learn/lesson1.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import SoundButton from '../../components/SoundButton'; // Toggle sound button

export default function Lesson1() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const router = useRouter();

  const handleDecision = (choice) => {
    router.push({
      pathname: '/learn/results',
      params: { choice },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson 1: Make a Choice!</Text>
      <Text style={styles.text}>
        Help Asher make a decision about saving money for the future.
      </Text>

      <TouchableOpacity
        style={styles.option}
        onPress={() => handleDecision('Save')}
      >
        <Text style={styles.optionText}>Save Money</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => handleDecision('Spend')}
      >
        <Text style={styles.optionText}>Spend Money</Text>
      </TouchableOpacity>

      <SoundButton soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  option: {
    backgroundColor: '#FFA500',
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  optionText: {
    color: '#FFF',
    fontSize: 18,
  },
});
