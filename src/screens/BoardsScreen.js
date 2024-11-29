import React, { useState } from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import data from '../resources/data.json';

export default function BoardsScreen() {
  const [boards, setBoards] = useState(data.boards);
  const navigation = useNavigation();

  const navigateToLists = (boardId) => {
    navigation.navigate('Lists', { boardId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={boards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Button title="View Lists" onPress={() => navigateToLists(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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