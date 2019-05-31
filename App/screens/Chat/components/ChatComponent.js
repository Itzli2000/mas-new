import React, { Component } from 'react'; 
import { CardComponent, UserCard } from '@bm-mas-global-components';
import { ChatStyles as styles } from './../styles';
import Triangle from 'react-native-triangle';
import { Button } from 'react-native-elements';
import { View, TextInput, ScrollView, Text } from 'react-native';

const chatData = [
  {
    entry: 1,
    userChat: 'aux',
    text: 'Lorem ipsum dolor sit amet.',
  },
  {
    entry: 2,
    userChat: 'user',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam veritatis labore nihil ex dolore, tempore.',
  },
  {
    entry: 3,
    userChat: 'aux',
    text: 'Lorem ipsum dolor sit amet.',
  },
  {
    entry: 4,
    userChat: 'aux',
    text: 'Lorem ipsum dolor sit amet.',
  },
  {
    entry: 5,
    userChat: 'user',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam veritatis labore nihil ex dolore, tempore.',
  },
  {
    entry: 6,
    userChat: 'aux',
    text: 'Lorem ipsum dolor sit amet.',
  },
]

class ChatComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    newEntry: '',
    dataEntries: chatData,
    };
  }

  newEntryFunction = (data) => {
    var entry = {
      entry: Math.random(),
      userChat: 'user',
      text: data,
    };
    chatData.push(entry);
    this.setState({dataEntries: chatData, newEntry: ''});
  }

  render() {
    return (
        <UserCard {...this.props} userCardData={()=>this.renderUserCardData()}>
          <View style={[styles.chatContainer]}>
            <View style={styles.chatView}>
              <ScrollView>
                {this.state.dataEntries.map((item, index)=>
                  <View key={item.entry} style={item.userChat === 'user' ? styles.userChat : styles.auxChat}>
                    <Text style={item.userChat === 'user' ? styles.userChatText : styles.auxChatText}>{item.text}</Text>
                    <Triangle
                      style={item.userChat === 'user' ? styles.arrowUser : styles.arrowAux}
                      width={30}
                      height={15}
                      color={item.userChat === 'user' ? styles.userStart.color : styles.start.color}
                      direction={item.userChat === 'user' ? 'down' : 'down'}
                    />
                  </View>
                )}
              </ScrollView>
            </View>
            <View style={[styles.centered, styles.chatInputContainer]}>
              <TextInput
                placeholder={"Chat"}
                style={styles.newChatInput}
                multiline={true}
                numberOfLines= {3}
                onChangeText={(text) => this.setState({newEntry:text})}
                value={this.state.newEntry}/>
              <Button title='Entrar' onPress={()=>this.newEntryFunction(this.state.newEntry)} buttonStyle={styles.chatButton} />
            </View>
          </View>
        </UserCard>
      );
    }
}


export default ChatComponent;