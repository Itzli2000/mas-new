import React, { Component } from 'react';
import { ScreenContainer } from '@bm-mas-global-components';
import ChatComponent from './components/ChatComponent';
import { Text } from 'react-native';

class ChatScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      menu:false
    };
  }

  toogleMenu = () => {
    if (this.state.menu === false)
      this.setState({menu:true});
    else
      this.setState({menu:false});
  }

  hideMenu = () => {
    this.setState({menu:false});
  }


  async componentWillMount() {
    await Expo.Font.loadAsync({
      'gotham-regular': require('./../../assets/fonts/GothamBook.otf'),
      'gotham-medium': require('./../../assets/fonts/GothamMedium.ttf'),
      'gotham-bold': require('./../../assets/fonts/GothamBold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }


  render() {
    return (
      <ScreenContainer {...this.props}>
        { this.state.fontLoaded ? (
          <ChatComponent 
            {...this.props} 
            hideMenu={this.hideMenu}
            toogleMenu={this.toogleMenu} 
            localState={this.state} 
          />
          ) : <Text >Loading....</Text> 
        }
      </ScreenContainer>
      );
  }
}

export default ChatScreen;