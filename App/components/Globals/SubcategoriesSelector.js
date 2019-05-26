import React, { Component } from 'react';
import { SubcategoriesSelectorStyles as styles } from './../styles';
import { View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { SearchBar  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class SubcategoriesSelector extends Component { 
  constructor(props) {
    super(props);
  
    this.state = {
      search: '',
    };
  }

  renderCategoriesList = (data) => {
    return  data.map((item, index) => {
      return (
        <TouchableOpacity key={index} activeOpacity = { .5 } onPress={()=>{this.props.subCategorieSelectedFunction(item.value)}}>
          <View 
           style={styles.categoriesLinks} 
          >
           <View style={styles.menuIconsContainer}>
             <Icon name={item.icon} style={ styles.menuIcons }/> 
           </View>
           <Text style={styles.categoriesLinksText}>{'  '}{item.name}</Text>
          </View>
        </TouchableOpacity>
        )
    });
  }

  render() {
    const {props} = this;
    const {listData} = props;
    return (
      <View style={[styles.column, styles.cardfloatMenuData]}>
        <ScrollView> 
          <View style={[styles.row, styles.centered, styles.imageCaptureHeader]}>
            <Text style={styles.categorieHeaderText}>Selecciona una categoría</Text>
              <SearchBar
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.searchInputContainer}
                placeholder="Categoría"
                onChangeText={this.updateSearch}
                value={this.state.search}
              />
          </View>
          <View>{this.renderCategoriesList(listData)}</View>
        </ScrollView>
      </View>
    );
  }
}


export default SubcategoriesSelector;