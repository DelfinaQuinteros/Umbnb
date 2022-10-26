import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { AuthProvider } from './src/context/AuthProvider';
import { HousesProvider } from './src/context/HousesContext';
import { RentalsProvider } from './src/context/RentalsContext';
import { ProfilesProvider } from './src/context/ProfilesContext';

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
      <ProfilesProvider>

        <HousesProvider> 
          <RentalsProvider>
            { children }
          </RentalsProvider>
        </HousesProvider>

      </ProfilesProvider>
    </AuthProvider>
  )
}

export default App;
