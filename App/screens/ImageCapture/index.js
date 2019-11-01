'use strict';
import React, { Component } from 'react';
import ScreenContainer from '../../components/Globals/ScreenContainer';
import ImageCaptureComponent from './components/ImageCaptureComponent';
import { Text } from 'react-native';

class ImageCaptureScreen extends Component {
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
          <ImageCaptureComponent {...this.props} />
          ) : <Text >Loading....</Text> 
        }
      </ScreenContainer>
      );
  }
}

export default ImageCaptureScreen;