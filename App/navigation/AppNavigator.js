import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen  from "@bm-mas-screens/Login";
import HomeScreen  from "@bm-mas-screens/Home";

const AuthRoutes = createStackNavigator({
  Login: { 
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
});

const Routes = createAppContainer(AuthRoutes);

export {Routes};