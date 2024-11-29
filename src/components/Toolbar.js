import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';

const Toolbar = ({ hasSelected, onAdd, onRemove }) => (
  <View style={styles.toolbar}>
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onAdd}
      underlayColor="#ddd"
    >
      <Text style={styles.toolbarActionText}>Add</Text>
    </TouchableHighlight>
    
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onEdit}
      disabled={!hasSelected}
      underlayColor="#ddd"
    ><Text
        style={[
          styles.toolbarActionText,
          !hasSelected ? { color: 'rgba(155, 155, 155, .5)' } : {},
        ]}>Edit</Text>
    </TouchableHighlight>
    

    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onRemove}
      disabled={!hasSelected}
      underlayColor="#ddd"
    ><Text
        style={[
          styles.toolbarActionText,
          !hasSelected ? { color: 'rgba(155, 155, 155, .5)' } : {},
        ]} >Remove</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: '#f0f0f0', // Optional: Add background color
  },
  toolbarAction: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // Center the text vertically and horizontally
    padding: 10,
  },
  toolbarActionText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000', // Default text color
  },
});

export default Toolbar;