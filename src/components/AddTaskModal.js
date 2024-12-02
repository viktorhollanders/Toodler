import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { mainStyles } from '../styles/mainStyles';
import Modal from './Modal';

const AddTaskModal = ({ listId, isOpen, closeModal, localTaskData, setTask, setTaskData }) => {
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    description: '',
    isFinished: false,
    listId,
    hidden: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value, // Dynamically update the specific field
    }));
  };

  const addTask = () => {
    const newTaskId = Math.max(...localTaskData.map((list) => list.id)) + 1;

    const newTask = {
      id: newListId,
      name: formData.name,
      description: formData.description,
      isFinished: formData.isFinished,
      listId: formData.listId,
      hidden: formData.hidden,
    };

    // Update the boards list
    setTaskData((prevLists) => [...prevLists, newTask]);
    setTask((prevLists) => [...prevLists, newTask]);

    closeModal();
  };
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <View style={modal.inputForm}>
        <Text style={modal.inputLabel}></Text>
        <TextInput
          style={modal.input}
          placeholder="Enter task name"
          onChangeText={(value) => handleInputChange('name', value)}
          value={formData.name}
        />
      </View>

      <View style={modal.inputForm}>
        <Text style={modal.inputLabel}></Text>
        <TextInput
          style={modal.input}
          placeholder="Enter task description"
          onChangeText={(value) => handleInputChange('description', value)}
          value={formData.description}
        />
      </View>

      <Button title={'Add Task'} onPress={addTask}>
        Add Task
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

export default AddTaskModal;
