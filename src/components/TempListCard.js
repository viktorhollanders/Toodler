import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TaskCard from './TempTaskCard';

export default function TempListCard({listId, listData, taskData, onLongPress, isSelected }) {
    const { navigate } = useNavigation();

    const navigateToTasks = (listId, listData, taskData) => {
        navigate('Tasks', { listId, listData, taskData });
      };

    const filteredTasks = taskData.filter(task => task.listId === listId);

    return (
    <TouchableOpacity
      onPress={() => navigateToTasks(listId, listData, taskData)}
      onLongPress={() => onLongPress(listId)}
    >
    <View style={[styles.card, isSelected && styles.selectedCard]}>
        <Text> {listData.name} </Text>
        <FlatList
            data={filteredTasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <TaskCard taskData={item} />
            )}  />
    </View>
    </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
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
  selectedCard: {
    opacity: 0.5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});