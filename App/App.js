import React,  { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {AppNavigation}  from "./navigation/AppNavigator.js";
import LoginScreen  from "@bm-mas-screens/Login";
import HomeScreen  from "@bm-mas-screens/Home";
import ChatScreen  from "@bm-mas-screens/Chat";
import ImageCaptureScreen  from "@bm-mas-screens/ImageCapture";
import NewSignatureScreen  from "@bm-mas-screens/NewSignature"; //Verificar componente firma
import NotificationsScreen  from "@bm-mas-screens/Notifications";
import PriceListScreen  from "@bm-mas-screens/PriceList";
import SignatureScreen  from "@bm-mas-screens/Signature";
import SurveyScreen  from "@bm-mas-screens/Survey";
import TasksScreen  from "@bm-mas-screens/Tasks";
import TasksActiveScreen  from "@bm-mas-screens/TasksActive";
import VisitsScreen  from "@bm-mas-screens/Visits";
import VisitsMapScreen  from "@bm-mas-screens/VisitsMap";

export class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <NewSignatureScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

