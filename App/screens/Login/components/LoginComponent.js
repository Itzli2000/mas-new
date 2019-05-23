// 1ro importar react y/o componentes nativos
import React, { Component } from 'react';     
import {  View, Image,  Text,  ScrollView } from 'react-native';

// 2do importar librerias de terceros 
import { Button } from 'react-native-elements';


// 3ro importar componentes en caso de tener children
import LoginForm from './LoginForm';
import CheckOptions from './CheckOptions';

// 4to importar styles
import { Images } from '@bm-mas-themes';// <--- esta referencia no debe de ir aquí, debe de ser referenciada en styles del componente y creada como clase. 
import { loginStyles as styles } from './../styles';





class LoginComponent extends Component {


  render() {
        console.warn('styles',styles);
    const { navigation } = this.props;
    return (
        <ScrollView contentContainerStyle={styles.loginScrollViewContainer}>
          <View style={styles.loginContainer}>
            <Image
              style={styles.loginImageLogo}
              source={Images.logo}
            />
            <Text style={styles.loginWelcomeText}>
              Esta es una aplicación para empleados staff de ManpowerGroup
            </Text>
            <LoginForm />
            <Text style={styles.loginPasswordFogotText}>
              ¿Olvidaste tu contraseña?
            </Text>
            <CheckOptions/>
            <Button title='Entrar' onPress={()=>this.props.validateUserLogIn()} buttonStyle={styles.loginButton} />
          </View>
        </ScrollView>
    );
  }
}


export default LoginComponent;