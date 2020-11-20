import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '@Screens/login';
import Home from '@Screens/home';

const Stack = createStackNavigator();

const Navigation = () => (
  <Stack.Navigator>
    <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
    <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default Navigation;
