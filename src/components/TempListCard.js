import React from "react";
import { Text, View, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TaskCard from './TempTaskCard';

export default function TempListCard({listId, listData, taskData, onLongPress }) {
    const { navigate } = useNavigation();

    const navigateToTasks = (listId) => {
        navigate('Tasks', { listId });
      };

    return (
    <TouchableOpacity
      onPress={() => navigateToTasks(listId)}
      onLongPress={() => onLongPress(listId)}
    >
    <View>
        <Text> {listData.name} </Text>
        <Text> {listData.id} </Text>
        <FlatList
            data={taskData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <TaskCard taskData={item} />
            )}  />
    </View>
    </TouchableOpacity>
    );
};