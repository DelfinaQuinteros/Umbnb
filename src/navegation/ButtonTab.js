import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../views/screens/Login'
import Register from '../views/screens/Register'


const Tab = createBottomTabNavigator();

 const ButtonTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Login" component={ Login } />
            <Tab.Screen name="Register" component={ Register } />
        </Tab.Navigator>
    );
}
export {ButtonTab};