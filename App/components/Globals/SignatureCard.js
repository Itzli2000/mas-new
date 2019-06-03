import React, { Component } from 'react';
import {  View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo';
import { SignatureStyles as styles } from './../styles';

class SignatureCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;
    console.log(props);
    const { children, startColor, endColor } = props;
    return (
      <View style={styles.cardContainer}>
        <View
          style={styles.cardContainerStyle}
        >
        <TouchableOpacity activeOpacity = { .5 }>
          <LinearGradient
              style={[styles.screenBackImage, styles.cardBackgorund]}
              colors={[(startColor ? startColor : styles.start.color), (endColor ? endColor : styles.stop.color)]}
            >
              <View style={[styles.SignatureBodyStyle]}>
                <Icon name="pencil" style={ styles.SignatureIconElem}/>
                {children}
              </View>
          </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      );
  }
}

export default SignatureCard;