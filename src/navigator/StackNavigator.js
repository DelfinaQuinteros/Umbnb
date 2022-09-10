import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import React from 'react';
import HomeLogged from '../screens/HomeLogged';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator

      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        }
      }}
    >

      <Stack.Screen name="LoginScreen" options={{ title:"Login" }} component={ LoginScreen } />
      <Stack.Screen name="RegisterScreen" options={{ title:"Register" }} component={ RegisterScreen } />
      <Stack.Screen name="HomeLogged" options={{ title:"Welcome" }} component={ HomeLogged } />
    </Stack.Navigator>
  );
}