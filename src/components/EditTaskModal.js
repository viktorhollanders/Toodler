import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { mainStyles } from '../styles/mainStyles';
import Modal from './Modal';

const EditTaskModal = ({ isOpen, closeModal, currTaskData, updateTask }) => {
  if (!currTaskData) {
    return null; // Do not render if no board is passed
  }

  const [currentTask, setCurrentTask] = useState({
    name: currTaskData.name,
    description: currTaskData.description,
  });

  const handleInputChange = (field, value) => {
    setCurrentTask((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const editTask = () => {
    const updatedTask = {
      ...currTaskData,
      ...currentTask, // Merge updated fields
    };

    updateTask(updatedTask); // Save changes to parent state
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <View>
        <Text style={modal.inputLabel}>Task name:</Text>
        <TextInput
          style={modal.input}
          placeholder="Enter task name"
          onChangeText={(value) => handleInputChange('name', value)}
          value={currentTask.name}
        />
      </View>

      <View>
        <Text style={modal.inputLabel}>Task description:</Text>
        <TextInput
          style={modal.input}
          placeholder="Enter task description"
          onChangeText={(value) => handleInputChange('description', value)}
          value={currentTask.description}
        />
      </View>

      <View>
        <Button title={'Save Changes'} onPress={editTask} />
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
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default EditTaskModal;
