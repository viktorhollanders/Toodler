import React, { useState } from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import TempListCard from '../components/TempListCard';
import Toolbar from '../components/Toolbar';

export default function ListsScreen({ route }) {

  const { boardId, listData, taskData, setLists, setTasks} = route.params;

  // const [lists, setLists] = useState(listData);
  // const [tasks, setTasks] = useState(taskData);

  const [selectedLists, setSelectedLists] = useState([]);

  const setHidden = () => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        selectedLists.includes(list.id) ? { ...list, hidden: true } : list
      )
    );
    setSelectedLists([]);
  };

  console.log(listData)

  const onLongPressLists = (listId) => {
    if (selectedLists.includes(listId)) {
      setSelectedLists(selectedLists.filter((list) => list !== listId));
    } else {
      setSelectedLists([...selectedLists, listId]);
    }
  };

  const visibleLists = listData.filter((list) => !list.hidden);


    return (
    <View style={styles.container}>
      <Toolbar
        hasSelected={selectedLists.length}
        onAdd={() => console.log('Add action')}
        onEdit={() => console.log('Edit action')}
        onRemove={setHidden}
      />
      <FlatList
        data={visibleLists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TempListCard 
            listId={item.id}
            listData={item} 
            taskData={taskData}
            onLongPress={onLongPressLists}
            />
          </View>
        )}
      />
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
