import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { AuthProvider } from './src/context/AuthProvider';
import { HousesProvider } from './src/context/HousesContext';

const App = () => {

  return (

    <NavigationContainer>

      <AppState>
        
        <StackNavigator />

      </AppState>


    </NavigationContainer>

  )

}

const AppState = ( { children } ) => {
  return (
    <AuthProvider>
      <HousesProvider> 
        { children }
      </HousesProvider>
    </AuthProvider>
  )
}

export default App;
