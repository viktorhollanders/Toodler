import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, Button, StyleSheet } from 'react-native';

export default AddBoardModal = (boardsData) => {
  const [boards, setBoards] = useState(boardsData);
  const [boardName, onChangeName] = useState('');
  const [boardDescription, onChangeDescription] = useState('');
  const [boardImageUrl, onChangeImage] = useState('');

  const addBoard = () => {
    const newBoardId = Math.max(...boards.map((board) => board.id)) + 1;

    const newBoard = {
      id: newBoardId,
      name: boardName,
      description: boardDescription,
      thumbnailPhoto: boardImageUrl,
    };

    const tempBoard = boards.push(newBoard);
    setBoards(tempBoard);
  };

  return (
    <SafeAreaView style={modal.modalCard}>
      <View style={modal.modalItem}>
        <Text style={modal.inputLabel}>Board name</Text>
        <TextInput style={modal.input} onChange={onChangeName} value={boardName} />
      </View>
      <View style={modal.modalItem}>
        <Text style={modal.inputLabel}>Board description</Text>
        <TextInput style={modal.input} onChange={onChangeDescription} value={boardDescription} />
      </View>
      <View style={modal.modalItem}>
        <Text style={modal.inputLabel}>Board image</Text>
        <TextInput style={modal.input} onChange={onChangeImage} value={boardImageUrl} />
      </View>
      <Button title={'Add new board'} onPress={() => addBoard()}>
        Add new board
      </Button>
    </SafeAreaView>
  );
};

const modal = StyleSheet.create({
  modalCard: {},
  modalItem: {},
  inputLabel: {},
  input: {},
});
