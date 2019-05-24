import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  { App  as AppContainer } from './App/App'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <AppContainer/>
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


