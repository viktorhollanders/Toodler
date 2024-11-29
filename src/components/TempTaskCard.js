import React from "react";
import {Text, View, FlatList } from "react-native";

export default function TaskCard({ taskData }) {

return (
    <View>
        <Text> {taskData.name} </Text>
    </View>
);
}