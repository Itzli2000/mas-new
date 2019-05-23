import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen  from "../screens/Login";

const AuthRoutes = createStackNavigator({
  Login: { 
    screen: LoginScreen,
  },
});

const Routes = createAppContainer(AuthRoutes);

export { Routes };