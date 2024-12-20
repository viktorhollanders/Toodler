import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import data from '../resources/data.json';
import BoardCard from '../components/boardCard';
import Toolbar from '../components/Toolbar';
import AddBoardModal from '../components/AddBoardModal';
import EditBoardModal from '../components/EditBoarModal';

export default function BoardsScreen() {
  const [boards, setBoards] = useState(data.boards);
  const [lists, setLists] = useState(data.lists);
  const [tasks, setTasks] = useState(data.tasks);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBoards, setSelectedBoards] = useState([]);

  const setHidden = () => {
    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        selectedBoards.includes(board.id) ? { ...board, hidden: true } : board,
      ),
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

  const onEditSelect = (currentSelected) => {
    if (currentSelected.length === 1) {
      return visibleBoards.filter((board) => board.id === currentSelected[0])[0];
    }
  };

  return (
    <View style={styles.container}>
      <Toolbar
        hasSelected={selectedBoards.length}
        onAdd={() => setIsAddModalOpen(true)}
        onEdit={() => setIsEditModalOpen(true)}
        onRemove={setHidden}
      />
      <FlatList
        data={visibleBoards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BoardCard
            name={item.name}
            id={item.id}
            description={item.description}
            thumbnailPhoto={item.thumbnailPhoto}
            listData={getBoardList(item.id)}
            taskData={getListTasks(item.id)}
            setLists={setLists}
            setTasks={setTasks}
            onLongPress={onLongPressBoard}
            isSelected={selectedBoards.includes(item.id)}
          />
        )}
      />

      <AddBoardModal
        isOpen={isAddModalOpen}
        closeModal={() => setIsAddModalOpen(false)}
        boardsData={boards}
        setBoards={setBoards}
      />

      <EditBoardModal
        isOpen={isEditModalOpen}
        closeModal={() => setIsEditModalOpen(false)}
        boardsData={boards}
        currBoardData={selectedBoards.length === 1 ? onEditSelect(selectedBoards) : null}
        updateBoard={(updatedBoard) => {
          setBoards((prevBoards) =>
            prevBoards.map((board) =>
              board.id === updatedBoard.id ? { ...board, ...updatedBoard } : board,
            ),
          );
        }}
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
