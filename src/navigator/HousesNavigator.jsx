import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { HouseScreen } from '../screens/HouseScreen'
import { HousesScreen } from '../screens/HousesScreen'

const Stack = createStackNavigator()

export const HousesNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >

        <Stack.Screen 
            name="HousesScreen" 
            component={ HousesScreen } 
        />
        <Stack.Screen
            name="HouseScreen"
            component={ HouseScreen }
        />

    </Stack.Navigator>
  )
}
