import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useGlobalSearchParams } from 'expo-router';

export default function Results() {
  const { choice } = useGlobalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Text style={styles.text}>
        You chose to {choice}. Let's see what happens!
      </Text>

      <Text style={styles.text}>
        {choice === 'Save'
          ? 'Great job! You saved money for the future.'
          : 'Oops! Spending now means less savings for later.'}
      </Text>

      <Button title="Next Lesson" onPress={() => router.push('/learn/lesson2')} />
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
});
