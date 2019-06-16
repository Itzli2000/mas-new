import React, { Component } from 'react'; 
import { UserCard, NewPhotoComponent } from '@bm-mas-global-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropdownMenu from 'react-native-dropdown-menu';
import { ImageCaptureStyles as styles } from './../styles';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class ImageCaptureComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    unitaryPrice: '',
    totalPrice: '',
    observations: '',
    newPhoto: false,
    text: '',
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  hideComponent = () => {
    this.setState({newPhoto: false});
  }

  render() {
    var data = [["Automotríz","Farmacia","Ferreteria","Papeleria","Construccion","Jardineria"],["Motores", "Option1"],["Precios","Option2"]];
    return (
        <UserCard {...this.props} userCardData={()=>this.renderUserCardData()}>
          <View style={styles.mainScreenContainer}>
          <DropdownMenu
            style={{flex: 1}}
            bgColor={'#000000'}
            tintColor={'#ccc6d0'}
            activityTintColor={'#ccc6d0'} 
            optionTextStyle={{color: '#ccc6d0'}}
            handler={(selection, row) => this.setState({text: data[selection][row]})}
            data={data}
          >
            <View style={styles.imageCaptureBodyContainer}>
              <Text style={styles.imageCaptureTitle}>{'Cera dura 200 ml'.toUpperCase()}</Text>
              <TextInput
                placeholder={"Precio Unitario"}
                style={styles.imageCaptureInputPrice}
                onChangeText={(text) => this.setState({unitaryPrice:text})}
                value={this.state.unitaryPrice}/>
              <TextInput
                placeholder={"Precio Total"}
                style={styles.imageCaptureInputPrice}
                onChangeText={(text) => this.setState({totalPrice:text})}
                value={this.state.totalPrice}/>
              <TextInput
                placeholder={"Observaciones"}
                style={styles.imageCaptureText}
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => this.setState({observations:text})}
                value={this.state.observations}
              />
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
          </DropdownMenu>
          </View>
          <NewPhotoComponent
            showNewPhoto={this.state.newPhoto}
            hideNewPhoto={this.hideComponent}
          />
        </UserCard>
      );
    }
}


export default ImageCaptureComponent;