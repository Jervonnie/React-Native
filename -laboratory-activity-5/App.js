import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootTabNavigator from './Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <RootTabNavigator />
    </NavigationContainer>
  );
}
