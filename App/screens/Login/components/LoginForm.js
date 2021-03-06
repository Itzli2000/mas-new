
// 1ro importar react y/o componentes nativos
import React, { Component } from 'react';
import {  View } from 'react-native';
// 2do importar librerias de terceros 
import {  Input,  CheckBox, } from 'react-native-elements';
// 3ro importar componentes en caso de tener children
// 4to importar styles
import { loginStyles as styles } from './../styles';


class LoginForm extends Component {
  render() {
    return (
      <View style={styles.loginFormContainer}>
        <View style={styles.loginFormInputElement}>
            <Input 
              containerStyle={styles.loginFormInputContainer}
              inputContainerStyle={styles.loginFormInputsContainer}
              inputStyle={styles.loginFormInputs}
              placeholderTextColor={styles.colorOrangeText.color}
              placeholder="usuario"
            />
        </View> 
        <View style={styles.loginFormInputElement}>
            <Input 
              containerStyle={styles.loginFormInputContainer}
              inputContainerStyle={styles.loginFormInputsContainer}
              inputStyle={styles.loginFormInputs}
              placeholderTextColor={styles.colorOrangeText.color}
              placeholder="contraseña"
            />
        </View>
      </View>
    );
  }
}


export default LoginForm;