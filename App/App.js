import React,  { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Routes }  from "./navigation/AppNavigator";
import LoginScreen  from "./screens/Login";


export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <LoginScreen/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

