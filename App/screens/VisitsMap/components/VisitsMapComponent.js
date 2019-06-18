import React, { Component } from 'react';
import { UserCard, TransparentCard, NewPhotoComponent } from '@bm-mas-global-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import { VisitsMapStyles as styles } from './../styles';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';


class VisitsMapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      observations: '',
    newPhoto: false,
    }
  }

  hideComponent = () => {
    this.setState({newPhoto: false});
  }

  render() {
    return (
        <UserCard  {...this.props} userCardData={()=>this.renderUserCardData()}>
          <View style={[styles.row, styles.centered, styles.imageCaptureHeader]}>
            <Text style={styles.imageCaptureHeaderText}>Superama Satélite</Text>
            <View style={styles.placeStatusText}>
              <Text>Abierto</Text>
              <Icon style={styles.placeStatusIcon} name="circle"/>
            </View>
          </View>
          <View style={[styles.mapContainerSection]}>
            <MapView
              style={styles.mapView}
              initialRegion={{
                latitude: 19.431818171564856,
                longitude: -99.13371519816394,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
            <View style={[styles.surveyBox, styles.mapBox]}>
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
          <NewPhotoComponent
            showNewPhoto={this.state.newPhoto}
            hideNewPhoto={this.hideComponent}
          />
        </UserCard>
      );
    }
}


export default VisitsMapComponent;