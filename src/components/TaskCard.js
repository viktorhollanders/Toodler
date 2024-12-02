import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { mainStyles } from '../styles/mainStyles';

export default function TaskCard({ taskId, taskData, onToggleCheck, onLongPress }) {
  return (
    <TouchableOpacity onPress={() => onToggleCheck(taskData.id)} style={styles.container} onLongPress={() => onLongPress(taskId)}>
      <MaterialIcons
        name={taskData.isFinished ? 'check-box' : 'check-box-outline-blank'}
        size={24}
        color={taskData.isFinished ? 'green' : 'gray'}
      />
      <View style={styles.contentContainer}>
        <Text style={[styles.text, styles.name, taskData.isFinished && styles.checkedName]}>
          {taskData.name}
        </Text>
        <Text style={[styles.text, taskData.isFinished && styles.checkedDescription]}>
          {taskData.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'top',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  contentContainer: {
    paddingTop: 4,
  },
  text: {
    marginLeft: 10,
    fontSize: mainStyles.fonts.sm,
  },
  name: {
    fontWeight: mainStyles.fontWeights.bold,
    marginBottom: 10,
  },
  checkedName: {
    textDecorationLine: 'line-through',
    color: mainStyles.colors.gray50,
  },
  checkedDescription: {
    color: mainStyles.colors.gray50,
  },
});
