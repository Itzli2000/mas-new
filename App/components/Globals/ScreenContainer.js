import React, { Component } from 'react';
import { ScrollView, ImageBackground, View, } from 'react-native';
import { ApplicationStyles as styles, Images } from '@bm-mas-themes';
import { LinearGradient } from 'expo';

class ScreenContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.warn('child',children)
    const { children } = this.props;
    return (
      <View style={styles.screenContainer}>
        <LinearGradient
          style={styles.screenBackImage}
          colors={['#fbfcfe', '#466ea5']}>
          {children}
        </LinearGradient>

      </View>
      );
  }
}

export default ScreenContainer;