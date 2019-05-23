import React, { Component } from 'react';
import {  Text ,View } from 'react-native';

// import { SplashScreen , ScreenContainer } from '@bm-mas-global-components';
// import  LoginComponent  from './components/LoginComponent';


class LoginScreen extends Component {
  
  constructor(props) {

    super(props);
    
    this.state = {
      fontLoaded: false
    };
    
  }

  async componentWillMount() {
      await Expo.Font.loadAsync({
        'gotham-regular': require('./../../assets/fonts/GothamBook.otf'),
        'gotham-medium': require('./../../assets/fonts/GothamMedium.ttf'),
        'gotham-bold': require('./../../assets/fonts/GothamBold.ttf'),
      });
      
     this.setState({ fontLoaded: true });
  }


  validateUserLogIn = () => {
    this.props.navigation.navigate('Home');
  }



  render() {
    return (
      <View style={{flex:1, backgroundColor:'blue'}}>
       <Text>mas-expo</Text>
       <Text>mas-expo</Text>
       <Text>mas-expo</Text>
       <Text>mas-expo</Text>
      </View>
      );

  }
}


export default LoginScreen;