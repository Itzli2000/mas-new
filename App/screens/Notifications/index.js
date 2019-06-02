'use strict';
import React, { Component } from 'react';
import { ScreenContainer } from '@bm-mas-global-components';
import NotificationsComponent from './components/NotificationsComponent';
import {
  Text,
} from 'react-native';

class NotificationsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      menu:false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'gotham-regular': require('./../../assets/fonts/GothamBook.otf'),
      'gotham-medium': require('./../../assets/fonts/GothamMedium.ttf'),
      'gotham-bold': require('./../../assets/fonts/GothamBold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <ScreenContainer {...this.props}>
        { this.state.fontLoaded ? (
          <NotificationsComponent
        {...this.props} 
          />
          ) : <Text >Loading....</Text> 
        }
      </ScreenContainer>
      );
  }
}

export default NotificationsScreen;