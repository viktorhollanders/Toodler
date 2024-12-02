import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import TaskCard from '../components/TaskCard';
import Toolbar from '../components/Toolbar';
import AddTaskModal from '../components/AddTaskModal';
import EditTaskModal from '../components/EditTaskModal';
import { mainStyles } from '../styles/mainStyles';

export default function TasksScreen({ route }) {
  const { listId, listName, setTasks, taskData, setLocaListTaskData } = route.params;
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [localTasksData, setLocalTasksData] = useState(
    taskData.filter((task) => task.listId === listId && !task.hidden),
  );
  const [selectedTasks, setSelectedTasks] = useState([]);

  const setHidden = () => {
    setLocalTasksData((prevTask) =>
      prevTask.map((task) => (selectedTasks.includes(task.id) ? { ...task, hidden: true } : task)),
    );
    setSelectedTasks([]);
    setLocaListTaskData((prevTask) =>
      prevTask.map((task) => (selectedTasks.includes(task.id) ? { ...task, hidden: true } : task)),
    );
    setSelectedTasks([]);
    setTasks((prevLists) =>
      prevLists.map((task) => (selectedTasks.includes(task.id) ? { ...task, hidden: true } : task)),
    );
    setSelectedTasks([]);
  };

  const onLongPressTasks = (taskId) => {
    if (selectedTasks.includes(taskId)) {
      setSelectedTasks(selectedTasks.filter((task) => task !== taskId));
    } else {
      setSelectedTasks([...selectedTasks, taskId]);
    }
  };

  const visibleTasks = localTasksData.filter((list) => !list.hidden);

  const closeModal = () => {
    setIsAddModalOpen(false);
  };

  const onToggleCheck = (taskId) => {
    // Update local state
    setLocalTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isFinished: !task.isFinished } : task,
      ),
    );

    // Update global state
    setTasks((prevGlobalTasks) =>
      prevGlobalTasks.map((task) =>
        task.id === taskId ? { ...task, isFinished: !task.isFinished } : task,
      ),
    );

    //Update the list
    setLocaListTaskData((prevLocalListTasks) =>
      prevLocalListTasks.map((task) =>
        task.id === taskId ? { ...task, isFinished: !task.isFinished } : task,
      ),
    );
  };

  const onEditSelect = (currentSelected) => {
    if (currentSelected.length === 1) {
      return visibleTasks.find((task) => task.id === currentSelected[0]) || null;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Toolbar
        hasSelected={selectedTasks.length}
        onAdd={() => setIsAddModalOpen(true)}
        onEdit={() => setIsEditModalOpen(true)}
        onRemove={setHidden}
      />

      <Text style={styles.listName}> {listName} </Text>
      <FlatList
        data={visibleTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskCard
            taskId={item.id}
            taskData={item}
            onToggleCheck={onToggleCheck}
            onLongPress={onLongPressTasks}
          />
        )}
      />

      <AddTaskModal
        listId={listId}
        isOpen={isAddModalOpen}
        closeModal={() => closeModal()}
        currTaskData={localTasksData}
        setTasks={setTasks}
        setLocaListTaskData={setLocaListTaskData}
        setLocalTasksData={setLocalTasksData}
      />

      <EditTaskModal
        isOpen={isEditModalOpen}
        closeModal={() => setIsEditModalOpen(false)}
        currTaskData={selectedTasks.length === 1 ? onEditSelect(selectedTasks) : null}
        updateTask={(updateTask) => {
          setTasks((prevTask) =>
            prevTask.map((task) => (task.id === updateTask.id ? { ...task, ...updateTask } : task)),
          );
          setLocaListTaskData((prevTask) =>
            prevTask.map((task) => (task.id === updateTask.id ? { ...task, ...updateTask } : task)),
          );
          setLocalTasks((prevTask) =>
            prevTask.map((task) => (task.id === updateTask.id ? { ...task, ...updateTask } : task)),
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

  listName: {
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
