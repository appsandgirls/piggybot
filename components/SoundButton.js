import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SoundButton = ({ soundEnabled, setSoundEnabled }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => setSoundEnabled(!soundEnabled)}
    >
      <Text style={styles.buttonText}>
        {soundEnabled ? 'Turn Sound Off' : 'Turn Sound On'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default SoundButton;
