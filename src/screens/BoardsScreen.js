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

  const setHidden = () => {
    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        selectedBoards.includes(board.id) ? { ...board, hidden: true } : board
      )
    );
    setSelectedBoards([]);
  };

  const onLongPressBoard = (boardId) => {
    if (selectedBoards.includes(boardId)) {
      setSelectedBoards(selectedBoards.filter((board) => board !== boardId));
    } else {
      setSelectedBoards([...selectedBoards, boardId]);
    }
  };

  const getBoardList = (boardId) => lists.filter((list) => list.boardId === boardId);
  const visibleBoards = boards.filter((board) => !board.hidden);

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
        onRemove={setHidden}
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
            onLongPress={onLongPressBoard}
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
