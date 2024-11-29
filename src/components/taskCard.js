import React from "react";
import { View, FlatList } from "react-native";

const taskCard = ({tasks}) => (
    <View>
        <FlatList>
            <Text> {tasks} </Text>       
        </FlatList>
    </View>
);

export default taskCard;