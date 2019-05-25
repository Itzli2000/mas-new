// 1ro importar react y/o componentes nativos
import React, { Component } from 'react';     
import {  View, Image,  Text,  ScrollView, TouchableOpacity } from 'react-native';
// 2do importar librerias de terceros
// 3ro importar componentes en caso de tener children
import LoginForm from './LoginForm';
import CheckOptions from './CheckOptions';
// 4to importar styles
import { loginStyles as styles } from './../styles';

class LoginComponent extends Component {
  render() {
    const { navigation } = this.props;
    return (
        <ScrollView contentContainerStyle={styles.loginScrollViewContainer}>
          <View style={styles.loginContainer}>
            <Image
              style={styles.loginImageLogo}
              source={styles.loginLogo}
            />
            <Text style={styles.loginWelcomeText}>
              Esta es una aplicación para empleados staff de ManpowerGroup
            </Text>
            <LoginForm />
            <Text style={styles.loginPasswordFogotText}>
              ¿Olvidaste tu contraseña?
            </Text>
            <CheckOptions/>
            <TouchableOpacity activeOpacity = { .5 } onPress={()=>{console.log('Logged')}}>
              <View 
               style={styles.loginButton} 
              >
               <Text style={styles.loginButtonText}>entrar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
    );
  }
}


export default LoginComponent;