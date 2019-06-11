import React, { Component } from 'react'; 
import { UserCard } from '@bm-mas-global-components';
import { CheckBox, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TasksActiveStyles as styles } from './../styles';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class TasksActiveComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    pick1: '',
    pick2: '',
    observations: '',
    opt1: false,
    opt2: false,
    opt3: false,
    };
  }

  render() {
    return (
        <UserCard {...this.props} userCardData={()=>this.renderUserCardData()}>
          <View style={[styles.taskActiveContainer, styles.spaceElement]}>
            <Button 
            title='¿Estás seguro que quieres iniciar la tarea?' 
            onPress={()=>{}} buttonStyle={styles.taskActiveButton} 
            titleStyle={styles.buttonTitle} 
            />
            <View style={[styles.centered]}>
              <View style={styles.surveyBox}>
                <Text  style={styles.surveyObservations}>Observaciones</Text>
                <TextInput
                  style={styles.surveyObservationsText}
                  multiline={true}
                  numberOfLines={6}
                  onChangeText={(text) => this.setState({observations:text})}
                  value={this.state.observations}/>
              </View>
            </View>
              <View style={[styles.row, styles.centered]}>
                <TouchableOpacity activeOpacity = { .5 } onPress={()=>this.props.navigation.navigate('Captura')}>
                  <Icon style={styles.surveyIconStyles} name="camera" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = { .5 } onPress={()=>alert('Saving survey')}>
                  <Icon style={styles.surveyIconStyles} name="check-square"/>
                </TouchableOpacity>
              </View>
          </View>
        </UserCard>
      );
    }
}


export default TasksActiveComponent;