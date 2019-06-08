'use strict';
import React, { Component } from 'react';
import { ScreenContainer } from '@bm-mas-global-components';
import VisitsComponent from './components/VisitsComponent';
import {
  Text,
} from 'react-native';

class VisitsMapScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  checkIn = () => {
    this.props.navigation.navigate('VisitasMapa');
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
          <VisitsComponent
            {...this.props} 
            checkIn={this.checkIn}
            checkOut={this.checkOut}
          />
          ) : <Text >Loading....</Text> 
        }
      </ScreenContainer>
      );
  }
}

export default VisitsMapScreen;