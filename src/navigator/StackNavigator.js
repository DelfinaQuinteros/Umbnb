import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import React, { useContext } from 'react';
import HomeLogged from '../screens/HomeLogged';
import {DetailsScreen} from '../screens/DetailsScreen';

import { AuthContext } from '../context/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {

  const { isAuthenticated } = useContext(AuthContext)

  // if (isAuthenticated === 'checking') return <LoadingScreen />
  
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
          <Stack.Screen name="LoginScreen" options={{ title:"Login" }} component={ LoginScreen } />
          <Stack.Screen name="RegisterScreen" options={{ title:"Register" }} component={ RegisterScreen } />
          </>

        )
        : (
          <>
            <Stack.Screen name="HomeLogged" options={{ title:"Welcome" }} component={ HomeLogged } />
            <Stack.Screen name="DetailsScreen" component={ DetailsScreen } />
          </>

        )
        }
      {/* <Stack.Screen name="LoginScreen" options={{ title:"Login" }} component={ LoginScreen } />
      <Stack.Screen name="RegisterScreen" options={{ title:"Register" }} component={ RegisterScreen } />
      <Stack.Screen name="HomeLogged" options={{ title:"Welcome" }} component={ HomeLogged } /> */}

    </Stack.Navigator>
  );
}