import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function BoardCard({ name, id, listData, taskData }) {
  const { navigate } = useNavigation();

  const navigateToLists = (boardId) => {
    navigate('Lists', { boardId, listData, taskData });
  };

  return (
    <TouchableOpacity onPress={() => navigateToLists(id, listData, taskData)}>
      <View style={styles.card}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

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
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
