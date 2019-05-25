import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen  from "../screens/Login";

const AuthRoutes = createStackNavigator({
  Login: { 
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
});

const Routes = createAppContainer(AuthRoutes);

export default Routes;