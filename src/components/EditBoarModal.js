import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { mainStyles } from '../styles/mainStyles';
import Modal from './Modal';

const EditBoardModal = ({ isOpen, closeModal, currBoardData, boardsData, setBoards }) => {
  const [curBoardId, curBoardName, curBoardThumbnailPhoto, curBoardHidden] = currBoardData;
  const [currentBoard, setCurrentBoard] = useState({
    boardId: curBoardId,
    name: curBoardName,
    thumbnailPhoto: curBoardThumbnailPhoto,
    boardHidden: curBoardHidden,
  });

  const handleInputChange = (field, value) => {
    setCurrentBoard((prevData) => ({
      ...prevData,
      [field]: value, // Dynamically update the specific field
    }));
  };

  const editBoard = () => {};
  const cancel = () => {
    closeModal();
  };
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <View>
        <Text style={modal.inputLabel}></Text>
        <TextInput
          style={modal.input}
          placeholder="Enter board name"
          onChangeText={(value) => handleInputChange('boardName', value)}
          value={currentBoard.name}
        />
      </View>

      <View>
        <Text style={modal.inputLabel}></Text>
        <TextInput
          style={modal.input}
          placeholder="Enter image link"
          onChangeText={(value) => handleInputChange('thumbnailPhoto', value)}
          value={currentBoard.thumbnailPhoto}
        />
      </View>

      <View>
        <Button title={'Edit Board'} onPress={editBoard} />
        <Button title={'Cancel'} onPress={cancel} color={mainStyles.colors.error} />
      </View>
    </Modal>
  );
};

const modal = StyleSheet.create({
  inputLabel: {
    fontSize: mainStyles.fonts.sm,
  },
  input: {
    height: 40,
    maxWidth: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default EditBoardModal;
