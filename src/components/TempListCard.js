import React from "react";
import { Text, View, FlatList } from "react-native";
// import { taskCard } from "./taskCard"

export default function TempListCard({ name }) {
    return (
    <View>
        <Text> {name} </Text>
        {/* <FlatList
            data={tasks}
            renderItem={({item}) => (
                <taskCard {...item} />
            )}  /> */}
    </View>
    );
};