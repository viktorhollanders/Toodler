import React from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import TempListCard from '../components/TempListCard';

export default function ListsScreen({ route }) {
  const { boardId, listData, taskData, onLongPress} = route.params;
  console.log(listData);
  console.log(taskData);
    return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TempListCard 
            listId={item.id}
            listData={item} 
            taskData={taskData}
            onLongPress={onLongPress}
            />
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
