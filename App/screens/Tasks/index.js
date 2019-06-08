'use strict';
import React, { Component } from 'react';
import { ScreenContainer } from '@bm-mas-global-components';
import TasksComponent from './components/TasksComponent';
import {
  Text,
} from 'react-native';

class TasksScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
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
          <TasksComponent
        {...this.props} 
          hideMenu={this.hideMenu}
          toogleMenu={this.toogleMenu} 
          localState={this.state} 
          />
          ) : <Text >Loading....</Text> 
        }
      </ScreenContainer>
      );
  }
}

export default TasksScreen;