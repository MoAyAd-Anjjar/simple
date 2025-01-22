import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Tabs/Login'; // Ensure the path to Login is correct
import Home from './Tabs/Home';  // Ensure the path to Home is correct
import Cart from './Tabs/Cart';
import { StatusBar } from 'react-native';

const Tabs = createStackNavigator();

export default function Index() {
  return (
    <>
      {/* Set the StatusBar style */}
      <StatusBar barStyle="default" backgroundColor="gray"  />
      
      {/* Stack Navigator */}
      <Tabs.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Login" component={Login} />
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Cart" component={Cart} />
      </Tabs.Navigator>
    </>
  );
}
