import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TaskCard from './ListTasks';

export default function ListCard({
  listId,
  listName,
  listData,
  taskData,
  setLists,
  setTasks,
  onLongPress,
  isSelected,
}) {
  const { navigate } = useNavigation();

  const navigateToTasks = (listId, listName) => {
    navigate('Tasks', { listId, listName, listData, setLists, setTasks, taskData });
  };

  const filteredTasks = taskData.filter((task) => task.listId === listId);

  return (
    <TouchableOpacity
      onPress={() => navigateToTasks(listId, listName)}
      onLongPress={() => onLongPress(listId)}
    >
      <View style={[styles.card, isSelected && styles.selectedCard]}>
        <Text style={styles.name}> {listName} </Text>
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TaskCard taskData={item} />}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
  selectedCard: {
    opacity: 0.5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
  },
});
