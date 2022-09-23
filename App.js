import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/telas/Home';
import Flat_List from './src/telas/Flat_List';
import Nova from './src/telas/Nova';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Flat_List" component={Flat_List} />
        <Stack.Screen name="Nova" component={Nova} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
