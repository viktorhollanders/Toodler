import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Checklist from '../components/Checklist'

export default function TasksScreen() {
  const route = useRoute();
  const {listId, listData, taskData } = route.params;

  const filteredTasks = taskData.filter(task => task.listId === listId);

  return (
    <View>
      <View>
        <Text> {listData.name} </Text>
        <FlatList
            data={filteredTasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <Checklist
                taskData={item}
                />
            )}  />
    </View>
    {/* <FlatList
      data={filteredTasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
      <View style={styles.card}>
        <Checklist
          taskData={item}
        />
      </View>
      )}
    /> */}
    </View>
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