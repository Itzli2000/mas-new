import React, { Component } from 'react'; 
import { UserCard, SignatureCard } from '@bm-mas-global-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from "moment";
import { SignatureStyles as styles } from './../styles';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';


const tasks=[
  {
    responsable: 'Jhoan Moren Chapa',
    area: 'sistemas',
    icon1: 'camera',
    icon2: 'cloud',
    startColor: styles.userStart.color,
    endColor: styles.userStop.color,
  },
  {
    responsable: 'Jhoan Moren Chapa',
    area: 'sistemas',
    icon1: 'camera',
    icon2: 'cloud',
  },
  {
    responsable: 'Jhoan Moren Chapa',
    area: 'sistemas',
    icon1: 'camera',
    icon2: 'cloud',
  },
]

class SignatureComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      pendings: '',
    };
  }

  render() {
    return (
        <UserCard {...this.props} userCardData={()=>this.renderUserCardData()}>
          <View>
            {tasks.map((item, index)=>
              <View key={index}>
                <SignatureCard 
                  {...this.props}
                  navigate='NuevaFirma'
                  startColor={item.startColor}
                  endColor={item.endColor}
                >
                  <View style={styles.column}>
                    <View style={[styles.row, styles.SignatureLine]}>
                      <Text style={styles.SignatureText1}>Responsable:  </Text>
                      <Text style={styles.SignatureText2}>{item.responsable}</Text>
                    </View>
                    <View style={[styles.row, styles.SignatureLine]}>
                      <Text style={styles.SignatureText1}>Área:  </Text>
                      <Text style={styles.SignatureText2}>{item.area}</Text>
                    </View>
                    <View style={[styles.row, styles.SignatureLine, styles.SignatureIcons]}>
                      <View style={styles.SignatureLineIconContainer}><Icon name={item.icon1} style={ styles.SignatureLineIcon}/></View>
                      <View style={styles.SignatureLineIconContainer}><Icon name={item.icon2} style={ styles.SignatureLineIcon}/></View>
                    </View>
                  </View>
                </SignatureCard>
              </View>
            )}
            <TouchableOpacity style={styles.newSignature} activeOpacity = { .5 } onPress={()=>{this.props.navigation.navigate('NuevaFirma')}}>
              <Icon name="plus" style={ styles.newSignatureIcon}/>
            </TouchableOpacity>
          </View>
        </UserCard>
      );
    }
}


export default SignatureComponent;