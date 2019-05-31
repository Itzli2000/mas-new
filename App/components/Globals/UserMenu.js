import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView, Text } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { LinearGradient }  from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UserMenu as styles } from './../styles';

const menuItems=[
    {
      name: 'Precios',
      icon: 'usd',
      navigate: 'PriceList'
    },
    {
      name: 'Ventas',
      icon: 'line-chart',
      navigate: 'PriceList'
    },
    {
      name: 'Exhibiciones',
      icon: 'shopping-basket',
      navigate: 'PriceList'
    },
    {
      name: 'Inventarios',
      icon: 'archive',
      navigate: 'PriceList'
    },
    {
      name: 'Encuestas',
      icon: 'clipboard',
      navigate: 'Encuestas'
    },
    {
      name: 'Generales',
      icon: 'cog',
      navigate: 'Home'
    },
    {
      name: 'Tareas',
      icon: 'list-alt',
      navigate: 'Tareas'
    },
    {
      name: 'Planogramas',
      icon: 'tasks',
      navigate: 'Home'
    },
    {
      name: 'Ayuda y soporte técnico',
      icon: 'question-circle',
      navigate: 'Home'
    },
    {
      name: 'Firmas',
      icon: 'pencil',
      navigate: 'Firmas'
    },
    {
      name: 'Chat',
      icon: 'comment',
      navigate: 'Chat'
    },
 ]

 const menuBottom = [
   {
     name: 'Cerrar',
     icon: 'times',
     navigate: 'Login'
   },
   {
     name: 'Sincronizar',
     icon: 'cloud-upload',
     navigate: 'PriceList'
   },
   {
     name: 'Cerrar Sesión',
     icon: 'times',
     navigate: 'Login'
   },
 ]

class UserMenu extends Component { 
  constructor(props) {
    super(props);
  
    this.state = {};
  }


  renderMenuList = (data, order) => {
    return  data.map((item, index) => {
      return (
        <TouchableOpacity key={index} activeOpacity = { .5 } onPress={()=>{this.props.hideMenu();this.props.navigation.navigate(item.navigate)}}>
          <View 
           style={styles.menuLinks} 
          >
           <View style={order === 1 ? styles.menuIconsContainer : styles.menuIconsContainerBottom}>
             <Icon name={item.icon} style={ order === 1 ? styles.menuIcons : styles.menuIconsBottom}/> 
           </View>
           <Text style={styles.menuLinksText}>{'  '}{item.name}</Text>
          </View>
        </TouchableOpacity>
        )
    });
  }

  render() {
    const {props} = this;
    return (
      <View style={[styles.column, styles.cardfloatMenuData]}>
        <ScrollView> 
          <View style={[styles.row, styles.menuUserData]}>
            <View style={[styles.column, styles.menuUserPhotoContainer]}>
              <Image 
                style={styles.menuUserPhoto}
                resizeMode='cover'
                borderRadius={(styles.screenWidth.width <= 600 ? 35 : 50)}
                source={styles.userDemo}
                />
            </View>
            <View style={[styles.column, styles.menuUserDataContainer]}>
              <Text h3 style={styles.menuUserUserName}>Carlos Morales</Text>
              <Text h3 style={styles.menuUserUserSubtitle}>Ver tus datos</Text>
            </View>
          </View>
          <View>{this.renderMenuList(menuItems, 1)}</View>
        </ScrollView>
          <Collapse style={styles.collapsibleMenu}>
              <CollapseHeader>
                <View 
                 style={styles.menuLinks} 
                >
                 <View style={styles.menuIconsContainer}>
                   <Icon name='pencil' style={styles.menuIcons}/> 
                 </View>
                 <Text style={styles.menuLinksText}> Sesión</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={styles.menuListBottom}>{this.renderMenuList(menuBottom, 2)}</View>
              </CollapseBody>
          </Collapse>
      </View>
    );
  }
}


export default UserMenu;