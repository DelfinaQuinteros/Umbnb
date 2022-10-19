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

  // TODO: se bugueea cuando expira el token y pasa mucho tiempo se queda cargando siempre pero con un token viejo, no se va nunca el estado de checking
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

      {
        ( !isAuthenticated )
        ? (

          <>
          <Stack.Screen name="LoginScreen" options={{ title:"Login" }} component={ LoginScreen } />
          <Stack.Screen name="RegisterScreen" options={{ title:"Register" }} component={ RegisterScreen } />
          </>

        )
        : (

          <Stack.Screen name="HomeLogged" options={{ title:"Welcome" }} component={ HomeLogged } />

        )
        }
      {/* <Stack.Screen name="LoginScreen" options={{ title:"Login" }} component={ LoginScreen } />
      <Stack.Screen name="RegisterScreen" options={{ title:"Register" }} component={ RegisterScreen } />
      <Stack.Screen name="HomeLogged" options={{ title:"Welcome" }} component={ HomeLogged } /> */}

    </Stack.Navigator>
  );
}