import React, { Component } from 'react'; 
import AnimatedBar from "react-native-animated-bar";
import { UserCard } from '@bm-mas-global-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NotificationsStyles as styles } from './../styles';

import {
  View,
  Text,
} from 'react-native';

const notifications=[
  {
    icon: 'check',
    iconColor: styles.colorGreen.color,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: 'user',
    iconColor: styles.colorOrange.color,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: 'heart',
    iconColor: styles.colorRed.color,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    icon: 'star',
    iconColor: styles.colorGreen.color,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: 'user',
    iconColor: styles.colorOrange.color,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: 'shopping-cart',
    iconColor: styles.colorRed.color,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: 'check',
    iconColor: styles.colorGreen.color,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: 'user',
    iconColor: styles.colorOrange.color,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: 'shopping-cart',
    iconColor: styles.colorRed.color,
    title: 'Lorem ipsum dolor.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
]

class NotificationsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <UserCard {...this.props} userCardData={()=>this.renderUserCardData()} backColor={styles.colorGray.color}>
          <View style={{flex:1}}>
            <View style={[styles.row, styles.centered, styles.imageCaptureHeader, {marginBottom: 30}]}>
              <Text style={styles.imageCaptureHeaderText}>Notificaciones y Actualizaciones</Text>
            </View>
            {notifications.map((item, index)=>
                <View key={index} style={styles.notificacionContainer}>
                  <View style={styles.notificationData}>
                    <Icon name={item.icon} style={[styles.notificacionIcon,{color:item.iconColor}]}/> 
                    <Text style={styles.notificationTitle}>{item.title}</Text>
                    <Text style={styles.notificationSubtilte}>{item.subtitle}</Text>
                  </View>
                </View>
              )}
          </View>
        </UserCard>
      );
    }
}


export default NotificationsComponent;