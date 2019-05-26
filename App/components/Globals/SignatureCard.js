import React, { Component } from 'react';
import {  View, TouchableOpacity } from 'react-native';
import { SignatureStyles as styles } from './../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo';

class SignatureCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;
    const { children, title, navigate, icon, iconColor, startColor, endColor } = props;
    return (
      <View style={styles.cardContainer}>
        <View
          style={styles.cardContainerStyle}
        >
        <TouchableOpacity activeOpacity = { .5 } onPress={()=>{this.props.navigation.navigate(navigate ? navigate : 'Encuestas')}}>
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