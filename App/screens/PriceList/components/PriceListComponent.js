import React, { Component } from 'react'; 
import { 
  UserCard, 
  CardComponent, 
  CategoriesSelector, 
  SubcategoriesSelector 
} from '@bm-mas-global-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PriceListStyles as styles } from './../styles';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const categories=[
    {
      name: 'Automotríz',
      value: 'Automotriz'
    },
    {
      name: 'Farmacia',
      value: 'Farmacia'
    },
    {
      name: 'Ferreteria',
      value: 'Ferreteria'
    },
    {
      name: 'Papeleria',
      value: 'Papeleria'
    },
    {
      name: 'Construccion',
      value: 'Construccion'
    },
    {
      name: 'Jardineria',
      value: 'Jardineria'
    },
 ]

const tasks=[
  {
    title: 'Montar Publicidad',
    icon: 'check',
    iconClor: styles.orangeColor.color,
      icon1: 'camera',
      icon1Color:styles.orangeStart.color,
      icon2: 'exclamation',
      icon2Color: styles.userStart.color,
      icon3: 'file',
      icon3Color: styles.green.color,
    startColor: styles.userStart.color,
    endColor: styles.userEnd.colo,
  },
  {
    title: 'Montar Publicidad',
    icon: 'times',
    iconClor: styles.orangeColor.color,
      icon1: 'camera',
      icon1Color:styles.orangeStart.color,
      icon2: 'exclamation',
      icon2Color: styles.userStart.color,
      icon3: 'file',
      icon3Color: styles.green.color,
    startColor: styles.redStart.color,
    endColor: styles.redEnd.color,
  },
  {
    title: 'Montar Publicidad',
    icon: 'minus',
    iconClor: styles.orangeColor.color,
      icon1: 'camera',
      icon1Color:styles.orangeStart.color,
      icon2: 'exclamation',
      icon2Color: styles.userStart.color,
      icon3: 'file',
      icon3Color: styles.green.color,
    startColor:styles.orangeStart.color,
    endColor: styles.orangeStop.color,
  },
  {
    title: 'Montar Publicidad',
    icon: 'check',
    iconClor: styles.orangeColor.color,
      icon1: 'camera',
      icon1Color:styles.orangeStart.color,
      icon2: 'exclamation',
      icon2Color: styles.userStart.color,
      icon3: 'file',
      icon3Color: styles.green.color,
    startColor: styles.userStart.color,
    endColor: styles.userEnd.colo,
  },
]

class PriceListComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selectCategorie: false,
      selectSubcategorie: false,
      categorieSelected: 'Seleccionar',
      subCategorieSelected: 'Seleccionar',
    };
  }

  categorieSelectedFunction = (data) => {
    console.log(data);
    this.setState({categorieSelected: data, selectCategorie: false});
  }

  subCategorieSelectedFunction = (data) => {
    console.log(data);
    this.setState({subCategorieSelected: data, selectSubcategorie: false});
  }

  render() {
    return (
        <UserCard {...this.props} userCardData={()=>this.renderUserCardData()}>
          <View style={[styles.categorieFloatSection, this.state.selectCategorie ? styles.CategorieShow : styles.CategorieHide]}>
            <CategoriesSelector listData={categories} categorieSelectedFunction={this.categorieSelectedFunction}/>
          </View>
          <View style={[styles.categorieFloatSection, this.state.selectSubcategorie ? styles.CategorieShow : styles.CategorieHide]}>
            <SubcategoriesSelector listData={categories} subCategorieSelectedFunction={this.subCategorieSelectedFunction}/>
          </View>
          <View>
            <TouchableOpacity activeOpacity = { .5 } onPress={()=>this.setState({selectCategorie: true})}>
              <View style={[styles.row, styles.centered, styles.homeFirstSection]}>
                <Image style={styles.homeCardIconPicker} source={styles.filterIcon} />
                <Text>Categoría</Text>
                <View style={styles.darkPicker}>
                  <Image style={styles.homePickerIcon} source={styles.filterArrow}/>
                  <Text style={styles.categoriePickerButton}>{this.state.categorieSelected}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity = { .5 } onPress={()=>this.setState({selectSubcategorie: true})}>
              <View style={[styles.row, styles.centered]}>
                <Image style={styles.homeCardIconPicker} source={styles.filterIcon} />
                <Text>Subcategoría</Text>
                <View style={styles.darkPicker}>
                  <Image style={styles.homePickerIcon} source={styles.filterArrow}/>
                  <Text style={styles.categoriePickerButton}>{this.state.subCategorieSelected}</Text>
                </View>
              </View>
            </TouchableOpacity>
            {tasks.map((item, index)=>
                <CardComponent 
                  {...this.props}
                  key={index}
                  icon={item.icon}
                  iconClor={item.iconClor}
                  navigate='TareasActivas'
                  title={item.title}
                  startColor={item.startColor}
                  endColor={item.endColor}
                > 
                  <View style={[styles.row]}>
                  {item.icon1 && <Icon name={item.icon1} style={[styles.homeCardIcon, {color: item.icon1Color, marginLeft: 'auto'}]}/>}
                  {item.icon2 && <Icon name={item.icon2} style={[styles.homeCardIcon, {color: item.icon2Color}]}/>}
                  {item.icon3 && <Icon name={item.icon3} style={[styles.homeCardIcon, {color: item.icon3Color}]}/>}
                  </View>
                </CardComponent>
            )} 
          </View>
        </UserCard>
      );
    }
}


export default PriceListComponent;