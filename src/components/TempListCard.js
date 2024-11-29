import React from "react";
import { Text, View, FlatList } from "react-native";
import TaskCard from './TempTaskCard';

export default function TempListCard({ name, taskData }) {
    // console.log(taskData);
    return (
    <View>
        <Text> {name} </Text>
        <FlatList
            data={taskData}
            
            renderItem={({item}) => (
                <TaskCard description={item.description} />
            )}  />
    </View>
    );
};