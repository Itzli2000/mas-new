import React, { Component } from 'react';
import { View } from 'react-native';
import { ScreenContainerStyles as styles } from './../styles';
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
          colors={[styles.start.color, styles.stop.color]}>
          {children}
        </LinearGradient>

      </View>
      );
  }
}

export default ScreenContainer;