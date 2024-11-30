import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function ListTasks({ taskData }) {
  return (
    <View>
      <Text style={style.name}> {taskData.name} </Text>
    </View>
  );
}

const style = StyleSheet.create({
  name: {
    paddingBottom: 12,
  }
})
