import React, { Component } from 'react'; 
import { UserCard, NewPhotoComponent } from '@bm-mas-global-components';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    return (
        <UserCard {...this.props} userCardData={()=>this.renderUserCardData()}>
          <View style={styles.mainScreenContainer}>
            <View style={[styles.row, styles.centered, styles.imageCaptureHeader]}>
              <Image style={styles.captureIcon} source={styles.filterIcon} />
              <Text style={styles.imageCaptureHeaderText}>Automotríz / Motores</Text>
            </View>
            <View style={styles.imageCaptureBreadcrumb}>
              <View style={styles.imageCaptureIconContainer}>
                <Icon name={"usd"} style={styles.imageCaptureIcon}/> 
              </View>
              <Text style={styles.imageCaptureIconText}>Precios</Text>
            </View>
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
            </View>
            <NewPhotoComponent></NewPhotoComponent>
          </View>
        </UserCard>
      );
    }
}


export default ImageCaptureComponent;