import React, { useState } from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import data from '../resources/data.json';
import BoardCard from '../components/boardCard';
import Toolbar from '../components/Toolbar'

export default function BoardsScreen() {
  const [boards, setBoards] = useState(data.boards);
  const [lists, setLists] = useState(data.lists);
  const [tasks, setTasks] = useState(data.tasks);
  const getBoardList = (boardId) => {
    const filteredList = lists.filter((list) => list.boardId === boardId);
    return filteredList;
  };

  const getlistTasks = (boardId) => {
    const listIds = lists.filter((list) => list.boardId === boardId).map((list) => list.id);
    const listTasks = tasks.filter((task) => task.listId in listIds);
    return listTasks;
  };
  const [selectedBoards, setSelectedBoards] = useState([])

  

  return (
    <View style={styles.container}>
        <Toolbar
            hasSelected={selectedBoards.length > 0}
            onAdd={() => console.log('Add action')}
            onRemove={() => console.log('Remove action')}
            />
      <FlatList
        data={boards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BoardCard
            name={item.name}
            id={item.id}
            listData={getBoardList(item.id)}
            taskData={getlistTasks(item.id)}
          />
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
});
