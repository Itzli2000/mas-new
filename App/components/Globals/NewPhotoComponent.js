import React, { Component } from 'react';
import {  View, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NewPhotoStyles as styles } from './../styles';
import { Camera, Permissions } from 'expo';

class NewPhotoComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    unitaryPrice: '',
    totalPrice: '',
    observations: '',
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    takePhoto: false,
    };
  }

  render() {
    const { props } = this;
    return (
      <View style={[ styles.componentContainer ,props.showNewPhoto ? styles.show : styles.hide]}>
        <View style={styles.imageCaptureSection}>
          <View style={[styles.row, styles.pbDefault, styles.centered]}>
            <View style={[styles.imageCapturePhotoContainer]}>
              <Image 
                style={styles.imageCapturePhoto}
                resizeMode='cover'
                borderRadius={100}
                source={styles.userDemo}
                />
            </View>
            <View style={[styles.column, styles.imageCaptureDataContainer]}>
              <Button title='Tomar de nuevo' onPress={()=>this.setState({takePhoto: true})} buttonStyle={[styles.visitButton,styles.buttonGreen]} titleStyle={styles.buttonTitle} />
              <Text style={styles.textDivider}></Text>
              <Button title='Eliminar' onPress={()=>props.hideNewPhoto()} buttonStyle={[styles.visitButton,styles.buttonRed]} titleStyle={styles.buttonTitle} />
            </View>
          </View>  
        </View>
        <View style={this.state.takePhoto ? styles.photoON : styles.photoOff}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({ takePhoto: false });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Cancelar{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
       </View>
    );
  }
}

export default NewPhotoComponent;