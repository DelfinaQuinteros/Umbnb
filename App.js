import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreenNoLog from './src/views/screens/HomeScreenNoLog';
import DetailsScreen from './src/views/screens/DetailsScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeScreenNoLog" component={ HomeScreenNoLog } />
          <Stack.Screen name="DetailsScreen" component={ DetailsScreen } />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;