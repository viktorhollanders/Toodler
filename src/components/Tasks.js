import React, { useState } from 'react';
import { Text,  TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Install using: expo install @expo/vector-icons

export default function Tasks({ taskData, setTasks }) {
  // State to track if the task is checked
  const [isChecked, setIsChecked] = useState(taskData.checked || false);

  // Toggle the checkbox
  const toggleChecked = () => {
    taskData

    setTasks((prevState) => !prevState);
  };
  return (
    <TouchableOpacity onPress={toggleChecked} style={styles.container}>
      <MaterialIcons
        name={isChecked ? 'check-box' : 'check-box-outline-blank'}
        size={24}
        color={isChecked ? 'green' : 'gray'}
      />
      <Text style={[styles.text, isChecked && styles.checkedText]}>{taskData.description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
  checkedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
