import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { mainStyles } from '../styles/mainStyles';
import Modal from './Modal';

const EditBoardModal = ({ isOpen, closeModal, currBoardData, updateBoard }) => {
  if (!currBoardData) {
    return null; // Do not render if no board is passed
  }

  const [currentBoard, setCurrentBoard] = useState({
    name: currBoardData.name,
    description: currBoardData.description,
    thumbnailPhoto: currBoardData.thumbnailPhoto,
  });

  const handleInputChange = (field, value) => {
    setCurrentBoard((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const editBoard = () => {
    const updatedBoard = {
      ...currBoardData,
      ...currentBoard, // Merge updated fields
    };

    updateBoard(updatedBoard); // Save changes to parent state
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <View>
        <Text style={modal.inputLabel}>Board Name:</Text>
        <TextInput
          style={modal.input}
          placeholder="Enter board name"
          onChangeText={(value) => handleInputChange('name', value)}
          value={currentBoard.name}
        />
      </View>

      <View>
        <Text style={modal.inputLabel}>Description:</Text>
        <TextInput
          style={modal.input}
          placeholder="Enter board description"
          onChangeText={(value) => handleInputChange('description', value)}
          value={currentBoard.description}
        />
      </View>

      <View>
        <Text style={modal.inputLabel}>Thumbnail URL:</Text>
        <TextInput
          style={modal.input}
          placeholder="Enter image link"
          onChangeText={(value) => handleInputChange('thumbnailPhoto', value)}
          value={currentBoard.thumbnailPhoto}
        />
      </View>

      <View>
        <Button title={'Save Changes'} onPress={editBoard} />
        <Button title={'Cancel'} onPress={closeModal} color={mainStyles.colors.error} />
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
