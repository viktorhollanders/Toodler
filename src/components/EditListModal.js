import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { mainStyles } from '../styles/mainStyles';
import Modal from './Modal';

const EditListModal = ({ isOpen, closeModal, currListData, updateList }) => {
  if (!currListData) {
    return null; // Do not render if no board is passed
  }

  const [currentList, setCurrentList] = useState({
    name: currListData.name,
  });

  const handleInputChange = (field, value) => {
    setCurrentList((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const editList = () => {
    const updatedList = {
      ...currListData,
      ...currentList, // Merge updated fields
    };

    updateList(updatedList); // Save changes to parent state
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <View>
        <Text style={modal.inputLabel}>List Name:</Text>
        <TextInput
          style={modal.input}
          placeholder="Enter list name"
          onChangeText={(value) => handleInputChange('name', value)}
          value={currentList.name}
        />
      </View>

      <View>
        <Button title={'Save Changes'} onPress={editList} />
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

export default EditListModal;
