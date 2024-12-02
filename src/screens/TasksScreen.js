import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import TaskCard from '../components/TaskCard';
import Toolbar from '../components/Toolbar';
import { mainStyles } from '../styles/mainStyles';

export default function TasksScreen() {
  const route = useRoute();
  const { listId, listName, listData, setLists, setTasks, taskData } = route.params;
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [localTasks, setLocalTasks] = useState(
    taskData.filter((task) => task.listId === listId && !task.hidden),
  );

  return (
    <View style={styles.container}>
      {/* <Toolbar
        hasSelected={selectedLists.length}
        onAdd={() => setIsAddModalOpen(true)}
        onEdit={() => setIsEditModalOpen(true)}
        onRemove={setHidden}
      /> */}

      <Text style={styles.listName}> {listName} </Text>
      <FlatList
        data={localTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskCard taskData={item} setLocalTasks={setLocalTasks} />}
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
