import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/HomeScreen';
import {NearestCitiesScreen} from './src/screens/NearestCitiesScreen';
import {RootStackParamList} from './src/navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NearestCities" component={NearestCitiesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
