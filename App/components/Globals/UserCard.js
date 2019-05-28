import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from "moment";
import 'moment/locale/es';
import { LinearGradient }  from 'expo';
import { UserCardStyles as styles } from './../styles';

moment.locale('es');

class UserCard extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  };
	}


	render() {
		const{ props } = this;
    const { children, backColor } = props;
		return (
		  <View style={[styles.screenHeight.height, {flex:1}]}>
			  <View style={[styles.row, styles.topIcons]}>
				  <TouchableOpacity style={styles.cardTitleIconElem} activeOpacity = { .5 } onPress={()=>this.props.toogleMenu()}>
					  <Icon name='bars' style={styles.userCardMenuIcon}/>
				  </TouchableOpacity>
				  <TouchableOpacity style={{marginLeft: 'auto'}} activeOpacity = { .5 } onPress={()=>this.props.navigation.navigate('Home')}>
					  <Image
					  style={styles.userCardImageLogo}
					  source={styles.logoImage}
					  />
				  </TouchableOpacity>
					  <Image
					  style={styles.userCardNavIcon}
					  source={styles.qrImage}
					  />
				  <TouchableOpacity activeOpacity = { .5 } onPress={()=>this.props.navigation.navigate('Visitas')}>
					  <Image
					  style={styles.userCardNavIcon}
					  source={styles.locationImage}
					  />
				  </TouchableOpacity>
				  <TouchableOpacity activeOpacity = { .5 } onPress={()=>this.props.navigation.navigate('Notificaciones')}>
					  <Image
					  style={styles.userCardNavIcon}
					  source={styles.notificationImage}
					  />
				  </TouchableOpacity>
			  </View>
        <ScrollView style={styles.mainScrollContainer} contentContainerStyle={styles.mainScrollContent}>
			   <View style={{backgroundColor: (backColor ?  backColor : ' transparent '), flex: 1}}>
			   	 <LinearGradient
			          colors={[styles.userCardStart.color, styles.userCardStop.color]}
			        >
						<View style={styles.userCardTopBar}>
							<View style={[styles.row, styles.pbDefault]}>
								<View style={[styles.column, styles.userCardPhotoContainer]}>
									<Image 
										style={styles.userCardPhoto}
										resizeMode='cover'
										borderRadius={styles.screenWidth <= 600 ? 50 : 60}
										source={styles.userDemoImage}
										/>
								</View>
								<View style={[styles.column, styles.userCardDataContainer]}>
									<Text style={styles.userCardDate}>{moment().format('dddd LL')}</Text>
									<Text h3 style={styles.userCardUserSubtitle}>Bienvenido</Text>
									<Text h3 style={styles.userCardUserName}>Carlos Morales</Text>
								</View>
							</View>
						</View>
					</LinearGradient>
					{children}
			   </View>
	      </ScrollView>
		  </View>
		);
	}
}


export default UserCard;