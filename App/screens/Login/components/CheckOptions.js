// 1ro importar react y/o componentes nativos
import React, { Component } from 'react';
import { View,  Text } from 'react-native';

// 2do importar librerias de terceros 
import { Switch } from 'react-native-switch';

import { Colors } from '@bm-mas-themes'; // <--- esta referencia no debe de ir aquí, debe de ser referenciada en styles del componente y creada como clase. 

// 3ro importar componentes en caso de tener children


// 4to importar styles
import { loginStyles as styles } from './../styles';



class CheckOptions extends Component {
  
  render() {
    return (
      <View> 
        <View style={styles.checkOptionContainer} >
          <Switch
            value={true}
            onValueChange={(val) => console.log(val)}
            disabled={false}
            circleSize={14}
            barHeight={17}
            circleBorderWidth={0}
            backgroundActive={Colors.orange}
            backgroundInactive={Colors.inactive}
            circleActiveColor={Colors.white} 
            circleInActiveColor={Colors.black}
            changeValueImmediately={true}
            changeValueImmediately={true}
            switchLeftPx={2}
            switchRightPx={2}
            switchWidthMultiplier={2}
          />
          <Text style={styles.checkOptionInlineText}>
            Si acepto que mis datos personales sean transferidos a los terceros indicados para cumplir con las finalidades descritas.
          </Text>
        </View>
        <View style={styles.checkOptionContainer} >
          <Switch
            style={styles.checkOptionInlineSwitch}
            value={false}
            onValueChange={(val) => console.log(val)}
            disabled={false}
            circleSize={14}
            barHeight={17}
            circleBorderWidth={0}
            backgroundActive={Colors.orange}
            backgroundInactive={Colors.inactive}
            circleActiveColor={Colors.white} 
            circleInActiveColor={Colors.black}
            changeValueImmediately={true}
            changeValueImmediately={true}
            switchLeftPx={2}
            switchRightPx={2}
            switchWidthMultiplier={2}
          />
          <Text style={styles.checkOptionInlineText}>
            Aviso de Privacidad
          </Text>
        </View> 
      </View>
    );
  }
}


export default CheckOptions;