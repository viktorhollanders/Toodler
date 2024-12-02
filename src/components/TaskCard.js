import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TaskCard({ taskData, setLocalTasks }) {
  const toggleChecked = () => {
    setLocalTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskData.id ? { ...task, isFinished: !task.isFinished } : task,
      ),
    );
  };

  return (
    <TouchableOpacity onPress={toggleChecked} style={styles.container}>
      <MaterialIcons
        name={taskData.isFinished ? 'check-box' : 'check-box-outline-blank'}
        size={24}
        color={taskData.isFinished ? 'green' : 'gray'}
      />
      <Text style={[styles.text, taskData.isFinished && styles.checkedText]}>
        {taskData.description}
      </Text>
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
