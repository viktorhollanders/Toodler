import React from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import data from '../data/data.json';

export default function ListsScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { boardId } = route.params;
    console.log(props)
  const lists = data.lists.filter((list) => list.boardId === boardId);

  const navigateToTasks = (listId) => {
    navigation.navigate('Tasks', { listId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={lists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Button title="View Tasks" onPress={() => navigateToTasks(item.id)} />
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