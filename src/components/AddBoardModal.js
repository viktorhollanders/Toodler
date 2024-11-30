import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { mainStyles } from '../styles/mainStyles';
import Modal from './Modal';

const AddBoardModal = ({ isOpen, closeModal, boardsData, setBoards }) => {
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    thumbnailPhoto: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value, // Dynamically update the specific field
    }));
  };

  const addBoard = () => {
    const newBoardId = Math.max(...boardsData.map((board) => board.id)) + 1;

    const newBoard = {
      id: newBoardId,
      name: formData.name,
      thumbnailPhoto: formData.thumbnailPhoto,
    };

    // Update the boards list
    setBoards((prevBoards) => [...prevBoards, newBoard]);

    setFormData({ id: 0, name: '', thumbnailPhoto: '' }); // Reset form
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <View>
        <Text style={modal.inputLabel}></Text>
        <TextInput
          style={modal.input}
          placeholder="Enter board name"
          onChangeText={(value) => handleInputChange('name', value)}
          value={formData.name}
        />
      </View>

      <View>
        <Text style={modal.inputLabel}></Text>
        <TextInput
          style={modal.input}
          placeholder="Enter image link"
          onChangeText={(value) => handleInputChange('thumbnailPhoto', value)}
          value={formData.thumbnailPhoto}
        />
      </View>

      <Button title={'Add Board'} onPress={addBoard}>
        Add Board
      </Button>
    </Modal>
  );
};

const modal = StyleSheet.create({
  inputLabel: {
    fontSize: mainStyles.fonts.sm,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default AddBoardModal;
