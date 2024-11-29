import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import data from '../resources/data.json';
import BoardCard from '../components/boardCard';
import Toolbar from '../components/Toolbar';

export default function BoardsScreen() {
  const [boards, setBoards] = useState(data.boards);
  const [lists, setLists] = useState(data.lists);
  const [tasks, setTasks] = useState(data.tasks);

  const [selectedBoards, setSelectedBoards] = useState([]);
  const [hiddenBoards, setHiddenBoards] = useState([]);

  const onRemove = () => {
    setHiddenBoards([...hiddenBoards, ...selectedBoards]);
    setSelectedBoards([]);
  };

  const onLongPress = (boardId) => {
    if (selectedBoards.includes(boardId)) {
      setSelectedBoards(selectedBoards.filter((board) => board !== boardId));
    } else {
      setSelectedBoards([...selectedBoards, boardId]);
    }
  };

  const getBoardList = (boardId) => lists.filter((list) => list.boardId === boardId);
  const visibleBoards = boards.filter((board) => !hiddenBoards.includes(board.id));

  const getListTasks = (boardId) => {
    const listIds = lists.filter((list) => list.boardId === boardId).map((list) => list.id);
    return tasks.filter((task) => listIds.includes(task.listId));
  };

  return (
    <View style={styles.container}>
      <Toolbar
        hasSelected={selectedBoards.length}
        onAdd={() => console.log('Add action')}
        onEdit={() => console.log('Edit action')}
        onRemove={onRemove}
      />
      <FlatList
        data={visibleBoards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BoardCard
            name={item.name}
            id={item.id}
            listData={getBoardList(item.id)}
            taskData={getListTasks(item.id)}
            onLongPress={onLongPress}
            isSelected={selectedBoards.includes(item.id)}
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
