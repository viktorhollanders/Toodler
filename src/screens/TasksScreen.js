import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Checklist from '../components/Checklist';
import { mainStyles } from '../styles/mainStyles';

export default function TasksScreen() {
  const route = useRoute();
  const { listId, listName, listData, taskData } = route.params;

  const filteredTasks = taskData.filter((task) => task.listId === listId);

  return (
    <View style={styles.container}>
      <Text style={styles.listName}> {listName} </Text>
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Checklist taskData={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  listName: {
    fontSize: mainStyles.fonts.md,
    textAlign: 'center',
    fontWeight: mainStyles.fontWeights.bold,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
