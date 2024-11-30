import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { mainStyles } from '../styles/mainStyles';
import Modal from './Modal';

const AddListModal = ({ boardId, isOpen, closeModal, listData, setLists, setLocalListData }) => {
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    color: '#ffffff',
    boardId: boardId,
    hidden: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value, // Dynamically update the specific field
    }));
  };

  const addList = () => {
    const newListId = Math.max(...listData.map((list) => list.id)) + 1;

    const newList = {
      id: newListId,
      name: formData.name,
      color: formData.color,
      boardId: formData.boardId,
      hidden: formData.hidden,
    };

    // Update the boards list
    setLocalListData((prevLists) => [...prevLists, newList]);
    setLists((prevLists) => [...prevLists, newList]);

    setFormData({ id: 0, name: '', color: '#ffffff', boardId: boardId, hidden: false });
    closeModal();
  };
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <View style={modal.inputForm}>
        <Text style={modal.inputLabel}></Text>
        <TextInput
          style={modal.input}
          placeholder="Enter board name"
          onChangeText={(value) => handleInputChange('name', value)}
          value={formData.name}
        />
      </View>

      <Button title={'Add List'} onPress={addList}>
        Add List
      </Button>
    </Modal>
  );
};

const modal = StyleSheet.create({
  inputForm: {},
  inputLabel: {
    fontSize: mainStyles.fonts.sm,
  },
  input: { height: 40, margin: 12, borderWidth: 1, padding: 10 },
});

export default AddListModal;
