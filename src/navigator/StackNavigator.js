import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import React, { useContext } from 'react';
import {CreateHouse} from '../screens/CreateHouse';
import { AuthContext } from '../context/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';
import { HousesNavigator } from './HousesNavigator';
import { ProfileScreen } from '../screens/ProfileScreen';
import { RentalsScreen } from '../screens/RentalsScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {

  const { isAuthenticated } = useContext(AuthContext)

  if (isAuthenticated === 'checking') return <LoadingScreen />
  
  return (
    <Stack.Navigator

      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        headerShown: false,
      }}
    >

      {/* TODO: aca esta teniendo problemas, una de las alertas que tira que no encuentra el LoginScreen o el HomeLogged */}

      {
        ( !isAuthenticated )
        ? (

          <>
            <Stack.Screen name="LoginScreen" options={{title:"LoginScreen"}} component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" options={{ title:"Register" }} component={ RegisterScreen } />
          </>

        )
        : (
          <>
            <Stack.Screen name="HousesNavigator" component={ HousesNavigator } />
            <Stack.Screen name="CreateHouse" component={ CreateHouse } />
            <Stack.Screen name="Rentals" component={ RentalsScreen } />
            <Stack.Screen name="Profile" component={ ProfileScreen } />
          </>

        )
        }

    </Stack.Navigator>
  );
}