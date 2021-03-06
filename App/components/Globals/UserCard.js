import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView, Text } from 'react-native';
import { UserMenu, TasksActiveComponent } from '@bm-mas-global-components';
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
      menu:false,
      showTask: false,
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

  showTaskFunction = () => {
    this.setState({showTask:true});
  }

  hideTaskFunction = () => {
    this.setState({showTask:false});
  }


	render() {
		const{ props } = this;
    const { children, backColor, observationsComponent } = props;
		return (
		  <View style={[styles.screenHeight.height, {flex:1}, this.state.menu ? styles.fixScreen : '']}>
			  <View style={[styles.row, styles.topIcons]}>
				  <TouchableOpacity style={styles.cardTitleIconElem} activeOpacity = { .5 } onPress={()=>this.toogleMenu()}>
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
        <View style={[styles.userCardfloatMenu, this.state.menu ? styles.MenuShow : styles.MenuHide]}>
          <UserMenu 
          	{...this.props}
            hideMenu={this.hideMenu}
            toogleMenu={this.toogleMenu} 
            localState={this.state} 
          />
        </View>
        <TasksActiveComponent
          {...this.props}
          showTaskComponent={this.state.showTask}
          hideTaskComponent={this.hideTaskFunction}
        />
        <ScrollView style={styles.mainScrollContainer} contentContainerStyle={styles.mainScrollContent}>
			   <View style={{backgroundColor: (backColor ?  backColor : ' transparent '), flex: 1, position: 'relative', height: '100%'}}>
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
        { observationsComponent ? 
          <View style={{backgroundColor: 'white', justifyContent: 'center'}}>
          <TouchableOpacity style={{marginLeft: 'auto'}} activeOpacity = { .5 } onPress={()=>this.showTaskFunction()}>
            <Text style={{textAlign: 'center'}}>Observaciones</Text> 
          </TouchableOpacity>
          </View>
          : null }
		  </View>
		);
	}
}


export default UserCard;