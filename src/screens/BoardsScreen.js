import React, { useState } from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import data from '../resources/data.json';
import BoardCard from '../components/boardCard';

export default function BoardsScreen() {
  const [boards, setBoards] = useState(data.boards);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={boards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BoardCard name={item.name} id={item.id} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
