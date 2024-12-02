import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function BoardCard({
  name,
  id,
  description,
  thumbnailPhoto,
  listData,
  taskData,
  setLists,
  setTasks,
  onLongPress,
  isSelected,
}) {
  const { navigate } = useNavigation();

  const navigateToLists = (boardId, boardName) => {
    navigate('Lists', { boardId, boardName, listData, taskData, setLists, setTasks, onLongPress });
  };


  return (
    <TouchableOpacity onPress={() => navigateToLists(id, name)} onLongPress={() => onLongPress(id)}>
      <View style={[styles.card, isSelected && styles.selectedCard]}>
        <Image source={{ uri: thumbnailPhoto }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text>{description}</Text>
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

  image: {
    height: 100,
    flex: 1,
    borderRadius: 4,
    paddingBottom: 10,
  },
});
