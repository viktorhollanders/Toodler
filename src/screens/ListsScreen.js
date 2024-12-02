import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ListCard from '../components/ListCard';
import Toolbar from '../components/Toolbar';
import AddListModal from '../components/AddListModal';
import EditListModal from '../components/EditListModal';
import { mainStyles } from '../styles/mainStyles';

export default function ListsScreen({ route }) {
  const { boardId, boardName, listData, taskData, setLists, setTasks } = route.params;
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedLists, setSelectedLists] = useState([]);
  const [localListData, setLocalListData] = useState(listData);

  const setHidden = () => {
    setLocalListData((prevLists) =>
      prevLists.map((list) => (selectedLists.includes(list.id) ? { ...list, hidden: true } : list)),
    );
    setSelectedLists([]);
    setLists((prevLists) =>
      prevLists.map((list) => (selectedLists.includes(list.id) ? { ...list, hidden: true } : list)),
    );
    setSelectedLists([]);
  };

  const onLongPressLists = (listId) => {
    if (selectedLists.includes(listId)) {
      setSelectedLists(selectedLists.filter((list) => list !== listId));
    } else {
      setSelectedLists([...selectedLists, listId]);
    }
  };

  const visibleLists = localListData.filter((list) => !list.hidden);

  const closeModal = () => {
    setIsAddModalOpen(false);
  };

  const onEditSelect = (currentSelected) => {
    if (currentSelected.length === 1) {
      return visibleLists.filter((list) => list.id === currentSelected[0])[0];
    }
  };

  return (
    <View style={styles.container}>
      <Toolbar
        hasSelected={selectedLists.length}
        onAdd={() => setIsAddModalOpen(true)}
        onEdit={() => setIsEditModalOpen(true)}
        onRemove={setHidden}
      />

      <Text style={styles.boardName}>{boardName}</Text>
      <FlatList
        data={visibleLists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListCard
            listId={item.id}
            listName={item.name}
            listData={item}
            taskData={taskData}
            setLists={setLists}
            setTasks={setTasks}
            onLongPress={onLongPressLists}
          />
        )}
      />

      <AddListModal
        boardId={boardId}
        isOpen={isAddModalOpen}
        closeModal={() => closeModal()}
        localListData={localListData}
        setLists={setLists}
        setLocalListData={setLocalListData}
      />

      <EditListModal
        isOpen={isEditModalOpen}
        closeModal={() => setIsEditModalOpen(false)}
        listData={localListData}
        currListData={selectedLists.length === 1 ? onEditSelect(selectedLists) : null}
        updateList={(updateList) => {
          setLists((prevList) =>
            prevList.map((list) => (list.id === updateList.id ? { ...list, ...updateList } : list)),
          );
          setLocalListData((prevList) =>
            prevList.map((list) => (list.id === updateList.id ? { ...list, ...updateList } : list)),
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
  boardName: {
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
