import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Tabs/Login'; // Ensure the path to Login is correct
import Home from './Tabs/Home';  // Ensure the path to Home is correct
import Cart from './Tabs/Cart';
import { StatusBar } from 'react-native';
import CategorySearch from './Tabs/CategorySearch';

const Tabs = createStackNavigator();

const  Index= () => {
  return (
    <>
      {/* Set the StatusBar style */}
      <StatusBar barStyle="default" backgroundColor="gray"  />
      
      {/* Stack Navigator */}
      <Tabs.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Login" component={Login} />
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Cart" component={Cart} />
        <Tabs.Screen name="CategorySearch" component={CategorySearch} />

      </Tabs.Navigator>
    </>
  );
}
export default  Index;
