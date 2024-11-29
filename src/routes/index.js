import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BoardsScreen from './screens/BoardsScreen';
import ListsScreen from './screens/ListsScreen';
import TasksScreen from './screens/TasksScreen';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Boards">
      <Stack.Screen name="Boards" component={BoardsScreen} />
      <Stack.Screen name="Lists" component={ListsScreen} />
      <Stack.Screen name="Tasks" component={TasksScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
