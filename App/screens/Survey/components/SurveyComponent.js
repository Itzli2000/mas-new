import React, { Component } from 'react'; 
import { UserCard, NewPhotoComponent } from '@bm-mas-global-components';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SurveyStyles as styles } from './../styles';

import {
  View,
  Text,
  Image,
  Picker,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class SurveyComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    pick1: '',
    pick2: '',
    observations: '',
    opt1: false,
    opt2: false,
    opt3: false,
    newPhoto: false,
    };
  }

  hideComponent = () => {
    this.setState({newPhoto: false});
  }

  render() {
    return (
        <UserCard {...this.props} userCardData={()=>this.renderUserCardData()}>
          <View>
            <View style={[styles.row, styles.centered, styles.homeFirstSection]}>
              <Image style={styles.homeCardIcon} source={styles.filterIcon} />
              <Text>Categoría</Text>
              <View style={styles.darkPicker}>
                <Image style={styles.homePickerIcon} source={styles.filterArrow}/>
                <Picker
                  selectedValue={this.state.pick1}
                  style={{ height: 30, width: 150, color: 'white' }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({pick1: itemValue})
                  }> 
                  <Picker.Item label="Automotríz" value="A" />
                  <Picker.Item label="Automotríz 1" value="A1" />
                  <Picker.Item label="Automotríz 2" value="A2" />
                </Picker>
              </View>
            </View>
            <View style={[styles.row, styles.centered]}>
              <Image style={styles.homeCardIcon} source={styles.filterIcon} />
              <Text>Subcategoría</Text>
              <View style={styles.darkPicker}>
                <Image style={styles.homePickerIcon} source={styles.filterArrow}/>
                <Picker
                  selectedValue={this.state.pick2}
                  style={{ height: 30, width: 150, color: 'white' }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({pick2: itemValue})
                  }> 
                  <Picker.Item label="Automotríz" value="A" />
                  <Picker.Item label="Automotríz 1" value="A1" />
                  <Picker.Item label="Automotríz 2" value="A2" />
                </Picker>
              </View>
            </View>
            <View style={styles.surveyContainer}>
              <Text style={styles.surveyTitle}>¿Qué colores de pantalones hay en el mostrador?</Text>
              <View style={styles.surveyBox}>
                <CheckBox
                  containerStyle={styles.surveyCheck}
                  textStyle={styles.surveyCheckText}
                  checkedIcon={'check-square-o'}
                  checkedColor={styles.colorWhite.color}
                  uncheckedIcon={'minus-square'}
                  title="Azul"
                  checked={this.state.opt1}
                  onPress={() => this.setState({ opt1: !this.state.opt1 })}
                />
                <CheckBox
                  containerStyle={styles.surveyCheck}
                  textStyle={styles.surveyCheckText}
                  checkedIcon={'check-square-o'}
                  checkedColor={styles.colorWhite.color}
                  uncheckedIcon={'minus-square'}
                  title="Verde"
                  checked={this.state.opt2}
                  onPress={() => this.setState({ opt2: !this.state.opt2 })}
                />
                <CheckBox
                  containerStyle={styles.surveyCheck}
                  textStyle={styles.surveyCheckText}
                  checkedIcon={'check-square-o'}
                  checkedColor={styles.colorWhite.color}
                  uncheckedIcon={'minus-square'}
                  title="Rojo"
                  checked={this.state.opt3}
                  onPress={() => this.setState({ opt3: !this.state.opt3 })}
                />
              <Text  style={styles.surveyObservations}>Observaciones</Text>
              <TextInput
                style={styles.surveyObservationsText}
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => this.setState({observations:text})}
                value={this.state.observations}/>
              </View>
              <View style={[styles.row, styles.centered]}>
                <TouchableOpacity activeOpacity = { .5 } onPress={()=>this.props.navigation.goBack()}>
                  <Icon style={styles.surveyIconStyles} name="angle-double-left" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = { .5 } onPress={()=>this.setState({ newPhoto: true })}>
                  <Icon style={styles.surveyIconStyles} name="camera" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = { .5 } onPress={()=>alert('Saving survey')}>
                  <Icon style={styles.surveyIconStyles} name="check-square"/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <NewPhotoComponent
            showNewPhoto={this.state.newPhoto}
            hideNewPhoto={this.hideComponent}
          />
        </UserCard>
      );
    }
}


export default SurveyComponent;