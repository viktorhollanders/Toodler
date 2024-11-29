import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function BoardCard({ name, id, listData, taskData, onLongPress, isSelected }) {
  const { navigate } = useNavigation();

  const navigateToLists = (boardId) => {
    navigate('Lists', { boardId, listData, taskData, onLongPress });
  };

  return (
    <TouchableOpacity
      onPress={() => navigateToLists(id)}
      onLongPress={() => onLongPress(id)}
    >
      {isSelected ? <Text>Er valið, setja icon</Text> : null}
      <View style={[styles.card, isSelected && styles.selectedCard]}>
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
  selectedCard: {
    opacity: 0.5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
