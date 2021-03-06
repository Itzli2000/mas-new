import React, { Component } from 'react';
import {  View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo';
import { CardComponentStyles as styles } from './../styles';

class CardComponent extends Component {
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
              colors={[(startColor ? startColor : styles.greenStart), (endColor ? endColor : styles.greenStop)]}
            >
              <View style={[styles.cardBodyStyle, styles.cardTitleContainer]}>
                <Text h4 style={styles.cardTitleStyles}>{title.toUpperCase()}</Text>
                {!icon && <Image style={styles.cardTitleIcon} source={styles.menuIconImage} />}
                {icon && <View style={ styles.cardTitleIconElem}><Icon name={icon} style={{color: (iconColor ? iconColor : 'black')}}/></View> }
              </View>
              <View style={[styles.cardBodyStyle]}>
                {children}
              </View>
          </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      );
  }
}

export default CardComponent;