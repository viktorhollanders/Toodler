import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import data from '../resources/data.json';

export default function TasksScreen() {
  const route = useRoute();
  const { listId } = route.params;

  // const tasks = data.tasks.filter((task) => task.listId === listId);

  return (
    <View>
      <Text> halló </Text>
    </View>
    // <View style={styles.container}>
    //   <FlatList
    //     data={tasks}
    //     keyExtractor={(item) => item.id.toString()}
    //     renderItem={({ item }) => (
    //       <View style={styles.card}>
    //         <Text style={styles.name}>{item.name}</Text>
    //         <Text>{item.description}</Text>
    //         <Text>Status: {item.isFinished ? 'Finished' : 'Pending'}</Text>
    //       </View>
    //     )}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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